import { raw_table } from './tags-description';
import { tag_table } from './tags-table';

const calculateDicomValueLength = (vr: string, value: any[]): number => {
  switch (vr) {
    case 'AE': // 16 bytes maximum
    case 'CS': // 16 bytes maximum
    case 'SH': // 16 bytes maximum
      return Math.min(value.join('\\').length, 16);

    case 'AS': // 4 bytes fixed
    case 'AT': // 4 bytes fixed
      return 4;

    case 'DA': // 8 bytes fixed
      return 8;

    case 'DS': // 16 bytes maximum
      return Math.min(value.join('\\').length, 16);

    case 'DT': // 26 bytes maximum
      return Math.min(value.join('\\').length, 26);

    case 'FL': // 4 bytes fixed
    case 'SL': // 4 bytes fixed
    case 'UL': // 4 bytes fixed
      return 4;

    case 'FD': // 8 bytes fixed
    case 'OB': // varies, see Transfer Syntax definition
    case 'OD': // 232-8 bytes maximum
    case 'OF': // 232-4 bytes maximum
    case 'OL': // varies, see Transfer Syntax definition
    case 'OV': // varies, see Transfer Syntax definition
    case 'OW': // varies, see Transfer Syntax definition
    case 'PN': // 64 chars maximum per component group
    case 'SV': // 8 bytes fixed
    case 'UC': // 232-2 bytes maximum
    case 'UI': // 64 bytes maximum
    case 'UN': // varies
    case 'UR': // 232-2 bytes maximum
    case 'US': // 2 bytes fixed
    case 'UT': // 232-2 bytes maximum
    case 'UV': // 8 bytes fixed
      return value.length; // Placeholder, actual implementation depends on data specifics

    case 'IS': // 12 bytes maximum
      return Math.min(value.join('\\').length, 12);

    case 'LO': // 64 chars maximum
      return Math.min(value.join('\\').length, 64);

    case 'LT': // 10240 chars maximum
      return Math.min(value.join('\\').length, 10240);

    case 'SQ': // not applicable, depends on the sequence
      return 0; // Placeholder, actual implementation depends on sequence content

    case 'SS': // 2 bytes fixed
      return 2;

    case 'ST': // 1024 chars maximum
      return Math.min(value.join('\\').length, 1024);

    case 'TM': // 14 bytes maximum
      return Math.min(value.join('\\').length, 14);

    // Add more cases if needed
    default:
      return 0; // Default for unknown VR type
  }
};

interface DICOMTag {
  id: string;
  vr?: string;
  vm?: number;
  length?: number;
  description?: string;
  value?: any[];
}

// // Example TypeScript function to convert HTML table string to an object
// function convertTableToObject(htmlString: string): TagTable {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, 'text/html');
//   const table = doc.getElementById('table1');
//   const result: TagTable = {};

//   if (table) {
//     const rows = table.getElementsByTagName('tr');
//     for (let i = 1; i < rows.length; i++) {
//       // starting from 1 to skip the header row
//       const cells = rows[i].getElementsByTagName('td');
//       if (cells.length >= 3) {
//         const tag = cells[0].textContent?.trim() || '';
//         const vr = cells[1].textContent?.trim() || '';
//         const name = cells[2].textContent?.trim() || '';
//         result[tag] = [vr, name] as const;
//       }
//     }
//   }

//   return result;
// }

// Example usage
// const htmlString = raw_table; // Your HTML string here
// const dicomObject = convertTableToObject(htmlString);
// console.warn(dicomObject);

function convertToDICOMTagList(tagsObj: any): DICOMTag[] {
  // ... rest of the function
  return Object.keys(tagsObj).map((id) => {
    const tag = tagsObj[id];
    const info = tag_table[id] || [undefined, undefined];
    const vr = tag.vr || info[0];
    const description = info[1];
    // const [vr, description] = tag_table[id] || ['?', '?'];

    if (!tag?.Value) {
      return {
        id: id,
        vr,
        description
      };
    }
    return {
      id: id,
      vm: tag.Value.length,
      length: calculateDicomValueLength(tag.vr, tag.Value),
      vr,
      description,
      value: (tag.Value?.map((item: any) => String(item.Alphabetic || item)) || []).join('\\')
    };
  });
  // ... rest of the function
}

export const getTagTable = (metadata: any) => {
  return convertToDICOMTagList(metadata);
};
