export default function defaultVrCallback(tag) {
  switch (tag) {
    case 'x00080016':
    case 'x00080018':
    case 'x0020000d':
    case 'x0020000e':
    case 'x00200052':
      return 'UI';
    case 'x00080060':
    case 'x00080064':
    case 'x00280004':
      return 'CS';
    case 'x00100010':
      return 'PN';
    case 'x00180050':
    case 'x00180088':
    case 'x00182010':
    case 'x00200032':
    case 'x00200037':
    case 'x00201041':
    case 'x00280030':
    case 'x00281052':
    case 'x00281053':
    case 'x300a011e':
      return 'DS';
    case 'x00181016':
    case 'x00181018':
      return 'LO';
    case 'x00200011':
    case 'x00200013':
    case 'x00280008':
      return 'IS';
    case 'x00280002':
    case 'x00280006':
    case 'x00280100':
    case 'x00280101':
    case 'x00280102':
    case 'x00280103':
    case 'x00280010':
    case 'x00280011':
      return 'US';
    case 'x00281054':
      return 'LO'
    case 'x7fe00010':
      return 'OB/OW'
    default:
      return 'UN';
  }
}
