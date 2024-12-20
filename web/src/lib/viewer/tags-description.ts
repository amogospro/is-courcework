// from `https://www.dicomlibrary.com/dicom/dicom-tags/`
export const raw_table = `
<table cols="4" width="100%" border="0" align="left" cellpadding="0" cellspacing="0" class="main" style="padding-left:25px;" id="table1" >
    <tr><td><b>Tag</b></td><td><b>VR</b></td><td><b>Name</b></td><td></td></tr>
    <tr><td>(0002,0000)</td><td>UL</td><td>File Meta Information Group Length</td><td></td></tr>
    <tr><td class="setColor">(0002,0001)</td><td class="setColor">OB</td><td class="setColor">File Meta Information Version</td><td class="setColor"></td></tr>
    <tr><td>(0002,0002)</td><td>UI</td><td>Media Storage SOP Class UID</td><td></td></tr>
    <tr><td class="setColor">(0002,0003)</td><td class="setColor">UI</td><td class="setColor">Media Storage SOP Instance UID</td><td class="setColor"></td></tr>
    <tr><td>(0002,0010)</td><td>UI</td><td>Transfer Syntax UID</td><td></td></tr>
    <tr><td class="setColor">(0002,0012)</td><td class="setColor">UI</td><td class="setColor">Implementation Class UID</td><td class="setColor"></td></tr>
    <tr><td>(0002,0013)</td><td>SH</td><td>Implementation Version Name</td><td></td></tr>
    <tr><td class="setColor">(0002,0016)</td><td class="setColor">AE</td><td class="setColor">Source Application Entity Title</td><td class="setColor"></td></tr>
    <tr><td>(0002,0017)</td><td>AE</td><td>Sending Application Entity Title</td><td></td></tr>
    <tr><td class="setColor">(0002,0018)</td><td class="setColor">AE</td><td class="setColor">Receiving Application Entity Title</td><td class="setColor"></td></tr>
    <tr><td>(0002,0100)</td><td>UI</td><td>Private Information Creator UID</td><td></td></tr>
    <tr><td class="setColor">(0002,0102)</td><td class="setColor">OB</td><td class="setColor">Private Information</td><td class="setColor"></td></tr>
    <tr><td>(0004,1130)</td><td>CS</td><td>File-set ID</td><td></td></tr>
    <tr><td class="setColor">(0004,1141)</td><td class="setColor">CS</td><td class="setColor">File-set Descriptor File ID</td><td class="setColor"></td></tr>
    <tr><td>(0004,1142)</td><td>CS</td><td>Specific Character Set of File-set Descriptor File</td><td></td></tr>
    <tr><td class="setColor">(0004,1200)</td><td class="setColor">UL</td><td class="setColor">Offset of the First Directory Record of the Root Directory Entity</td><td class="setColor"></td></tr>
    <tr><td>(0004,1202)</td><td>UL</td><td>Offset of the Last Directory Record of the Root Directory Entity</td><td></td></tr>
    <tr><td class="setColor">(0004,1212)</td><td class="setColor">US</td><td class="setColor">File-set Consistency Flag</td><td class="setColor"></td></tr>
    <tr><td>(0004,1220)</td><td>SQ</td><td>Directory Record Sequence</td><td></td></tr>
    <tr><td class="setColor">(0004,1400)</td><td class="setColor">UL</td><td class="setColor">Offset of the Next Directory Record</td><td class="setColor"></td></tr>
    <tr><td>(0004,1410)</td><td>US</td><td>Record In-use Flag</td><td></td></tr>
    <tr><td class="setColor">(0004,1420)</td><td class="setColor">UL</td><td class="setColor">Offset of Referenced Lower-Level Directory Entity</td><td class="setColor"></td></tr>
    <tr><td>(0004,1430)</td><td>CS</td><td>Directory Record Type</td><td></td></tr>
    <tr><td class="setColor">(0004,1432)</td><td class="setColor">UI</td><td class="setColor">Private Record UID</td><td class="setColor"></td></tr>
    <tr><td>(0004,1500)</td><td>CS</td><td>Referenced File ID</td><td></td></tr>
    <tr><td class="retired1">(0004,1504)</td><td class="retired1">UL</td><td class="retired1">MRDR Directory Record Offset</td><td class="retired1">Retired</td></tr>
    <tr><td>(0004,1510)</td><td>UI</td><td>Referenced SOP Class UID in File</td><td></td></tr>
    <tr><td class="setColor">(0004,1511)</td><td class="setColor">UI</td><td class="setColor">Referenced SOP Instance UID in File</td><td class="setColor"></td></tr>
    <tr><td>(0004,1512)</td><td>UI</td><td>Referenced Transfer Syntax UID in File</td><td></td></tr>
    <tr><td class="setColor">(0004,151A)</td><td class="setColor">UI</td><td class="setColor">Referenced Related General SOP Class UID in File</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0004,1600)</td><td class="retired">UL</td><td class="retired">Number of References</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,0001)</td><td class="retired1">UL</td><td class="retired1">Length to End</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,0005)</td><td>CS</td><td>Specific Character Set</td><td></td></tr>
    <tr><td class="setColor">(0008,0006)</td><td class="setColor">SQ</td><td class="setColor">Language Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,0008)</td><td>CS</td><td>Image Type</td><td></td></tr>
    <tr><td class="retired1">(0008,0010)</td><td class="retired1">SH</td><td class="retired1">Recognition Code</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,0012)</td><td>DA</td><td>Instance Creation Date</td><td></td></tr>
    <tr><td class="setColor">(0008,0013)</td><td class="setColor">TM</td><td class="setColor">Instance Creation Time</td><td class="setColor"></td></tr>
    <tr><td>(0008,0014)</td><td>UI</td><td>Instance Creator UID</td><td></td></tr>
    <tr><td class="setColor">(0008,0015)</td><td class="setColor">DT</td><td class="setColor">Instance Coercion DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0008,0016)</td><td>UI</td><td>SOP Class UID</td><td></td></tr>
    <tr><td class="setColor">(0008,0018)</td><td class="setColor">UI</td><td class="setColor">SOP Instance UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,001A)</td><td>UI</td><td>Related General SOP Class UID</td><td></td></tr>
    <tr><td class="setColor">(0008,001B)</td><td class="setColor">UI</td><td class="setColor">Original Specialized SOP Class UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,0020)</td><td>DA</td><td>Study Date</td><td></td></tr>
    <tr><td class="setColor">(0008,0021)</td><td class="setColor">DA</td><td class="setColor">Series Date</td><td class="setColor"></td></tr>
    <tr><td>(0008,0022)</td><td>DA</td><td>Acquisition Date</td><td></td></tr>
    <tr><td class="setColor">(0008,0023)</td><td class="setColor">DA</td><td class="setColor">Content Date</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0008,0024)</td><td class="retired">DA</td><td class="retired">Overlay Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,0025)</td><td class="retired1">DA</td><td class="retired1">Curve Date</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,002A)</td><td>DT</td><td>Acquisition DateTime</td><td></td></tr>
    <tr><td class="setColor">(0008,0030)</td><td class="setColor">TM</td><td class="setColor">Study Time</td><td class="setColor"></td></tr>
    <tr><td>(0008,0031)</td><td>TM</td><td>Series Time</td><td></td></tr>
    <tr><td class="setColor">(0008,0032)</td><td class="setColor">TM</td><td class="setColor">Acquisition Time</td><td class="setColor"></td></tr>
    <tr><td>(0008,0033)</td><td>TM</td><td>Content Time</td><td></td></tr>
    <tr><td class="retired1">(0008,0034)</td><td class="retired1">TM</td><td class="retired1">Overlay Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,0035)</td><td class="retired">TM</td><td class="retired">Curve Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,0040)</td><td class="retired1">US</td><td class="retired1">Data Set Type</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,0041)</td><td class="retired">LO</td><td class="retired">Data Set Subtype</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,0042)</td><td class="retired1">CS</td><td class="retired1">Nuclear Medicine Series Type</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,0050)</td><td>SH</td><td>Accession Number</td><td></td></tr>
    <tr><td class="setColor">(0008,0051)</td><td class="setColor">SQ</td><td class="setColor">Issuer of Accession Number Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,0052)</td><td>CS</td><td>Query/Retrieve Level</td><td></td></tr>
    <tr><td class="setColor">(0008,0053)</td><td class="setColor">CS</td><td class="setColor">Query/Retrieve View</td><td class="setColor"></td></tr>
    <tr><td>(0008,0054)</td><td>AE</td><td>Retrieve AE Title</td><td></td></tr>
    <tr><td class="setColor">(0008,0055)</td><td class="setColor">AE</td><td class="setColor">Station  AE Title</td><td class="setColor"></td></tr>
    <tr><td>(0008,0056)</td><td>CS</td><td>Instance Availability</td><td></td></tr>
    <tr><td class="setColor">(0008,0058)</td><td class="setColor">UI</td><td class="setColor">Failed SOP Instance UID List</td><td class="setColor"></td></tr>
    <tr><td>(0008,0060)</td><td>CS</td><td>Modality</td><td></td></tr>
    <tr><td class="setColor">(0008,0061)</td><td class="setColor">CS</td><td class="setColor">Modalities in Study</td><td class="setColor"></td></tr>
    <tr><td>(0008,0062)</td><td>UI</td><td>SOP Classes in Study</td><td></td></tr>
    <tr><td class="setColor">(0008,0064)</td><td class="setColor">CS</td><td class="setColor">Conversion Type</td><td class="setColor"></td></tr>
    <tr><td>(0008,0068)</td><td>CS</td><td>Presentation Intent Type</td><td></td></tr>
    <tr><td class="setColor">(0008,0070)</td><td class="setColor">LO</td><td class="setColor">Manufacturer</td><td class="setColor"></td></tr>
    <tr><td>(0008,0080)</td><td>LO</td><td>Institution Name</td><td></td></tr>
    <tr><td class="setColor">(0008,0081)</td><td class="setColor">ST</td><td class="setColor">Institution Address</td><td class="setColor"></td></tr>
    <tr><td>(0008,0082)</td><td>SQ</td><td>Institution Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,0090)</td><td class="setColor">PN</td><td class="setColor">Referring Physician's Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,0092)</td><td>ST</td><td>Referring Physician's Address</td><td></td></tr>
    <tr><td class="setColor">(0008,0094)</td><td class="setColor">SH</td><td class="setColor">Referring Physician's Telephone Numbers</td><td class="setColor"></td></tr>
    <tr><td>(0008,0096)</td><td>SQ</td><td>Referring Physician Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,009C)</td><td class="setColor">PN</td><td class="setColor">Consulting Physician's Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,009D)</td><td>SQ</td><td>Consulting Physician Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,0100)</td><td class="setColor">SH</td><td class="setColor">Code Value</td><td class="setColor"></td></tr>
    <tr><td>(0008,0101)</td><td>LO</td><td>Extended Code Value</td><td></td></tr>
    <tr><td class="setColor">(0008,0102)</td><td class="setColor">SH</td><td class="setColor">Coding Scheme Designator</td><td class="setColor"></td></tr>
    <tr><td>(0008,0103)</td><td>SH</td><td>Coding Scheme Version</td><td></td></tr>
    <tr><td class="setColor">(0008,0104)</td><td class="setColor">LO</td><td class="setColor">Code Meaning</td><td class="setColor"></td></tr>
    <tr><td>(0008,0105)</td><td>CS</td><td>Mapping Resource</td><td></td></tr>
    <tr><td class="setColor">(0008,0106)</td><td class="setColor">DT</td><td class="setColor">Context Group Version</td><td class="setColor"></td></tr>
    <tr><td>(0008,0107)</td><td>DT</td><td>Context Group Local Version</td><td></td></tr>
    <tr><td class="setColor">(0008,0108)</td><td class="setColor">LT</td><td class="setColor">Extended Code Meaning</td><td class="setColor"></td></tr>
    <tr><td>(0008,010B)</td><td>CS</td><td>Context Group Extension Flag</td><td></td></tr>
    <tr><td class="setColor">(0008,010C)</td><td class="setColor">UI</td><td class="setColor">Coding Scheme UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,010D)</td><td>UI</td><td>Context Group Extension Creator UID</td><td></td></tr>
    <tr><td class="setColor">(0008,010F)</td><td class="setColor">CS</td><td class="setColor">Context Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0008,0110)</td><td>SQ</td><td>Coding Scheme Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,0112)</td><td class="setColor">LO</td><td class="setColor">Coding Scheme Registry</td><td class="setColor"></td></tr>
    <tr><td>(0008,0114)</td><td>ST</td><td>Coding Scheme External ID</td><td></td></tr>
    <tr><td class="setColor">(0008,0115)</td><td class="setColor">ST</td><td class="setColor">Coding Scheme Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,0116)</td><td>ST</td><td>Coding Scheme Responsible Organization</td><td></td></tr>
    <tr><td class="setColor">(0008,0117)</td><td class="setColor">UI</td><td class="setColor">Context UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,0118)</td><td>UI</td><td>Mapping Resource UID</td><td></td></tr>
    <tr><td class="setColor">(0008,0119)</td><td class="setColor">UC</td><td class="setColor">Long Code Value</td><td class="setColor"></td></tr>
    <tr><td>(0008,0120)</td><td>UR</td><td>URN Code Value</td><td></td></tr>
    <tr><td class="setColor">(0008,0121)</td><td class="setColor">SQ</td><td class="setColor">Equivalent Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,0122)</td><td>LO</td><td>Mapping Resource Name</td><td></td></tr>
    <tr><td class="setColor">(0008,0123)</td><td class="setColor">SQ</td><td class="setColor">Context Group Identification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,0124)</td><td>SQ</td><td>Mapping Resource Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,0201)</td><td class="setColor">SH</td><td class="setColor">Timezone Offset From UTC</td><td class="setColor"></td></tr>
    <tr><td>(0008,0300)</td><td>SQ</td><td>Private Data Element Characteristics Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,0301)</td><td class="setColor">US</td><td class="setColor">Private Group Reference</td><td class="setColor"></td></tr>
    <tr><td>(0008,0302)</td><td>LO</td><td>Private Creator Reference</td><td></td></tr>
    <tr><td class="setColor">(0008,0303)</td><td class="setColor">CS</td><td class="setColor">Block Identifying Information Status</td><td class="setColor"></td></tr>
    <tr><td>(0008,0304)</td><td>US</td><td>Nonidentifying Private Elements</td><td></td></tr>
    <tr><td class="setColor">(0008,0306)</td><td class="setColor">US</td><td class="setColor">Identifying Private Elements</td><td class="setColor"></td></tr>
    <tr><td>(0008,0305)</td><td>SQ</td><td>Deidentification Action Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,0307)</td><td class="setColor">CS</td><td class="setColor">Deidentification Action</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0008,1000)</td><td class="retired">AE</td><td class="retired">Network ID</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0008,1010)</td><td class="setColor">SH</td><td class="setColor">Station Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,1030)</td><td>LO</td><td>Study Description</td><td></td></tr>
    <tr><td class="setColor">(0008,1032)</td><td class="setColor">SQ</td><td class="setColor">Procedure Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,103E)</td><td>LO</td><td>Series Description</td><td></td></tr>
    <tr><td class="setColor">(0008,103F)</td><td class="setColor">SQ</td><td class="setColor">Series Description Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,1040)</td><td>LO</td><td>Institutional Department Name</td><td></td></tr>
    <tr><td class="setColor">(0008,1048)</td><td class="setColor">PN</td><td class="setColor">Physician(s) of Record</td><td class="setColor"></td></tr>
    <tr><td>(0008,1049)</td><td>SQ</td><td>Physician(s) of Record Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1050)</td><td class="setColor">PN</td><td class="setColor">Performing Physician's Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,1052)</td><td>SQ</td><td>Performing Physician Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1060)</td><td class="setColor">PN</td><td class="setColor">Name of Physician(s) Reading Study</td><td class="setColor"></td></tr>
    <tr><td>(0008,1062)</td><td>SQ</td><td>Physician(s) Reading Study Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1070)</td><td class="setColor">PN</td><td class="setColor">Operators' Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,1072)</td><td>SQ</td><td>Operator Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1080)</td><td class="setColor">LO</td><td class="setColor">Admitting Diagnoses Description</td><td class="setColor"></td></tr>
    <tr><td>(0008,1084)</td><td>SQ</td><td>Admitting Diagnoses Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1090)</td><td class="setColor">LO</td><td class="setColor">Manufacturer's Model Name</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0008,1100)</td><td class="retired">SQ</td><td class="retired">Referenced Results Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0008,1110)</td><td class="setColor">SQ</td><td class="setColor">Referenced Study Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,1111)</td><td>SQ</td><td>Referenced Performed Procedure Step Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1115)</td><td class="setColor">SQ</td><td class="setColor">Referenced Series Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,1120)</td><td>SQ</td><td>Referenced Patient Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1125)</td><td class="setColor">SQ</td><td class="setColor">Referenced Visit Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0008,1130)</td><td class="retired">SQ</td><td class="retired">Referenced Overlay Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0008,1134)</td><td class="setColor">SQ</td><td class="setColor">Referenced Stereometric Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,113A)</td><td>SQ</td><td>Referenced Waveform Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1140)</td><td class="setColor">SQ</td><td class="setColor">Referenced Image Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0008,1145)</td><td class="retired">SQ</td><td class="retired">Referenced Curve Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0008,114A)</td><td class="setColor">SQ</td><td class="setColor">Referenced Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,114B)</td><td>SQ</td><td>Referenced Real World Value Mapping Instance Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1150)</td><td class="setColor">UI</td><td class="setColor">Referenced SOP Class UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,1155)</td><td>UI</td><td>Referenced SOP Instance UID</td><td></td></tr>
    <tr><td class="setColor">(0008,115A)</td><td class="setColor">UI</td><td class="setColor">SOP Classes Supported</td><td class="setColor"></td></tr>
    <tr><td>(0008,1160)</td><td>IS</td><td>Referenced Frame Number</td><td></td></tr>
    <tr><td class="setColor">(0008,1161)</td><td class="setColor">UL</td><td class="setColor">Simple Frame List</td><td class="setColor"></td></tr>
    <tr><td>(0008,1162)</td><td>UL</td><td>Calculated Frame List</td><td></td></tr>
    <tr><td class="setColor">(0008,1163)</td><td class="setColor">FD</td><td class="setColor">Time Range</td><td class="setColor"></td></tr>
    <tr><td>(0008,1164)</td><td>SQ</td><td>Frame Extraction Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1167)</td><td class="setColor">UI</td><td class="setColor">Multi-frame Source SOP Instance UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,1190)</td><td>UR</td><td>Retrieve URL</td><td></td></tr>
    <tr><td class="setColor">(0008,1195)</td><td class="setColor">UI</td><td class="setColor">Transaction UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,1196)</td><td>US</td><td>Warning Reason</td><td></td></tr>
    <tr><td class="setColor">(0008,1197)</td><td class="setColor">US</td><td class="setColor">Failure Reason</td><td class="setColor"></td></tr>
    <tr><td>(0008,1198)</td><td>SQ</td><td>Failed SOP Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1199)</td><td class="setColor">SQ</td><td class="setColor">Referenced SOP Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,119A)</td><td>SQ</td><td>Other Failures Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,1200)</td><td class="setColor">SQ</td><td class="setColor">Studies Containing Other Referenced Instances Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,1250)</td><td>SQ</td><td>Related Series Sequence</td><td></td></tr>
    <tr><td class="retired1">(0008,2110)</td><td class="retired1">CS</td><td class="retired1">Lossy Image Compression (Retired)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,2111)</td><td>ST</td><td>Derivation Description</td><td></td></tr>
    <tr><td class="setColor">(0008,2112)</td><td class="setColor">SQ</td><td class="setColor">Source Image Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,2120)</td><td>SH</td><td>Stage Name</td><td></td></tr>
    <tr><td class="setColor">(0008,2122)</td><td class="setColor">IS</td><td class="setColor">Stage Number</td><td class="setColor"></td></tr>
    <tr><td>(0008,2124)</td><td>IS</td><td>Number of Stages</td><td></td></tr>
    <tr><td class="setColor">(0008,2127)</td><td class="setColor">SH</td><td class="setColor">View Name</td><td class="setColor"></td></tr>
    <tr><td>(0008,2128)</td><td>IS</td><td>View Number</td><td></td></tr>
    <tr><td class="setColor">(0008,2129)</td><td class="setColor">IS</td><td class="setColor">Number of Event Timers</td><td class="setColor"></td></tr>
    <tr><td>(0008,212A)</td><td>IS</td><td>Number of Views in Stage</td><td></td></tr>
    <tr><td class="setColor">(0008,2130)</td><td class="setColor">DS</td><td class="setColor">Event Elapsed Time(s)</td><td class="setColor"></td></tr>
    <tr><td>(0008,2132)</td><td>LO</td><td>Event Timer Name(s)</td><td></td></tr>
    <tr><td class="setColor">(0008,2133)</td><td class="setColor">SQ</td><td class="setColor">Event Timer Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,2134)</td><td>FD</td><td>Event Time Offset</td><td></td></tr>
    <tr><td class="setColor">(0008,2135)</td><td class="setColor">SQ</td><td class="setColor">Event Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,2142)</td><td>IS</td><td>Start Trim</td><td></td></tr>
    <tr><td class="setColor">(0008,2143)</td><td class="setColor">IS</td><td class="setColor">Stop Trim</td><td class="setColor"></td></tr>
    <tr><td>(0008,2144)</td><td>IS</td><td>Recommended Display Frame Rate</td><td></td></tr>
    <tr><td class="retired1">(0008,2200)</td><td class="retired1">CS</td><td class="retired1">Transducer Position</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,2204)</td><td class="retired">CS</td><td class="retired">Transducer Orientation</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,2208)</td><td class="retired1">CS</td><td class="retired1">Anatomic Structure</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,2218)</td><td>SQ</td><td>Anatomic Region Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,2220)</td><td class="setColor">SQ</td><td class="setColor">Anatomic Region Modifier Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,2228)</td><td>SQ</td><td>Primary Anatomic Structure Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,2229)</td><td class="setColor">SQ</td><td class="setColor">Anatomic Structure, Space or Region Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,2230)</td><td>SQ</td><td>Primary Anatomic Structure Modifier Sequence</td><td></td></tr>
    <tr><td class="retired1">(0008,2240)</td><td class="retired1">SQ</td><td class="retired1">Transducer Position Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,2242)</td><td class="retired">SQ</td><td class="retired">Transducer Position Modifier Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,2244)</td><td class="retired1">SQ</td><td class="retired1">Transducer Orientation Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,2246)</td><td class="retired">SQ</td><td class="retired">Transducer Orientation Modifier Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,2251)</td><td class="retired1">SQ</td><td class="retired1">Anatomic Structure Space Or Region Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,2253)</td><td class="retired">SQ</td><td class="retired">Anatomic Portal Of Entrance Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,2255)</td><td class="retired1">SQ</td><td class="retired1">Anatomic Approach Direction Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,2256)</td><td class="retired">ST</td><td class="retired">Anatomic Perspective Description (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,2257)</td><td class="retired1">SQ</td><td class="retired1">Anatomic Perspective Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,2258)</td><td class="retired">ST</td><td class="retired">Anatomic Location Of Examining Instrument Description (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,2259)</td><td class="retired1">SQ</td><td class="retired1">Anatomic Location Of Examining Instrument Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0008,225A)</td><td class="retired">SQ</td><td class="retired">Anatomic Structure Space Or Region Modifier Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0008,225C)</td><td class="retired1">SQ</td><td class="retired1">On Axis Background Anatomic Structure Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0008,3001)</td><td>SQ</td><td>Alternate Representation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,3010)</td><td class="setColor">UI</td><td class="setColor">Irradiation Event UID</td><td class="setColor"></td></tr>
    <tr><td>(0008,3011)</td><td>SQ</td><td>Source Irradiation Event Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,3012)</td><td class="setColor">UI</td><td class="setColor">Radiopharmaceutical Administration Event UID</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0008,4000)</td><td class="retired">LT</td><td class="retired">Identifying Comments</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0008,9007)</td><td class="setColor">CS</td><td class="setColor">Frame Type</td><td class="setColor"></td></tr>
    <tr><td>(0008,9092)</td><td>SQ</td><td>Referenced Image Evidence Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,9121)</td><td class="setColor">SQ</td><td class="setColor">Referenced Raw Data Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,9123)</td><td>UI</td><td>Creator-Version UID</td><td></td></tr>
    <tr><td class="setColor">(0008,9124)</td><td class="setColor">SQ</td><td class="setColor">Derivation Image Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,9154)</td><td>SQ</td><td>Source Image Evidence Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,9205)</td><td class="setColor">CS</td><td class="setColor">Pixel Presentation</td><td class="setColor"></td></tr>
    <tr><td>(0008,9206)</td><td>CS</td><td>Volumetric Properties</td><td></td></tr>
    <tr><td class="setColor">(0008,9207)</td><td class="setColor">CS</td><td class="setColor">Volume Based Calculation Technique</td><td class="setColor"></td></tr>
    <tr><td>(0008,9208)</td><td>CS</td><td>Complex Image Component</td><td></td></tr>
    <tr><td class="setColor">(0008,9209)</td><td class="setColor">CS</td><td class="setColor">Acquisition Contrast</td><td class="setColor"></td></tr>
    <tr><td>(0008,9215)</td><td>SQ</td><td>Derivation Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,9237)</td><td class="setColor">SQ</td><td class="setColor">Referenced Presentation State Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,9410)</td><td>SQ</td><td>Referenced Other Plane Sequence</td><td></td></tr>
    <tr><td class="setColor">(0008,9458)</td><td class="setColor">SQ</td><td class="setColor">Frame Display Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0008,9459)</td><td>FL</td><td>Recommended Display Frame Rate in Float</td><td></td></tr>
    <tr><td class="setColor">(0008,9460)</td><td class="setColor">CS</td><td class="setColor">Skip Frame Range Flag</td><td class="setColor"></td></tr>
    <tr><td>(0010,0010)</td><td>PN</td><td>Patient's Name</td><td></td></tr>
    <tr><td class="setColor">(0010,0020)</td><td class="setColor">LO</td><td class="setColor">Patient ID</td><td class="setColor"></td></tr>
    <tr><td>(0010,0021)</td><td>LO</td><td>Issuer of Patient ID</td><td></td></tr>
    <tr><td class="setColor">(0010,0022)</td><td class="setColor">CS</td><td class="setColor">Type of Patient ID</td><td class="setColor"></td></tr>
    <tr><td>(0010,0024)</td><td>SQ</td><td>Issuer of Patient ID Qualifiers Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,0026)</td><td class="setColor">SQ</td><td class="setColor">Source Patient Group Identification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,0027)</td><td>SQ</td><td>Group of Patients Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,0028)</td><td class="setColor">US</td><td class="setColor">Subject Relative Position in Image</td><td class="setColor"></td></tr>
    <tr><td>(0010,0030)</td><td>DA</td><td>Patient's Birth Date</td><td></td></tr>
    <tr><td class="setColor">(0010,0032)</td><td class="setColor">TM</td><td class="setColor">Patient's Birth Time</td><td class="setColor"></td></tr>
    <tr><td>(0010,0033)</td><td>LO</td><td>Patient's Birth Date in Alternative Calendar</td><td></td></tr>
    <tr><td class="setColor">(0010,0034)</td><td class="setColor">LO</td><td class="setColor">Patient's Death Date in Alternative Calendar</td><td class="setColor"></td></tr>
    <tr><td>(0010,0035)</td><td>CS</td><td>Patient's Alternative Calendar</td><td></td></tr>
    <tr><td class="setColor">(0010,0040)</td><td class="setColor">CS</td><td class="setColor">Patient's Sex</td><td class="setColor"></td></tr>
    <tr><td>(0010,0050)</td><td>SQ</td><td>Patient's Insurance Plan Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,0101)</td><td class="setColor">SQ</td><td class="setColor">Patient's Primary Language Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,0102)</td><td>SQ</td><td>Patient's Primary Language Modifier Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,0200)</td><td class="setColor">CS</td><td class="setColor">Quality Control Subject</td><td class="setColor"></td></tr>
    <tr><td>(0010,0201)</td><td>SQ</td><td>Quality Control Subject Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,0212)</td><td class="setColor">UC</td><td class="setColor">Strain Description</td><td class="setColor"></td></tr>
    <tr><td>(0010,0213)</td><td>LO</td><td>Strain Nomenclature</td><td></td></tr>
    <tr><td class="setColor">(0010,0214)</td><td class="setColor">LO</td><td class="setColor">Strain Stock Number</td><td class="setColor"></td></tr>
    <tr><td>(0010,0215)</td><td>SQ</td><td>Strain Source Registry Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,0216)</td><td class="setColor">SQ</td><td class="setColor">Strain Stock Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,0217)</td><td>LO</td><td>Strain Source</td><td></td></tr>
    <tr><td class="setColor">(0010,0218)</td><td class="setColor">UT</td><td class="setColor">Strain Additional Information</td><td class="setColor"></td></tr>
    <tr><td>(0010,0219)</td><td>SQ</td><td>Strain Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,1000)</td><td class="setColor">LO</td><td class="setColor">Other Patient IDs</td><td class="setColor"></td></tr>
    <tr><td>(0010,1001)</td><td>PN</td><td>Other Patient Names</td><td></td></tr>
    <tr><td class="setColor">(0010,1002)</td><td class="setColor">SQ</td><td class="setColor">Other Patient IDs Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,1005)</td><td>PN</td><td>Patient's Birth Name</td><td></td></tr>
    <tr><td class="setColor">(0010,1010)</td><td class="setColor">AS</td><td class="setColor">Patient's Age</td><td class="setColor"></td></tr>
    <tr><td>(0010,1020)</td><td>DS</td><td>Patient's Size</td><td></td></tr>
    <tr><td class="setColor">(0010,1021)</td><td class="setColor">SQ</td><td class="setColor">Patient's Size Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,1030)</td><td>DS</td><td>Patient's Weight</td><td></td></tr>
    <tr><td class="setColor">(0010,1040)</td><td class="setColor">LO</td><td class="setColor">Patient's Address</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0010,1050)</td><td class="retired">LO</td><td class="retired">Insurance Plan Identification</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0010,1060)</td><td class="setColor">PN</td><td class="setColor">Patient's Mother's Birth Name</td><td class="setColor"></td></tr>
    <tr><td>(0010,1080)</td><td>LO</td><td>Military Rank</td><td></td></tr>
    <tr><td class="setColor">(0010,1081)</td><td class="setColor">LO</td><td class="setColor">Branch of Service</td><td class="setColor"></td></tr>
    <tr><td>(0010,1090)</td><td>LO</td><td>Medical Record Locator</td><td></td></tr>
    <tr><td class="setColor">(0010,1100)</td><td class="setColor">SQ</td><td class="setColor">Referenced Patient Photo Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,2000)</td><td>LO</td><td>Medical Alerts</td><td></td></tr>
    <tr><td class="setColor">(0010,2110)</td><td class="setColor">LO</td><td class="setColor">Allergies</td><td class="setColor"></td></tr>
    <tr><td>(0010,2150)</td><td>LO</td><td>Country of Residence</td><td></td></tr>
    <tr><td class="setColor">(0010,2152)</td><td class="setColor">LO</td><td class="setColor">Region of Residence</td><td class="setColor"></td></tr>
    <tr><td>(0010,2154)</td><td>SH</td><td>Patient's Telephone Numbers</td><td></td></tr>
    <tr><td class="setColor">(0010,2155)</td><td class="setColor">LT</td><td class="setColor">Patient's Telecom Information</td><td class="setColor"></td></tr>
    <tr><td>(0010,2160)</td><td>SH</td><td>Ethnic Group</td><td></td></tr>
    <tr><td class="setColor">(0010,2180)</td><td class="setColor">SH</td><td class="setColor">Occupation</td><td class="setColor"></td></tr>
    <tr><td>(0010,21A0)</td><td>CS</td><td>Smoking Status</td><td></td></tr>
    <tr><td class="setColor">(0010,21B0)</td><td class="setColor">LT</td><td class="setColor">Additional Patient History</td><td class="setColor"></td></tr>
    <tr><td>(0010,21C0)</td><td>US</td><td>Pregnancy Status</td><td></td></tr>
    <tr><td class="setColor">(0010,21D0)</td><td class="setColor">DA</td><td class="setColor">Last Menstrual Date</td><td class="setColor"></td></tr>
    <tr><td>(0010,21F0)</td><td>LO</td><td>Patient's Religious Preference</td><td></td></tr>
    <tr><td class="setColor">(0010,2201)</td><td class="setColor">LO</td><td class="setColor">Patient Species Description</td><td class="setColor"></td></tr>
    <tr><td>(0010,2202)</td><td>SQ</td><td>Patient Species Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,2203)</td><td class="setColor">CS</td><td class="setColor">Patient's Sex Neutered</td><td class="setColor"></td></tr>
    <tr><td>(0010,2210)</td><td>CS</td><td>Anatomical Orientation Type</td><td></td></tr>
    <tr><td class="setColor">(0010,2292)</td><td class="setColor">LO</td><td class="setColor">Patient Breed Description</td><td class="setColor"></td></tr>
    <tr><td>(0010,2293)</td><td>SQ</td><td>Patient Breed Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0010,2294)</td><td class="setColor">SQ</td><td class="setColor">Breed Registration Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,2295)</td><td>LO</td><td>Breed Registration Number</td><td></td></tr>
    <tr><td class="setColor">(0010,2296)</td><td class="setColor">SQ</td><td class="setColor">Breed Registry Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0010,2297)</td><td>PN</td><td>Responsible Person</td><td></td></tr>
    <tr><td class="setColor">(0010,2298)</td><td class="setColor">CS</td><td class="setColor">Responsible Person Role</td><td class="setColor"></td></tr>
    <tr><td>(0010,2299)</td><td>LO</td><td>Responsible Organization</td><td></td></tr>
    <tr><td class="setColor">(0010,4000)</td><td class="setColor">LT</td><td class="setColor">Patient Comments</td><td class="setColor"></td></tr>
    <tr><td>(0010,9431)</td><td>FL</td><td>Examined Body Thickness</td><td></td></tr>
    <tr><td class="setColor">(0012,0010)</td><td class="setColor">LO</td><td class="setColor">Clinical Trial Sponsor Name</td><td class="setColor"></td></tr>
    <tr><td>(0012,0020)</td><td>LO</td><td>Clinical Trial Protocol ID</td><td></td></tr>
    <tr><td class="setColor">(0012,0021)</td><td class="setColor">LO</td><td class="setColor">Clinical Trial Protocol Name</td><td class="setColor"></td></tr>
    <tr><td>(0012,0030)</td><td>LO</td><td>Clinical Trial Site ID</td><td></td></tr>
    <tr><td class="setColor">(0012,0031)</td><td class="setColor">LO</td><td class="setColor">Clinical Trial Site Name</td><td class="setColor"></td></tr>
    <tr><td>(0012,0040)</td><td>LO</td><td>Clinical Trial Subject ID</td><td></td></tr>
    <tr><td class="setColor">(0012,0042)</td><td class="setColor">LO</td><td class="setColor">Clinical Trial Subject Reading ID</td><td class="setColor"></td></tr>
    <tr><td>(0012,0050)</td><td>LO</td><td>Clinical Trial Time Point ID</td><td></td></tr>
    <tr><td class="setColor">(0012,0051)</td><td class="setColor">ST</td><td class="setColor">Clinical Trial Time Point Description</td><td class="setColor"></td></tr>
    <tr><td>(0012,0060)</td><td>LO</td><td>Clinical Trial Coordinating Center Name</td><td></td></tr>
    <tr><td class="setColor">(0012,0062)</td><td class="setColor">CS</td><td class="setColor">Patient Identity Removed</td><td class="setColor"></td></tr>
    <tr><td>(0012,0063)</td><td>LO</td><td>De-identification Method</td><td></td></tr>
    <tr><td class="setColor">(0012,0064)</td><td class="setColor">SQ</td><td class="setColor">De-identification Method Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0012,0071)</td><td>LO</td><td>Clinical Trial Series ID</td><td></td></tr>
    <tr><td class="setColor">(0012,0072)</td><td class="setColor">LO</td><td class="setColor">Clinical Trial Series Description</td><td class="setColor"></td></tr>
    <tr><td>(0012,0081)</td><td>LO</td><td>Clinical Trial Protocol Ethics Committee Name</td><td></td></tr>
    <tr><td class="setColor">(0012,0082)</td><td class="setColor">LO</td><td class="setColor">Clinical Trial Protocol Ethics Committee Approval Number</td><td class="setColor"></td></tr>
    <tr><td>(0012,0083)</td><td>SQ</td><td>Consent for Clinical Trial Use Sequence</td><td></td></tr>
    <tr><td class="setColor">(0012,0084)</td><td class="setColor">CS</td><td class="setColor">Distribution Type</td><td class="setColor"></td></tr>
    <tr><td>(0012,0085)</td><td>CS</td><td>Consent for Distribution Flag</td><td></td></tr>
    <tr><td class="retired1">(0014,0023)</td><td class="retired1">ST</td><td class="retired1">CAD File Format</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0014,0024)</td><td class="retired">ST</td><td class="retired">Component Reference System</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0014,0025)</td><td class="setColor">ST</td><td class="setColor">Component Manufacturing Procedure</td><td class="setColor"></td></tr>
    <tr><td>(0014,0028)</td><td>ST</td><td>Component Manufacturer</td><td></td></tr>
    <tr><td class="setColor">(0014,0030)</td><td class="setColor">DS</td><td class="setColor">Material Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0014,0032)</td><td>DS</td><td>Material Pipe Diameter</td><td></td></tr>
    <tr><td class="setColor">(0014,0034)</td><td class="setColor">DS</td><td class="setColor">Material Isolation Diameter</td><td class="setColor"></td></tr>
    <tr><td>(0014,0042)</td><td>ST</td><td>Material Grade</td><td></td></tr>
    <tr><td class="setColor">(0014,0044)</td><td class="setColor">ST</td><td class="setColor">Material Properties Description</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0014,0045)</td><td class="retired">ST</td><td class="retired">Material Properties File Format (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0014,0046)</td><td class="setColor">LT</td><td class="setColor">Material Notes</td><td class="setColor"></td></tr>
    <tr><td>(0014,0050)</td><td>CS</td><td>Component Shape</td><td></td></tr>
    <tr><td class="setColor">(0014,0052)</td><td class="setColor">CS</td><td class="setColor">Curvature Type</td><td class="setColor"></td></tr>
    <tr><td>(0014,0054)</td><td>DS</td><td>Outer Diameter</td><td></td></tr>
    <tr><td class="setColor">(0014,0056)</td><td class="setColor">DS</td><td class="setColor">Inner Diameter</td><td class="setColor"></td></tr>
    <tr><td>(0014,0100)</td><td>LO</td><td>Component Welder IDs</td><td></td></tr>
    <tr><td class="setColor">(0014,0101)</td><td class="setColor">CS</td><td class="setColor">Secondary Approval Status</td><td class="setColor"></td></tr>
    <tr><td>(0014,0102)</td><td>DA</td><td>Secondary Review Date</td><td></td></tr>
    <tr><td class="setColor">(0014,0103)</td><td class="setColor">TM</td><td class="setColor">Secondary Review Time</td><td class="setColor"></td></tr>
    <tr><td>(0014,0104)</td><td>PN</td><td>Secondary Reviewer Name</td><td></td></tr>
    <tr><td class="setColor">(0014,0105)</td><td class="setColor">ST</td><td class="setColor">Repair ID</td><td class="setColor"></td></tr>
    <tr><td>(0014,0106)</td><td>SQ</td><td>Multiple Component Approval Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,0107)</td><td class="setColor">CS</td><td class="setColor">Other Approval Status</td><td class="setColor"></td></tr>
    <tr><td>(0014,0108)</td><td>CS</td><td>Other Secondary Approval Status</td><td></td></tr>
    <tr><td class="setColor">(0014,1010)</td><td class="setColor">ST</td><td class="setColor">Actual Environmental Conditions</td><td class="setColor"></td></tr>
    <tr><td>(0014,1020)</td><td>DA</td><td>Expiry Date</td><td></td></tr>
    <tr><td class="setColor">(0014,1040)</td><td class="setColor">ST</td><td class="setColor">Environmental Conditions</td><td class="setColor"></td></tr>
    <tr><td>(0014,2002)</td><td>SQ</td><td>Evaluator Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,2004)</td><td class="setColor">IS</td><td class="setColor">Evaluator Number</td><td class="setColor"></td></tr>
    <tr><td>(0014,2006)</td><td>PN</td><td>Evaluator Name</td><td></td></tr>
    <tr><td class="setColor">(0014,2008)</td><td class="setColor">IS</td><td class="setColor">Evaluation Attempt</td><td class="setColor"></td></tr>
    <tr><td>(0014,2012)</td><td>SQ</td><td>Indication Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,2014)</td><td class="setColor">IS</td><td class="setColor">Indication Number</td><td class="setColor"></td></tr>
    <tr><td>(0014,2016)</td><td>SH</td><td>Indication Label</td><td></td></tr>
    <tr><td class="setColor">(0014,2018)</td><td class="setColor">ST</td><td class="setColor">Indication Description</td><td class="setColor"></td></tr>
    <tr><td>(0014,201A)</td><td>CS</td><td>Indication Type</td><td></td></tr>
    <tr><td class="setColor">(0014,201C)</td><td class="setColor">CS</td><td class="setColor">Indication Disposition</td><td class="setColor"></td></tr>
    <tr><td>(0014,201E)</td><td>SQ</td><td>Indication ROI Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,2030)</td><td class="setColor">SQ</td><td class="setColor">Indication Physical Property Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,2032)</td><td>SH</td><td>Property Label</td><td></td></tr>
    <tr><td class="setColor">(0014,2202)</td><td class="setColor">IS</td><td class="setColor">Coordinate System Number of Axes</td><td class="setColor"></td></tr>
    <tr><td>(0014,2204)</td><td>SQ</td><td>Coordinate System Axes Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,2206)</td><td class="setColor">ST</td><td class="setColor">Coordinate System Axis Description</td><td class="setColor"></td></tr>
    <tr><td>(0014,2208)</td><td>CS</td><td>Coordinate System Data Set Mapping</td><td></td></tr>
    <tr><td class="setColor">(0014,220A)</td><td class="setColor">IS</td><td class="setColor">Coordinate System Axis Number</td><td class="setColor"></td></tr>
    <tr><td>(0014,220C)</td><td>CS</td><td>Coordinate System Axis Type</td><td></td></tr>
    <tr><td class="setColor">(0014,220E)</td><td class="setColor">CS</td><td class="setColor">Coordinate System Axis Units</td><td class="setColor"></td></tr>
    <tr><td>(0014,2210)</td><td>OB</td><td>Coordinate System Axis Values</td><td></td></tr>
    <tr><td class="setColor">(0014,2220)</td><td class="setColor">SQ</td><td class="setColor">Coordinate System Transform Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,2222)</td><td>ST</td><td>Transform Description</td><td></td></tr>
    <tr><td class="setColor">(0014,2224)</td><td class="setColor">IS</td><td class="setColor">Transform Number of Axes</td><td class="setColor"></td></tr>
    <tr><td>(0014,2226)</td><td>IS</td><td>Transform Order of Axes</td><td></td></tr>
    <tr><td class="setColor">(0014,2228)</td><td class="setColor">CS</td><td class="setColor">Transformed Axis Units</td><td class="setColor"></td></tr>
    <tr><td>(0014,222A)</td><td>DS</td><td>Coordinate System Transform Rotation and Scale Matrix</td><td></td></tr>
    <tr><td class="setColor">(0014,222C)</td><td class="setColor">DS</td><td class="setColor">Coordinate System Transform Translation Matrix</td><td class="setColor"></td></tr>
    <tr><td>(0014,3011)</td><td>DS</td><td>Internal Detector Frame Time</td><td></td></tr>
    <tr><td class="setColor">(0014,3012)</td><td class="setColor">DS</td><td class="setColor">Number of Frames Integrated</td><td class="setColor"></td></tr>
    <tr><td>(0014,3020)</td><td>SQ</td><td>Detector Temperature Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,3022)</td><td class="setColor">ST</td><td class="setColor">Sensor Name</td><td class="setColor"></td></tr>
    <tr><td>(0014,3024)</td><td>DS</td><td>Horizontal Offset of Sensor</td><td></td></tr>
    <tr><td class="setColor">(0014,3026)</td><td class="setColor">DS</td><td class="setColor">Vertical Offset of Sensor</td><td class="setColor"></td></tr>
    <tr><td>(0014,3028)</td><td>DS</td><td>Sensor Temperature</td><td></td></tr>
    <tr><td class="setColor">(0014,3040)</td><td class="setColor">SQ</td><td class="setColor">Dark Current Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,3050)</td><td>OB or OW</td><td>Dark Current Counts</td><td></td></tr>
    <tr><td class="setColor">(0014,3060)</td><td class="setColor">SQ</td><td class="setColor">Gain Correction Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,3070)</td><td>OB or OW</td><td>Air Counts</td><td></td></tr>
    <tr><td class="setColor">(0014,3071)</td><td class="setColor">DS</td><td class="setColor">KV Used in Gain Calibration</td><td class="setColor"></td></tr>
    <tr><td>(0014,3072)</td><td>DS</td><td>MA Used in Gain Calibration</td><td></td></tr>
    <tr><td class="setColor">(0014,3073)</td><td class="setColor">DS</td><td class="setColor">Number of Frames Used for Integration</td><td class="setColor"></td></tr>
    <tr><td>(0014,3074)</td><td>LO</td><td>Filter Material Used in Gain Calibration</td><td></td></tr>
    <tr><td class="setColor">(0014,3075)</td><td class="setColor">DS</td><td class="setColor">Filter Thickness Used in Gain Calibration</td><td class="setColor"></td></tr>
    <tr><td>(0014,3076)</td><td>DA</td><td>Date of Gain Calibration</td><td></td></tr>
    <tr><td class="setColor">(0014,3077)</td><td class="setColor">TM</td><td class="setColor">Time of Gain Calibration</td><td class="setColor"></td></tr>
    <tr><td>(0014,3080)</td><td>OB</td><td>Bad Pixel Image</td><td></td></tr>
    <tr><td class="setColor">(0014,3099)</td><td class="setColor">LT</td><td class="setColor">Calibration Notes</td><td class="setColor"></td></tr>
    <tr><td>(0014,4002)</td><td>SQ</td><td>Pulser Equipment Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4004)</td><td class="setColor">CS</td><td class="setColor">Pulser Type</td><td class="setColor"></td></tr>
    <tr><td>(0014,4006)</td><td>LT</td><td>Pulser Notes</td><td></td></tr>
    <tr><td class="setColor">(0014,4008)</td><td class="setColor">SQ</td><td class="setColor">Receiver Equipment Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,400A)</td><td>CS</td><td>Amplifier Type</td><td></td></tr>
    <tr><td class="setColor">(0014,400C)</td><td class="setColor">LT</td><td class="setColor">Receiver Notes</td><td class="setColor"></td></tr>
    <tr><td>(0014,400E)</td><td>SQ</td><td>Pre-Amplifier Equipment Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,400F)</td><td class="setColor">LT</td><td class="setColor">Pre-Amplifier Notes</td><td class="setColor"></td></tr>
    <tr><td>(0014,4010)</td><td>SQ</td><td>Transmit Transducer Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4011)</td><td class="setColor">SQ</td><td class="setColor">Receive Transducer Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4012)</td><td>US</td><td>Number of Elements</td><td></td></tr>
    <tr><td class="setColor">(0014,4013)</td><td class="setColor">CS</td><td class="setColor">Element Shape</td><td class="setColor"></td></tr>
    <tr><td>(0014,4014)</td><td>DS</td><td>Element Dimension A</td><td></td></tr>
    <tr><td class="setColor">(0014,4015)</td><td class="setColor">DS</td><td class="setColor">Element Dimension B</td><td class="setColor"></td></tr>
    <tr><td>(0014,4016)</td><td>DS</td><td>Element Pitch A</td><td></td></tr>
    <tr><td class="setColor">(0014,4017)</td><td class="setColor">DS</td><td class="setColor">Measured Beam Dimension A</td><td class="setColor"></td></tr>
    <tr><td>(0014,4018)</td><td>DS</td><td>Measured Beam Dimension B</td><td></td></tr>
    <tr><td class="setColor">(0014,4019)</td><td class="setColor">DS</td><td class="setColor">Location of Measured Beam Diameter</td><td class="setColor"></td></tr>
    <tr><td>(0014,401A)</td><td>DS</td><td>Nominal Frequency</td><td></td></tr>
    <tr><td class="setColor">(0014,401B)</td><td class="setColor">DS</td><td class="setColor">Measured Center Frequency</td><td class="setColor"></td></tr>
    <tr><td>(0014,401C)</td><td>DS</td><td>Measured Bandwidth</td><td></td></tr>
    <tr><td class="setColor">(0014,401D)</td><td class="setColor">DS</td><td class="setColor">Element Pitch B</td><td class="setColor"></td></tr>
    <tr><td>(0014,4020)</td><td>SQ</td><td>Pulser Settings Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4022)</td><td class="setColor">DS</td><td class="setColor">Pulse Width</td><td class="setColor"></td></tr>
    <tr><td>(0014,4024)</td><td>DS</td><td>Excitation Frequency</td><td></td></tr>
    <tr><td class="setColor">(0014,4026)</td><td class="setColor">CS</td><td class="setColor">Modulation Type</td><td class="setColor"></td></tr>
    <tr><td>(0014,4028)</td><td>DS</td><td>Damping</td><td></td></tr>
    <tr><td class="setColor">(0014,4030)</td><td class="setColor">SQ</td><td class="setColor">Receiver Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4031)</td><td>DS</td><td>Acquired Soundpath Length</td><td></td></tr>
    <tr><td class="setColor">(0014,4032)</td><td class="setColor">CS</td><td class="setColor">Acquisition Compression Type</td><td class="setColor"></td></tr>
    <tr><td>(0014,4033)</td><td>IS</td><td>Acquisition Sample Size</td><td></td></tr>
    <tr><td class="setColor">(0014,4034)</td><td class="setColor">DS</td><td class="setColor">Rectifier Smoothing</td><td class="setColor"></td></tr>
    <tr><td>(0014,4035)</td><td>SQ</td><td>DAC Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4036)</td><td class="setColor">CS</td><td class="setColor">DAC Type</td><td class="setColor"></td></tr>
    <tr><td>(0014,4038)</td><td>DS</td><td>DAC Gain Points</td><td></td></tr>
    <tr><td class="setColor">(0014,403A)</td><td class="setColor">DS</td><td class="setColor">DAC Time Points</td><td class="setColor"></td></tr>
    <tr><td>(0014,403C)</td><td>DS</td><td>DAC Amplitude</td><td></td></tr>
    <tr><td class="setColor">(0014,4040)</td><td class="setColor">SQ</td><td class="setColor">Pre-Amplifier Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4050)</td><td>SQ</td><td>Transmit Transducer Settings Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4051)</td><td class="setColor">SQ</td><td class="setColor">Receive Transducer Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4052)</td><td>DS</td><td>Incident Angle</td><td></td></tr>
    <tr><td class="setColor">(0014,4054)</td><td class="setColor">ST</td><td class="setColor">Coupling Technique</td><td class="setColor"></td></tr>
    <tr><td>(0014,4056)</td><td>ST</td><td>Coupling Medium</td><td></td></tr>
    <tr><td class="setColor">(0014,4057)</td><td class="setColor">DS</td><td class="setColor">Coupling Velocity</td><td class="setColor"></td></tr>
    <tr><td>(0014,4058)</td><td>DS</td><td>Probe Center Location X</td><td></td></tr>
    <tr><td class="setColor">(0014,4059)</td><td class="setColor">DS</td><td class="setColor">Probe Center Location Z</td><td class="setColor"></td></tr>
    <tr><td>(0014,405A)</td><td>DS</td><td>Sound Path Length</td><td></td></tr>
    <tr><td class="setColor">(0014,405C)</td><td class="setColor">ST</td><td class="setColor">Delay Law Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0014,4060)</td><td>SQ</td><td>Gate Settings Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4062)</td><td class="setColor">DS</td><td class="setColor">Gate Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0014,4064)</td><td>DS</td><td>Velocity of Sound</td><td></td></tr>
    <tr><td class="setColor">(0014,4070)</td><td class="setColor">SQ</td><td class="setColor">Calibration Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4072)</td><td>ST</td><td>Calibration Procedure</td><td></td></tr>
    <tr><td class="setColor">(0014,4074)</td><td class="setColor">SH</td><td class="setColor">Procedure Version</td><td class="setColor"></td></tr>
    <tr><td>(0014,4076)</td><td>DA</td><td>Procedure Creation Date</td><td></td></tr>
    <tr><td class="setColor">(0014,4078)</td><td class="setColor">DA</td><td class="setColor">Procedure Expiration Date</td><td class="setColor"></td></tr>
    <tr><td>(0014,407A)</td><td>DA</td><td>Procedure Last Modified Date</td><td></td></tr>
    <tr><td class="setColor">(0014,407C)</td><td class="setColor">TM</td><td class="setColor">Calibration Time</td><td class="setColor"></td></tr>
    <tr><td>(0014,407E)</td><td>DA</td><td>Calibration Date</td><td></td></tr>
    <tr><td class="setColor">(0014,4080)</td><td class="setColor">SQ</td><td class="setColor">Probe Drive Equipment Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4081)</td><td>CS</td><td>Drive Type</td><td></td></tr>
    <tr><td class="setColor">(0014,4082)</td><td class="setColor">LT</td><td class="setColor">Probe Drive Notes</td><td class="setColor"></td></tr>
    <tr><td>(0014,4083)</td><td>SQ</td><td>Drive Probe Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4084)</td><td class="setColor">DS</td><td class="setColor">Probe Inductance</td><td class="setColor"></td></tr>
    <tr><td>(0014,4085)</td><td>DS</td><td>Probe Resistance</td><td></td></tr>
    <tr><td class="setColor">(0014,4086)</td><td class="setColor">SQ</td><td class="setColor">Receive Probe Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4087)</td><td>SQ</td><td>Probe Drive Settings Sequence</td><td></td></tr>
    <tr><td class="setColor">(0014,4088)</td><td class="setColor">DS</td><td class="setColor">Bridge Resistors</td><td class="setColor"></td></tr>
    <tr><td>(0014,4089)</td><td>DS</td><td>Probe Orientation Angle</td><td></td></tr>
    <tr><td class="setColor">(0014,408B)</td><td class="setColor">DS</td><td class="setColor">User Selected Gain Y</td><td class="setColor"></td></tr>
    <tr><td>(0014,408C)</td><td>DS</td><td>User Selected Phase</td><td></td></tr>
    <tr><td class="setColor">(0014,408D)</td><td class="setColor">DS</td><td class="setColor">User Selected Offset X</td><td class="setColor"></td></tr>
    <tr><td>(0014,408E)</td><td>DS</td><td>User Selected Offset Y</td><td></td></tr>
    <tr><td class="setColor">(0014,4091)</td><td class="setColor">SQ</td><td class="setColor">Channel Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,4092)</td><td>DS</td><td>Channel Threshold</td><td></td></tr>
    <tr><td class="setColor">(0014,409A)</td><td class="setColor">SQ</td><td class="setColor">Scanner Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0014,409B)</td><td>ST</td><td>Scan Procedure</td><td></td></tr>
    <tr><td class="setColor">(0014,409C)</td><td class="setColor">DS</td><td class="setColor">Translation Rate X</td><td class="setColor"></td></tr>
    <tr><td>(0014,409D)</td><td>DS</td><td>Translation Rate Y</td><td></td></tr>
    <tr><td class="setColor">(0014,409F)</td><td class="setColor">DS</td><td class="setColor">Channel Overlap</td><td class="setColor"></td></tr>
    <tr><td>(0014,40A0)</td><td>LO</td><td>Image Quality Indicator Type</td><td></td></tr>
    <tr><td class="setColor">(0014,40A1)</td><td class="setColor">LO</td><td class="setColor">Image Quality Indicator Material</td><td class="setColor"></td></tr>
    <tr><td>(0014,40A2)</td><td>LO</td><td>Image Quality Indicator Size</td><td></td></tr>
    <tr><td class="setColor">(0014,5002)</td><td class="setColor">IS</td><td class="setColor">LINAC Energy</td><td class="setColor"></td></tr>
    <tr><td>(0014,5004)</td><td>IS</td><td>LINAC Output</td><td></td></tr>
    <tr><td class="setColor">(0014,5100)</td><td class="setColor">US</td><td class="setColor">Active Aperture</td><td class="setColor"></td></tr>
    <tr><td>(0014,5101)</td><td>DS</td><td>Total Aperture</td><td></td></tr>
    <tr><td class="setColor">(0014,5102)</td><td class="setColor">DS</td><td class="setColor">Aperture Elevation</td><td class="setColor"></td></tr>
    <tr><td>(0014,5103)</td><td>DS</td><td>Main Lobe Angle</td><td></td></tr>
    <tr><td class="setColor">(0014,5104)</td><td class="setColor">DS</td><td class="setColor">Main Roof Angle</td><td class="setColor"></td></tr>
    <tr><td>(0014,5105)</td><td>CS</td><td>Connector Type</td><td></td></tr>
    <tr><td class="setColor">(0014,5106)</td><td class="setColor">SH</td><td class="setColor">Wedge Model Number</td><td class="setColor"></td></tr>
    <tr><td>(0014,5107)</td><td>DS</td><td>Wedge Angle Float</td><td></td></tr>
    <tr><td class="setColor">(0014,5108)</td><td class="setColor">DS</td><td class="setColor">Wedge Roof Angle</td><td class="setColor"></td></tr>
    <tr><td>(0014,5109)</td><td>CS</td><td>Wedge Element 1 Position</td><td></td></tr>
    <tr><td class="setColor">(0014,510A)</td><td class="setColor">DS</td><td class="setColor">Wedge Material Velocity</td><td class="setColor"></td></tr>
    <tr><td>(0014,510B)</td><td>SH</td><td>Wedge Material</td><td></td></tr>
    <tr><td class="setColor">(0014,510C)</td><td class="setColor">DS</td><td class="setColor">Wedge Offset Z</td><td class="setColor"></td></tr>
    <tr><td>(0014,510D)</td><td>DS</td><td>Wedge Origin Offset X</td><td></td></tr>
    <tr><td class="setColor">(0014,510E)</td><td class="setColor">DS</td><td class="setColor">Wedge Time Delay</td><td class="setColor"></td></tr>
    <tr><td>(0014,510F)</td><td>SH</td><td>Wedge Name</td><td></td></tr>
    <tr><td class="setColor">(0014,5110)</td><td class="setColor">SH</td><td class="setColor">Wedge Manufacturer Name</td><td class="setColor"></td></tr>
    <tr><td>(0014,5111)</td><td>LO</td><td>Wedge Description</td><td></td></tr>
    <tr><td class="setColor">(0014,5112)</td><td class="setColor">DS</td><td class="setColor">Nominal Beam Angle</td><td class="setColor"></td></tr>
    <tr><td>(0014,5113)</td><td>DS</td><td>Wedge Offset X</td><td></td></tr>
    <tr><td class="setColor">(0014,5114)</td><td class="setColor">DS</td><td class="setColor">Wedge Offset Y</td><td class="setColor"></td></tr>
    <tr><td>(0014,5115)</td><td>DS</td><td>Wedge Total Length</td><td></td></tr>
    <tr><td class="setColor">(0014,5116)</td><td class="setColor">DS</td><td class="setColor">Wedge In Contact Length</td><td class="setColor"></td></tr>
    <tr><td>(0014,5117)</td><td>DS</td><td>Wedge Front Gap</td><td></td></tr>
    <tr><td class="setColor">(0014,5118)</td><td class="setColor">DS</td><td class="setColor">Wedge Total Height</td><td class="setColor"></td></tr>
    <tr><td>(0014,5119)</td><td>DS</td><td>Wedge Front Height</td><td></td></tr>
    <tr><td class="setColor">(0014,511A)</td><td class="setColor">DS</td><td class="setColor">Wedge Rear Height</td><td class="setColor"></td></tr>
    <tr><td>(0014,511B)</td><td>DS</td><td>Wedge Total Width</td><td></td></tr>
    <tr><td class="setColor">(0014,511C)</td><td class="setColor">DS</td><td class="setColor">Wedge In Contact Width</td><td class="setColor"></td></tr>
    <tr><td>(0014,511D)</td><td>DS</td><td>Wedge Chamfer Height</td><td></td></tr>
    <tr><td class="setColor">(0014,511E)</td><td class="setColor">CS</td><td class="setColor">Wedge Curve</td><td class="setColor"></td></tr>
    <tr><td>(0014,511F)</td><td>DS</td><td>Radius Along the Wedge</td><td></td></tr>
    <tr><td class="setColor">(0018,0010)</td><td class="setColor">LO</td><td class="setColor">Contrast/Bolus Agent</td><td class="setColor"></td></tr>
    <tr><td>(0018,0012)</td><td>SQ</td><td>Contrast/Bolus Agent Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,0013)</td><td class="setColor">FL</td><td class="setColor">Contrast/Bolus T1 Relaxivity</td><td class="setColor"></td></tr>
    <tr><td>(0018,0014)</td><td>SQ</td><td>Contrast/Bolus Administration Route Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,0015)</td><td class="setColor">CS</td><td class="setColor">Body Part Examined</td><td class="setColor"></td></tr>
    <tr><td>(0018,0020)</td><td>CS</td><td>Scanning Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,0021)</td><td class="setColor">CS</td><td class="setColor">Sequence Variant</td><td class="setColor"></td></tr>
    <tr><td>(0018,0022)</td><td>CS</td><td>Scan Options</td><td></td></tr>
    <tr><td class="setColor">(0018,0023)</td><td class="setColor">CS</td><td class="setColor">MR Acquisition Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,0024)</td><td>SH</td><td>Sequence Name</td><td></td></tr>
    <tr><td class="setColor">(0018,0025)</td><td class="setColor">CS</td><td class="setColor">Angio Flag</td><td class="setColor"></td></tr>
    <tr><td>(0018,0026)</td><td>SQ</td><td>Intervention Drug Information Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,0027)</td><td class="setColor">TM</td><td class="setColor">Intervention Drug Stop Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,0028)</td><td>DS</td><td>Intervention Drug Dose</td><td></td></tr>
    <tr><td class="setColor">(0018,0029)</td><td class="setColor">SQ</td><td class="setColor">Intervention Drug Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,002A)</td><td>SQ</td><td>Additional Drug Sequence</td><td></td></tr>
    <tr><td class="retired1">(0018,0030)</td><td class="retired1">LO</td><td class="retired1">Radionuclide</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,0031)</td><td>LO</td><td>Radiopharmaceutical</td><td></td></tr>
    <tr><td class="retired1">(0018,0032)</td><td class="retired1">DS</td><td class="retired1">Energy Window Centerline</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0018,0033)</td><td class="retired">DS</td><td class="retired">Energy Window Total Width</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,0034)</td><td class="setColor">LO</td><td class="setColor">Intervention Drug Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,0035)</td><td>TM</td><td>Intervention Drug Start Time</td><td></td></tr>
    <tr><td class="setColor">(0018,0036)</td><td class="setColor">SQ</td><td class="setColor">Intervention Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,0037)</td><td class="retired">CS</td><td class="retired">Therapy Type</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,0038)</td><td class="setColor">CS</td><td class="setColor">Intervention Status</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,0039)</td><td class="retired">CS</td><td class="retired">Therapy Description</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,003A)</td><td class="setColor">ST</td><td class="setColor">Intervention Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,0040)</td><td>IS</td><td>Cine Rate</td><td></td></tr>
    <tr><td class="setColor">(0018,0042)</td><td class="setColor">CS</td><td class="setColor">Initial Cine Run State</td><td class="setColor"></td></tr>
    <tr><td>(0018,0050)</td><td>DS</td><td>Slice Thickness</td><td></td></tr>
    <tr><td class="setColor">(0018,0060)</td><td class="setColor">DS</td><td class="setColor">KVP</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,0061)</td><td class="retired">DS</td><td class="retired"></td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,0070)</td><td class="setColor">IS</td><td class="setColor">Counts Accumulated</td><td class="setColor"></td></tr>
    <tr><td>(0018,0071)</td><td>CS</td><td>Acquisition Termination Condition</td><td></td></tr>
    <tr><td class="setColor">(0018,0072)</td><td class="setColor">DS</td><td class="setColor">Effective Duration</td><td class="setColor"></td></tr>
    <tr><td>(0018,0073)</td><td>CS</td><td>Acquisition Start Condition</td><td></td></tr>
    <tr><td class="setColor">(0018,0074)</td><td class="setColor">IS</td><td class="setColor">Acquisition Start Condition Data</td><td class="setColor"></td></tr>
    <tr><td>(0018,0075)</td><td>IS</td><td>Acquisition Termination Condition Data</td><td></td></tr>
    <tr><td class="setColor">(0018,0080)</td><td class="setColor">DS</td><td class="setColor">Repetition Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,0081)</td><td>DS</td><td>Echo Time</td><td></td></tr>
    <tr><td class="setColor">(0018,0082)</td><td class="setColor">DS</td><td class="setColor">Inversion Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,0083)</td><td>DS</td><td>Number of Averages</td><td></td></tr>
    <tr><td class="setColor">(0018,0084)</td><td class="setColor">DS</td><td class="setColor">Imaging Frequency</td><td class="setColor"></td></tr>
    <tr><td>(0018,0085)</td><td>SH</td><td>Imaged Nucleus</td><td></td></tr>
    <tr><td class="setColor">(0018,0086)</td><td class="setColor">IS</td><td class="setColor">Echo Number(s)</td><td class="setColor"></td></tr>
    <tr><td>(0018,0087)</td><td>DS</td><td>Magnetic Field Strength</td><td></td></tr>
    <tr><td class="setColor">(0018,0088)</td><td class="setColor">DS</td><td class="setColor">Spacing Between Slices</td><td class="setColor"></td></tr>
    <tr><td>(0018,0089)</td><td>IS</td><td>Number of Phase Encoding Steps</td><td></td></tr>
    <tr><td class="setColor">(0018,0090)</td><td class="setColor">DS</td><td class="setColor">Data Collection Diameter</td><td class="setColor"></td></tr>
    <tr><td>(0018,0091)</td><td>IS</td><td>Echo Train Length</td><td></td></tr>
    <tr><td class="setColor">(0018,0093)</td><td class="setColor">DS</td><td class="setColor">Percent Sampling</td><td class="setColor"></td></tr>
    <tr><td>(0018,0094)</td><td>DS</td><td>Percent Phase Field of View</td><td></td></tr>
    <tr><td class="setColor">(0018,0095)</td><td class="setColor">DS</td><td class="setColor">Pixel Bandwidth</td><td class="setColor"></td></tr>
    <tr><td>(0018,1000)</td><td>LO</td><td>Device Serial Number</td><td></td></tr>
    <tr><td class="setColor">(0018,1002)</td><td class="setColor">UI</td><td class="setColor">Device UID</td><td class="setColor"></td></tr>
    <tr><td>(0018,1003)</td><td>LO</td><td>Device ID</td><td></td></tr>
    <tr><td class="setColor">(0018,1004)</td><td class="setColor">LO</td><td class="setColor">Plate ID</td><td class="setColor"></td></tr>
    <tr><td>(0018,1005)</td><td>LO</td><td>Generator ID</td><td></td></tr>
    <tr><td class="setColor">(0018,1006)</td><td class="setColor">LO</td><td class="setColor">Grid ID</td><td class="setColor"></td></tr>
    <tr><td>(0018,1007)</td><td>LO</td><td>Cassette ID</td><td></td></tr>
    <tr><td class="setColor">(0018,1008)</td><td class="setColor">LO</td><td class="setColor">Gantry ID</td><td class="setColor"></td></tr>
    <tr><td>(0018,1010)</td><td>LO</td><td>Secondary Capture Device ID</td><td></td></tr>
    <tr><td class="retired1">(0018,1011)</td><td class="retired1">LO</td><td class="retired1">Hardcopy Creation Device ID</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,1012)</td><td>DA</td><td>Date of Secondary Capture</td><td></td></tr>
    <tr><td class="setColor">(0018,1014)</td><td class="setColor">TM</td><td class="setColor">Time of Secondary Capture</td><td class="setColor"></td></tr>
    <tr><td>(0018,1016)</td><td>LO</td><td>Secondary Capture Device Manufacturer</td><td></td></tr>
    <tr><td class="retired1">(0018,1017)</td><td class="retired1">LO</td><td class="retired1">Hardcopy Device Manufacturer</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,1018)</td><td>LO</td><td>Secondary Capture Device Manufacturer's Model Name</td><td></td></tr>
    <tr><td class="setColor">(0018,1019)</td><td class="setColor">LO</td><td class="setColor">Secondary Capture Device Software Versions</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,101A)</td><td class="retired">LO</td><td class="retired">Hardcopy Device Software Version</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0018,101B)</td><td class="retired1">LO</td><td class="retired1">Hardcopy Device Manufacturer's Model Name</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,1020)</td><td>LO</td><td>Software Version(s)</td><td></td></tr>
    <tr><td class="setColor">(0018,1022)</td><td class="setColor">SH</td><td class="setColor">Video Image Format Acquired</td><td class="setColor"></td></tr>
    <tr><td>(0018,1023)</td><td>LO</td><td>Digital Image Format Acquired</td><td></td></tr>
    <tr><td class="setColor">(0018,1030)</td><td class="setColor">LO</td><td class="setColor">Protocol Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,1040)</td><td>LO</td><td>Contrast/Bolus Route</td><td></td></tr>
    <tr><td class="setColor">(0018,1041)</td><td class="setColor">DS</td><td class="setColor">Contrast/Bolus Volume</td><td class="setColor"></td></tr>
    <tr><td>(0018,1042)</td><td>TM</td><td>Contrast/Bolus Start Time</td><td></td></tr>
    <tr><td class="setColor">(0018,1043)</td><td class="setColor">TM</td><td class="setColor">Contrast/Bolus Stop Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,1044)</td><td>DS</td><td>Contrast/Bolus Total Dose</td><td></td></tr>
    <tr><td class="setColor">(0018,1045)</td><td class="setColor">IS</td><td class="setColor">Syringe Counts</td><td class="setColor"></td></tr>
    <tr><td>(0018,1046)</td><td>DS</td><td>Contrast Flow Rate</td><td></td></tr>
    <tr><td class="setColor">(0018,1047)</td><td class="setColor">DS</td><td class="setColor">Contrast Flow Duration</td><td class="setColor"></td></tr>
    <tr><td>(0018,1048)</td><td>CS</td><td>Contrast/Bolus Ingredient</td><td></td></tr>
    <tr><td class="setColor">(0018,1049)</td><td class="setColor">DS</td><td class="setColor">Contrast/Bolus Ingredient Concentration</td><td class="setColor"></td></tr>
    <tr><td>(0018,1050)</td><td>DS</td><td>Spatial Resolution</td><td></td></tr>
    <tr><td class="setColor">(0018,1060)</td><td class="setColor">DS</td><td class="setColor">Trigger Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,1061)</td><td>LO</td><td>Trigger Source or Type</td><td></td></tr>
    <tr><td class="setColor">(0018,1062)</td><td class="setColor">IS</td><td class="setColor">Nominal Interval</td><td class="setColor"></td></tr>
    <tr><td>(0018,1063)</td><td>DS</td><td>Frame Time</td><td></td></tr>
    <tr><td class="setColor">(0018,1064)</td><td class="setColor">LO</td><td class="setColor">Cardiac Framing Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,1065)</td><td>DS</td><td>Frame Time Vector</td><td></td></tr>
    <tr><td class="setColor">(0018,1066)</td><td class="setColor">DS</td><td class="setColor">Frame Delay</td><td class="setColor"></td></tr>
    <tr><td>(0018,1067)</td><td>DS</td><td>Image Trigger Delay</td><td></td></tr>
    <tr><td class="setColor">(0018,1068)</td><td class="setColor">DS</td><td class="setColor">Multiplex Group Time Offset</td><td class="setColor"></td></tr>
    <tr><td>(0018,1069)</td><td>DS</td><td>Trigger Time Offset</td><td></td></tr>
    <tr><td class="setColor">(0018,106A)</td><td class="setColor">CS</td><td class="setColor">Synchronization Trigger</td><td class="setColor"></td></tr>
    <tr><td>(0018,106C)</td><td>US</td><td>Synchronization Channel</td><td></td></tr>
    <tr><td class="setColor">(0018,106E)</td><td class="setColor">UL</td><td class="setColor">Trigger Sample Position</td><td class="setColor"></td></tr>
    <tr><td>(0018,1070)</td><td>LO</td><td>Radiopharmaceutical Route</td><td></td></tr>
    <tr><td class="setColor">(0018,1071)</td><td class="setColor">DS</td><td class="setColor">Radiopharmaceutical Volume</td><td class="setColor"></td></tr>
    <tr><td>(0018,1072)</td><td>TM</td><td>Radiopharmaceutical Start Time</td><td></td></tr>
    <tr><td class="setColor">(0018,1073)</td><td class="setColor">TM</td><td class="setColor">Radiopharmaceutical Stop Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,1074)</td><td>DS</td><td>Radionuclide Total Dose</td><td></td></tr>
    <tr><td class="setColor">(0018,1075)</td><td class="setColor">DS</td><td class="setColor">Radionuclide Half Life</td><td class="setColor"></td></tr>
    <tr><td>(0018,1076)</td><td>DS</td><td>Radionuclide Positron Fraction</td><td></td></tr>
    <tr><td class="setColor">(0018,1077)</td><td class="setColor">DS</td><td class="setColor">Radiopharmaceutical Specific Activity</td><td class="setColor"></td></tr>
    <tr><td>(0018,1078)</td><td>DT</td><td>Radiopharmaceutical Start DateTime</td><td></td></tr>
    <tr><td class="setColor">(0018,1079)</td><td class="setColor">DT</td><td class="setColor">Radiopharmaceutical Stop DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0018,1080)</td><td>CS</td><td>Beat Rejection Flag</td><td></td></tr>
    <tr><td class="setColor">(0018,1081)</td><td class="setColor">IS</td><td class="setColor">Low R-R Value</td><td class="setColor"></td></tr>
    <tr><td>(0018,1082)</td><td>IS</td><td>High R-R Value</td><td></td></tr>
    <tr><td class="setColor">(0018,1083)</td><td class="setColor">IS</td><td class="setColor">Intervals Acquired</td><td class="setColor"></td></tr>
    <tr><td>(0018,1084)</td><td>IS</td><td>Intervals Rejected</td><td></td></tr>
    <tr><td class="setColor">(0018,1085)</td><td class="setColor">LO</td><td class="setColor">PVC Rejection</td><td class="setColor"></td></tr>
    <tr><td>(0018,1086)</td><td>IS</td><td>Skip Beats</td><td></td></tr>
    <tr><td class="setColor">(0018,1088)</td><td class="setColor">IS</td><td class="setColor">Heart Rate</td><td class="setColor"></td></tr>
    <tr><td>(0018,1090)</td><td>IS</td><td>Cardiac Number of Images</td><td></td></tr>
    <tr><td class="setColor">(0018,1094)</td><td class="setColor">IS</td><td class="setColor">Trigger Window</td><td class="setColor"></td></tr>
    <tr><td>(0018,1100)</td><td>DS</td><td>Reconstruction Diameter</td><td></td></tr>
    <tr><td class="setColor">(0018,1110)</td><td class="setColor">DS</td><td class="setColor">Distance Source to Detector</td><td class="setColor"></td></tr>
    <tr><td>(0018,1111)</td><td>DS</td><td>Distance Source to Patient</td><td></td></tr>
    <tr><td class="setColor">(0018,1114)</td><td class="setColor">DS</td><td class="setColor">Estimated Radiographic Magnification Factor</td><td class="setColor"></td></tr>
    <tr><td>(0018,1120)</td><td>DS</td><td>Gantry/Detector Tilt</td><td></td></tr>
    <tr><td class="setColor">(0018,1121)</td><td class="setColor">DS</td><td class="setColor">Gantry/Detector Slew</td><td class="setColor"></td></tr>
    <tr><td>(0018,1130)</td><td>DS</td><td>Table Height</td><td></td></tr>
    <tr><td class="setColor">(0018,1131)</td><td class="setColor">DS</td><td class="setColor">Table Traverse</td><td class="setColor"></td></tr>
    <tr><td>(0018,1134)</td><td>CS</td><td>Table Motion</td><td></td></tr>
    <tr><td class="setColor">(0018,1135)</td><td class="setColor">DS</td><td class="setColor">Table Vertical Increment</td><td class="setColor"></td></tr>
    <tr><td>(0018,1136)</td><td>DS</td><td>Table Lateral Increment</td><td></td></tr>
    <tr><td class="setColor">(0018,1137)</td><td class="setColor">DS</td><td class="setColor">Table Longitudinal Increment</td><td class="setColor"></td></tr>
    <tr><td>(0018,1138)</td><td>DS</td><td>Table Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,113A)</td><td class="setColor">CS</td><td class="setColor">Table Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,1140)</td><td>CS</td><td>Rotation Direction</td><td></td></tr>
    <tr><td class="retired1">(0018,1141)</td><td class="retired1">DS</td><td class="retired1">Angular Position</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,1142)</td><td>DS</td><td>Radial Position</td><td></td></tr>
    <tr><td class="setColor">(0018,1143)</td><td class="setColor">DS</td><td class="setColor">Scan Arc</td><td class="setColor"></td></tr>
    <tr><td>(0018,1144)</td><td>DS</td><td>Angular Step</td><td></td></tr>
    <tr><td class="setColor">(0018,1145)</td><td class="setColor">DS</td><td class="setColor">Center of Rotation Offset</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,1146)</td><td class="retired">DS</td><td class="retired">Rotation Offset</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,1147)</td><td class="setColor">CS</td><td class="setColor">Field of View Shape</td><td class="setColor"></td></tr>
    <tr><td>(0018,1149)</td><td>IS</td><td>Field of View Dimension(s)</td><td></td></tr>
    <tr><td class="setColor">(0018,1150)</td><td class="setColor">IS</td><td class="setColor">Exposure Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,1151)</td><td>IS</td><td>X-Ray Tube Current</td><td></td></tr>
    <tr><td class="setColor">(0018,1152)</td><td class="setColor">IS</td><td class="setColor">Exposure</td><td class="setColor"></td></tr>
    <tr><td>(0018,1153)</td><td>IS</td><td>Exposure in µAs</td><td></td></tr>
    <tr><td class="setColor">(0018,1154)</td><td class="setColor">DS</td><td class="setColor">Average Pulse Width</td><td class="setColor"></td></tr>
    <tr><td>(0018,1155)</td><td>CS</td><td>Radiation Setting</td><td></td></tr>
    <tr><td class="setColor">(0018,1156)</td><td class="setColor">CS</td><td class="setColor">Rectification Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,115A)</td><td>CS</td><td>Radiation Mode</td><td></td></tr>
    <tr><td class="setColor">(0018,115E)</td><td class="setColor">DS</td><td class="setColor">Image and Fluoroscopy Area Dose Product</td><td class="setColor"></td></tr>
    <tr><td>(0018,1160)</td><td>SH</td><td>Filter Type</td><td></td></tr>
    <tr><td class="setColor">(0018,1161)</td><td class="setColor">LO</td><td class="setColor">Type of Filters</td><td class="setColor"></td></tr>
    <tr><td>(0018,1162)</td><td>DS</td><td>Intensifier Size</td><td></td></tr>
    <tr><td class="setColor">(0018,1164)</td><td class="setColor">DS</td><td class="setColor">Imager Pixel Spacing</td><td class="setColor"></td></tr>
    <tr><td>(0018,1166)</td><td>CS</td><td>Grid</td><td></td></tr>
    <tr><td class="setColor">(0018,1170)</td><td class="setColor">IS</td><td class="setColor">Generator Power</td><td class="setColor"></td></tr>
    <tr><td>(0018,1180)</td><td>SH</td><td>Collimator/grid Name</td><td></td></tr>
    <tr><td class="setColor">(0018,1181)</td><td class="setColor">CS</td><td class="setColor">Collimator Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,1182)</td><td>IS</td><td>Focal Distance</td><td></td></tr>
    <tr><td class="setColor">(0018,1183)</td><td class="setColor">DS</td><td class="setColor">X Focus Center</td><td class="setColor"></td></tr>
    <tr><td>(0018,1184)</td><td>DS</td><td>Y Focus Center</td><td></td></tr>
    <tr><td class="setColor">(0018,1190)</td><td class="setColor">DS</td><td class="setColor">Focal Spot(s)</td><td class="setColor"></td></tr>
    <tr><td>(0018,1191)</td><td>CS</td><td>Anode Target Material</td><td></td></tr>
    <tr><td class="setColor">(0018,11A0)</td><td class="setColor">DS</td><td class="setColor">Body Part Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0018,11A2)</td><td>DS</td><td>Compression Force</td><td></td></tr>
    <tr><td class="setColor">(0018,11A4)</td><td class="setColor">LO</td><td class="setColor">Paddle Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,1200)</td><td>DA</td><td>Date of Last Calibration</td><td></td></tr>
    <tr><td class="setColor">(0018,1201)</td><td class="setColor">TM</td><td class="setColor">Time of Last Calibration</td><td class="setColor"></td></tr>
    <tr><td>(0018,1202)</td><td>DT</td><td>DateTime of Last Calibration</td><td></td></tr>
    <tr><td class="setColor">(0018,1210)</td><td class="setColor">SH</td><td class="setColor">Convolution Kernel</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,1240)</td><td class="retired">IS</td><td class="retired">Upper/Lower Pixel Values</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,1242)</td><td class="setColor">IS</td><td class="setColor">Actual Frame Duration</td><td class="setColor"></td></tr>
    <tr><td>(0018,1243)</td><td>IS</td><td>Count Rate</td><td></td></tr>
    <tr><td class="setColor">(0018,1244)</td><td class="setColor">US</td><td class="setColor">Preferred Playback Sequencing</td><td class="setColor"></td></tr>
    <tr><td>(0018,1250)</td><td>SH</td><td>Receive Coil Name</td><td></td></tr>
    <tr><td class="setColor">(0018,1251)</td><td class="setColor">SH</td><td class="setColor">Transmit Coil Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,1260)</td><td>SH</td><td>Plate Type</td><td></td></tr>
    <tr><td class="setColor">(0018,1261)</td><td class="setColor">LO</td><td class="setColor">Phosphor Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,1271)</td><td>FD</td><td>Water Equivalent Diameter</td><td></td></tr>
    <tr><td class="setColor">(0018,1272)</td><td class="setColor">SQ</td><td class="setColor">Water Equivalent Diameter Calculation Method Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,1300)</td><td>DS</td><td>Scan Velocity</td><td></td></tr>
    <tr><td class="setColor">(0018,1301)</td><td class="setColor">CS</td><td class="setColor">Whole Body Technique</td><td class="setColor"></td></tr>
    <tr><td>(0018,1302)</td><td>IS</td><td>Scan Length</td><td></td></tr>
    <tr><td class="setColor">(0018,1310)</td><td class="setColor">US</td><td class="setColor">Acquisition Matrix</td><td class="setColor"></td></tr>
    <tr><td>(0018,1312)</td><td>CS</td><td>In-plane Phase Encoding Direction</td><td></td></tr>
    <tr><td class="setColor">(0018,1314)</td><td class="setColor">DS</td><td class="setColor">Flip Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,1315)</td><td>CS</td><td>Variable Flip Angle Flag</td><td></td></tr>
    <tr><td class="setColor">(0018,1316)</td><td class="setColor">DS</td><td class="setColor">SAR</td><td class="setColor"></td></tr>
    <tr><td>(0018,1318)</td><td>DS</td><td>dB/dt</td><td></td></tr>
    <tr><td class="setColor">(0018,1320)</td><td class="setColor">FL</td><td class="setColor">B1rms</td><td class="setColor"></td></tr>
    <tr><td>(0018,1400)</td><td>LO</td><td>Acquisition Device Processing Description</td><td></td></tr>
    <tr><td class="setColor">(0018,1401)</td><td class="setColor">LO</td><td class="setColor">Acquisition Device Processing Code</td><td class="setColor"></td></tr>
    <tr><td>(0018,1402)</td><td>CS</td><td>Cassette Orientation</td><td></td></tr>
    <tr><td class="setColor">(0018,1403)</td><td class="setColor">CS</td><td class="setColor">Cassette Size</td><td class="setColor"></td></tr>
    <tr><td>(0018,1404)</td><td>US</td><td>Exposures on Plate</td><td></td></tr>
    <tr><td class="setColor">(0018,1405)</td><td class="setColor">IS</td><td class="setColor">Relative X-Ray Exposure</td><td class="setColor"></td></tr>
    <tr><td>(0018,1411)</td><td>DS</td><td>Exposure Index</td><td></td></tr>
    <tr><td class="setColor">(0018,1412)</td><td class="setColor">DS</td><td class="setColor">Target Exposure Index</td><td class="setColor"></td></tr>
    <tr><td>(0018,1413)</td><td>DS</td><td>Deviation Index</td><td></td></tr>
    <tr><td class="setColor">(0018,1450)</td><td class="setColor">DS</td><td class="setColor">Column Angulation</td><td class="setColor"></td></tr>
    <tr><td>(0018,1460)</td><td>DS</td><td>Tomo Layer Height</td><td></td></tr>
    <tr><td class="setColor">(0018,1470)</td><td class="setColor">DS</td><td class="setColor">Tomo Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,1480)</td><td>DS</td><td>Tomo Time</td><td></td></tr>
    <tr><td class="setColor">(0018,1490)</td><td class="setColor">CS</td><td class="setColor">Tomo Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,1491)</td><td>CS</td><td>Tomo Class</td><td></td></tr>
    <tr><td class="setColor">(0018,1495)</td><td class="setColor">IS</td><td class="setColor">Number of Tomosynthesis Source Images</td><td class="setColor"></td></tr>
    <tr><td>(0018,1500)</td><td>CS</td><td>Positioner Motion</td><td></td></tr>
    <tr><td class="setColor">(0018,1508)</td><td class="setColor">CS</td><td class="setColor">Positioner Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,1510)</td><td>DS</td><td>Positioner Primary Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,1511)</td><td class="setColor">DS</td><td class="setColor">Positioner Secondary Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,1520)</td><td>DS</td><td>Positioner Primary Angle Increment</td><td></td></tr>
    <tr><td class="setColor">(0018,1521)</td><td class="setColor">DS</td><td class="setColor">Positioner Secondary Angle Increment</td><td class="setColor"></td></tr>
    <tr><td>(0018,1530)</td><td>DS</td><td>Detector Primary Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,1531)</td><td class="setColor">DS</td><td class="setColor">Detector Secondary Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,1600)</td><td>CS</td><td>Shutter Shape</td><td></td></tr>
    <tr><td class="setColor">(0018,1602)</td><td class="setColor">IS</td><td class="setColor">Shutter Left Vertical Edge</td><td class="setColor"></td></tr>
    <tr><td>(0018,1604)</td><td>IS</td><td>Shutter Right Vertical Edge</td><td></td></tr>
    <tr><td class="setColor">(0018,1606)</td><td class="setColor">IS</td><td class="setColor">Shutter Upper Horizontal Edge</td><td class="setColor"></td></tr>
    <tr><td>(0018,1608)</td><td>IS</td><td>Shutter Lower Horizontal Edge</td><td></td></tr>
    <tr><td class="setColor">(0018,1610)</td><td class="setColor">IS</td><td class="setColor">Center of Circular Shutter</td><td class="setColor"></td></tr>
    <tr><td>(0018,1612)</td><td>IS</td><td>Radius of Circular Shutter</td><td></td></tr>
    <tr><td class="setColor">(0018,1620)</td><td class="setColor">IS</td><td class="setColor">Vertices of the Polygonal Shutter</td><td class="setColor"></td></tr>
    <tr><td>(0018,1622)</td><td>US</td><td>Shutter Presentation Value</td><td></td></tr>
    <tr><td class="setColor">(0018,1623)</td><td class="setColor">US</td><td class="setColor">Shutter Overlay Group</td><td class="setColor"></td></tr>
    <tr><td>(0018,1624)</td><td>US</td><td>Shutter Presentation Color CIELab Value</td><td></td></tr>
    <tr><td class="setColor">(0018,1700)</td><td class="setColor">CS</td><td class="setColor">Collimator Shape</td><td class="setColor"></td></tr>
    <tr><td>(0018,1702)</td><td>IS</td><td>Collimator Left Vertical Edge</td><td></td></tr>
    <tr><td class="setColor">(0018,1704)</td><td class="setColor">IS</td><td class="setColor">Collimator Right Vertical Edge</td><td class="setColor"></td></tr>
    <tr><td>(0018,1706)</td><td>IS</td><td>Collimator Upper Horizontal Edge</td><td></td></tr>
    <tr><td class="setColor">(0018,1708)</td><td class="setColor">IS</td><td class="setColor">Collimator Lower Horizontal Edge</td><td class="setColor"></td></tr>
    <tr><td>(0018,1710)</td><td>IS</td><td>Center of Circular Collimator</td><td></td></tr>
    <tr><td class="setColor">(0018,1712)</td><td class="setColor">IS</td><td class="setColor">Radius of Circular Collimator</td><td class="setColor"></td></tr>
    <tr><td>(0018,1720)</td><td>IS</td><td>Vertices of the Polygonal Collimator</td><td></td></tr>
    <tr><td class="setColor">(0018,1800)</td><td class="setColor">CS</td><td class="setColor">Acquisition Time Synchronized</td><td class="setColor"></td></tr>
    <tr><td>(0018,1801)</td><td>SH</td><td>Time Source</td><td></td></tr>
    <tr><td class="setColor">(0018,1802)</td><td class="setColor">CS</td><td class="setColor">Time Distribution Protocol</td><td class="setColor"></td></tr>
    <tr><td>(0018,1803)</td><td>LO</td><td>NTP Source Address</td><td></td></tr>
    <tr><td class="setColor">(0018,2001)</td><td class="setColor">IS</td><td class="setColor">Page Number Vector</td><td class="setColor"></td></tr>
    <tr><td>(0018,2002)</td><td>SH</td><td>Frame Label Vector</td><td></td></tr>
    <tr><td class="setColor">(0018,2003)</td><td class="setColor">DS</td><td class="setColor">Frame Primary Angle Vector</td><td class="setColor"></td></tr>
    <tr><td>(0018,2004)</td><td>DS</td><td>Frame Secondary Angle Vector</td><td></td></tr>
    <tr><td class="setColor">(0018,2005)</td><td class="setColor">DS</td><td class="setColor">Slice Location Vector</td><td class="setColor"></td></tr>
    <tr><td>(0018,2006)</td><td>SH</td><td>Display Window Label Vector</td><td></td></tr>
    <tr><td class="setColor">(0018,2010)</td><td class="setColor">DS</td><td class="setColor">Nominal Scanned Pixel Spacing</td><td class="setColor"></td></tr>
    <tr><td>(0018,2020)</td><td>CS</td><td>Digitizing Device Transport Direction</td><td></td></tr>
    <tr><td class="setColor">(0018,2030)</td><td class="setColor">DS</td><td class="setColor">Rotation of Scanned Film</td><td class="setColor"></td></tr>
    <tr><td>(0018,2041)</td><td>SQ</td><td>Biopsy Target Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,2042)</td><td class="setColor">UI</td><td class="setColor">Target UID</td><td class="setColor"></td></tr>
    <tr><td>(0018,2043)</td><td>FL</td><td>Localizing Cursor Position</td><td></td></tr>
    <tr><td class="setColor">(0018,2044)</td><td class="setColor">FL</td><td class="setColor">Calculated Target Position</td><td class="setColor"></td></tr>
    <tr><td>(0018,2045)</td><td>SH</td><td>Target Label</td><td></td></tr>
    <tr><td class="setColor">(0018,2046)</td><td class="setColor">FL</td><td class="setColor">Displayed Z Value</td><td class="setColor"></td></tr>
    <tr><td>(0018,3100)</td><td>CS</td><td>IVUS Acquisition</td><td></td></tr>
    <tr><td class="setColor">(0018,3101)</td><td class="setColor">DS</td><td class="setColor">IVUS Pullback Rate</td><td class="setColor"></td></tr>
    <tr><td>(0018,3102)</td><td>DS</td><td>IVUS Gated Rate</td><td></td></tr>
    <tr><td class="setColor">(0018,3103)</td><td class="setColor">IS</td><td class="setColor">IVUS Pullback Start Frame Number</td><td class="setColor"></td></tr>
    <tr><td>(0018,3104)</td><td>IS</td><td>IVUS Pullback Stop Frame Number</td><td></td></tr>
    <tr><td class="setColor">(0018,3105)</td><td class="setColor">IS</td><td class="setColor">Lesion Number</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,4000)</td><td class="retired">LT</td><td class="retired">Acquisition Comments</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,5000)</td><td class="setColor">SH</td><td class="setColor">Output Power</td><td class="setColor"></td></tr>
    <tr><td>(0018,5010)</td><td>LO</td><td>Transducer Data</td><td></td></tr>
    <tr><td class="setColor">(0018,5012)</td><td class="setColor">DS</td><td class="setColor">Focus Depth</td><td class="setColor"></td></tr>
    <tr><td>(0018,5020)</td><td>LO</td><td>Processing Function</td><td></td></tr>
    <tr><td class="retired1">(0018,5021)</td><td class="retired1">LO</td><td class="retired1">Postprocessing Function</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,5022)</td><td>DS</td><td>Mechanical Index</td><td></td></tr>
    <tr><td class="setColor">(0018,5024)</td><td class="setColor">DS</td><td class="setColor">Bone Thermal Index</td><td class="setColor"></td></tr>
    <tr><td>(0018,5026)</td><td>DS</td><td>Cranial Thermal Index</td><td></td></tr>
    <tr><td class="setColor">(0018,5027)</td><td class="setColor">DS</td><td class="setColor">Soft Tissue Thermal Index</td><td class="setColor"></td></tr>
    <tr><td>(0018,5028)</td><td>DS</td><td>Soft Tissue-focus Thermal Index</td><td></td></tr>
    <tr><td class="setColor">(0018,5029)</td><td class="setColor">DS</td><td class="setColor">Soft Tissue-surface Thermal Index</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,5030)</td><td class="retired">DS</td><td class="retired">Dynamic Range</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0018,5040)</td><td class="retired1">DS</td><td class="retired1">Total Gain</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,5050)</td><td>IS</td><td>Depth of Scan Field</td><td></td></tr>
    <tr><td class="setColor">(0018,5100)</td><td class="setColor">CS</td><td class="setColor">Patient Position</td><td class="setColor"></td></tr>
    <tr><td>(0018,5101)</td><td>CS</td><td>View Position</td><td></td></tr>
    <tr><td class="setColor">(0018,5104)</td><td class="setColor">SQ</td><td class="setColor">Projection Eponymous Name Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,5210)</td><td class="retired">DS</td><td class="retired">Image Transformation Matrix</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0018,5212)</td><td class="retired1">DS</td><td class="retired1">Image Translation Vector</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,6000)</td><td>DS</td><td>Sensitivity</td><td></td></tr>
    <tr><td class="setColor">(0018,6011)</td><td class="setColor">SQ</td><td class="setColor">Sequence of Ultrasound Regions</td><td class="setColor"></td></tr>
    <tr><td>(0018,6012)</td><td>US</td><td>Region Spatial Format</td><td></td></tr>
    <tr><td class="setColor">(0018,6014)</td><td class="setColor">US</td><td class="setColor">Region Data Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,6016)</td><td>UL</td><td>Region Flags</td><td></td></tr>
    <tr><td class="setColor">(0018,6018)</td><td class="setColor">UL</td><td class="setColor">Region Location Min X0</td><td class="setColor"></td></tr>
    <tr><td>(0018,601A)</td><td>UL</td><td>Region Location Min Y0</td><td></td></tr>
    <tr><td class="setColor">(0018,601C)</td><td class="setColor">UL</td><td class="setColor">Region Location Max X1</td><td class="setColor"></td></tr>
    <tr><td>(0018,601E)</td><td>UL</td><td>Region Location Max Y1</td><td></td></tr>
    <tr><td class="setColor">(0018,6020)</td><td class="setColor">SL</td><td class="setColor">Reference Pixel X0</td><td class="setColor"></td></tr>
    <tr><td>(0018,6022)</td><td>SL</td><td>Reference Pixel Y0</td><td></td></tr>
    <tr><td class="setColor">(0018,6024)</td><td class="setColor">US</td><td class="setColor">Physical Units X Direction</td><td class="setColor"></td></tr>
    <tr><td>(0018,6026)</td><td>US</td><td>Physical Units Y Direction</td><td></td></tr>
    <tr><td class="setColor">(0018,6028)</td><td class="setColor">FD</td><td class="setColor">Reference Pixel Physical Value X</td><td class="setColor"></td></tr>
    <tr><td>(0018,602A)</td><td>FD</td><td>Reference Pixel Physical Value Y</td><td></td></tr>
    <tr><td class="setColor">(0018,602C)</td><td class="setColor">FD</td><td class="setColor">Physical Delta X</td><td class="setColor"></td></tr>
    <tr><td>(0018,602E)</td><td>FD</td><td>Physical Delta Y</td><td></td></tr>
    <tr><td class="setColor">(0018,6030)</td><td class="setColor">UL</td><td class="setColor">Transducer Frequency</td><td class="setColor"></td></tr>
    <tr><td>(0018,6031)</td><td>CS</td><td>Transducer Type</td><td></td></tr>
    <tr><td class="setColor">(0018,6032)</td><td class="setColor">UL</td><td class="setColor">Pulse Repetition Frequency</td><td class="setColor"></td></tr>
    <tr><td>(0018,6034)</td><td>FD</td><td>Doppler Correction Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,6036)</td><td class="setColor">FD</td><td class="setColor">Steering Angle</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,6038)</td><td class="retired">UL</td><td class="retired">Doppler Sample Volume X Position (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,6039)</td><td class="setColor">SL</td><td class="setColor">Doppler Sample Volume X Position</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,603A)</td><td class="retired">UL</td><td class="retired">Doppler Sample Volume Y Position (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,603B)</td><td class="setColor">SL</td><td class="setColor">Doppler Sample Volume Y Position</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,603C)</td><td class="retired">UL</td><td class="retired">TM-Line Position X0 (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,603D)</td><td class="setColor">SL</td><td class="setColor">TM-Line Position X0</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,603E)</td><td class="retired">UL</td><td class="retired">TM-Line Position Y0 (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,603F)</td><td class="setColor">SL</td><td class="setColor">TM-Line Position Y0</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,6040)</td><td class="retired">UL</td><td class="retired">TM-Line Position X1 (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,6041)</td><td class="setColor">SL</td><td class="setColor">TM-Line Position X1</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,6042)</td><td class="retired">UL</td><td class="retired">TM-Line Position Y1 (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,6043)</td><td class="setColor">SL</td><td class="setColor">TM-Line Position Y1</td><td class="setColor"></td></tr>
    <tr><td>(0018,6044)</td><td>US</td><td>Pixel Component Organization</td><td></td></tr>
    <tr><td class="setColor">(0018,6046)</td><td class="setColor">UL</td><td class="setColor">Pixel Component Mask</td><td class="setColor"></td></tr>
    <tr><td>(0018,6048)</td><td>UL</td><td>Pixel Component Range Start</td><td></td></tr>
    <tr><td class="setColor">(0018,604A)</td><td class="setColor">UL</td><td class="setColor">Pixel Component Range Stop</td><td class="setColor"></td></tr>
    <tr><td>(0018,604C)</td><td>US</td><td>Pixel Component Physical Units</td><td></td></tr>
    <tr><td class="setColor">(0018,604E)</td><td class="setColor">US</td><td class="setColor">Pixel Component Data Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,6050)</td><td>UL</td><td>Number of Table Break Points</td><td></td></tr>
    <tr><td class="setColor">(0018,6052)</td><td class="setColor">UL</td><td class="setColor">Table of X Break Points</td><td class="setColor"></td></tr>
    <tr><td>(0018,6054)</td><td>FD</td><td>Table of Y Break Points</td><td></td></tr>
    <tr><td class="setColor">(0018,6056)</td><td class="setColor">UL</td><td class="setColor">Number of Table Entries</td><td class="setColor"></td></tr>
    <tr><td>(0018,6058)</td><td>UL</td><td>Table of Pixel Values</td><td></td></tr>
    <tr><td class="setColor">(0018,605A)</td><td class="setColor">FL</td><td class="setColor">Table of Parameter Values</td><td class="setColor"></td></tr>
    <tr><td>(0018,6060)</td><td>FL</td><td>R Wave Time Vector</td><td></td></tr>
    <tr><td class="setColor">(0018,7000)</td><td class="setColor">CS</td><td class="setColor">Detector Conditions Nominal Flag</td><td class="setColor"></td></tr>
    <tr><td>(0018,7001)</td><td>DS</td><td>Detector Temperature</td><td></td></tr>
    <tr><td class="setColor">(0018,7004)</td><td class="setColor">CS</td><td class="setColor">Detector Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,7005)</td><td>CS</td><td>Detector Configuration</td><td></td></tr>
    <tr><td class="setColor">(0018,7006)</td><td class="setColor">LT</td><td class="setColor">Detector Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,7008)</td><td>LT</td><td>Detector Mode</td><td></td></tr>
    <tr><td class="setColor">(0018,700A)</td><td class="setColor">SH</td><td class="setColor">Detector ID</td><td class="setColor"></td></tr>
    <tr><td>(0018,700C)</td><td>DA</td><td>Date of Last Detector Calibration</td><td></td></tr>
    <tr><td class="setColor">(0018,700E)</td><td class="setColor">TM</td><td class="setColor">Time of Last Detector Calibration</td><td class="setColor"></td></tr>
    <tr><td>(0018,7010)</td><td>IS</td><td>Exposures on Detector Since Last Calibration</td><td></td></tr>
    <tr><td class="setColor">(0018,7011)</td><td class="setColor">IS</td><td class="setColor">Exposures on Detector Since Manufactured</td><td class="setColor"></td></tr>
    <tr><td>(0018,7012)</td><td>DS</td><td>Detector Time Since Last Exposure</td><td></td></tr>
    <tr><td class="setColor">(0018,7014)</td><td class="setColor">DS</td><td class="setColor">Detector Active Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,7016)</td><td>DS</td><td>Detector Activation Offset From Exposure</td><td></td></tr>
    <tr><td class="setColor">(0018,701A)</td><td class="setColor">DS</td><td class="setColor">Detector Binning</td><td class="setColor"></td></tr>
    <tr><td>(0018,7020)</td><td>DS</td><td>Detector Element Physical Size</td><td></td></tr>
    <tr><td class="setColor">(0018,7022)</td><td class="setColor">DS</td><td class="setColor">Detector Element Spacing</td><td class="setColor"></td></tr>
    <tr><td>(0018,7024)</td><td>CS</td><td>Detector Active Shape</td><td></td></tr>
    <tr><td class="setColor">(0018,7026)</td><td class="setColor">DS</td><td class="setColor">Detector Active Dimension(s)</td><td class="setColor"></td></tr>
    <tr><td>(0018,7028)</td><td>DS</td><td>Detector Active Origin</td><td></td></tr>
    <tr><td class="setColor">(0018,702A)</td><td class="setColor">LO</td><td class="setColor">Detector Manufacturer Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,702B)</td><td>LO</td><td>Detector Manufacturer's Model Name</td><td></td></tr>
    <tr><td class="setColor">(0018,7030)</td><td class="setColor">DS</td><td class="setColor">Field of View Origin</td><td class="setColor"></td></tr>
    <tr><td>(0018,7032)</td><td>DS</td><td>Field of View Rotation</td><td></td></tr>
    <tr><td class="setColor">(0018,7034)</td><td class="setColor">CS</td><td class="setColor">Field of View Horizontal Flip</td><td class="setColor"></td></tr>
    <tr><td>(0018,7036)</td><td>FL</td><td>Pixel Data Area Origin Relative To FOV</td><td></td></tr>
    <tr><td class="setColor">(0018,7038)</td><td class="setColor">FL</td><td class="setColor">Pixel Data Area Rotation Angle Relative To FOV</td><td class="setColor"></td></tr>
    <tr><td>(0018,7040)</td><td>LT</td><td>Grid Absorbing Material</td><td></td></tr>
    <tr><td class="setColor">(0018,7041)</td><td class="setColor">LT</td><td class="setColor">Grid Spacing Material</td><td class="setColor"></td></tr>
    <tr><td>(0018,7042)</td><td>DS</td><td>Grid Thickness</td><td></td></tr>
    <tr><td class="setColor">(0018,7044)</td><td class="setColor">DS</td><td class="setColor">Grid Pitch</td><td class="setColor"></td></tr>
    <tr><td>(0018,7046)</td><td>IS</td><td>Grid Aspect Ratio</td><td></td></tr>
    <tr><td class="setColor">(0018,7048)</td><td class="setColor">DS</td><td class="setColor">Grid Period</td><td class="setColor"></td></tr>
    <tr><td>(0018,704C)</td><td>DS</td><td>Grid Focal Distance</td><td></td></tr>
    <tr><td class="setColor">(0018,7050)</td><td class="setColor">CS</td><td class="setColor">Filter Material</td><td class="setColor"></td></tr>
    <tr><td>(0018,7052)</td><td>DS</td><td>Filter Thickness Minimum</td><td></td></tr>
    <tr><td class="setColor">(0018,7054)</td><td class="setColor">DS</td><td class="setColor">Filter Thickness Maximum</td><td class="setColor"></td></tr>
    <tr><td>(0018,7056)</td><td>FL</td><td>Filter Beam Path Length Minimum</td><td></td></tr>
    <tr><td class="setColor">(0018,7058)</td><td class="setColor">FL</td><td class="setColor">Filter Beam Path Length Maximum</td><td class="setColor"></td></tr>
    <tr><td>(0018,7060)</td><td>CS</td><td>Exposure Control Mode</td><td></td></tr>
    <tr><td class="setColor">(0018,7062)</td><td class="setColor">LT</td><td class="setColor">Exposure Control Mode Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,7064)</td><td>CS</td><td>Exposure Status</td><td></td></tr>
    <tr><td class="setColor">(0018,7065)</td><td class="setColor">DS</td><td class="setColor">Phototimer Setting</td><td class="setColor"></td></tr>
    <tr><td>(0018,8150)</td><td>DS</td><td>Exposure Time in µS</td><td></td></tr>
    <tr><td class="setColor">(0018,8151)</td><td class="setColor">DS</td><td class="setColor">X-Ray Tube Current in µA</td><td class="setColor"></td></tr>
    <tr><td>(0018,9004)</td><td>CS</td><td>Content Qualification</td><td></td></tr>
    <tr><td class="setColor">(0018,9005)</td><td class="setColor">SH</td><td class="setColor">Pulse Sequence Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,9006)</td><td>SQ</td><td>MR Imaging Modifier Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9008)</td><td class="setColor">CS</td><td class="setColor">Echo Pulse Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9009)</td><td>CS</td><td>Inversion Recovery</td><td></td></tr>
    <tr><td class="setColor">(0018,9010)</td><td class="setColor">CS</td><td class="setColor">Flow Compensation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9011)</td><td>CS</td><td>Multiple Spin Echo</td><td></td></tr>
    <tr><td class="setColor">(0018,9012)</td><td class="setColor">CS</td><td class="setColor">Multi-planar Excitation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9014)</td><td>CS</td><td>Phase Contrast</td><td></td></tr>
    <tr><td class="setColor">(0018,9015)</td><td class="setColor">CS</td><td class="setColor">Time of Flight Contrast</td><td class="setColor"></td></tr>
    <tr><td>(0018,9016)</td><td>CS</td><td>Spoiling</td><td></td></tr>
    <tr><td class="setColor">(0018,9017)</td><td class="setColor">CS</td><td class="setColor">Steady State Pulse Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9018)</td><td>CS</td><td>Echo Planar Pulse Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9019)</td><td class="setColor">FD</td><td class="setColor">Tag Angle First Axis</td><td class="setColor"></td></tr>
    <tr><td>(0018,9020)</td><td>CS</td><td>Magnetization Transfer</td><td></td></tr>
    <tr><td class="setColor">(0018,9021)</td><td class="setColor">CS</td><td class="setColor">T2 Preparation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9022)</td><td>CS</td><td>Blood Signal Nulling</td><td></td></tr>
    <tr><td class="setColor">(0018,9024)</td><td class="setColor">CS</td><td class="setColor">Saturation Recovery</td><td class="setColor"></td></tr>
    <tr><td>(0018,9025)</td><td>CS</td><td>Spectrally Selected Suppression</td><td></td></tr>
    <tr><td class="setColor">(0018,9026)</td><td class="setColor">CS</td><td class="setColor">Spectrally Selected Excitation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9027)</td><td>CS</td><td>Spatial Pre-saturation</td><td></td></tr>
    <tr><td class="setColor">(0018,9028)</td><td class="setColor">CS</td><td class="setColor">Tagging</td><td class="setColor"></td></tr>
    <tr><td>(0018,9029)</td><td>CS</td><td>Oversampling Phase</td><td></td></tr>
    <tr><td class="setColor">(0018,9030)</td><td class="setColor">FD</td><td class="setColor">Tag Spacing First Dimension</td><td class="setColor"></td></tr>
    <tr><td>(0018,9032)</td><td>CS</td><td>Geometry of k-Space Traversal</td><td></td></tr>
    <tr><td class="setColor">(0018,9033)</td><td class="setColor">CS</td><td class="setColor">Segmented k-Space Traversal</td><td class="setColor"></td></tr>
    <tr><td>(0018,9034)</td><td>CS</td><td>Rectilinear Phase Encode Reordering</td><td></td></tr>
    <tr><td class="setColor">(0018,9035)</td><td class="setColor">FD</td><td class="setColor">Tag Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0018,9036)</td><td>CS</td><td>Partial Fourier Direction</td><td></td></tr>
    <tr><td class="setColor">(0018,9037)</td><td class="setColor">CS</td><td class="setColor">Cardiac Synchronization Technique</td><td class="setColor"></td></tr>
    <tr><td>(0018,9041)</td><td>LO</td><td>Receive Coil Manufacturer Name</td><td></td></tr>
    <tr><td class="setColor">(0018,9042)</td><td class="setColor">SQ</td><td class="setColor">MR Receive Coil Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9043)</td><td>CS</td><td>Receive Coil Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9044)</td><td class="setColor">CS</td><td class="setColor">Quadrature Receive Coil</td><td class="setColor"></td></tr>
    <tr><td>(0018,9045)</td><td>SQ</td><td>Multi-Coil Definition Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9046)</td><td class="setColor">LO</td><td class="setColor">Multi-Coil Configuration</td><td class="setColor"></td></tr>
    <tr><td>(0018,9047)</td><td>SH</td><td>Multi-Coil Element Name</td><td></td></tr>
    <tr><td class="setColor">(0018,9048)</td><td class="setColor">CS</td><td class="setColor">Multi-Coil Element Used</td><td class="setColor"></td></tr>
    <tr><td>(0018,9049)</td><td>SQ</td><td>MR Transmit Coil Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9050)</td><td class="setColor">LO</td><td class="setColor">Transmit Coil Manufacturer Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,9051)</td><td>CS</td><td>Transmit Coil Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9052)</td><td class="setColor">FD</td><td class="setColor">Spectral Width</td><td class="setColor"></td></tr>
    <tr><td>(0018,9053)</td><td>FD</td><td>Chemical Shift Reference</td><td></td></tr>
    <tr><td class="setColor">(0018,9054)</td><td class="setColor">CS</td><td class="setColor">Volume Localization Technique</td><td class="setColor"></td></tr>
    <tr><td>(0018,9058)</td><td>US</td><td>MR Acquisition Frequency Encoding Steps</td><td></td></tr>
    <tr><td class="setColor">(0018,9059)</td><td class="setColor">CS</td><td class="setColor">De-coupling</td><td class="setColor"></td></tr>
    <tr><td>(0018,9060)</td><td>CS</td><td>De-coupled Nucleus</td><td></td></tr>
    <tr><td class="setColor">(0018,9061)</td><td class="setColor">FD</td><td class="setColor">De-coupling Frequency</td><td class="setColor"></td></tr>
    <tr><td>(0018,9062)</td><td>CS</td><td>De-coupling Method</td><td></td></tr>
    <tr><td class="setColor">(0018,9063)</td><td class="setColor">FD</td><td class="setColor">De-coupling Chemical Shift Reference</td><td class="setColor"></td></tr>
    <tr><td>(0018,9064)</td><td>CS</td><td>k-space Filtering</td><td></td></tr>
    <tr><td class="setColor">(0018,9065)</td><td class="setColor">CS</td><td class="setColor">Time Domain Filtering</td><td class="setColor"></td></tr>
    <tr><td>(0018,9066)</td><td>US</td><td>Number of Zero Fills</td><td></td></tr>
    <tr><td class="setColor">(0018,9067)</td><td class="setColor">CS</td><td class="setColor">Baseline Correction</td><td class="setColor"></td></tr>
    <tr><td>(0018,9069)</td><td>FD</td><td>Parallel Reduction Factor In-plane</td><td></td></tr>
    <tr><td class="setColor">(0018,9070)</td><td class="setColor">FD</td><td class="setColor">Cardiac R-R Interval Specified</td><td class="setColor"></td></tr>
    <tr><td>(0018,9073)</td><td>FD</td><td>Acquisition Duration</td><td></td></tr>
    <tr><td class="setColor">(0018,9074)</td><td class="setColor">DT</td><td class="setColor">Frame Acquisition DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0018,9075)</td><td>CS</td><td>Diffusion Directionality</td><td></td></tr>
    <tr><td class="setColor">(0018,9076)</td><td class="setColor">SQ</td><td class="setColor">Diffusion Gradient Direction Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9077)</td><td>CS</td><td>Parallel Acquisition</td><td></td></tr>
    <tr><td class="setColor">(0018,9078)</td><td class="setColor">CS</td><td class="setColor">Parallel Acquisition Technique</td><td class="setColor"></td></tr>
    <tr><td>(0018,9079)</td><td>FD</td><td>Inversion Times</td><td></td></tr>
    <tr><td class="setColor">(0018,9080)</td><td class="setColor">ST</td><td class="setColor">Metabolite Map Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,9081)</td><td>CS</td><td>Partial Fourier</td><td></td></tr>
    <tr><td class="setColor">(0018,9082)</td><td class="setColor">FD</td><td class="setColor">Effective Echo Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,9083)</td><td>SQ</td><td>Metabolite Map Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9084)</td><td class="setColor">SQ</td><td class="setColor">Chemical Shift Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9085)</td><td>CS</td><td>Cardiac Signal Source</td><td></td></tr>
    <tr><td class="setColor">(0018,9087)</td><td class="setColor">FD</td><td class="setColor">Diffusion b-value</td><td class="setColor"></td></tr>
    <tr><td>(0018,9089)</td><td>FD</td><td>Diffusion Gradient Orientation</td><td></td></tr>
    <tr><td class="setColor">(0018,9090)</td><td class="setColor">FD</td><td class="setColor">Velocity Encoding Direction</td><td class="setColor"></td></tr>
    <tr><td>(0018,9091)</td><td>FD</td><td>Velocity Encoding Minimum Value</td><td></td></tr>
    <tr><td class="setColor">(0018,9092)</td><td class="setColor">SQ</td><td class="setColor">Velocity Encoding Acquisition Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9093)</td><td>US</td><td>Number of k-Space Trajectories</td><td></td></tr>
    <tr><td class="setColor">(0018,9094)</td><td class="setColor">CS</td><td class="setColor">Coverage of k-Space</td><td class="setColor"></td></tr>
    <tr><td>(0018,9095)</td><td>UL</td><td>Spectroscopy Acquisition Phase Rows</td><td></td></tr>
    <tr><td class="retired1">(0018,9096)</td><td class="retired1">FD</td><td class="retired1">Parallel Reduction Factor In-plane (Retired)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,9098)</td><td>FD</td><td>Transmitter Frequency</td><td></td></tr>
    <tr><td class="setColor">(0018,9100)</td><td class="setColor">CS</td><td class="setColor">Resonant Nucleus</td><td class="setColor"></td></tr>
    <tr><td>(0018,9101)</td><td>CS</td><td>Frequency Correction</td><td></td></tr>
    <tr><td class="setColor">(0018,9103)</td><td class="setColor">SQ</td><td class="setColor">MR Spectroscopy FOV/Geometry Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9104)</td><td>FD</td><td>Slab Thickness</td><td></td></tr>
    <tr><td class="setColor">(0018,9105)</td><td class="setColor">FD</td><td class="setColor">Slab Orientation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9106)</td><td>FD</td><td>Mid Slab Position</td><td></td></tr>
    <tr><td class="setColor">(0018,9107)</td><td class="setColor">SQ</td><td class="setColor">MR Spatial Saturation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9112)</td><td>SQ</td><td>MR Timing and Related Parameters Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9114)</td><td class="setColor">SQ</td><td class="setColor">MR Echo Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9115)</td><td>SQ</td><td>MR Modifier Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9117)</td><td class="setColor">SQ</td><td class="setColor">MR Diffusion Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9118)</td><td>SQ</td><td>Cardiac Synchronization Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9119)</td><td class="setColor">SQ</td><td class="setColor">MR Averages Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9125)</td><td>SQ</td><td>MR FOV/Geometry Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9126)</td><td class="setColor">SQ</td><td class="setColor">Volume Localization Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9127)</td><td>UL</td><td>Spectroscopy Acquisition Data Columns</td><td></td></tr>
    <tr><td class="setColor">(0018,9147)</td><td class="setColor">CS</td><td class="setColor">Diffusion Anisotropy Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,9151)</td><td>DT</td><td>Frame Reference DateTime</td><td></td></tr>
    <tr><td class="setColor">(0018,9152)</td><td class="setColor">SQ</td><td class="setColor">MR Metabolite Map Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9155)</td><td>FD</td><td>Parallel Reduction Factor out-of-plane</td><td></td></tr>
    <tr><td class="setColor">(0018,9159)</td><td class="setColor">UL</td><td class="setColor">Spectroscopy Acquisition Out-of-plane Phase Steps</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,9166)</td><td class="retired">CS</td><td class="retired">Bulk Motion Status</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,9168)</td><td class="setColor">FD</td><td class="setColor">Parallel Reduction Factor Second In-plane</td><td class="setColor"></td></tr>
    <tr><td>(0018,9169)</td><td>CS</td><td>Cardiac Beat Rejection Technique</td><td></td></tr>
    <tr><td class="setColor">(0018,9170)</td><td class="setColor">CS</td><td class="setColor">Respiratory Motion Compensation Technique</td><td class="setColor"></td></tr>
    <tr><td>(0018,9171)</td><td>CS</td><td>Respiratory Signal Source</td><td></td></tr>
    <tr><td class="setColor">(0018,9172)</td><td class="setColor">CS</td><td class="setColor">Bulk Motion Compensation Technique</td><td class="setColor"></td></tr>
    <tr><td>(0018,9173)</td><td>CS</td><td>Bulk Motion Signal Source</td><td></td></tr>
    <tr><td class="setColor">(0018,9174)</td><td class="setColor">CS</td><td class="setColor">Applicable Safety Standard Agency</td><td class="setColor"></td></tr>
    <tr><td>(0018,9175)</td><td>LO</td><td>Applicable Safety Standard Description</td><td></td></tr>
    <tr><td class="setColor">(0018,9176)</td><td class="setColor">SQ</td><td class="setColor">Operating Mode Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9177)</td><td>CS</td><td>Operating Mode Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9178)</td><td class="setColor">CS</td><td class="setColor">Operating Mode</td><td class="setColor"></td></tr>
    <tr><td>(0018,9179)</td><td>CS</td><td>Specific Absorption Rate Definition</td><td></td></tr>
    <tr><td class="setColor">(0018,9180)</td><td class="setColor">CS</td><td class="setColor">Gradient Output Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,9181)</td><td>FD</td><td>Specific Absorption Rate Value</td><td></td></tr>
    <tr><td class="setColor">(0018,9182)</td><td class="setColor">FD</td><td class="setColor">Gradient Output</td><td class="setColor"></td></tr>
    <tr><td>(0018,9183)</td><td>CS</td><td>Flow Compensation Direction</td><td></td></tr>
    <tr><td class="setColor">(0018,9184)</td><td class="setColor">FD</td><td class="setColor">Tagging Delay</td><td class="setColor"></td></tr>
    <tr><td>(0018,9185)</td><td>ST</td><td>Respiratory Motion Compensation Technique Description</td><td></td></tr>
    <tr><td class="setColor">(0018,9186)</td><td class="setColor">SH</td><td class="setColor">Respiratory Signal Source ID</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,9195)</td><td class="retired">FD</td><td class="retired">Chemical Shift Minimum Integration Limit in Hz</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0018,9196)</td><td class="retired1">FD</td><td class="retired1">Chemical Shift Maximum Integration Limit in Hz</td><td class="retired1">Retired</td></tr>
    <tr><td>(0018,9197)</td><td>SQ</td><td>MR Velocity Encoding Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9198)</td><td class="setColor">CS</td><td class="setColor">First Order Phase Correction</td><td class="setColor"></td></tr>
    <tr><td>(0018,9199)</td><td>CS</td><td>Water Referenced Phase Correction</td><td></td></tr>
    <tr><td class="setColor">(0018,9200)</td><td class="setColor">CS</td><td class="setColor">MR Spectroscopy Acquisition Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,9214)</td><td>CS</td><td>Respiratory Cycle Position</td><td></td></tr>
    <tr><td class="setColor">(0018,9217)</td><td class="setColor">FD</td><td class="setColor">Velocity Encoding Maximum Value</td><td class="setColor"></td></tr>
    <tr><td>(0018,9218)</td><td>FD</td><td>Tag Spacing Second Dimension</td><td></td></tr>
    <tr><td class="setColor">(0018,9219)</td><td class="setColor">SS</td><td class="setColor">Tag Angle Second Axis</td><td class="setColor"></td></tr>
    <tr><td>(0018,9220)</td><td>FD</td><td>Frame Acquisition Duration</td><td></td></tr>
    <tr><td class="setColor">(0018,9226)</td><td class="setColor">SQ</td><td class="setColor">MR Image Frame Type Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9227)</td><td>SQ</td><td>MR Spectroscopy Frame Type Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9231)</td><td class="setColor">US</td><td class="setColor">MR Acquisition Phase Encoding Steps in-plane</td><td class="setColor"></td></tr>
    <tr><td>(0018,9232)</td><td>US</td><td>MR Acquisition Phase Encoding Steps out-of-plane</td><td></td></tr>
    <tr><td class="setColor">(0018,9234)</td><td class="setColor">UL</td><td class="setColor">Spectroscopy Acquisition Phase Columns</td><td class="setColor"></td></tr>
    <tr><td>(0018,9236)</td><td>CS</td><td>Cardiac Cycle Position</td><td></td></tr>
    <tr><td class="setColor">(0018,9239)</td><td class="setColor">SQ</td><td class="setColor">Specific Absorption Rate Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9240)</td><td>US</td><td>RF Echo Train Length</td><td></td></tr>
    <tr><td class="setColor">(0018,9241)</td><td class="setColor">US</td><td class="setColor">Gradient Echo Train Length</td><td class="setColor"></td></tr>
    <tr><td>(0018,9250)</td><td>CS</td><td>Arterial Spin Labeling Contrast</td><td></td></tr>
    <tr><td class="setColor">(0018,9251)</td><td class="setColor">SQ</td><td class="setColor">MR Arterial Spin Labeling Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9252)</td><td>LO</td><td>ASL Technique Description</td><td></td></tr>
    <tr><td class="setColor">(0018,9253)</td><td class="setColor">US</td><td class="setColor">ASL Slab Number</td><td class="setColor"></td></tr>
    <tr><td>(0018,9254)</td><td>FD</td><td>ASL Slab Thickness</td><td></td></tr>
    <tr><td class="setColor">(0018,9255)</td><td class="setColor">FD</td><td class="setColor">ASL Slab Orientation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9256)</td><td>FD</td><td>ASL Mid Slab Position</td><td></td></tr>
    <tr><td class="setColor">(0018,9257)</td><td class="setColor">CS</td><td class="setColor">ASL Context</td><td class="setColor"></td></tr>
    <tr><td>(0018,9258)</td><td>UL</td><td>ASL Pulse Train Duration</td><td></td></tr>
    <tr><td class="setColor">(0018,9259)</td><td class="setColor">CS</td><td class="setColor">ASL Crusher Flag</td><td class="setColor"></td></tr>
    <tr><td>(0018,925A)</td><td>FD</td><td>ASL Crusher Flow Limit</td><td></td></tr>
    <tr><td class="setColor">(0018,925B)</td><td class="setColor">LO</td><td class="setColor">ASL Crusher Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,925C)</td><td>CS</td><td>ASL Bolus Cut-off Flag</td><td></td></tr>
    <tr><td class="setColor">(0018,925D)</td><td class="setColor">SQ</td><td class="setColor">ASL Bolus Cut-off Timing Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,925E)</td><td>LO</td><td>ASL Bolus Cut-off Technique</td><td></td></tr>
    <tr><td class="setColor">(0018,925F)</td><td class="setColor">UL</td><td class="setColor">ASL Bolus Cut-off Delay Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,9260)</td><td>SQ</td><td>ASL Slab Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9295)</td><td class="setColor">FD</td><td class="setColor">Chemical Shift Minimum Integration Limit in ppm</td><td class="setColor"></td></tr>
    <tr><td>(0018,9296)</td><td>FD</td><td>Chemical Shift Maximum Integration Limit in ppm</td><td></td></tr>
    <tr><td class="setColor">(0018,9297)</td><td class="setColor">CS</td><td class="setColor">Water Reference Acquisition</td><td class="setColor"></td></tr>
    <tr><td>(0018,9298)</td><td>IS</td><td>Echo Peak Position</td><td></td></tr>
    <tr><td class="setColor">(0018,9301)</td><td class="setColor">SQ</td><td class="setColor">CT Acquisition Type Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9302)</td><td>CS</td><td>Acquisition Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9303)</td><td class="setColor">FD</td><td class="setColor">Tube Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9304)</td><td>SQ</td><td>CT Acquisition Details Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9305)</td><td class="setColor">FD</td><td class="setColor">Revolution Time</td><td class="setColor"></td></tr>
    <tr><td>(0018,9306)</td><td>FD</td><td>Single Collimation Width</td><td></td></tr>
    <tr><td class="setColor">(0018,9307)</td><td class="setColor">FD</td><td class="setColor">Total Collimation Width</td><td class="setColor"></td></tr>
    <tr><td>(0018,9308)</td><td>SQ</td><td>CT Table Dynamics Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9309)</td><td class="setColor">FD</td><td class="setColor">Table Speed</td><td class="setColor"></td></tr>
    <tr><td>(0018,9310)</td><td>FD</td><td>Table Feed per Rotation</td><td></td></tr>
    <tr><td class="setColor">(0018,9311)</td><td class="setColor">FD</td><td class="setColor">Spiral Pitch Factor</td><td class="setColor"></td></tr>
    <tr><td>(0018,9312)</td><td>SQ</td><td>CT Geometry Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9313)</td><td class="setColor">FD</td><td class="setColor">Data Collection Center (Patient)</td><td class="setColor"></td></tr>
    <tr><td>(0018,9314)</td><td>SQ</td><td>CT Reconstruction Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9315)</td><td class="setColor">CS</td><td class="setColor">Reconstruction Algorithm</td><td class="setColor"></td></tr>
    <tr><td>(0018,9316)</td><td>CS</td><td>Convolution Kernel Group</td><td></td></tr>
    <tr><td class="setColor">(0018,9317)</td><td class="setColor">FD</td><td class="setColor">Reconstruction Field of View</td><td class="setColor"></td></tr>
    <tr><td>(0018,9318)</td><td>FD</td><td>Reconstruction Target Center (Patient)</td><td></td></tr>
    <tr><td class="setColor">(0018,9319)</td><td class="setColor">FD</td><td class="setColor">Reconstruction Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9320)</td><td>SH</td><td>Image Filter</td><td></td></tr>
    <tr><td class="setColor">(0018,9321)</td><td class="setColor">SQ</td><td class="setColor">CT Exposure Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9322)</td><td>FD</td><td>Reconstruction Pixel Spacing</td><td></td></tr>
    <tr><td class="setColor">(0018,9323)</td><td class="setColor">CS</td><td class="setColor">Exposure Modulation Type</td><td class="setColor"></td></tr>
    <tr><td>(0018,9324)</td><td>FD</td><td>Estimated Dose Saving</td><td></td></tr>
    <tr><td class="setColor">(0018,9325)</td><td class="setColor">SQ</td><td class="setColor">CT X-Ray Details Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9326)</td><td>SQ</td><td>CT Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9327)</td><td class="setColor">FD</td><td class="setColor">Table Position</td><td class="setColor"></td></tr>
    <tr><td>(0018,9328)</td><td>FD</td><td>Exposure Time in ms</td><td></td></tr>
    <tr><td class="setColor">(0018,9329)</td><td class="setColor">SQ</td><td class="setColor">CT Image Frame Type Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9330)</td><td>FD</td><td>X-Ray Tube Current in mA</td><td></td></tr>
    <tr><td class="setColor">(0018,9332)</td><td class="setColor">FD</td><td class="setColor">Exposure in mAs</td><td class="setColor"></td></tr>
    <tr><td>(0018,9333)</td><td>CS</td><td>Constant Volume Flag</td><td></td></tr>
    <tr><td class="setColor">(0018,9334)</td><td class="setColor">CS</td><td class="setColor">Fluoroscopy Flag</td><td class="setColor"></td></tr>
    <tr><td>(0018,9335)</td><td>FD</td><td>Distance Source to Data Collection Center</td><td></td></tr>
    <tr><td class="setColor">(0018,9337)</td><td class="setColor">US</td><td class="setColor">Contrast/Bolus Agent Number</td><td class="setColor"></td></tr>
    <tr><td>(0018,9338)</td><td>SQ</td><td>Contrast/Bolus Ingredient Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9340)</td><td class="setColor">SQ</td><td class="setColor">Contrast Administration Profile Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9341)</td><td>SQ</td><td>Contrast/Bolus Usage Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9342)</td><td class="setColor">CS</td><td class="setColor">Contrast/Bolus Agent Administered</td><td class="setColor"></td></tr>
    <tr><td>(0018,9343)</td><td>CS</td><td>Contrast/Bolus Agent Detected</td><td></td></tr>
    <tr><td class="setColor">(0018,9344)</td><td class="setColor">CS</td><td class="setColor">Contrast/Bolus Agent Phase</td><td class="setColor"></td></tr>
    <tr><td>(0018,9345)</td><td>FD</td><td>CTDIvol</td><td></td></tr>
    <tr><td class="setColor">(0018,9346)</td><td class="setColor">SQ</td><td class="setColor">CTDI Phantom Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9351)</td><td>FL</td><td>Calcium Scoring Mass Factor Patient</td><td></td></tr>
    <tr><td class="setColor">(0018,9352)</td><td class="setColor">FL</td><td class="setColor">Calcium Scoring Mass Factor Device</td><td class="setColor"></td></tr>
    <tr><td>(0018,9353)</td><td>FL</td><td>Energy Weighting Factor</td><td></td></tr>
    <tr><td class="setColor">(0018,9360)</td><td class="setColor">SQ</td><td class="setColor">CT Additional X-Ray Source Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9401)</td><td>SQ</td><td>Projection Pixel Calibration Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9402)</td><td class="setColor">FL</td><td class="setColor">Distance Source to Isocenter</td><td class="setColor"></td></tr>
    <tr><td>(0018,9403)</td><td>FL</td><td>Distance Object to Table Top</td><td></td></tr>
    <tr><td class="setColor">(0018,9404)</td><td class="setColor">FL</td><td class="setColor">Object Pixel Spacing in Center of Beam</td><td class="setColor"></td></tr>
    <tr><td>(0018,9405)</td><td>SQ</td><td>Positioner Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9406)</td><td class="setColor">SQ</td><td class="setColor">Table Position Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9407)</td><td>SQ</td><td>Collimator Shape Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9410)</td><td class="setColor">CS</td><td class="setColor">Planes in Acquisition</td><td class="setColor"></td></tr>
    <tr><td>(0018,9412)</td><td>SQ</td><td>XA/XRF Frame Characteristics Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9417)</td><td class="setColor">SQ</td><td class="setColor">Frame Acquisition Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9420)</td><td>CS</td><td>X-Ray Receptor Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9423)</td><td class="setColor">LO</td><td class="setColor">Acquisition Protocol Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,9424)</td><td>LT</td><td>Acquisition Protocol Description</td><td></td></tr>
    <tr><td class="setColor">(0018,9425)</td><td class="setColor">CS</td><td class="setColor">Contrast/Bolus Ingredient Opaque</td><td class="setColor"></td></tr>
    <tr><td>(0018,9426)</td><td>FL</td><td>Distance Receptor Plane to Detector Housing</td><td></td></tr>
    <tr><td class="setColor">(0018,9427)</td><td class="setColor">CS</td><td class="setColor">Intensifier Active Shape</td><td class="setColor"></td></tr>
    <tr><td>(0018,9428)</td><td>FL</td><td>Intensifier Active Dimension(s)</td><td></td></tr>
    <tr><td class="setColor">(0018,9429)</td><td class="setColor">FL</td><td class="setColor">Physical Detector Size</td><td class="setColor"></td></tr>
    <tr><td>(0018,9430)</td><td>FL</td><td>Position of Isocenter Projection</td><td></td></tr>
    <tr><td class="setColor">(0018,9432)</td><td class="setColor">SQ</td><td class="setColor">Field of View Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9433)</td><td>LO</td><td>Field of View Description</td><td></td></tr>
    <tr><td class="setColor">(0018,9434)</td><td class="setColor">SQ</td><td class="setColor">Exposure Control Sensing Regions Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9435)</td><td>CS</td><td>Exposure Control Sensing Region Shape</td><td></td></tr>
    <tr><td class="setColor">(0018,9436)</td><td class="setColor">SS</td><td class="setColor">Exposure Control Sensing Region Left Vertical Edge</td><td class="setColor"></td></tr>
    <tr><td>(0018,9437)</td><td>SS</td><td>Exposure Control Sensing Region Right Vertical Edge</td><td></td></tr>
    <tr><td class="setColor">(0018,9438)</td><td class="setColor">SS</td><td class="setColor">Exposure Control Sensing Region Upper Horizontal Edge</td><td class="setColor"></td></tr>
    <tr><td>(0018,9439)</td><td>SS</td><td>Exposure Control Sensing Region Lower Horizontal Edge</td><td></td></tr>
    <tr><td class="setColor">(0018,9440)</td><td class="setColor">SS</td><td class="setColor">Center of Circular Exposure Control Sensing Region</td><td class="setColor"></td></tr>
    <tr><td>(0018,9441)</td><td>US</td><td>Radius of Circular Exposure Control Sensing Region</td><td></td></tr>
    <tr><td class="setColor">(0018,9442)</td><td class="setColor">SS</td><td class="setColor">Vertices of the Polygonal Exposure Control Sensing Region</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0018,9445)</td><td class="retired"></td><td class="retired"></td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0018,9447)</td><td class="setColor">FL</td><td class="setColor">Column Angulation (Patient)</td><td class="setColor"></td></tr>
    <tr><td>(0018,9449)</td><td>FL</td><td>Beam Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9451)</td><td class="setColor">SQ</td><td class="setColor">Frame Detector Parameters Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9452)</td><td>FL</td><td>Calculated Anatomy Thickness</td><td></td></tr>
    <tr><td class="setColor">(0018,9455)</td><td class="setColor">SQ</td><td class="setColor">Calibration Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9456)</td><td>SQ</td><td>Object Thickness Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9457)</td><td class="setColor">CS</td><td class="setColor">Plane Identification</td><td class="setColor"></td></tr>
    <tr><td>(0018,9461)</td><td>FL</td><td>Field of View Dimension(s) in Float</td><td></td></tr>
    <tr><td class="setColor">(0018,9462)</td><td class="setColor">SQ</td><td class="setColor">Isocenter Reference System Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9463)</td><td>FL</td><td>Positioner Isocenter Primary Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9464)</td><td class="setColor">FL</td><td class="setColor">Positioner Isocenter Secondary Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9465)</td><td>FL</td><td>Positioner Isocenter Detector Rotation Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9466)</td><td class="setColor">FL</td><td class="setColor">Table X Position to Isocenter</td><td class="setColor"></td></tr>
    <tr><td>(0018,9467)</td><td>FL</td><td>Table Y Position to Isocenter</td><td></td></tr>
    <tr><td class="setColor">(0018,9468)</td><td class="setColor">FL</td><td class="setColor">Table Z Position to Isocenter</td><td class="setColor"></td></tr>
    <tr><td>(0018,9469)</td><td>FL</td><td>Table Horizontal Rotation Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9470)</td><td class="setColor">FL</td><td class="setColor">Table Head Tilt Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9471)</td><td>FL</td><td>Table Cradle Tilt Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9472)</td><td class="setColor">SQ</td><td class="setColor">Frame Display Shutter Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9473)</td><td>FL</td><td>Acquired Image Area Dose Product</td><td></td></tr>
    <tr><td class="setColor">(0018,9474)</td><td class="setColor">CS</td><td class="setColor">C-arm Positioner Tabletop Relationship</td><td class="setColor"></td></tr>
    <tr><td>(0018,9476)</td><td>SQ</td><td>X-Ray Geometry Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9477)</td><td class="setColor">SQ</td><td class="setColor">Irradiation Event Identification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9504)</td><td>SQ</td><td>X-Ray 3D Frame Type Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9506)</td><td class="setColor">SQ</td><td class="setColor">Contributing Sources Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9507)</td><td>SQ</td><td>X-Ray 3D Acquisition Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9508)</td><td class="setColor">FL</td><td class="setColor">Primary Positioner Scan Arc</td><td class="setColor"></td></tr>
    <tr><td>(0018,9509)</td><td>FL</td><td>Secondary Positioner Scan Arc</td><td></td></tr>
    <tr><td class="setColor">(0018,9510)</td><td class="setColor">FL</td><td class="setColor">Primary Positioner Scan Start Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9511)</td><td>FL</td><td>Secondary Positioner Scan Start Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9514)</td><td class="setColor">FL</td><td class="setColor">Primary Positioner Increment</td><td class="setColor"></td></tr>
    <tr><td>(0018,9515)</td><td>FL</td><td>Secondary Positioner Increment</td><td></td></tr>
    <tr><td class="setColor">(0018,9516)</td><td class="setColor">DT</td><td class="setColor">Start Acquisition DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0018,9517)</td><td>DT</td><td>End Acquisition DateTime</td><td></td></tr>
    <tr><td class="setColor">(0018,9518)</td><td class="setColor">SS</td><td class="setColor">Primary Positioner Increment Sign</td><td class="setColor"></td></tr>
    <tr><td>(0018,9519)</td><td>SS</td><td>Secondary Positioner Increment Sign</td><td></td></tr>
    <tr><td class="setColor">(0018,9524)</td><td class="setColor">LO</td><td class="setColor">Application Name</td><td class="setColor"></td></tr>
    <tr><td>(0018,9525)</td><td>LO</td><td>Application Version</td><td></td></tr>
    <tr><td class="setColor">(0018,9526)</td><td class="setColor">LO</td><td class="setColor">Application Manufacturer</td><td class="setColor"></td></tr>
    <tr><td>(0018,9527)</td><td>CS</td><td>Algorithm Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9528)</td><td class="setColor">LO</td><td class="setColor">Algorithm Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,9530)</td><td>SQ</td><td>X-Ray 3D Reconstruction Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9531)</td><td class="setColor">LO</td><td class="setColor">Reconstruction Description</td><td class="setColor"></td></tr>
    <tr><td>(0018,9538)</td><td>SQ</td><td>Per Projection Acquisition Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9541)</td><td class="setColor">SQ</td><td class="setColor">Detector Position Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9542)</td><td>SQ</td><td>X-Ray Acquisition Dose Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9543)</td><td class="setColor">FD</td><td class="setColor">X-Ray Source Isocenter Primary Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9544)</td><td>FD</td><td>X-Ray Source Isocenter Secondary Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9545)</td><td class="setColor">FD</td><td class="setColor">Breast Support Isocenter Primary Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9546)</td><td>FD</td><td>Breast Support Isocenter Secondary Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9547)</td><td class="setColor">FD</td><td class="setColor">Breast Support X Position to Isocenter</td><td class="setColor"></td></tr>
    <tr><td>(0018,9548)</td><td>FD</td><td>Breast Support Y Position to Isocenter</td><td></td></tr>
    <tr><td class="setColor">(0018,9549)</td><td class="setColor">FD</td><td class="setColor">Breast Support Z Position to Isocenter</td><td class="setColor"></td></tr>
    <tr><td>(0018,9550)</td><td>FD</td><td>Detector Isocenter Primary Angle</td><td></td></tr>
    <tr><td class="setColor">(0018,9551)</td><td class="setColor">FD</td><td class="setColor">Detector Isocenter Secondary Angle</td><td class="setColor"></td></tr>
    <tr><td>(0018,9552)</td><td>FD</td><td>Detector X Position to Isocenter</td><td></td></tr>
    <tr><td class="setColor">(0018,9553)</td><td class="setColor">FD</td><td class="setColor">Detector Y Position to Isocenter</td><td class="setColor"></td></tr>
    <tr><td>(0018,9554)</td><td>FD</td><td>Detector Z Position to Isocenter</td><td></td></tr>
    <tr><td class="setColor">(0018,9555)</td><td class="setColor">SQ</td><td class="setColor">X-Ray Grid Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9556)</td><td>SQ</td><td>X-Ray Filter Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9557)</td><td class="setColor">FD</td><td class="setColor">Detector Active Area TLHC Position</td><td class="setColor"></td></tr>
    <tr><td>(0018,9558)</td><td>FD</td><td>Detector Active Area Orientation</td><td></td></tr>
    <tr><td class="setColor">(0018,9559)</td><td class="setColor">CS</td><td class="setColor">Positioner Primary Angle Direction</td><td class="setColor"></td></tr>
    <tr><td>(0018,9601)</td><td>SQ</td><td>Diffusion b-matrix Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9602)</td><td class="setColor">FD</td><td class="setColor">Diffusion b-value XX</td><td class="setColor"></td></tr>
    <tr><td>(0018,9603)</td><td>FD</td><td>Diffusion b-value XY</td><td></td></tr>
    <tr><td class="setColor">(0018,9604)</td><td class="setColor">FD</td><td class="setColor">Diffusion b-value XZ</td><td class="setColor"></td></tr>
    <tr><td>(0018,9605)</td><td>FD</td><td>Diffusion b-value YY</td><td></td></tr>
    <tr><td class="setColor">(0018,9606)</td><td class="setColor">FD</td><td class="setColor">Diffusion b-value YZ</td><td class="setColor"></td></tr>
    <tr><td>(0018,9607)</td><td>FD</td><td>Diffusion b-value ZZ</td><td></td></tr>
    <tr><td class="setColor">(0018,9621)</td><td class="setColor">SQ</td><td class="setColor">Functional MR Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9622)</td><td>CS</td><td>Functional Settling Phase Frames Present</td><td></td></tr>
    <tr><td class="setColor">(0018,9623)</td><td class="setColor">DT</td><td class="setColor">Functional Sync Pulse</td><td class="setColor"></td></tr>
    <tr><td>(0018,9624)</td><td>CS</td><td>Settling Phase Frame</td><td></td></tr>
    <tr><td class="setColor">(0018,9701)</td><td class="setColor">DT</td><td class="setColor">Decay Correction DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0018,9715)</td><td>FD</td><td>Start Density Threshold</td><td></td></tr>
    <tr><td class="setColor">(0018,9716)</td><td class="setColor">FD</td><td class="setColor">Start Relative Density Difference Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0018,9717)</td><td>FD</td><td>Start Cardiac Trigger Count Threshold</td><td></td></tr>
    <tr><td class="setColor">(0018,9718)</td><td class="setColor">FD</td><td class="setColor">Start Respiratory Trigger Count Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0018,9719)</td><td>FD</td><td>Termination Counts Threshold</td><td></td></tr>
    <tr><td class="setColor">(0018,9720)</td><td class="setColor">FD</td><td class="setColor">Termination Density Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0018,9721)</td><td>FD</td><td>Termination Relative Density Threshold</td><td></td></tr>
    <tr><td class="setColor">(0018,9722)</td><td class="setColor">FD</td><td class="setColor">Termination Time Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0018,9723)</td><td>FD</td><td>Termination Cardiac Trigger Count Threshold</td><td></td></tr>
    <tr><td class="setColor">(0018,9724)</td><td class="setColor">FD</td><td class="setColor">Termination Respiratory Trigger Count Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0018,9725)</td><td>CS</td><td>Detector Geometry</td><td></td></tr>
    <tr><td class="setColor">(0018,9726)</td><td class="setColor">FD</td><td class="setColor">Transverse Detector Separation</td><td class="setColor"></td></tr>
    <tr><td>(0018,9727)</td><td>FD</td><td>Axial Detector Dimension</td><td></td></tr>
    <tr><td class="setColor">(0018,9729)</td><td class="setColor">US</td><td class="setColor">Radiopharmaceutical Agent Number</td><td class="setColor"></td></tr>
    <tr><td>(0018,9732)</td><td>SQ</td><td>PET Frame Acquisition Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9733)</td><td class="setColor">SQ</td><td class="setColor">PET Detector Motion Details Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9734)</td><td>SQ</td><td>PET Table Dynamics Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9735)</td><td class="setColor">SQ</td><td class="setColor">PET Position Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9736)</td><td>SQ</td><td>PET Frame Correction Factors Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9737)</td><td class="setColor">SQ</td><td class="setColor">Radiopharmaceutical Usage Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9738)</td><td>CS</td><td>Attenuation Correction Source</td><td></td></tr>
    <tr><td class="setColor">(0018,9739)</td><td class="setColor">US</td><td class="setColor">Number of Iterations</td><td class="setColor"></td></tr>
    <tr><td>(0018,9740)</td><td>US</td><td>Number of Subsets</td><td></td></tr>
    <tr><td class="setColor">(0018,9749)</td><td class="setColor">SQ</td><td class="setColor">PET Reconstruction Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9751)</td><td>SQ</td><td>PET Frame Type Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9755)</td><td class="setColor">CS</td><td class="setColor">Time of Flight Information Used</td><td class="setColor"></td></tr>
    <tr><td>(0018,9756)</td><td>CS</td><td>Reconstruction Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9758)</td><td class="setColor">CS</td><td class="setColor">Decay Corrected</td><td class="setColor"></td></tr>
    <tr><td>(0018,9759)</td><td>CS</td><td>Attenuation Corrected</td><td></td></tr>
    <tr><td class="setColor">(0018,9760)</td><td class="setColor">CS</td><td class="setColor">Scatter Corrected</td><td class="setColor"></td></tr>
    <tr><td>(0018,9761)</td><td>CS</td><td>Dead Time Corrected</td><td></td></tr>
    <tr><td class="setColor">(0018,9762)</td><td class="setColor">CS</td><td class="setColor">Gantry Motion Corrected</td><td class="setColor"></td></tr>
    <tr><td>(0018,9763)</td><td>CS</td><td>Patient Motion Corrected</td><td></td></tr>
    <tr><td class="setColor">(0018,9764)</td><td class="setColor">CS</td><td class="setColor">Count Loss Normalization Corrected</td><td class="setColor"></td></tr>
    <tr><td>(0018,9765)</td><td>CS</td><td>Randoms Corrected</td><td></td></tr>
    <tr><td class="setColor">(0018,9766)</td><td class="setColor">CS</td><td class="setColor">Non-uniform Radial Sampling Corrected</td><td class="setColor"></td></tr>
    <tr><td>(0018,9767)</td><td>CS</td><td>Sensitivity Calibrated</td><td></td></tr>
    <tr><td class="setColor">(0018,9768)</td><td class="setColor">CS</td><td class="setColor">Detector Normalization Correction</td><td class="setColor"></td></tr>
    <tr><td>(0018,9769)</td><td>CS</td><td>Iterative Reconstruction Method</td><td></td></tr>
    <tr><td class="setColor">(0018,9770)</td><td class="setColor">CS</td><td class="setColor">Attenuation Correction Temporal Relationship</td><td class="setColor"></td></tr>
    <tr><td>(0018,9771)</td><td>SQ</td><td>Patient Physiological State Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9772)</td><td class="setColor">SQ</td><td class="setColor">Patient Physiological State Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9801)</td><td>FD</td><td>Depth(s) of Focus</td><td></td></tr>
    <tr><td class="setColor">(0018,9803)</td><td class="setColor">SQ</td><td class="setColor">Excluded Intervals Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9804)</td><td>DT</td><td>Exclusion Start DateTime</td><td></td></tr>
    <tr><td class="setColor">(0018,9805)</td><td class="setColor">FD</td><td class="setColor">Exclusion Duration</td><td class="setColor"></td></tr>
    <tr><td>(0018,9806)</td><td>SQ</td><td>US Image Description Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9807)</td><td class="setColor">SQ</td><td class="setColor">Image Data Type Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,9808)</td><td>CS</td><td>Data Type</td><td></td></tr>
    <tr><td class="setColor">(0018,9809)</td><td class="setColor">SQ</td><td class="setColor">Transducer Scan Pattern Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,980B)</td><td>CS</td><td>Aliased Data Type</td><td></td></tr>
    <tr><td class="setColor">(0018,980C)</td><td class="setColor">CS</td><td class="setColor">Position Measuring Device Used</td><td class="setColor"></td></tr>
    <tr><td>(0018,980D)</td><td>SQ</td><td>Transducer Geometry Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,980E)</td><td class="setColor">SQ</td><td class="setColor">Transducer Beam Steering Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0018,980F)</td><td>SQ</td><td>Transducer Application Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,9810)</td><td class="setColor">US or SS</td><td class="setColor">Zero Velocity Pixel Value</td><td class="setColor"></td></tr>
    <tr><td>(0018,A001)</td><td>SQ</td><td>Contributing Equipment Sequence</td><td></td></tr>
    <tr><td class="setColor">(0018,A002)</td><td class="setColor">DT</td><td class="setColor">Contribution DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0018,A003)</td><td>ST</td><td>Contribution Description</td><td></td></tr>
    <tr><td class="setColor">(0020,000D)</td><td class="setColor">UI</td><td class="setColor">Study Instance UID</td><td class="setColor"></td></tr>
    <tr><td>(0020,000E)</td><td>UI</td><td>Series Instance UID</td><td></td></tr>
    <tr><td class="setColor">(0020,0010)</td><td class="setColor">SH</td><td class="setColor">Study ID</td><td class="setColor"></td></tr>
    <tr><td>(0020,0011)</td><td>IS</td><td>Series Number</td><td></td></tr>
    <tr><td class="setColor">(0020,0012)</td><td class="setColor">IS</td><td class="setColor">Acquisition Number</td><td class="setColor"></td></tr>
    <tr><td>(0020,0013)</td><td>IS</td><td>Instance Number</td><td></td></tr>
    <tr><td class="retired1">(0020,0014)</td><td class="retired1">IS</td><td class="retired1">Isotope Number</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,0015)</td><td class="retired">IS</td><td class="retired">Phase Number</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,0016)</td><td class="retired1">IS</td><td class="retired1">Interval Number</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,0017)</td><td class="retired">IS</td><td class="retired">Time Slot Number</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,0018)</td><td class="retired1">IS</td><td class="retired1">Angle Number</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,0019)</td><td>IS</td><td>Item Number</td><td></td></tr>
    <tr><td class="setColor">(0020,0020)</td><td class="setColor">CS</td><td class="setColor">Patient Orientation</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0020,0022)</td><td class="retired">IS</td><td class="retired">Overlay Number</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,0024)</td><td class="retired1">IS</td><td class="retired1">Curve Number</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,0026)</td><td class="retired">IS</td><td class="retired">LUT Number</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,0030)</td><td class="retired1">DS</td><td class="retired1">Image Position</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,0032)</td><td>DS</td><td>Image Position (Patient)</td><td></td></tr>
    <tr><td class="retired1">(0020,0035)</td><td class="retired1">DS</td><td class="retired1">Image Orientation</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,0037)</td><td>DS</td><td>Image Orientation (Patient)</td><td></td></tr>
    <tr><td class="retired1">(0020,0050)</td><td class="retired1">DS</td><td class="retired1">Location</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,0052)</td><td>UI</td><td>Frame of Reference UID</td><td></td></tr>
    <tr><td class="setColor">(0020,0060)</td><td class="setColor">CS</td><td class="setColor">Laterality</td><td class="setColor"></td></tr>
    <tr><td>(0020,0062)</td><td>CS</td><td>Image Laterality</td><td></td></tr>
    <tr><td class="retired1">(0020,0070)</td><td class="retired1">LO</td><td class="retired1">Image Geometry Type</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,0080)</td><td class="retired">CS</td><td class="retired">Masking Image</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,00AA)</td><td class="retired1">IS</td><td class="retired1">Report Number</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,0100)</td><td>IS</td><td>Temporal Position Identifier</td><td></td></tr>
    <tr><td class="setColor">(0020,0105)</td><td class="setColor">IS</td><td class="setColor">Number of Temporal Positions</td><td class="setColor"></td></tr>
    <tr><td>(0020,0110)</td><td>DS</td><td>Temporal Resolution</td><td></td></tr>
    <tr><td class="setColor">(0020,0200)</td><td class="setColor">UI</td><td class="setColor">Synchronization Frame of Reference UID</td><td class="setColor"></td></tr>
    <tr><td>(0020,0242)</td><td>UI</td><td>SOP Instance UID of Concatenation Source</td><td></td></tr>
    <tr><td class="retired1">(0020,1000)</td><td class="retired1">IS</td><td class="retired1">Series in Study</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,1001)</td><td class="retired">IS</td><td class="retired">Acquisitions in Series</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0020,1002)</td><td class="setColor">IS</td><td class="setColor">Images in Acquisition</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0020,1003)</td><td class="retired">IS</td><td class="retired">Images in Series</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,1004)</td><td class="retired1">IS</td><td class="retired1">Acquisitions in Study</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,1005)</td><td class="retired">IS</td><td class="retired">Images in Study</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,1020)</td><td class="retired1">LO</td><td class="retired1">Reference</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,1040)</td><td>LO</td><td>Position Reference Indicator</td><td></td></tr>
    <tr><td class="setColor">(0020,1041)</td><td class="setColor">DS</td><td class="setColor">Slice Location</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0020,1070)</td><td class="retired">IS</td><td class="retired">Other Study Numbers</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0020,1200)</td><td class="setColor">IS</td><td class="setColor">Number of Patient Related Studies</td><td class="setColor"></td></tr>
    <tr><td>(0020,1202)</td><td>IS</td><td>Number of Patient Related Series</td><td></td></tr>
    <tr><td class="setColor">(0020,1204)</td><td class="setColor">IS</td><td class="setColor">Number of Patient Related Instances</td><td class="setColor"></td></tr>
    <tr><td>(0020,1206)</td><td>IS</td><td>Number of Study Related Series</td><td></td></tr>
    <tr><td class="setColor">(0020,1208)</td><td class="setColor">IS</td><td class="setColor">Number of Study Related Instances</td><td class="setColor"></td></tr>
    <tr><td>(0020,1209)</td><td>IS</td><td>Number of Series Related Instances</td><td></td></tr>
    <tr><td class="retired1">(0020,31xx)</td><td class="retired1">CS</td><td class="retired1">Source Image IDs</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,3401)</td><td class="retired">CS</td><td class="retired">Modifying Device ID</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,3402)</td><td class="retired1">CS</td><td class="retired1">Modified Image ID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,3403)</td><td class="retired">DA</td><td class="retired">Modified Image Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,3404)</td><td class="retired1">LO</td><td class="retired1">Modifying Device Manufacturer</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,3405)</td><td class="retired">TM</td><td class="retired">Modified Image Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0020,3406)</td><td class="retired1">LO</td><td class="retired1">Modified Image Description</td><td class="retired1">Retired</td></tr>
    <tr><td>(0020,4000)</td><td>LT</td><td>Image Comments</td><td></td></tr>
    <tr><td class="retired1">(0020,5000)</td><td class="retired1">AT</td><td class="retired1">Original Image Identification</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0020,5002)</td><td class="retired">LO</td><td class="retired">Original Image Identification Nomenclature</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0020,9056)</td><td class="setColor">SH</td><td class="setColor">Stack ID</td><td class="setColor"></td></tr>
    <tr><td>(0020,9057)</td><td>UL</td><td>In-Stack Position Number</td><td></td></tr>
    <tr><td class="setColor">(0020,9071)</td><td class="setColor">SQ</td><td class="setColor">Frame Anatomy Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9072)</td><td>CS</td><td>Frame Laterality</td><td></td></tr>
    <tr><td class="setColor">(0020,9111)</td><td class="setColor">SQ</td><td class="setColor">Frame Content Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9113)</td><td>SQ</td><td>Plane Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,9116)</td><td class="setColor">SQ</td><td class="setColor">Plane Orientation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9128)</td><td>UL</td><td>Temporal Position Index</td><td></td></tr>
    <tr><td class="setColor">(0020,9153)</td><td class="setColor">FD</td><td class="setColor">Nominal Cardiac Trigger Delay Time</td><td class="setColor"></td></tr>
    <tr><td>(0020,9154)</td><td>FL</td><td>Nominal Cardiac Trigger Time Prior To R-Peak</td><td></td></tr>
    <tr><td class="setColor">(0020,9155)</td><td class="setColor">FL</td><td class="setColor">Actual Cardiac Trigger Time Prior To R-Peak</td><td class="setColor"></td></tr>
    <tr><td>(0020,9156)</td><td>US</td><td>Frame Acquisition Number</td><td></td></tr>
    <tr><td class="setColor">(0020,9157)</td><td class="setColor">UL</td><td class="setColor">Dimension Index Values</td><td class="setColor"></td></tr>
    <tr><td>(0020,9158)</td><td>LT</td><td>Frame Comments</td><td></td></tr>
    <tr><td class="setColor">(0020,9161)</td><td class="setColor">UI</td><td class="setColor">Concatenation UID</td><td class="setColor"></td></tr>
    <tr><td>(0020,9162)</td><td>US</td><td>In-concatenation Number</td><td></td></tr>
    <tr><td class="setColor">(0020,9163)</td><td class="setColor">US</td><td class="setColor">In-concatenation Total Number</td><td class="setColor"></td></tr>
    <tr><td>(0020,9164)</td><td>UI</td><td>Dimension Organization UID</td><td></td></tr>
    <tr><td class="setColor">(0020,9165)</td><td class="setColor">AT</td><td class="setColor">Dimension Index Pointer</td><td class="setColor"></td></tr>
    <tr><td>(0020,9167)</td><td>AT</td><td>Functional Group Pointer</td><td></td></tr>
    <tr><td class="setColor">(0020,9170)</td><td class="setColor">SQ</td><td class="setColor">Unassigned Shared Converted Attributes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9171)</td><td>SQ</td><td>Unassigned Per-Frame Converted Attributes Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,9172)</td><td class="setColor">SQ</td><td class="setColor">Conversion Source Attributes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9213)</td><td>LO</td><td>Dimension Index Private Creator</td><td></td></tr>
    <tr><td class="setColor">(0020,9221)</td><td class="setColor">SQ</td><td class="setColor">Dimension Organization Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9222)</td><td>SQ</td><td>Dimension Index Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,9228)</td><td class="setColor">UL</td><td class="setColor">Concatenation Frame Offset Number</td><td class="setColor"></td></tr>
    <tr><td>(0020,9238)</td><td>LO</td><td>Functional Group Private Creator</td><td></td></tr>
    <tr><td class="setColor">(0020,9241)</td><td class="setColor">FL</td><td class="setColor">Nominal Percentage of Cardiac Phase</td><td class="setColor"></td></tr>
    <tr><td>(0020,9245)</td><td>FL</td><td>Nominal Percentage of Respiratory Phase</td><td></td></tr>
    <tr><td class="setColor">(0020,9246)</td><td class="setColor">FL</td><td class="setColor">Starting Respiratory Amplitude</td><td class="setColor"></td></tr>
    <tr><td>(0020,9247)</td><td>CS</td><td>Starting Respiratory Phase</td><td></td></tr>
    <tr><td class="setColor">(0020,9248)</td><td class="setColor">FL</td><td class="setColor">Ending Respiratory Amplitude</td><td class="setColor"></td></tr>
    <tr><td>(0020,9249)</td><td>CS</td><td>Ending Respiratory Phase</td><td></td></tr>
    <tr><td class="setColor">(0020,9250)</td><td class="setColor">CS</td><td class="setColor">Respiratory Trigger Type</td><td class="setColor"></td></tr>
    <tr><td>(0020,9251)</td><td>FD</td><td>R-R Interval Time Nominal</td><td></td></tr>
    <tr><td class="setColor">(0020,9252)</td><td class="setColor">FD</td><td class="setColor">Actual Cardiac Trigger Delay Time</td><td class="setColor"></td></tr>
    <tr><td>(0020,9253)</td><td>SQ</td><td>Respiratory Synchronization Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,9254)</td><td class="setColor">FD</td><td class="setColor">Respiratory Interval Time</td><td class="setColor"></td></tr>
    <tr><td>(0020,9255)</td><td>FD</td><td>Nominal Respiratory Trigger Delay Time</td><td></td></tr>
    <tr><td class="setColor">(0020,9256)</td><td class="setColor">FD</td><td class="setColor">Respiratory Trigger Delay Threshold</td><td class="setColor"></td></tr>
    <tr><td>(0020,9257)</td><td>FD</td><td>Actual Respiratory Trigger Delay Time</td><td></td></tr>
    <tr><td class="setColor">(0020,9301)</td><td class="setColor">FD</td><td class="setColor">Image Position (Volume)</td><td class="setColor"></td></tr>
    <tr><td>(0020,9302)</td><td>FD</td><td>Image Orientation (Volume)</td><td></td></tr>
    <tr><td class="setColor">(0020,9307)</td><td class="setColor">CS</td><td class="setColor">Ultrasound Acquisition Geometry</td><td class="setColor"></td></tr>
    <tr><td>(0020,9308)</td><td>FD</td><td>Apex Position</td><td></td></tr>
    <tr><td class="setColor">(0020,9309)</td><td class="setColor">FD</td><td class="setColor">Volume to Transducer Mapping Matrix</td><td class="setColor"></td></tr>
    <tr><td>(0020,930A)</td><td>FD</td><td>Volume to Table Mapping Matrix</td><td></td></tr>
    <tr><td class="setColor">(0020,930B)</td><td class="setColor">CS</td><td class="setColor">Volume to Transducer Relationship</td><td class="setColor"></td></tr>
    <tr><td>(0020,930C)</td><td>CS</td><td>Patient Frame of Reference Source</td><td></td></tr>
    <tr><td class="setColor">(0020,930D)</td><td class="setColor">FD</td><td class="setColor">Temporal Position Time Offset</td><td class="setColor"></td></tr>
    <tr><td>(0020,930E)</td><td>SQ</td><td>Plane Position (Volume) Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,930F)</td><td class="setColor">SQ</td><td class="setColor">Plane Orientation (Volume) Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9310)</td><td>SQ</td><td>Temporal Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,9311)</td><td class="setColor">CS</td><td class="setColor">Dimension Organization Type</td><td class="setColor"></td></tr>
    <tr><td>(0020,9312)</td><td>UI</td><td>Volume Frame of Reference UID</td><td></td></tr>
    <tr><td class="setColor">(0020,9313)</td><td class="setColor">UI</td><td class="setColor">Table Frame of Reference UID</td><td class="setColor"></td></tr>
    <tr><td>(0020,9421)</td><td>LO</td><td>Dimension Description Label</td><td></td></tr>
    <tr><td class="setColor">(0020,9450)</td><td class="setColor">SQ</td><td class="setColor">Patient Orientation in Frame Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0020,9453)</td><td>LO</td><td>Frame Label</td><td></td></tr>
    <tr><td class="setColor">(0020,9518)</td><td class="setColor">US</td><td class="setColor">Acquisition Index</td><td class="setColor"></td></tr>
    <tr><td>(0020,9529)</td><td>SQ</td><td>Contributing SOP Instances Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(0020,9536)</td><td class="setColor">US</td><td class="setColor">Reconstruction Index</td><td class="setColor"></td></tr>
    <tr><td>(0022,0001)</td><td>US</td><td>Light Path Filter Pass-Through Wavelength</td><td></td></tr>
    <tr><td class="setColor">(0022,0002)</td><td class="setColor">US</td><td class="setColor">Light Path Filter Pass Band</td><td class="setColor"></td></tr>
    <tr><td>(0022,0003)</td><td>US</td><td>Image Path Filter Pass-Through Wavelength</td><td></td></tr>
    <tr><td class="setColor">(0022,0004)</td><td class="setColor">US</td><td class="setColor">Image Path Filter Pass Band</td><td class="setColor"></td></tr>
    <tr><td>(0022,0005)</td><td>CS</td><td>Patient Eye Movement Commanded</td><td></td></tr>
    <tr><td class="setColor">(0022,0006)</td><td class="setColor">SQ</td><td class="setColor">Patient Eye Movement Command Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,0007)</td><td>FL</td><td>Spherical Lens Power</td><td></td></tr>
    <tr><td class="setColor">(0022,0008)</td><td class="setColor">FL</td><td class="setColor">Cylinder Lens Power</td><td class="setColor"></td></tr>
    <tr><td>(0022,0009)</td><td>FL</td><td>Cylinder Axis</td><td></td></tr>
    <tr><td class="setColor">(0022,000A)</td><td class="setColor">FL</td><td class="setColor">Emmetropic Magnification</td><td class="setColor"></td></tr>
    <tr><td>(0022,000B)</td><td>FL</td><td>Intra Ocular Pressure</td><td></td></tr>
    <tr><td class="setColor">(0022,000C)</td><td class="setColor">FL</td><td class="setColor">Horizontal Field of View</td><td class="setColor"></td></tr>
    <tr><td>(0022,000D)</td><td>CS</td><td>Pupil Dilated</td><td></td></tr>
    <tr><td class="setColor">(0022,000E)</td><td class="setColor">FL</td><td class="setColor">Degree of Dilation</td><td class="setColor"></td></tr>
    <tr><td>(0022,0010)</td><td>FL</td><td>Stereo Baseline Angle</td><td></td></tr>
    <tr><td class="setColor">(0022,0011)</td><td class="setColor">FL</td><td class="setColor">Stereo Baseline Displacement</td><td class="setColor"></td></tr>
    <tr><td>(0022,0012)</td><td>FL</td><td>Stereo Horizontal Pixel Offset</td><td></td></tr>
    <tr><td class="setColor">(0022,0013)</td><td class="setColor">FL</td><td class="setColor">Stereo Vertical Pixel Offset</td><td class="setColor"></td></tr>
    <tr><td>(0022,0014)</td><td>FL</td><td>Stereo Rotation</td><td></td></tr>
    <tr><td class="setColor">(0022,0015)</td><td class="setColor">SQ</td><td class="setColor">Acquisition Device Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,0016)</td><td>SQ</td><td>Illumination Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,0017)</td><td class="setColor">SQ</td><td class="setColor">Light Path Filter Type Stack Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,0018)</td><td>SQ</td><td>Image Path Filter Type Stack Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,0019)</td><td class="setColor">SQ</td><td class="setColor">Lenses Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,001A)</td><td>SQ</td><td>Channel Description Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,001B)</td><td class="setColor">SQ</td><td class="setColor">Refractive State Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,001C)</td><td>SQ</td><td>Mydriatic Agent Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,001D)</td><td class="setColor">SQ</td><td class="setColor">Relative Image Position Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,001E)</td><td>FL</td><td>Camera Angle of View</td><td></td></tr>
    <tr><td class="setColor">(0022,0020)</td><td class="setColor">SQ</td><td class="setColor">Stereo Pairs Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,0021)</td><td>SQ</td><td>Left Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,0022)</td><td class="setColor">SQ</td><td class="setColor">Right Image Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,0028)</td><td>CS</td><td>Stereo Pairs Present</td><td></td></tr>
    <tr><td class="setColor">(0022,0030)</td><td class="setColor">FL</td><td class="setColor">Axial Length of the Eye</td><td class="setColor"></td></tr>
    <tr><td>(0022,0031)</td><td>SQ</td><td>Ophthalmic Frame Location Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,0032)</td><td class="setColor">FL</td><td class="setColor">Reference Coordinates</td><td class="setColor"></td></tr>
    <tr><td>(0022,0035)</td><td>FL</td><td>Depth Spatial Resolution</td><td></td></tr>
    <tr><td class="setColor">(0022,0036)</td><td class="setColor">FL</td><td class="setColor">Maximum Depth Distortion</td><td class="setColor"></td></tr>
    <tr><td>(0022,0037)</td><td>FL</td><td>Along-scan Spatial Resolution</td><td></td></tr>
    <tr><td class="setColor">(0022,0038)</td><td class="setColor">FL</td><td class="setColor">Maximum Along-scan Distortion</td><td class="setColor"></td></tr>
    <tr><td>(0022,0039)</td><td>CS</td><td>Ophthalmic Image Orientation</td><td></td></tr>
    <tr><td class="setColor">(0022,0041)</td><td class="setColor">FL</td><td class="setColor">Depth of Transverse Image</td><td class="setColor"></td></tr>
    <tr><td>(0022,0042)</td><td>SQ</td><td>Mydriatic Agent Concentration Units Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,0048)</td><td class="setColor">FL</td><td class="setColor">Across-scan Spatial Resolution</td><td class="setColor"></td></tr>
    <tr><td>(0022,0049)</td><td>FL</td><td>Maximum Across-scan Distortion</td><td></td></tr>
    <tr><td class="setColor">(0022,004E)</td><td class="setColor">DS</td><td class="setColor">Mydriatic Agent Concentration</td><td class="setColor"></td></tr>
    <tr><td>(0022,0055)</td><td>FL</td><td>Illumination Wave Length</td><td></td></tr>
    <tr><td class="setColor">(0022,0056)</td><td class="setColor">FL</td><td class="setColor">Illumination Power</td><td class="setColor"></td></tr>
    <tr><td>(0022,0057)</td><td>FL</td><td>Illumination Bandwidth</td><td></td></tr>
    <tr><td class="setColor">(0022,0058)</td><td class="setColor">SQ</td><td class="setColor">Mydriatic Agent Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1007)</td><td>SQ</td><td>Ophthalmic Axial Measurements Right Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1008)</td><td class="setColor">SQ</td><td class="setColor">Ophthalmic Axial Measurements Left Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1009)</td><td>CS</td><td>Ophthalmic Axial Measurements Device Type</td><td></td></tr>
    <tr><td class="setColor">(0022,1010)</td><td class="setColor">CS</td><td class="setColor">Ophthalmic Axial Length Measurements Type</td><td class="setColor"></td></tr>
    <tr><td>(0022,1012)</td><td>SQ</td><td>Ophthalmic Axial Length Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1019)</td><td class="setColor">FL</td><td class="setColor">Ophthalmic Axial Length</td><td class="setColor"></td></tr>
    <tr><td>(0022,1024)</td><td>SQ</td><td>Lens Status Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1025)</td><td class="setColor">SQ</td><td class="setColor">Vitreous Status Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1028)</td><td>SQ</td><td>IOL Formula Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1029)</td><td class="setColor">LO</td><td class="setColor">IOL Formula Detail</td><td class="setColor"></td></tr>
    <tr><td>(0022,1033)</td><td>FL</td><td>Keratometer Index</td><td></td></tr>
    <tr><td class="setColor">(0022,1035)</td><td class="setColor">SQ</td><td class="setColor">Source of Ophthalmic Axial Length Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1037)</td><td>FL</td><td>Target Refraction</td><td></td></tr>
    <tr><td class="setColor">(0022,1039)</td><td class="setColor">CS</td><td class="setColor">Refractive Procedure Occurred</td><td class="setColor"></td></tr>
    <tr><td>(0022,1040)</td><td>SQ</td><td>Refractive Surgery Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1044)</td><td class="setColor">SQ</td><td class="setColor">Ophthalmic Ultrasound Method Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1050)</td><td>SQ</td><td>Ophthalmic Axial Length Measurements Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1053)</td><td class="setColor">FL</td><td class="setColor">IOL Power</td><td class="setColor"></td></tr>
    <tr><td>(0022,1054)</td><td>FL</td><td>Predicted Refractive Error</td><td></td></tr>
    <tr><td class="setColor">(0022,1059)</td><td class="setColor">FL</td><td class="setColor">Ophthalmic Axial Length Velocity</td><td class="setColor"></td></tr>
    <tr><td>(0022,1065)</td><td>LO</td><td>Lens Status Description</td><td></td></tr>
    <tr><td class="setColor">(0022,1066)</td><td class="setColor">LO</td><td class="setColor">Vitreous Status Description</td><td class="setColor"></td></tr>
    <tr><td>(0022,1090)</td><td>SQ</td><td>IOL Power Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1092)</td><td class="setColor">SQ</td><td class="setColor">Lens Constant Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1093)</td><td>LO</td><td>IOL Manufacturer</td><td></td></tr>
    <tr><td class="retired1">(0022,1094)</td><td class="retired1">LO</td><td class="retired1">Lens Constant Description</td><td class="retired1">Retired</td></tr>
    <tr><td>(0022,1095)</td><td>LO</td><td>Implant Name</td><td></td></tr>
    <tr><td class="setColor">(0022,1096)</td><td class="setColor">SQ</td><td class="setColor">Keratometry Measurement Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1097)</td><td>LO</td><td>Implant Part Number</td><td></td></tr>
    <tr><td class="setColor">(0022,1100)</td><td class="setColor">SQ</td><td class="setColor">Referenced Ophthalmic Axial Measurements Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1101)</td><td>SQ</td><td>Ophthalmic Axial Length Measurements Segment Name Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1103)</td><td class="setColor">SQ</td><td class="setColor">Refractive Error Before Refractive Surgery Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1121)</td><td>FL</td><td>IOL Power For Exact Emmetropia</td><td></td></tr>
    <tr><td class="setColor">(0022,1122)</td><td class="setColor">FL</td><td class="setColor">IOL Power For Exact Target Refraction</td><td class="setColor"></td></tr>
    <tr><td>(0022,1125)</td><td>SQ</td><td>Anterior Chamber Depth Definition Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1127)</td><td class="setColor">SQ</td><td class="setColor">Lens Thickness Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1128)</td><td>SQ</td><td>Anterior Chamber Depth Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1130)</td><td class="setColor">FL</td><td class="setColor">Lens Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0022,1131)</td><td>FL</td><td>Anterior Chamber Depth</td><td></td></tr>
    <tr><td class="setColor">(0022,1132)</td><td class="setColor">SQ</td><td class="setColor">Source of Lens Thickness Data Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1133)</td><td>SQ</td><td>Source of Anterior Chamber Depth Data Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1134)</td><td class="setColor">SQ</td><td class="setColor">Source of Refractive Measurements Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1135)</td><td>SQ</td><td>Source of Refractive Measurements Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1140)</td><td class="setColor">CS</td><td class="setColor">Ophthalmic Axial Length Measurement Modified</td><td class="setColor"></td></tr>
    <tr><td>(0022,1150)</td><td>SQ</td><td>Ophthalmic Axial Length Data Source Code Sequence</td><td></td></tr>
    <tr><td class="retired1">(0022,1153)</td><td class="retired1">SQ</td><td class="retired1">Ophthalmic Axial Length Acquisition Method Code Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td>(0022,1155)</td><td>FL</td><td>Signal to Noise Ratio</td><td></td></tr>
    <tr><td class="setColor">(0022,1159)</td><td class="setColor">LO</td><td class="setColor">Ophthalmic Axial Length Data Source Description</td><td class="setColor"></td></tr>
    <tr><td>(0022,1210)</td><td>SQ</td><td>Ophthalmic Axial Length Measurements Total Length Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1211)</td><td class="setColor">SQ</td><td class="setColor">Ophthalmic Axial Length Measurements Segmental Length Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1212)</td><td>SQ</td><td>Ophthalmic Axial Length Measurements Length Summation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1220)</td><td class="setColor">SQ</td><td class="setColor">Ultrasound Ophthalmic Axial Length Measurements Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1225)</td><td>SQ</td><td>Optical Ophthalmic Axial Length Measurements Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1230)</td><td class="setColor">SQ</td><td class="setColor">Ultrasound Selected Ophthalmic Axial Length Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1250)</td><td>SQ</td><td>Ophthalmic Axial Length Selection Method Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1255)</td><td class="setColor">SQ</td><td class="setColor">Optical Selected Ophthalmic Axial Length Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1257)</td><td>SQ</td><td>Selected Segmental Ophthalmic Axial Length Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1260)</td><td class="setColor">SQ</td><td class="setColor">Selected Total Ophthalmic Axial Length Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1262)</td><td>SQ</td><td>Ophthalmic Axial Length Quality Metric Sequence</td><td></td></tr>
    <tr><td class="retired1">(0022,1265)</td><td class="retired1">SQ</td><td class="retired1">Ophthalmic Axial Length Quality Metric Type Code Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0022,1273)</td><td class="retired">LO</td><td class="retired">Ophthalmic Axial Length Quality Metric Type Description</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0022,1300)</td><td class="setColor">SQ</td><td class="setColor">Intraocular Lens Calculations Right Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1310)</td><td>SQ</td><td>Intraocular Lens Calculations Left Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1330)</td><td class="setColor">SQ</td><td class="setColor">Referenced Ophthalmic Axial Length Measurement QC Image Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1415)</td><td>CS</td><td>Ophthalmic Mapping Device Type</td><td></td></tr>
    <tr><td class="setColor">(0022,1420)</td><td class="setColor">SQ</td><td class="setColor">Acquisition Method Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1423)</td><td>SQ</td><td>Acquisition Method Algorithm Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1436)</td><td class="setColor">SQ</td><td class="setColor">Ophthalmic Thickness Map Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1443)</td><td>SQ</td><td>Ophthalmic Thickness Mapping Normals Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1445)</td><td class="setColor">SQ</td><td class="setColor">Retinal Thickness Definition Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1450)</td><td>SQ</td><td>Pixel Value Mapping to Coded Concept Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1452)</td><td class="setColor">US or SS</td><td class="setColor">Mapped Pixel Value</td><td class="setColor"></td></tr>
    <tr><td>(0022,1454)</td><td>LO</td><td>Pixel Value Mapping Explanation</td><td></td></tr>
    <tr><td class="setColor">(0022,1458)</td><td class="setColor">SQ</td><td class="setColor">Ophthalmic Thickness Map Quality Threshold Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1460)</td><td>FL</td><td>Ophthalmic Thickness Map Threshold Quality Rating</td><td></td></tr>
    <tr><td class="setColor">(0022,1463)</td><td class="setColor">FL</td><td class="setColor">Anatomic Structure Reference Point</td><td class="setColor"></td></tr>
    <tr><td>(0022,1465)</td><td>SQ</td><td>Registration to Localizer Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1466)</td><td class="setColor">CS</td><td class="setColor">Registered Localizer Units</td><td class="setColor"></td></tr>
    <tr><td>(0022,1467)</td><td>FL</td><td>Registered Localizer Top Left Hand Corner</td><td></td></tr>
    <tr><td class="setColor">(0022,1468)</td><td class="setColor">FL</td><td class="setColor">Registered Localizer Bottom Right Hand Corner</td><td class="setColor"></td></tr>
    <tr><td>(0022,1470)</td><td>SQ</td><td>Ophthalmic Thickness Map Quality Rating Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1472)</td><td class="setColor">SQ</td><td class="setColor">Relevant OPT Attributes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1512)</td><td>SQ</td><td>Transformation Method Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1513)</td><td class="setColor">SQ</td><td class="setColor">Transformation Algorithm Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1515)</td><td>CS</td><td>Ophthalmic Axial Length Method</td><td></td></tr>
    <tr><td class="setColor">(0022,1517)</td><td class="setColor">FL</td><td class="setColor">Ophthalmic FOV</td><td class="setColor"></td></tr>
    <tr><td>(0022,1518)</td><td>SQ</td><td>Two Dimensional to Three Dimensional Map Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1525)</td><td class="setColor">SQ</td><td class="setColor">Wide Field Ophthalmic Photography Quality Rating Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0022,1526)</td><td>SQ</td><td>Wide Field Ophthalmic Photography Quality Threshold Sequence</td><td></td></tr>
    <tr><td class="setColor">(0022,1527)</td><td class="setColor">FL</td><td class="setColor">Wide Field Ophthalmic Photography Threshold Quality Rating</td><td class="setColor"></td></tr>
    <tr><td>(0022,1528)</td><td>FL</td><td>X Coordinates Center Pixel View Angle</td><td></td></tr>
    <tr><td class="setColor">(0022,1529)</td><td class="setColor">FL</td><td class="setColor">Y Coordinates Center Pixel View Angle</td><td class="setColor"></td></tr>
    <tr><td>(0022,1530)</td><td>UL</td><td>Number of Map Points</td><td></td></tr>
    <tr><td class="setColor">(0022,1531)</td><td class="setColor">OF</td><td class="setColor">Two Dimensional to Three Dimensional Map Data</td><td class="setColor"></td></tr>
    <tr><td>(0024,0010)</td><td>FL</td><td>Visual Field Horizontal Extent</td><td></td></tr>
    <tr><td class="setColor">(0024,0011)</td><td class="setColor">FL</td><td class="setColor">Visual Field Vertical Extent</td><td class="setColor"></td></tr>
    <tr><td>(0024,0012)</td><td>CS</td><td>Visual Field Shape</td><td></td></tr>
    <tr><td class="setColor">(0024,0016)</td><td class="setColor">SQ</td><td class="setColor">Screening Test Mode Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0018)</td><td>FL</td><td>Maximum Stimulus Luminance</td><td></td></tr>
    <tr><td class="setColor">(0024,0020)</td><td class="setColor">FL</td><td class="setColor">Background Luminance</td><td class="setColor"></td></tr>
    <tr><td>(0024,0021)</td><td>SQ</td><td>Stimulus Color Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0024)</td><td class="setColor">SQ</td><td class="setColor">Background Illumination Color Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0025)</td><td>FL</td><td>Stimulus Area</td><td></td></tr>
    <tr><td class="setColor">(0024,0028)</td><td class="setColor">FL</td><td class="setColor">Stimulus Presentation Time</td><td class="setColor"></td></tr>
    <tr><td>(0024,0032)</td><td>SQ</td><td>Fixation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0033)</td><td class="setColor">SQ</td><td class="setColor">Fixation Monitoring Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0034)</td><td>SQ</td><td>Visual Field Catch Trial Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0035)</td><td class="setColor">US</td><td class="setColor">Fixation Checked Quantity</td><td class="setColor"></td></tr>
    <tr><td>(0024,0036)</td><td>US</td><td>Patient Not Properly Fixated Quantity</td><td></td></tr>
    <tr><td class="setColor">(0024,0037)</td><td class="setColor">CS</td><td class="setColor">Presented Visual Stimuli Data Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0038)</td><td>US</td><td>Number of Visual Stimuli</td><td></td></tr>
    <tr><td class="setColor">(0024,0039)</td><td class="setColor">CS</td><td class="setColor">Excessive Fixation Losses Data Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0040)</td><td>CS</td><td>Excessive Fixation Losses</td><td></td></tr>
    <tr><td class="setColor">(0024,0042)</td><td class="setColor">US</td><td class="setColor">Stimuli Retesting Quantity</td><td class="setColor"></td></tr>
    <tr><td>(0024,0044)</td><td>LT</td><td>Comments on Patient's Performance of Visual Field</td><td></td></tr>
    <tr><td class="setColor">(0024,0045)</td><td class="setColor">CS</td><td class="setColor">False Negatives Estimate Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0046)</td><td>FL</td><td>False Negatives Estimate</td><td></td></tr>
    <tr><td class="setColor">(0024,0048)</td><td class="setColor">US</td><td class="setColor">Negative Catch Trials Quantity</td><td class="setColor"></td></tr>
    <tr><td>(0024,0050)</td><td>US</td><td>False Negatives Quantity</td><td></td></tr>
    <tr><td class="setColor">(0024,0051)</td><td class="setColor">CS</td><td class="setColor">Excessive False Negatives Data Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0052)</td><td>CS</td><td>Excessive False Negatives</td><td></td></tr>
    <tr><td class="setColor">(0024,0053)</td><td class="setColor">CS</td><td class="setColor">False Positives Estimate Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0054)</td><td>FL</td><td>False Positives Estimate</td><td></td></tr>
    <tr><td class="setColor">(0024,0055)</td><td class="setColor">CS</td><td class="setColor">Catch Trials Data Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0056)</td><td>US</td><td>Positive Catch Trials Quantity</td><td></td></tr>
    <tr><td class="setColor">(0024,0057)</td><td class="setColor">CS</td><td class="setColor">Test Point Normals Data Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0058)</td><td>SQ</td><td>Test Point Normals Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0059)</td><td class="setColor">CS</td><td class="setColor">Global Deviation Probability Normals Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0060)</td><td>US</td><td>False Positives Quantity</td><td></td></tr>
    <tr><td class="setColor">(0024,0061)</td><td class="setColor">CS</td><td class="setColor">Excessive False Positives Data Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0062)</td><td>CS</td><td>Excessive False Positives</td><td></td></tr>
    <tr><td class="setColor">(0024,0063)</td><td class="setColor">CS</td><td class="setColor">Visual Field Test Normals Flag</td><td class="setColor"></td></tr>
    <tr><td>(0024,0064)</td><td>SQ</td><td>Results Normals Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0065)</td><td class="setColor">SQ</td><td class="setColor">Age Corrected Sensitivity Deviation Algorithm Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0066)</td><td>FL</td><td>Global Deviation From Normal</td><td></td></tr>
    <tr><td class="setColor">(0024,0067)</td><td class="setColor">SQ</td><td class="setColor">Generalized Defect Sensitivity Deviation Algorithm Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0068)</td><td>FL</td><td>Localized Deviation From Normal</td><td></td></tr>
    <tr><td class="setColor">(0024,0069)</td><td class="setColor">LO</td><td class="setColor">Patient Reliability Indicator</td><td class="setColor"></td></tr>
    <tr><td>(0024,0070)</td><td>FL</td><td>Visual Field Mean Sensitivity</td><td></td></tr>
    <tr><td class="setColor">(0024,0071)</td><td class="setColor">FL</td><td class="setColor">Global Deviation Probability</td><td class="setColor"></td></tr>
    <tr><td>(0024,0072)</td><td>CS</td><td>Local Deviation Probability Normals Flag</td><td></td></tr>
    <tr><td class="setColor">(0024,0073)</td><td class="setColor">FL</td><td class="setColor">Localized Deviation Probability</td><td class="setColor"></td></tr>
    <tr><td>(0024,0074)</td><td>CS</td><td>Short Term Fluctuation Calculated</td><td></td></tr>
    <tr><td class="setColor">(0024,0075)</td><td class="setColor">FL</td><td class="setColor">Short Term Fluctuation</td><td class="setColor"></td></tr>
    <tr><td>(0024,0076)</td><td>CS</td><td>Short Term Fluctuation Probability Calculated</td><td></td></tr>
    <tr><td class="setColor">(0024,0077)</td><td class="setColor">FL</td><td class="setColor">Short Term Fluctuation Probability</td><td class="setColor"></td></tr>
    <tr><td>(0024,0078)</td><td>CS</td><td>Corrected Localized Deviation From Normal Calculated</td><td></td></tr>
    <tr><td class="setColor">(0024,0079)</td><td class="setColor">FL</td><td class="setColor">Corrected Localized Deviation From Normal</td><td class="setColor"></td></tr>
    <tr><td>(0024,0080)</td><td>CS</td><td>Corrected Localized Deviation From Normal Probability Calculated</td><td></td></tr>
    <tr><td class="setColor">(0024,0081)</td><td class="setColor">FL</td><td class="setColor">Corrected Localized Deviation From Normal Probability</td><td class="setColor"></td></tr>
    <tr><td>(0024,0083)</td><td>SQ</td><td>Global Deviation Probability Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0085)</td><td class="setColor">SQ</td><td class="setColor">Localized Deviation Probability Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0086)</td><td>CS</td><td>Foveal Sensitivity Measured</td><td></td></tr>
    <tr><td class="setColor">(0024,0087)</td><td class="setColor">FL</td><td class="setColor">Foveal Sensitivity</td><td class="setColor"></td></tr>
    <tr><td>(0024,0088)</td><td>FL</td><td>Visual Field Test Duration</td><td></td></tr>
    <tr><td class="setColor">(0024,0089)</td><td class="setColor">SQ</td><td class="setColor">Visual Field Test Point Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0090)</td><td>FL</td><td>Visual Field Test Point X-Coordinate</td><td></td></tr>
    <tr><td class="setColor">(0024,0091)</td><td class="setColor">FL</td><td class="setColor">Visual Field Test Point Y-Coordinate</td><td class="setColor"></td></tr>
    <tr><td>(0024,0092)</td><td>FL</td><td>Age Corrected Sensitivity Deviation Value</td><td></td></tr>
    <tr><td class="setColor">(0024,0093)</td><td class="setColor">CS</td><td class="setColor">Stimulus Results</td><td class="setColor"></td></tr>
    <tr><td>(0024,0094)</td><td>FL</td><td>Sensitivity Value</td><td></td></tr>
    <tr><td class="setColor">(0024,0095)</td><td class="setColor">CS</td><td class="setColor">Retest Stimulus Seen</td><td class="setColor"></td></tr>
    <tr><td>(0024,0096)</td><td>FL</td><td>Retest Sensitivity Value</td><td></td></tr>
    <tr><td class="setColor">(0024,0097)</td><td class="setColor">SQ</td><td class="setColor">Visual Field Test Point Normals Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0098)</td><td>FL</td><td>Quantified Defect</td><td></td></tr>
    <tr><td class="setColor">(0024,0100)</td><td class="setColor">FL</td><td class="setColor">Age Corrected Sensitivity Deviation Probability Value</td><td class="setColor"></td></tr>
    <tr><td>(0024,0102)</td><td>CS</td><td>Generalized Defect Corrected Sensitivity Deviation Flag</td><td></td></tr>
    <tr><td class="setColor">(0024,0103)</td><td class="setColor">FL</td><td class="setColor">Generalized Defect Corrected Sensitivity Deviation Value</td><td class="setColor"></td></tr>
    <tr><td>(0024,0104)</td><td>FL</td><td>Generalized Defect Corrected Sensitivity Deviation Probability Value</td><td></td></tr>
    <tr><td class="setColor">(0024,0105)</td><td class="setColor">FL</td><td class="setColor">Minimum Sensitivity Value</td><td class="setColor"></td></tr>
    <tr><td>(0024,0106)</td><td>CS</td><td>Blind Spot Localized</td><td></td></tr>
    <tr><td class="setColor">(0024,0107)</td><td class="setColor">FL</td><td class="setColor">Blind Spot X-Coordinate</td><td class="setColor"></td></tr>
    <tr><td>(0024,0108)</td><td>FL</td><td>Blind Spot Y-Coordinate</td><td></td></tr>
    <tr><td class="setColor">(0024,0110)</td><td class="setColor">SQ</td><td class="setColor">Visual Acuity Measurement Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0112)</td><td>SQ</td><td>Refractive Parameters Used on Patient Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0113)</td><td class="setColor">CS</td><td class="setColor">Measurement Laterality</td><td class="setColor"></td></tr>
    <tr><td>(0024,0114)</td><td>SQ</td><td>Ophthalmic Patient Clinical Information Left Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0115)</td><td class="setColor">SQ</td><td class="setColor">Ophthalmic Patient Clinical Information Right Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0117)</td><td>CS</td><td>Foveal Point Normative Data Flag</td><td></td></tr>
    <tr><td class="setColor">(0024,0118)</td><td class="setColor">FL</td><td class="setColor">Foveal Point Probability Value</td><td class="setColor"></td></tr>
    <tr><td>(0024,0120)</td><td>CS</td><td>Screening Baseline Measured</td><td></td></tr>
    <tr><td class="setColor">(0024,0122)</td><td class="setColor">SQ</td><td class="setColor">Screening Baseline Measured Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0124)</td><td>CS</td><td>Screening Baseline Type</td><td></td></tr>
    <tr><td class="setColor">(0024,0126)</td><td class="setColor">FL</td><td class="setColor">Screening Baseline Value</td><td class="setColor"></td></tr>
    <tr><td>(0024,0202)</td><td>LO</td><td>Algorithm Source</td><td></td></tr>
    <tr><td class="setColor">(0024,0306)</td><td class="setColor">LO</td><td class="setColor">Data Set Name</td><td class="setColor"></td></tr>
    <tr><td>(0024,0307)</td><td>LO</td><td>Data Set Version</td><td></td></tr>
    <tr><td class="setColor">(0024,0308)</td><td class="setColor">LO</td><td class="setColor">Data Set Source</td><td class="setColor"></td></tr>
    <tr><td>(0024,0309)</td><td>LO</td><td>Data Set Description</td><td></td></tr>
    <tr><td class="setColor">(0024,0317)</td><td class="setColor">SQ</td><td class="setColor">Visual Field Test Reliability Global Index Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0320)</td><td>SQ</td><td>Visual Field Global Results Index Sequence</td><td></td></tr>
    <tr><td class="setColor">(0024,0325)</td><td class="setColor">SQ</td><td class="setColor">Data Observation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0024,0338)</td><td>CS</td><td>Index Normals Flag</td><td></td></tr>
    <tr><td class="setColor">(0024,0341)</td><td class="setColor">FL</td><td class="setColor">Index Probability</td><td class="setColor"></td></tr>
    <tr><td>(0024,0344)</td><td>SQ</td><td>Index Probability Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,0002)</td><td class="setColor">US</td><td class="setColor">Samples per Pixel</td><td class="setColor"></td></tr>
    <tr><td>(0028,0003)</td><td>US</td><td>Samples per Pixel Used</td><td></td></tr>
    <tr><td class="setColor">(0028,0004)</td><td class="setColor">CS</td><td class="setColor">Photometric Interpretation</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,0005)</td><td class="retired">US</td><td class="retired">Image Dimensions</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,0006)</td><td class="setColor">US</td><td class="setColor">Planar Configuration</td><td class="setColor"></td></tr>
    <tr><td>(0028,0008)</td><td>IS</td><td>Number of Frames</td><td></td></tr>
    <tr><td class="setColor">(0028,0009)</td><td class="setColor">AT</td><td class="setColor">Frame Increment Pointer</td><td class="setColor"></td></tr>
    <tr><td>(0028,000A)</td><td>AT</td><td>Frame Dimension Pointer</td><td></td></tr>
    <tr><td class="setColor">(0028,0010)</td><td class="setColor">US</td><td class="setColor">Rows</td><td class="setColor"></td></tr>
    <tr><td>(0028,0011)</td><td>US</td><td>Columns</td><td></td></tr>
    <tr><td class="retired1">(0028,0012)</td><td class="retired1">US</td><td class="retired1">Planes</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,0014)</td><td>US</td><td>Ultrasound Color Data Present</td><td></td></tr>
    <tr><td class="retired1">(0028,0020)</td><td class="retired1"></td><td class="retired1"></td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,0030)</td><td>DS</td><td>Pixel Spacing</td><td></td></tr>
    <tr><td class="setColor">(0028,0031)</td><td class="setColor">DS</td><td class="setColor">Zoom Factor</td><td class="setColor"></td></tr>
    <tr><td>(0028,0032)</td><td>DS</td><td>Zoom Center</td><td></td></tr>
    <tr><td class="setColor">(0028,0034)</td><td class="setColor">IS</td><td class="setColor">Pixel Aspect Ratio</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,0040)</td><td class="retired">CS</td><td class="retired">Image Format</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0050)</td><td class="retired1">LO</td><td class="retired1">Manipulated Image</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,0051)</td><td>CS</td><td>Corrected Image</td><td></td></tr>
    <tr><td class="retired1">(0028,005F)</td><td class="retired1">LO</td><td class="retired1">Compression Recognition Code</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0060)</td><td class="retired">CS</td><td class="retired">Compression Code</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0061)</td><td class="retired1">SH</td><td class="retired1">Compression Originator</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0062)</td><td class="retired">LO</td><td class="retired">Compression Label</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0063)</td><td class="retired1">SH</td><td class="retired1">Compression Description</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0065)</td><td class="retired">CS</td><td class="retired">Compression Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0066)</td><td class="retired1">AT</td><td class="retired1">Compression Step Pointers</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0068)</td><td class="retired">US</td><td class="retired">Repeat Interval</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0069)</td><td class="retired1">US</td><td class="retired1">Bits Grouped</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0070)</td><td class="retired">US</td><td class="retired">Perimeter Table</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0071)</td><td class="retired1">US or SS</td><td class="retired1">Perimeter Value</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0080)</td><td class="retired">US</td><td class="retired">Predictor Rows</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0081)</td><td class="retired1">US</td><td class="retired1">Predictor Columns</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0082)</td><td class="retired">US</td><td class="retired">Predictor Constants</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0090)</td><td class="retired1">CS</td><td class="retired1">Blocked Pixels</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0091)</td><td class="retired">US</td><td class="retired">Block Rows</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0092)</td><td class="retired1">US</td><td class="retired1">Block Columns</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0093)</td><td class="retired">US</td><td class="retired">Row Overlap</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0094)</td><td class="retired1">US</td><td class="retired1">Column Overlap</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,0100)</td><td>US</td><td>Bits Allocated</td><td></td></tr>
    <tr><td class="setColor">(0028,0101)</td><td class="setColor">US</td><td class="setColor">Bits Stored</td><td class="setColor"></td></tr>
    <tr><td>(0028,0102)</td><td>US</td><td>High Bit</td><td></td></tr>
    <tr><td class="setColor">(0028,0103)</td><td class="setColor">US</td><td class="setColor">Pixel Representation</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,0104)</td><td class="retired">US or SS</td><td class="retired">Smallest Valid Pixel Value</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0105)</td><td class="retired1">US or SS</td><td class="retired1">Largest Valid Pixel Value</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,0106)</td><td>US or SS</td><td>Smallest Image Pixel Value</td><td></td></tr>
    <tr><td class="setColor">(0028,0107)</td><td class="setColor">US or SS</td><td class="setColor">Largest Image Pixel Value</td><td class="setColor"></td></tr>
    <tr><td>(0028,0108)</td><td>US or SS</td><td>Smallest Pixel Value in Series</td><td></td></tr>
    <tr><td class="setColor">(0028,0109)</td><td class="setColor">US or SS</td><td class="setColor">Largest Pixel Value in Series</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,0110)</td><td class="retired">US or SS</td><td class="retired">Smallest Image Pixel Value in Plane</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0111)</td><td class="retired1">US or SS</td><td class="retired1">Largest Image Pixel Value in Plane</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,0120)</td><td>US or SS</td><td>Pixel Padding Value</td><td></td></tr>
    <tr><td class="setColor">(0028,0121)</td><td class="setColor">US or SS</td><td class="setColor">Pixel Padding Range Limit</td><td class="setColor"></td></tr>
    <tr><td>(0028,0122)</td><td>FL</td><td>Float Pixel Padding Value</td><td></td></tr>
    <tr><td class="setColor">(0028,0123)</td><td class="setColor">FD</td><td class="setColor">Double Float Pixel Padding Value</td><td class="setColor"></td></tr>
    <tr><td>(0028,0124)</td><td>FL</td><td>Float Pixel Padding Range Limit</td><td></td></tr>
    <tr><td class="setColor">(0028,0125)</td><td class="setColor">FD</td><td class="setColor">Double Float Pixel Padding Range Limit</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,0200)</td><td class="retired">US</td><td class="retired">Image Location</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,0300)</td><td class="setColor">CS</td><td class="setColor">Quality Control Image</td><td class="setColor"></td></tr>
    <tr><td>(0028,0301)</td><td>CS</td><td>Burned In Annotation</td><td></td></tr>
    <tr><td class="setColor">(0028,0302)</td><td class="setColor">CS</td><td class="setColor">Recognizable Visual Features</td><td class="setColor"></td></tr>
    <tr><td>(0028,0303)</td><td>CS</td><td>Longitudinal Temporal Information Modified</td><td></td></tr>
    <tr><td class="setColor">(0028,0304)</td><td class="setColor">UI</td><td class="setColor">Referenced Color Palette Instance UID</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,0400)</td><td class="retired">LO</td><td class="retired">Transform Label</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0401)</td><td class="retired1">LO</td><td class="retired1">Transform Version Number</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0402)</td><td class="retired">US</td><td class="retired">Number of Transform Steps</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0403)</td><td class="retired1">LO</td><td class="retired1">Sequence of Compressed Data</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0404)</td><td class="retired">AT</td><td class="retired">Details of Coefficients</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,04x0)</td><td class="retired1">US</td><td class="retired1">Rows For Nth Order Coefficients</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,04x1)</td><td class="retired">US</td><td class="retired">Columns For Nth Order Coefficients</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,04x2)</td><td class="retired1">LO</td><td class="retired1">Coefficient Coding</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,04x3)</td><td class="retired">AT</td><td class="retired">Coefficient Coding Pointers</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0700)</td><td class="retired1">LO</td><td class="retired1">DCT Label</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0701)</td><td class="retired">CS</td><td class="retired">Data Block Description</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0702)</td><td class="retired1">AT</td><td class="retired1">Data Block</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0710)</td><td class="retired">US</td><td class="retired">Normalization Factor Format</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0720)</td><td class="retired1">US</td><td class="retired1">Zonal Map Number Format</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0721)</td><td class="retired">AT</td><td class="retired">Zonal Map Location</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0722)</td><td class="retired1">US</td><td class="retired1">Zonal Map Format</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,0730)</td><td class="retired">US</td><td class="retired">Adaptive Map Format</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,0740)</td><td class="retired1">US</td><td class="retired1">Code Number Format</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,08x0)</td><td class="retired">CS</td><td class="retired">Code Label</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,08x2)</td><td class="retired1">US</td><td class="retired1">Number of Tables</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,08x3)</td><td class="retired">AT</td><td class="retired">Code Table Location</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,08x4)</td><td class="retired1">US</td><td class="retired1">Bits For Code Word</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,08x8)</td><td class="retired">AT</td><td class="retired">Image Data Location</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,0A02)</td><td class="setColor">CS</td><td class="setColor">Pixel Spacing Calibration Type</td><td class="setColor"></td></tr>
    <tr><td>(0028,0A04)</td><td>LO</td><td>Pixel Spacing Calibration Description</td><td></td></tr>
    <tr><td class="setColor">(0028,1040)</td><td class="setColor">CS</td><td class="setColor">Pixel Intensity Relationship</td><td class="setColor"></td></tr>
    <tr><td>(0028,1041)</td><td>SS</td><td>Pixel Intensity Relationship Sign</td><td></td></tr>
    <tr><td class="setColor">(0028,1050)</td><td class="setColor">DS</td><td class="setColor">Window Center</td><td class="setColor"></td></tr>
    <tr><td>(0028,1051)</td><td>DS</td><td>Window Width</td><td></td></tr>
    <tr><td class="setColor">(0028,1052)</td><td class="setColor">DS</td><td class="setColor">Rescale Intercept</td><td class="setColor"></td></tr>
    <tr><td>(0028,1053)</td><td>DS</td><td>Rescale Slope</td><td></td></tr>
    <tr><td class="setColor">(0028,1054)</td><td class="setColor">LO</td><td class="setColor">Rescale Type</td><td class="setColor"></td></tr>
    <tr><td>(0028,1055)</td><td>LO</td><td>Window Center & Width Explanation</td><td></td></tr>
    <tr><td class="setColor">(0028,1056)</td><td class="setColor">CS</td><td class="setColor">VOI LUT Function</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,1080)</td><td class="retired">CS</td><td class="retired">Gray Scale</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,1090)</td><td class="setColor">CS</td><td class="setColor">Recommended Viewing Mode</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,1100)</td><td class="retired">US or SS</td><td class="retired">Gray Lookup Table Descriptor</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,1101)</td><td class="setColor">US or SS</td><td class="setColor">Red Palette Color Lookup Table Descriptor</td><td class="setColor"></td></tr>
    <tr><td>(0028,1102)</td><td>US or SS</td><td>Green Palette Color Lookup Table Descriptor</td><td></td></tr>
    <tr><td class="setColor">(0028,1103)</td><td class="setColor">US or SS</td><td class="setColor">Blue Palette Color Lookup Table Descriptor</td><td class="setColor"></td></tr>
    <tr><td>(0028,1104)</td><td>US</td><td>Alpha Palette Color Lookup Table Descriptor</td><td></td></tr>
    <tr><td class="retired1">(0028,1111)</td><td class="retired1">US or SS</td><td class="retired1">Large Red Palette Color Lookup Table Descriptor</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,1112)</td><td class="retired">US or SS</td><td class="retired">Large Green Palette Color Lookup Table Descriptor</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,1113)</td><td class="retired1">US or SS</td><td class="retired1">Large Blue Palette Color Lookup Table Descriptor</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,1199)</td><td>UI</td><td>Palette Color Lookup Table UID</td><td></td></tr>
    <tr><td class="retired1">(0028,1200)</td><td class="retired1">US or SS or OW</td><td class="retired1">Gray Lookup Table Data</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,1201)</td><td>OW</td><td>Red Palette Color Lookup Table Data</td><td></td></tr>
    <tr><td class="setColor">(0028,1202)</td><td class="setColor">OW</td><td class="setColor">Green Palette Color Lookup Table Data</td><td class="setColor"></td></tr>
    <tr><td>(0028,1203)</td><td>OW</td><td>Blue Palette Color Lookup Table Data</td><td></td></tr>
    <tr><td class="setColor">(0028,1204)</td><td class="setColor">OW</td><td class="setColor">Alpha Palette Color Lookup Table Data</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,1211)</td><td class="retired">OW</td><td class="retired">Large Red Palette Color Lookup Table Data</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,1212)</td><td class="retired1">OW</td><td class="retired1">Large Green Palette Color Lookup Table Data</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,1213)</td><td class="retired">OW</td><td class="retired">Large Blue Palette Color Lookup Table Data</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0028,1214)</td><td class="retired1">UI</td><td class="retired1">Large Palette Color Lookup Table UID</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,1221)</td><td>OW</td><td>Segmented Red Palette Color Lookup Table Data</td><td></td></tr>
    <tr><td class="setColor">(0028,1222)</td><td class="setColor">OW</td><td class="setColor">Segmented Green Palette Color Lookup Table Data</td><td class="setColor"></td></tr>
    <tr><td>(0028,1223)</td><td>OW</td><td>Segmented Blue Palette Color Lookup Table Data</td><td></td></tr>
    <tr><td class="setColor">(0028,1224)</td><td class="setColor">OW</td><td class="setColor">Segmented Alpha Palette Color Lookup Table Data</td><td class="setColor"></td></tr>
    <tr><td>(0028,1300)</td><td>CS</td><td>Breast Implant Present</td><td></td></tr>
    <tr><td class="setColor">(0028,1350)</td><td class="setColor">CS</td><td class="setColor">Partial View</td><td class="setColor"></td></tr>
    <tr><td>(0028,1351)</td><td>ST</td><td>Partial View Description</td><td></td></tr>
    <tr><td class="setColor">(0028,1352)</td><td class="setColor">SQ</td><td class="setColor">Partial View Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,135A)</td><td>CS</td><td>Spatial Locations Preserved</td><td></td></tr>
    <tr><td class="setColor">(0028,1401)</td><td class="setColor">SQ</td><td class="setColor">Data Frame Assignment Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,1402)</td><td>CS</td><td>Data Path Assignment</td><td></td></tr>
    <tr><td class="setColor">(0028,1403)</td><td class="setColor">US</td><td class="setColor">Bits Mapped to Color Lookup Table</td><td class="setColor"></td></tr>
    <tr><td>(0028,1404)</td><td>SQ</td><td>Blending LUT 1 Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,1405)</td><td class="setColor">CS</td><td class="setColor">Blending LUT 1 Transfer Function</td><td class="setColor"></td></tr>
    <tr><td>(0028,1406)</td><td>FD</td><td>Blending Weight Constant</td><td></td></tr>
    <tr><td class="setColor">(0028,1407)</td><td class="setColor">US</td><td class="setColor">Blending Lookup Table Descriptor</td><td class="setColor"></td></tr>
    <tr><td>(0028,1408)</td><td>OW</td><td>Blending Lookup Table Data</td><td></td></tr>
    <tr><td class="setColor">(0028,140B)</td><td class="setColor">SQ</td><td class="setColor">Enhanced Palette Color Lookup Table Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,140C)</td><td>SQ</td><td>Blending LUT 2 Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,140D)</td><td class="setColor">CS</td><td class="setColor">Blending LUT 2 Transfer Function</td><td class="setColor"></td></tr>
    <tr><td>(0028,140E)</td><td>CS</td><td>Data Path ID</td><td></td></tr>
    <tr><td class="setColor">(0028,140F)</td><td class="setColor">CS</td><td class="setColor">RGB LUT Transfer Function</td><td class="setColor"></td></tr>
    <tr><td>(0028,1410)</td><td>CS</td><td>Alpha LUT Transfer Function</td><td></td></tr>
    <tr><td class="setColor">(0028,2000)</td><td class="setColor">OB</td><td class="setColor">ICC Profile</td><td class="setColor"></td></tr>
    <tr><td>(0028,2002)</td><td>CS</td><td>Color Space</td><td></td></tr>
    <tr><td class="setColor">(0028,2110)</td><td class="setColor">CS</td><td class="setColor">Lossy Image Compression</td><td class="setColor"></td></tr>
    <tr><td>(0028,2112)</td><td>DS</td><td>Lossy Image Compression Ratio</td><td></td></tr>
    <tr><td class="setColor">(0028,2114)</td><td class="setColor">CS</td><td class="setColor">Lossy Image Compression Method</td><td class="setColor"></td></tr>
    <tr><td>(0028,3000)</td><td>SQ</td><td>Modality LUT Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,3002)</td><td class="setColor">US or SS</td><td class="setColor">LUT Descriptor</td><td class="setColor"></td></tr>
    <tr><td>(0028,3003)</td><td>LO</td><td>LUT Explanation</td><td></td></tr>
    <tr><td class="setColor">(0028,3004)</td><td class="setColor">LO</td><td class="setColor">Modality LUT Type</td><td class="setColor"></td></tr>
    <tr><td>(0028,3006)</td><td>US or OW</td><td>LUT Data</td><td></td></tr>
    <tr><td class="setColor">(0028,3010)</td><td class="setColor">SQ</td><td class="setColor">VOI LUT Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,3110)</td><td>SQ</td><td>Softcopy VOI LUT Sequence</td><td></td></tr>
    <tr><td class="retired1">(0028,4000)</td><td class="retired1">LT</td><td class="retired1">Image Presentation Comments</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0028,5000)</td><td class="retired">SQ</td><td class="retired">Bi-Plane Acquisition Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,6010)</td><td class="setColor">US</td><td class="setColor">Representative Frame Number</td><td class="setColor"></td></tr>
    <tr><td>(0028,6020)</td><td>US</td><td>Frame Numbers of Interest (FOI)</td><td></td></tr>
    <tr><td class="setColor">(0028,6022)</td><td class="setColor">LO</td><td class="setColor">Frame of Interest Description</td><td class="setColor"></td></tr>
    <tr><td>(0028,6023)</td><td>CS</td><td>Frame of Interest Type</td><td></td></tr>
    <tr><td class="retired1">(0028,6030)</td><td class="retired1">US</td><td class="retired1">Mask Pointer(s)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0028,6040)</td><td>US</td><td>R Wave Pointer</td><td></td></tr>
    <tr><td class="setColor">(0028,6100)</td><td class="setColor">SQ</td><td class="setColor">Mask Subtraction Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,6101)</td><td>CS</td><td>Mask Operation</td><td></td></tr>
    <tr><td class="setColor">(0028,6102)</td><td class="setColor">US</td><td class="setColor">Applicable Frame Range</td><td class="setColor"></td></tr>
    <tr><td>(0028,6110)</td><td>US</td><td>Mask Frame Numbers</td><td></td></tr>
    <tr><td class="setColor">(0028,6112)</td><td class="setColor">US</td><td class="setColor">Contrast Frame Averaging</td><td class="setColor"></td></tr>
    <tr><td>(0028,6114)</td><td>FL</td><td>Mask Sub-pixel Shift</td><td></td></tr>
    <tr><td class="setColor">(0028,6120)</td><td class="setColor">SS</td><td class="setColor">TID Offset</td><td class="setColor"></td></tr>
    <tr><td>(0028,6190)</td><td>ST</td><td>Mask Operation Explanation</td><td></td></tr>
    <tr><td class="setColor">(0028,7000)</td><td class="setColor">SQ</td><td class="setColor">Equipment Administrator Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7001)</td><td>US</td><td>Number of Display Subsystems</td><td></td></tr>
    <tr><td class="setColor">(0028,7002)</td><td class="setColor">US</td><td class="setColor">Current Configuration ID</td><td class="setColor"></td></tr>
    <tr><td>(0028,7003)</td><td>US</td><td>Display Subsystem ID</td><td></td></tr>
    <tr><td class="setColor">(0028,7004)</td><td class="setColor">SH</td><td class="setColor">Display Subsystem Name</td><td class="setColor"></td></tr>
    <tr><td>(0028,7005)</td><td>LO</td><td>Display Subsystem Description</td><td></td></tr>
    <tr><td class="setColor">(0028,7006)</td><td class="setColor">CS</td><td class="setColor">System Status</td><td class="setColor"></td></tr>
    <tr><td>(0028,7007)</td><td>LO</td><td>System Status Comment</td><td></td></tr>
    <tr><td class="setColor">(0028,7008)</td><td class="setColor">SQ</td><td class="setColor">Target Luminance Characteristics Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7009)</td><td>US</td><td>Luminance Characteristics ID</td><td></td></tr>
    <tr><td class="setColor">(0028,700A)</td><td class="setColor">SQ</td><td class="setColor">Display Subsystem Configuration Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,700B)</td><td>US</td><td>Configuration ID</td><td></td></tr>
    <tr><td class="setColor">(0028,700C)</td><td class="setColor">SH</td><td class="setColor">Configuration Name</td><td class="setColor"></td></tr>
    <tr><td>(0028,700D)</td><td>LO</td><td>Configuration Description</td><td></td></tr>
    <tr><td class="setColor">(0028,700E)</td><td class="setColor">US</td><td class="setColor">Referenced Target Luminance Characteristics ID</td><td class="setColor"></td></tr>
    <tr><td>(0028,700F)</td><td>SQ</td><td>QA Results Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,7010)</td><td class="setColor">SQ</td><td class="setColor">Display Subsystem QA Results Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7011)</td><td>SQ</td><td>Configuration QA Results Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,7012)</td><td class="setColor">SQ</td><td class="setColor">Measurement Equipment Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7013)</td><td>CS</td><td>Measurement Functions</td><td></td></tr>
    <tr><td class="setColor">(0028,7014)</td><td class="setColor">CS</td><td class="setColor">Measurement Equipment Type</td><td class="setColor"></td></tr>
    <tr><td>(0028,7015)</td><td>SQ</td><td>Visual Evaluation Result Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,7016)</td><td class="setColor">SQ</td><td class="setColor">Display Calibration Result Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7017)</td><td>US</td><td>DDL Value</td><td></td></tr>
    <tr><td class="setColor">(0028,7018)</td><td class="setColor">FL</td><td class="setColor">CIExy White Point</td><td class="setColor"></td></tr>
    <tr><td>(0028,7019)</td><td>CS</td><td>Display Function Type</td><td></td></tr>
    <tr><td class="setColor">(0028,701A)</td><td class="setColor">FL</td><td class="setColor">Gamma Value</td><td class="setColor"></td></tr>
    <tr><td>(0028,701B)</td><td>US</td><td>Number of Luminance Points</td><td></td></tr>
    <tr><td class="setColor">(0028,701C)</td><td class="setColor">SQ</td><td class="setColor">Luminance Response Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,701D)</td><td>FL</td><td>Target Minimum Luminance</td><td></td></tr>
    <tr><td class="setColor">(0028,701E)</td><td class="setColor">FL</td><td class="setColor">Target Maximum Luminance</td><td class="setColor"></td></tr>
    <tr><td>(0028,701F)</td><td>FL</td><td>Luminance Value</td><td></td></tr>
    <tr><td class="setColor">(0028,7020)</td><td class="setColor">LO</td><td class="setColor">Luminance Response Description</td><td class="setColor"></td></tr>
    <tr><td>(0028,7021)</td><td>CS</td><td>White Point Flag</td><td></td></tr>
    <tr><td class="setColor">(0028,7022)</td><td class="setColor">SQ</td><td class="setColor">Display Device Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7023)</td><td>SQ</td><td>Display Subsystem Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,7024)</td><td class="setColor">SQ</td><td class="setColor">Luminance Result Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7025)</td><td>CS</td><td>Ambient Light Value Source</td><td></td></tr>
    <tr><td class="setColor">(0028,7026)</td><td class="setColor">CS</td><td class="setColor">Measured Characteristics</td><td class="setColor"></td></tr>
    <tr><td>(0028,7027)</td><td>SQ</td><td>Luminance Uniformity Result Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,7028)</td><td class="setColor">SQ</td><td class="setColor">Visual Evaluation Test Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7029)</td><td>CS</td><td>Test Result</td><td></td></tr>
    <tr><td class="setColor">(0028,702A)</td><td class="setColor">LO</td><td class="setColor">Test Result Comment</td><td class="setColor"></td></tr>
    <tr><td>(0028,702B)</td><td>CS</td><td>Test Image Validation</td><td></td></tr>
    <tr><td class="setColor">(0028,702C)</td><td class="setColor">SQ</td><td class="setColor">Test Pattern Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,702D)</td><td>SQ</td><td>Measurement Pattern Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,702E)</td><td class="setColor">SQ</td><td class="setColor">Visual Evaluation Method Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,7FE0)</td><td>UR</td><td>Pixel Data Provider URL</td><td></td></tr>
    <tr><td class="setColor">(0028,9001)</td><td class="setColor">UL</td><td class="setColor">Data Point Rows</td><td class="setColor"></td></tr>
    <tr><td>(0028,9002)</td><td>UL</td><td>Data Point Columns</td><td></td></tr>
    <tr><td class="setColor">(0028,9003)</td><td class="setColor">CS</td><td class="setColor">Signal Domain Columns</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0028,9099)</td><td class="retired">US</td><td class="retired">Largest Monochrome Pixel Value</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0028,9108)</td><td class="setColor">CS</td><td class="setColor">Data Representation</td><td class="setColor"></td></tr>
    <tr><td>(0028,9110)</td><td>SQ</td><td>Pixel Measures Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,9132)</td><td class="setColor">SQ</td><td class="setColor">Frame VOI LUT Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,9145)</td><td>SQ</td><td>Pixel Value Transformation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,9235)</td><td class="setColor">CS</td><td class="setColor">Signal Domain Rows</td><td class="setColor"></td></tr>
    <tr><td>(0028,9411)</td><td>FL</td><td>Display Filter Percentage</td><td></td></tr>
    <tr><td class="setColor">(0028,9415)</td><td class="setColor">SQ</td><td class="setColor">Frame Pixel Shift Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,9416)</td><td>US</td><td>Subtraction Item ID</td><td></td></tr>
    <tr><td class="setColor">(0028,9422)</td><td class="setColor">SQ</td><td class="setColor">Pixel Intensity Relationship LUT Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,9443)</td><td>SQ</td><td>Frame Pixel Data Properties Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,9444)</td><td class="setColor">CS</td><td class="setColor">Geometrical Properties</td><td class="setColor"></td></tr>
    <tr><td>(0028,9445)</td><td>FL</td><td>Geometric Maximum Distortion</td><td></td></tr>
    <tr><td class="setColor">(0028,9446)</td><td class="setColor">CS</td><td class="setColor">Image Processing Applied</td><td class="setColor"></td></tr>
    <tr><td>(0028,9454)</td><td>CS</td><td>Mask Selection Mode</td><td></td></tr>
    <tr><td class="setColor">(0028,9474)</td><td class="setColor">CS</td><td class="setColor">LUT Function</td><td class="setColor"></td></tr>
    <tr><td>(0028,9478)</td><td>FL</td><td>Mask Visibility Percentage</td><td></td></tr>
    <tr><td class="setColor">(0028,9501)</td><td class="setColor">SQ</td><td class="setColor">Pixel Shift Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0028,9502)</td><td>SQ</td><td>Region Pixel Shift Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,9503)</td><td class="setColor">SS</td><td class="setColor">Vertices of the Region</td><td class="setColor"></td></tr>
    <tr><td>(0028,9505)</td><td>SQ</td><td>Multi-frame Presentation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0028,9506)</td><td class="setColor">US</td><td class="setColor">Pixel Shift Frame Range</td><td class="setColor"></td></tr>
    <tr><td>(0028,9507)</td><td>US</td><td>LUT Frame Range</td><td></td></tr>
    <tr><td class="setColor">(0028,9520)</td><td class="setColor">DS</td><td class="setColor">Image to Equipment Mapping Matrix</td><td class="setColor"></td></tr>
    <tr><td>(0028,9537)</td><td>CS</td><td>Equipment Coordinate System Identification</td><td></td></tr>
    <tr><td class="retired1">(0032,000A)</td><td class="retired1">CS</td><td class="retired1">Study Status ID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,000C)</td><td class="retired">CS</td><td class="retired">Study Priority ID</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,0012)</td><td class="retired1">LO</td><td class="retired1">Study ID Issuer</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,0032)</td><td class="retired">DA</td><td class="retired">Study Verified Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,0033)</td><td class="retired1">TM</td><td class="retired1">Study Verified Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,0034)</td><td class="retired">DA</td><td class="retired">Study Read Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,0035)</td><td class="retired1">TM</td><td class="retired1">Study Read Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,1000)</td><td class="retired">DA</td><td class="retired">Scheduled Study Start Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,1001)</td><td class="retired1">TM</td><td class="retired1">Scheduled Study Start Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,1010)</td><td class="retired">DA</td><td class="retired">Scheduled Study Stop Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,1011)</td><td class="retired1">TM</td><td class="retired1">Scheduled Study Stop Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,1020)</td><td class="retired">LO</td><td class="retired">Scheduled Study Location</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,1021)</td><td class="retired1">AE</td><td class="retired1">Scheduled Study Location AE Title</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,1030)</td><td class="retired">LO</td><td class="retired">Reason for Study</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0032,1031)</td><td class="setColor">SQ</td><td class="setColor">Requesting Physician Identification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0032,1032)</td><td>PN</td><td>Requesting Physician</td><td></td></tr>
    <tr><td class="setColor">(0032,1033)</td><td class="setColor">LO</td><td class="setColor">Requesting Service</td><td class="setColor"></td></tr>
    <tr><td>(0032,1034)</td><td>SQ</td><td>Requesting Service Code Sequence</td><td></td></tr>
    <tr><td class="retired1">(0032,1040)</td><td class="retired1">DA</td><td class="retired1">Study Arrival Date</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,1041)</td><td class="retired">TM</td><td class="retired">Study Arrival Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,1050)</td><td class="retired1">DA</td><td class="retired1">Study Completion Date</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0032,1051)</td><td class="retired">TM</td><td class="retired">Study Completion Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0032,1055)</td><td class="retired1">CS</td><td class="retired1">Study Component Status ID</td><td class="retired1">Retired</td></tr>
    <tr><td>(0032,1060)</td><td>LO</td><td>Requested Procedure Description</td><td></td></tr>
    <tr><td class="setColor">(0032,1064)</td><td class="setColor">SQ</td><td class="setColor">Requested Procedure Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0032,1070)</td><td>LO</td><td>Requested Contrast Agent</td><td></td></tr>
    <tr><td class="retired1">(0032,4000)</td><td class="retired1">LT</td><td class="retired1">Study Comments</td><td class="retired1">Retired</td></tr>
    <tr><td>(0038,0004)</td><td>SQ</td><td>Referenced Patient Alias Sequence</td><td></td></tr>
    <tr><td class="setColor">(0038,0008)</td><td class="setColor">CS</td><td class="setColor">Visit Status ID</td><td class="setColor"></td></tr>
    <tr><td>(0038,0010)</td><td>LO</td><td>Admission ID</td><td></td></tr>
    <tr><td class="retired1">(0038,0011)</td><td class="retired1">LO</td><td class="retired1">Issuer of Admission ID</td><td class="retired1">Retired</td></tr>
    <tr><td>(0038,0014)</td><td>SQ</td><td>Issuer of Admission ID Sequence</td><td></td></tr>
    <tr><td class="setColor">(0038,0016)</td><td class="setColor">LO</td><td class="setColor">Route of Admissions</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0038,001A)</td><td class="retired">DA</td><td class="retired">Scheduled Admission Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0038,001B)</td><td class="retired1">TM</td><td class="retired1">Scheduled Admission Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0038,001C)</td><td class="retired">DA</td><td class="retired">Scheduled Discharge Date</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0038,001D)</td><td class="retired1">TM</td><td class="retired1">Scheduled Discharge Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0038,001E)</td><td class="retired">LO</td><td class="retired">Scheduled Patient Institution Residence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0038,0020)</td><td class="setColor">DA</td><td class="setColor">Admitting Date</td><td class="setColor"></td></tr>
    <tr><td>(0038,0021)</td><td>TM</td><td>Admitting Time</td><td></td></tr>
    <tr><td class="retired1">(0038,0030)</td><td class="retired1">DA</td><td class="retired1">Discharge Date</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0038,0032)</td><td class="retired">TM</td><td class="retired">Discharge Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0038,0040)</td><td class="retired1">LO</td><td class="retired1">Discharge Diagnosis Description</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0038,0044)</td><td class="retired">SQ</td><td class="retired">Discharge Diagnosis Code Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0038,0050)</td><td class="setColor">LO</td><td class="setColor">Special Needs</td><td class="setColor"></td></tr>
    <tr><td>(0038,0060)</td><td>LO</td><td>Service Episode ID</td><td></td></tr>
    <tr><td class="retired1">(0038,0061)</td><td class="retired1">LO</td><td class="retired1">Issuer of Service Episode ID</td><td class="retired1">Retired</td></tr>
    <tr><td>(0038,0062)</td><td>LO</td><td>Service Episode Description</td><td></td></tr>
    <tr><td class="setColor">(0038,0064)</td><td class="setColor">SQ</td><td class="setColor">Issuer of Service Episode ID Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0038,0100)</td><td>SQ</td><td>Pertinent Documents Sequence</td><td></td></tr>
    <tr><td class="setColor">(0038,0101)</td><td class="setColor">SQ</td><td class="setColor">Pertinent Resources Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0038,0102)</td><td>LO</td><td>Resource Description</td><td></td></tr>
    <tr><td class="setColor">(0038,0300)</td><td class="setColor">LO</td><td class="setColor">Current Patient Location</td><td class="setColor"></td></tr>
    <tr><td>(0038,0400)</td><td>LO</td><td>Patient's Institution Residence</td><td></td></tr>
    <tr><td class="setColor">(0038,0500)</td><td class="setColor">LO</td><td class="setColor">Patient State</td><td class="setColor"></td></tr>
    <tr><td>(0038,0502)</td><td>SQ</td><td>Patient Clinical Trial Participation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0038,4000)</td><td class="setColor">LT</td><td class="setColor">Visit Comments</td><td class="setColor"></td></tr>
    <tr><td>(003A,0004)</td><td>CS</td><td>Waveform Originality</td><td></td></tr>
    <tr><td class="setColor">(003A,0005)</td><td class="setColor">US</td><td class="setColor">Number of Waveform Channels</td><td class="setColor"></td></tr>
    <tr><td>(003A,0010)</td><td>UL</td><td>Number of Waveform Samples</td><td></td></tr>
    <tr><td class="setColor">(003A,001A)</td><td class="setColor">DS</td><td class="setColor">Sampling Frequency</td><td class="setColor"></td></tr>
    <tr><td>(003A,0020)</td><td>SH</td><td>Multiplex Group Label</td><td></td></tr>
    <tr><td class="setColor">(003A,0200)</td><td class="setColor">SQ</td><td class="setColor">Channel Definition Sequence</td><td class="setColor"></td></tr>
    <tr><td>(003A,0202)</td><td>IS</td><td>Waveform Channel Number</td><td></td></tr>
    <tr><td class="setColor">(003A,0203)</td><td class="setColor">SH</td><td class="setColor">Channel Label</td><td class="setColor"></td></tr>
    <tr><td>(003A,0205)</td><td>CS</td><td>Channel Status</td><td></td></tr>
    <tr><td class="setColor">(003A,0208)</td><td class="setColor">SQ</td><td class="setColor">Channel Source Sequence</td><td class="setColor"></td></tr>
    <tr><td>(003A,0209)</td><td>SQ</td><td>Channel Source Modifiers Sequence</td><td></td></tr>
    <tr><td class="setColor">(003A,020A)</td><td class="setColor">SQ</td><td class="setColor">Source Waveform Sequence</td><td class="setColor"></td></tr>
    <tr><td>(003A,020C)</td><td>LO</td><td>Channel Derivation Description</td><td></td></tr>
    <tr><td class="setColor">(003A,0210)</td><td class="setColor">DS</td><td class="setColor">Channel Sensitivity</td><td class="setColor"></td></tr>
    <tr><td>(003A,0211)</td><td>SQ</td><td>Channel Sensitivity Units Sequence</td><td></td></tr>
    <tr><td class="setColor">(003A,0212)</td><td class="setColor">DS</td><td class="setColor">Channel Sensitivity Correction Factor</td><td class="setColor"></td></tr>
    <tr><td>(003A,0213)</td><td>DS</td><td>Channel Baseline</td><td></td></tr>
    <tr><td class="setColor">(003A,0214)</td><td class="setColor">DS</td><td class="setColor">Channel Time Skew</td><td class="setColor"></td></tr>
    <tr><td>(003A,0215)</td><td>DS</td><td>Channel Sample Skew</td><td></td></tr>
    <tr><td class="setColor">(003A,0218)</td><td class="setColor">DS</td><td class="setColor">Channel Offset</td><td class="setColor"></td></tr>
    <tr><td>(003A,021A)</td><td>US</td><td>Waveform Bits Stored</td><td></td></tr>
    <tr><td class="setColor">(003A,0220)</td><td class="setColor">DS</td><td class="setColor">Filter Low Frequency</td><td class="setColor"></td></tr>
    <tr><td>(003A,0221)</td><td>DS</td><td>Filter High Frequency</td><td></td></tr>
    <tr><td class="setColor">(003A,0222)</td><td class="setColor">DS</td><td class="setColor">Notch Filter Frequency</td><td class="setColor"></td></tr>
    <tr><td>(003A,0223)</td><td>DS</td><td>Notch Filter Bandwidth</td><td></td></tr>
    <tr><td class="setColor">(003A,0230)</td><td class="setColor">FL</td><td class="setColor">Waveform Data Display Scale</td><td class="setColor"></td></tr>
    <tr><td>(003A,0231)</td><td>US</td><td>Waveform Display Background CIELab Value</td><td></td></tr>
    <tr><td class="setColor">(003A,0240)</td><td class="setColor">SQ</td><td class="setColor">Waveform Presentation Group Sequence</td><td class="setColor"></td></tr>
    <tr><td>(003A,0241)</td><td>US</td><td>Presentation Group Number</td><td></td></tr>
    <tr><td class="setColor">(003A,0242)</td><td class="setColor">SQ</td><td class="setColor">Channel Display Sequence</td><td class="setColor"></td></tr>
    <tr><td>(003A,0244)</td><td>US</td><td>Channel Recommended Display CIELab Value</td><td></td></tr>
    <tr><td class="setColor">(003A,0245)</td><td class="setColor">FL</td><td class="setColor">Channel Position</td><td class="setColor"></td></tr>
    <tr><td>(003A,0246)</td><td>CS</td><td>Display Shading Flag</td><td></td></tr>
    <tr><td class="setColor">(003A,0247)</td><td class="setColor">FL</td><td class="setColor">Fractional Channel Display Scale</td><td class="setColor"></td></tr>
    <tr><td>(003A,0248)</td><td>FL</td><td>Absolute Channel Display Scale</td><td></td></tr>
    <tr><td class="setColor">(003A,0300)</td><td class="setColor">SQ</td><td class="setColor">Multiplexed Audio Channels Description Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(003A,0301)</td><td>IS</td><td>Channel Identification Code</td><td></td></tr>
    <tr><td class="setColor">(003A,0302)</td><td class="setColor">CS</td><td class="setColor">Channel Mode</td><td class="setColor"></td></tr>
    <tr><td>(0040,0001)</td><td>AE</td><td>Scheduled Station AE Title</td><td></td></tr>
    <tr><td class="setColor">(0040,0002)</td><td class="setColor">DA</td><td class="setColor">Scheduled Procedure Step Start Date</td><td class="setColor"></td></tr>
    <tr><td>(0040,0003)</td><td>TM</td><td>Scheduled Procedure Step Start Time</td><td></td></tr>
    <tr><td class="setColor">(0040,0004)</td><td class="setColor">DA</td><td class="setColor">Scheduled Procedure Step End Date</td><td class="setColor"></td></tr>
    <tr><td>(0040,0005)</td><td>TM</td><td>Scheduled Procedure Step End Time</td><td></td></tr>
    <tr><td class="setColor">(0040,0006)</td><td class="setColor">PN</td><td class="setColor">Scheduled Performing Physician's Name</td><td class="setColor"></td></tr>
    <tr><td>(0040,0007)</td><td>LO</td><td>Scheduled Procedure Step Description</td><td></td></tr>
    <tr><td class="setColor">(0040,0008)</td><td class="setColor">SQ</td><td class="setColor">Scheduled Protocol Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0009)</td><td>SH</td><td>Scheduled Procedure Step ID</td><td></td></tr>
    <tr><td class="setColor">(0040,000A)</td><td class="setColor">SQ</td><td class="setColor">Stage Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,000B)</td><td>SQ</td><td>Scheduled Performing Physician Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0010)</td><td class="setColor">SH</td><td class="setColor">Scheduled Station Name</td><td class="setColor"></td></tr>
    <tr><td>(0040,0011)</td><td>SH</td><td>Scheduled Procedure Step Location</td><td></td></tr>
    <tr><td class="setColor">(0040,0012)</td><td class="setColor">LO</td><td class="setColor">Pre-Medication</td><td class="setColor"></td></tr>
    <tr><td>(0040,0020)</td><td>CS</td><td>Scheduled Procedure Step Status</td><td></td></tr>
    <tr><td class="setColor">(0040,0026)</td><td class="setColor">SQ</td><td class="setColor">Order Placer Identifier Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0027)</td><td>SQ</td><td>Order Filler Identifier Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0031)</td><td class="setColor">UT</td><td class="setColor">Local Namespace Entity ID</td><td class="setColor"></td></tr>
    <tr><td>(0040,0032)</td><td>UT</td><td>Universal Entity ID</td><td></td></tr>
    <tr><td class="setColor">(0040,0033)</td><td class="setColor">CS</td><td class="setColor">Universal Entity ID Type</td><td class="setColor"></td></tr>
    <tr><td>(0040,0035)</td><td>CS</td><td>Identifier Type Code</td><td></td></tr>
    <tr><td class="setColor">(0040,0036)</td><td class="setColor">SQ</td><td class="setColor">Assigning Facility Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0039)</td><td>SQ</td><td>Assigning Jurisdiction Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,003A)</td><td class="setColor">SQ</td><td class="setColor">Assigning Agency or Department Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0100)</td><td>SQ</td><td>Scheduled Procedure Step Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0220)</td><td class="setColor">SQ</td><td class="setColor">Referenced Non-Image Composite SOP Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0241)</td><td>AE</td><td>Performed Station AE Title</td><td></td></tr>
    <tr><td class="setColor">(0040,0242)</td><td class="setColor">SH</td><td class="setColor">Performed Station Name</td><td class="setColor"></td></tr>
    <tr><td>(0040,0243)</td><td>SH</td><td>Performed Location</td><td></td></tr>
    <tr><td class="setColor">(0040,0244)</td><td class="setColor">DA</td><td class="setColor">Performed Procedure Step Start Date</td><td class="setColor"></td></tr>
    <tr><td>(0040,0245)</td><td>TM</td><td>Performed Procedure Step Start Time</td><td></td></tr>
    <tr><td class="setColor">(0040,0250)</td><td class="setColor">DA</td><td class="setColor">Performed Procedure Step End Date</td><td class="setColor"></td></tr>
    <tr><td>(0040,0251)</td><td>TM</td><td>Performed Procedure Step End Time</td><td></td></tr>
    <tr><td class="setColor">(0040,0252)</td><td class="setColor">CS</td><td class="setColor">Performed Procedure Step Status</td><td class="setColor"></td></tr>
    <tr><td>(0040,0253)</td><td>SH</td><td>Performed Procedure Step ID</td><td></td></tr>
    <tr><td class="setColor">(0040,0254)</td><td class="setColor">LO</td><td class="setColor">Performed Procedure Step Description</td><td class="setColor"></td></tr>
    <tr><td>(0040,0255)</td><td>LO</td><td>Performed Procedure Type Description</td><td></td></tr>
    <tr><td class="setColor">(0040,0260)</td><td class="setColor">SQ</td><td class="setColor">Performed Protocol Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0261)</td><td>CS</td><td>Performed Protocol Type</td><td></td></tr>
    <tr><td class="setColor">(0040,0270)</td><td class="setColor">SQ</td><td class="setColor">Scheduled Step Attributes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0275)</td><td>SQ</td><td>Request Attributes Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0280)</td><td class="setColor">ST</td><td class="setColor">Comments on the Performed Procedure Step</td><td class="setColor"></td></tr>
    <tr><td>(0040,0281)</td><td>SQ</td><td>Performed Procedure Step Discontinuation Reason Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0293)</td><td class="setColor">SQ</td><td class="setColor">Quantity Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0294)</td><td>DS</td><td>Quantity</td><td></td></tr>
    <tr><td class="setColor">(0040,0295)</td><td class="setColor">SQ</td><td class="setColor">Measuring Units Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0296)</td><td>SQ</td><td>Billing Item Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0300)</td><td class="setColor">US</td><td class="setColor">Total Time of Fluoroscopy</td><td class="setColor"></td></tr>
    <tr><td>(0040,0301)</td><td>US</td><td>Total Number of Exposures</td><td></td></tr>
    <tr><td class="setColor">(0040,0302)</td><td class="setColor">US</td><td class="setColor">Entrance Dose</td><td class="setColor"></td></tr>
    <tr><td>(0040,0303)</td><td>US</td><td>Exposed Area</td><td></td></tr>
    <tr><td class="setColor">(0040,0306)</td><td class="setColor">DS</td><td class="setColor">Distance Source to Entrance</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,0307)</td><td class="retired">DS</td><td class="retired">Distance Source to Support</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,030E)</td><td class="setColor">SQ</td><td class="setColor">Exposure Dose Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0310)</td><td>ST</td><td>Comments on Radiation Dose</td><td></td></tr>
    <tr><td class="setColor">(0040,0312)</td><td class="setColor">DS</td><td class="setColor">X-Ray Output</td><td class="setColor"></td></tr>
    <tr><td>(0040,0314)</td><td>DS</td><td>Half Value Layer</td><td></td></tr>
    <tr><td class="setColor">(0040,0316)</td><td class="setColor">DS</td><td class="setColor">Organ Dose</td><td class="setColor"></td></tr>
    <tr><td>(0040,0318)</td><td>CS</td><td>Organ Exposed</td><td></td></tr>
    <tr><td class="setColor">(0040,0320)</td><td class="setColor">SQ</td><td class="setColor">Billing Procedure Step Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0321)</td><td>SQ</td><td>Film Consumption Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0324)</td><td class="setColor">SQ</td><td class="setColor">Billing Supplies and Devices Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,0330)</td><td class="retired">SQ</td><td class="retired">Referenced Procedure Step Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,0340)</td><td class="setColor">SQ</td><td class="setColor">Performed Series Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0400)</td><td>LT</td><td>Comments on the Scheduled Procedure Step</td><td></td></tr>
    <tr><td class="setColor">(0040,0440)</td><td class="setColor">SQ</td><td class="setColor">Protocol Context Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0441)</td><td>SQ</td><td>Content Item Modifier Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0500)</td><td class="setColor">SQ</td><td class="setColor">Scheduled Specimen Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,050A)</td><td class="retired">LO</td><td class="retired">Specimen Accession Number</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,0512)</td><td class="setColor">LO</td><td class="setColor">Container Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0040,0513)</td><td>SQ</td><td>Issuer of the Container Identifier Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0515)</td><td class="setColor">SQ</td><td class="setColor">Alternate Container Identifier Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0518)</td><td>SQ</td><td>Container Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,051A)</td><td class="setColor">LO</td><td class="setColor">Container Description</td><td class="setColor"></td></tr>
    <tr><td>(0040,0520)</td><td>SQ</td><td>Container Component Sequence</td><td></td></tr>
    <tr><td class="retired1">(0040,0550)</td><td class="retired1">SQ</td><td class="retired1">Specimen Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,0551)</td><td>LO</td><td>Specimen Identifier</td><td></td></tr>
    <tr><td class="retired1">(0040,0552)</td><td class="retired1">SQ</td><td class="retired1">Specimen Description Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,0553)</td><td class="retired">ST</td><td class="retired">Specimen Description (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,0554)</td><td class="setColor">UI</td><td class="setColor">Specimen UID</td><td class="setColor"></td></tr>
    <tr><td>(0040,0555)</td><td>SQ</td><td>Acquisition Context Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0556)</td><td class="setColor">ST</td><td class="setColor">Acquisition Context Description</td><td class="setColor"></td></tr>
    <tr><td>(0040,059A)</td><td>SQ</td><td>Specimen Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0560)</td><td class="setColor">SQ</td><td class="setColor">Specimen Description Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0562)</td><td>SQ</td><td>Issuer of the Specimen Identifier Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0600)</td><td class="setColor">LO</td><td class="setColor">Specimen Short Description</td><td class="setColor"></td></tr>
    <tr><td>(0040,0602)</td><td>UT</td><td>Specimen Detailed Description</td><td></td></tr>
    <tr><td class="setColor">(0040,0610)</td><td class="setColor">SQ</td><td class="setColor">Specimen Preparation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,0612)</td><td>SQ</td><td>Specimen Preparation Step Content Item Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,0620)</td><td class="setColor">SQ</td><td class="setColor">Specimen Localization Content Item Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,06FA)</td><td class="retired">LO</td><td class="retired">Slide Identifier</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,071A)</td><td class="setColor">SQ</td><td class="setColor">Image Center Point Coordinates Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,072A)</td><td>DS</td><td>X Offset in Slide Coordinate System</td><td></td></tr>
    <tr><td class="setColor">(0040,073A)</td><td class="setColor">DS</td><td class="setColor">Y Offset in Slide Coordinate System</td><td class="setColor"></td></tr>
    <tr><td>(0040,074A)</td><td>DS</td><td>Z Offset in Slide Coordinate System</td><td></td></tr>
    <tr><td class="retired1">(0040,08D8)</td><td class="retired1">SQ</td><td class="retired1">Pixel Spacing Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,08DA)</td><td class="retired">SQ</td><td class="retired">Coordinate System Axis Code Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,08EA)</td><td class="setColor">SQ</td><td class="setColor">Measurement Units Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,09F8)</td><td class="retired">SQ</td><td class="retired">Vital Stain Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,1001)</td><td class="setColor">SH</td><td class="setColor">Requested Procedure ID</td><td class="setColor"></td></tr>
    <tr><td>(0040,1002)</td><td>LO</td><td>Reason for the Requested Procedure</td><td></td></tr>
    <tr><td class="setColor">(0040,1003)</td><td class="setColor">SH</td><td class="setColor">Requested Procedure Priority</td><td class="setColor"></td></tr>
    <tr><td>(0040,1004)</td><td>LO</td><td>Patient Transport Arrangements</td><td></td></tr>
    <tr><td class="setColor">(0040,1005)</td><td class="setColor">LO</td><td class="setColor">Requested Procedure Location</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,1006)</td><td class="retired">SH</td><td class="retired">Placer Order Number / Procedure</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,1007)</td><td class="retired1">SH</td><td class="retired1">Filler Order Number / Procedure</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,1008)</td><td>LO</td><td>Confidentiality Code</td><td></td></tr>
    <tr><td class="setColor">(0040,1009)</td><td class="setColor">SH</td><td class="setColor">Reporting Priority</td><td class="setColor"></td></tr>
    <tr><td>(0040,100A)</td><td>SQ</td><td>Reason for Requested Procedure Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,1010)</td><td class="setColor">PN</td><td class="setColor">Names of Intended Recipients of Results</td><td class="setColor"></td></tr>
    <tr><td>(0040,1011)</td><td>SQ</td><td>Intended Recipients of Results Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,1012)</td><td class="setColor">SQ</td><td class="setColor">Reason For Performed Procedure Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,1060)</td><td class="retired">LO</td><td class="retired">Requested Procedure Description (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,1101)</td><td class="setColor">SQ</td><td class="setColor">Person Identification Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,1102)</td><td>ST</td><td>Person's Address</td><td></td></tr>
    <tr><td class="setColor">(0040,1103)</td><td class="setColor">LO</td><td class="setColor">Person's Telephone Numbers</td><td class="setColor"></td></tr>
    <tr><td>(0040,1104)</td><td>LT</td><td>Person's Telecom Information</td><td></td></tr>
    <tr><td class="setColor">(0040,1400)</td><td class="setColor">LT</td><td class="setColor">Requested Procedure Comments</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,2001)</td><td class="retired">LO</td><td class="retired">Reason for the Imaging Service Request</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,2004)</td><td class="setColor">DA</td><td class="setColor">Issue Date of Imaging Service Request</td><td class="setColor"></td></tr>
    <tr><td>(0040,2005)</td><td>TM</td><td>Issue Time of Imaging Service Request</td><td></td></tr>
    <tr><td class="retired1">(0040,2006)</td><td class="retired1">SH</td><td class="retired1">Placer Order Number / Imaging Service Request (Retired)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,2007)</td><td class="retired">SH</td><td class="retired">Filler Order Number / Imaging Service Request (Retired)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,2008)</td><td class="setColor">PN</td><td class="setColor">Order Entered By</td><td class="setColor"></td></tr>
    <tr><td>(0040,2009)</td><td>SH</td><td>Order Enterer's Location</td><td></td></tr>
    <tr><td class="setColor">(0040,2010)</td><td class="setColor">SH</td><td class="setColor">Order Callback Phone Number</td><td class="setColor"></td></tr>
    <tr><td>(0040,2011)</td><td>LT</td><td>Order Callback Telecom Information</td><td></td></tr>
    <tr><td class="setColor">(0040,2016)</td><td class="setColor">LO</td><td class="setColor">Placer Order Number / Imaging Service Request</td><td class="setColor"></td></tr>
    <tr><td>(0040,2017)</td><td>LO</td><td>Filler Order Number / Imaging Service Request</td><td></td></tr>
    <tr><td class="setColor">(0040,2400)</td><td class="setColor">LT</td><td class="setColor">Imaging Service Request Comments</td><td class="setColor"></td></tr>
    <tr><td>(0040,3001)</td><td>LO</td><td>Confidentiality Constraint on Patient Data Description</td><td></td></tr>
    <tr><td class="retired1">(0040,4001)</td><td class="retired1">CS</td><td class="retired1">General Purpose Scheduled Procedure Step Status</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,4002)</td><td class="retired">CS</td><td class="retired">General Purpose Performed Procedure Step Status</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,4003)</td><td class="retired1">CS</td><td class="retired1">General Purpose Scheduled Procedure Step Priority</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,4004)</td><td class="retired">SQ</td><td class="retired">Scheduled Processing Applications Code Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,4005)</td><td class="setColor">DT</td><td class="setColor">Scheduled Procedure Step Start DateTime</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,4006)</td><td class="retired">CS</td><td class="retired">Multiple Copies Flag</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,4007)</td><td class="setColor">SQ</td><td class="setColor">Performed Processing Applications Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4009)</td><td>SQ</td><td>Human Performer Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,4010)</td><td class="setColor">DT</td><td class="setColor">Scheduled Procedure Step Modification DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0040,4011)</td><td>DT</td><td>Expected Completion DateTime</td><td></td></tr>
    <tr><td class="retired1">(0040,4015)</td><td class="retired1">SQ</td><td class="retired1">Resulting General Purpose Performed Procedure Steps Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,4016)</td><td class="retired">SQ</td><td class="retired">Referenced General Purpose Scheduled Procedure Step Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,4018)</td><td class="setColor">SQ</td><td class="setColor">Scheduled Workitem Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4019)</td><td>SQ</td><td>Performed Workitem Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,4020)</td><td class="setColor">CS</td><td class="setColor">Input Availability Flag</td><td class="setColor"></td></tr>
    <tr><td>(0040,4021)</td><td>SQ</td><td>Input Information Sequence</td><td></td></tr>
    <tr><td class="retired1">(0040,4022)</td><td class="retired1">SQ</td><td class="retired1">Relevant Information Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,4023)</td><td class="retired">UI</td><td class="retired">Referenced General Purpose Scheduled Procedure Step Transaction UID</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,4025)</td><td class="setColor">SQ</td><td class="setColor">Scheduled Station Name Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4026)</td><td>SQ</td><td>Scheduled Station Class Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,4027)</td><td class="setColor">SQ</td><td class="setColor">Scheduled Station Geographic Location Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4028)</td><td>SQ</td><td>Performed Station Name Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,4029)</td><td class="setColor">SQ</td><td class="setColor">Performed Station Class Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4030)</td><td>SQ</td><td>Performed Station Geographic Location Code Sequence</td><td></td></tr>
    <tr><td class="retired1">(0040,4031)</td><td class="retired1">SQ</td><td class="retired1">Requested Subsequent Workitem Code Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,4032)</td><td class="retired">SQ</td><td class="retired">Non-DICOM Output Code Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,4033)</td><td class="setColor">SQ</td><td class="setColor">Output Information Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4034)</td><td>SQ</td><td>Scheduled Human Performers Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,4035)</td><td class="setColor">SQ</td><td class="setColor">Actual Human Performers Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4036)</td><td>LO</td><td>Human Performer's Organization</td><td></td></tr>
    <tr><td class="setColor">(0040,4037)</td><td class="setColor">PN</td><td class="setColor">Human Performer's Name</td><td class="setColor"></td></tr>
    <tr><td>(0040,4040)</td><td>CS</td><td>Raw Data Handling</td><td></td></tr>
    <tr><td class="setColor">(0040,4041)</td><td class="setColor">CS</td><td class="setColor">Input Readiness State</td><td class="setColor"></td></tr>
    <tr><td>(0040,4050)</td><td>DT</td><td>Performed Procedure Step Start DateTime</td><td></td></tr>
    <tr><td class="setColor">(0040,4051)</td><td class="setColor">DT</td><td class="setColor">Performed Procedure Step End DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0040,4052)</td><td>DT</td><td>Procedure Step Cancellation DateTime</td><td></td></tr>
    <tr><td class="setColor">(0040,4070)</td><td class="setColor">SQ</td><td class="setColor">Output Destination Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4071)</td><td>SQ</td><td>DICOM Storage Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,4072)</td><td class="setColor">SQ</td><td class="setColor">STOW-RS Storage Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,4073)</td><td>UR</td><td>Storage URL</td><td></td></tr>
    <tr><td class="setColor">(0040,4074)</td><td class="setColor">SQ</td><td class="setColor">XDS Storage Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,8302)</td><td>DS</td><td>Entrance Dose in mGy</td><td></td></tr>
    <tr><td class="setColor">(0040,9092)</td><td class="setColor">SQ</td><td class="setColor">Parametric Map Frame Type Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,9094)</td><td>SQ</td><td>Referenced Image Real World Value Mapping Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,9096)</td><td class="setColor">SQ</td><td class="setColor">Real World Value Mapping Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,9098)</td><td>SQ</td><td>Pixel Value Mapping Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,9210)</td><td class="setColor">SH</td><td class="setColor">LUT Label</td><td class="setColor"></td></tr>
    <tr><td>(0040,9211)</td><td>US or SS</td><td>Real World Value Last Value Mapped</td><td></td></tr>
    <tr><td class="setColor">(0040,9212)</td><td class="setColor">FD</td><td class="setColor">Real World Value LUT Data</td><td class="setColor"></td></tr>
    <tr><td>(0040,9213)</td><td>FD</td><td>Double Float Real World Value Last Value Mapped</td><td></td></tr>
    <tr><td class="setColor">(0040,9214)</td><td class="setColor">FD</td><td class="setColor">Double Float Real World Value First Value Mapped</td><td class="setColor"></td></tr>
    <tr><td>(0040,9216)</td><td>US or SS</td><td>Real World Value First Value Mapped</td><td></td></tr>
    <tr><td class="setColor">(0040,9220)</td><td class="setColor">SQ</td><td class="setColor">Quantity Definition Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,9224)</td><td>FD</td><td>Real World Value Intercept</td><td></td></tr>
    <tr><td class="setColor">(0040,9225)</td><td class="setColor">FD</td><td class="setColor">Real World Value Slope</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A007)</td><td class="retired">CS</td><td class="retired">Findings Flag (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A010)</td><td class="setColor">CS</td><td class="setColor">Relationship Type</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A020)</td><td class="retired">SQ</td><td class="retired">Findings Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A021)</td><td class="retired1">UI</td><td class="retired1">Findings Group UID (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A022)</td><td class="retired">UI</td><td class="retired">Referenced Findings Group UID (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A023)</td><td class="retired1">DA</td><td class="retired1">Findings Group Recording Date (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A024)</td><td class="retired">TM</td><td class="retired">Findings Group Recording Time (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A026)</td><td class="retired1">SQ</td><td class="retired1">Findings Source Category Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A027)</td><td>LO</td><td>Verifying Organization</td><td></td></tr>
    <tr><td class="retired1">(0040,A028)</td><td class="retired1">SQ</td><td class="retired1">Documenting Organization Identifier Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A030)</td><td>DT</td><td>Verification DateTime</td><td></td></tr>
    <tr><td class="setColor">(0040,A032)</td><td class="setColor">DT</td><td class="setColor">Observation DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0040,A040)</td><td>CS</td><td>Value Type</td><td></td></tr>
    <tr><td class="setColor">(0040,A043)</td><td class="setColor">SQ</td><td class="setColor">Concept Name Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A047)</td><td class="retired">LO</td><td class="retired">Measurement Precision Description (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A050)</td><td class="setColor">CS</td><td class="setColor">Continuity Of Content</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A057)</td><td class="retired">CS</td><td class="retired">Urgency or Priority Alerts (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A060)</td><td class="retired1">LO</td><td class="retired1">Sequencing Indicator (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A066)</td><td class="retired">SQ</td><td class="retired">Document Identifier Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A067)</td><td class="retired1">PN</td><td class="retired1">Document Author (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A068)</td><td class="retired">SQ</td><td class="retired">Document Author Identifier Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A070)</td><td class="retired1">SQ</td><td class="retired1">Identifier Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A073)</td><td>SQ</td><td>Verifying Observer Sequence</td><td></td></tr>
    <tr><td class="retired1">(0040,A074)</td><td class="retired1">OB</td><td class="retired1">Object Binary Identifier (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A075)</td><td>PN</td><td>Verifying Observer Name</td><td></td></tr>
    <tr><td class="retired1">(0040,A076)</td><td class="retired1">SQ</td><td class="retired1">Documenting Observer Identifier Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A078)</td><td>SQ</td><td>Author Observer Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,A07A)</td><td class="setColor">SQ</td><td class="setColor">Participant Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,A07C)</td><td>SQ</td><td>Custodial Organization Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,A080)</td><td class="setColor">CS</td><td class="setColor">Participation Type</td><td class="setColor"></td></tr>
    <tr><td>(0040,A082)</td><td>DT</td><td>Participation DateTime</td><td></td></tr>
    <tr><td class="setColor">(0040,A084)</td><td class="setColor">CS</td><td class="setColor">Observer Type</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A085)</td><td class="retired">SQ</td><td class="retired">Procedure Identifier Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A088)</td><td class="setColor">SQ</td><td class="setColor">Verifying Observer Identification Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A089)</td><td class="retired">OB</td><td class="retired">Object Directory Binary Identifier (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A090)</td><td class="retired1">SQ</td><td class="retired1">Equivalent CDA Document Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A0B0)</td><td>US</td><td>Referenced Waveform Channels</td><td></td></tr>
    <tr><td class="retired1">(0040,A110)</td><td class="retired1">DA</td><td class="retired1">Date of Document or Verbal Transaction (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A112)</td><td class="retired">TM</td><td class="retired">Time of Document Creation or Verbal Transaction (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A120)</td><td class="setColor">DT</td><td class="setColor">DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0040,A121)</td><td>DA</td><td>Date</td><td></td></tr>
    <tr><td class="setColor">(0040,A122)</td><td class="setColor">TM</td><td class="setColor">Time</td><td class="setColor"></td></tr>
    <tr><td>(0040,A123)</td><td>PN</td><td>Person Name</td><td></td></tr>
    <tr><td class="setColor">(0040,A124)</td><td class="setColor">UI</td><td class="setColor">UID</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A125)</td><td class="retired">CS</td><td class="retired">Report Status ID (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A130)</td><td class="setColor">CS</td><td class="setColor">Temporal Range Type</td><td class="setColor"></td></tr>
    <tr><td>(0040,A132)</td><td>UL</td><td>Referenced Sample Positions</td><td></td></tr>
    <tr><td class="setColor">(0040,A136)</td><td class="setColor">US</td><td class="setColor">Referenced Frame Numbers</td><td class="setColor"></td></tr>
    <tr><td>(0040,A138)</td><td>DS</td><td>Referenced Time Offsets</td><td></td></tr>
    <tr><td class="setColor">(0040,A13A)</td><td class="setColor">DT</td><td class="setColor">Referenced DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0040,A160)</td><td>UT</td><td>Text Value</td><td></td></tr>
    <tr><td class="setColor">(0040,A161)</td><td class="setColor">FD</td><td class="setColor">Floating Point Value</td><td class="setColor"></td></tr>
    <tr><td>(0040,A162)</td><td>SL</td><td>Rational Numerator Value</td><td></td></tr>
    <tr><td class="setColor">(0040,A163)</td><td class="setColor">UL</td><td class="setColor">Rational Denominator Value</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A167)</td><td class="retired">SQ</td><td class="retired">Observation Category Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A168)</td><td class="setColor">SQ</td><td class="setColor">Concept Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A16A)</td><td class="retired">ST</td><td class="retired">Bibliographic Citation (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A170)</td><td class="setColor">SQ</td><td class="setColor">Purpose of Reference Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,A171)</td><td>UI</td><td>Observation UID</td><td></td></tr>
    <tr><td class="retired1">(0040,A172)</td><td class="retired1">UI</td><td class="retired1">Referenced Observation UID (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A173)</td><td class="retired">CS</td><td class="retired">Referenced Observation Class (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A174)</td><td class="retired1">CS</td><td class="retired1">Referenced Object Observation Class (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A180)</td><td>US</td><td>Annotation Group Number</td><td></td></tr>
    <tr><td class="retired1">(0040,A192)</td><td class="retired1">DA</td><td class="retired1">Observation Date (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A193)</td><td class="retired">TM</td><td class="retired">Observation Time (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A194)</td><td class="retired1">CS</td><td class="retired1">Measurement Automation (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A195)</td><td>SQ</td><td>Modifier Code Sequence</td><td></td></tr>
    <tr><td class="retired1">(0040,A224)</td><td class="retired1">ST</td><td class="retired1">Identification Description (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A290)</td><td class="retired">CS</td><td class="retired">Coordinates Set Geometric Type (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A296)</td><td class="retired1">SQ</td><td class="retired1">Algorithm Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A297)</td><td class="retired">ST</td><td class="retired">Algorithm Description (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A29A)</td><td class="retired1">SL</td><td class="retired1">Pixel Coordinates Set (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A300)</td><td>SQ</td><td>Measured Value Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,A301)</td><td class="setColor">SQ</td><td class="setColor">Numeric Value Qualifier Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A307)</td><td class="retired">PN</td><td class="retired">Current Observer (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A30A)</td><td class="setColor">DS</td><td class="setColor">Numeric Value</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A313)</td><td class="retired">SQ</td><td class="retired">Referenced Accession Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A33A)</td><td class="retired1">ST</td><td class="retired1">Report Status Comment (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A340)</td><td class="retired">SQ</td><td class="retired">Procedure Context Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A352)</td><td class="retired1">PN</td><td class="retired1">Verbal Source (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A353)</td><td class="retired">ST</td><td class="retired">Address (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A354)</td><td class="retired1">LO</td><td class="retired1">Telephone Number (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A358)</td><td class="retired">SQ</td><td class="retired">Verbal Source Identifier Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A360)</td><td class="setColor">SQ</td><td class="setColor">Predecessor Documents Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,A370)</td><td>SQ</td><td>Referenced Request Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,A372)</td><td class="setColor">SQ</td><td class="setColor">Performed Procedure Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,A375)</td><td>SQ</td><td>Current Requested Procedure Evidence Sequence</td><td></td></tr>
    <tr><td class="retired1">(0040,A380)</td><td class="retired1">SQ</td><td class="retired1">Report Detail Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,A385)</td><td>SQ</td><td>Pertinent Other Evidence Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,A390)</td><td class="setColor">SQ</td><td class="setColor">HL7 Structured Document Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A402)</td><td class="retired">UI</td><td class="retired">Observation Subject UID (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A403)</td><td class="retired1">CS</td><td class="retired1">Observation Subject Class (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A404)</td><td class="retired">SQ</td><td class="retired">Observation Subject Type Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A491)</td><td class="setColor">CS</td><td class="setColor">Completion Flag</td><td class="setColor"></td></tr>
    <tr><td>(0040,A492)</td><td>LO</td><td>Completion Flag Description</td><td></td></tr>
    <tr><td class="setColor">(0040,A493)</td><td class="setColor">CS</td><td class="setColor">Verification Flag</td><td class="setColor"></td></tr>
    <tr><td>(0040,A494)</td><td>CS</td><td>Archive Requested</td><td></td></tr>
    <tr><td class="setColor">(0040,A496)</td><td class="setColor">CS</td><td class="setColor">Preliminary Flag</td><td class="setColor"></td></tr>
    <tr><td>(0040,A504)</td><td>SQ</td><td>Content Template Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,A525)</td><td class="setColor">SQ</td><td class="setColor">Identical Documents Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A600)</td><td class="retired">CS</td><td class="retired">Observation Subject Context Flag (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A601)</td><td class="retired1">CS</td><td class="retired1">Observer Context Flag (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A603)</td><td class="retired">CS</td><td class="retired">Procedure Context Flag (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,A730)</td><td class="setColor">SQ</td><td class="setColor">Content Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,A731)</td><td class="retired">SQ</td><td class="retired">Relationship Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A732)</td><td class="retired1">SQ</td><td class="retired1">Relationship Type Code Sequence (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,A744)</td><td class="retired">SQ</td><td class="retired">Language Code Sequence (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,A992)</td><td class="retired1">ST</td><td class="retired1">Uniform Resource Locator (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0040,B020)</td><td>SQ</td><td>Waveform Annotation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,DB00)</td><td class="setColor">CS</td><td class="setColor">Template Identifier</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0040,DB06)</td><td class="retired">DT</td><td class="retired">Template Version</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,DB07)</td><td class="retired1">DT</td><td class="retired1">Template Local Version</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,DB0B)</td><td class="retired">CS</td><td class="retired">Template Extension Flag</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0040,DB0C)</td><td class="retired1">UI</td><td class="retired1">Template Extension Organization UID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0040,DB0D)</td><td class="retired">UI</td><td class="retired">Template Extension Creator UID</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0040,DB73)</td><td class="setColor">UL</td><td class="setColor">Referenced Content Item Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0040,E001)</td><td>ST</td><td>HL7 Instance Identifier</td><td></td></tr>
    <tr><td class="setColor">(0040,E004)</td><td class="setColor">DT</td><td class="setColor">HL7 Document Effective Time</td><td class="setColor"></td></tr>
    <tr><td>(0040,E006)</td><td>SQ</td><td>HL7 Document Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,E008)</td><td class="setColor">SQ</td><td class="setColor">Document Class Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,E010)</td><td>UR</td><td>Retrieve URI</td><td></td></tr>
    <tr><td class="setColor">(0040,E011)</td><td class="setColor">UI</td><td class="setColor">Retrieve Location UID</td><td class="setColor"></td></tr>
    <tr><td>(0040,E020)</td><td>CS</td><td>Type of Instances</td><td></td></tr>
    <tr><td class="setColor">(0040,E021)</td><td class="setColor">SQ</td><td class="setColor">DICOM Retrieval Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,E022)</td><td>SQ</td><td>DICOM Media Retrieval Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,E023)</td><td class="setColor">SQ</td><td class="setColor">WADO Retrieval Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,E024)</td><td>SQ</td><td>XDS Retrieval Sequence</td><td></td></tr>
    <tr><td class="setColor">(0040,E025)</td><td class="setColor">SQ</td><td class="setColor">WADO-RS Retrieval Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0040,E030)</td><td>UI</td><td>Repository Unique ID</td><td></td></tr>
    <tr><td class="setColor">(0040,E031)</td><td class="setColor">UI</td><td class="setColor">Home Community ID</td><td class="setColor"></td></tr>
    <tr><td>(0042,0010)</td><td>ST</td><td>Document Title</td><td></td></tr>
    <tr><td class="setColor">(0042,0011)</td><td class="setColor">OB</td><td class="setColor">Encapsulated Document</td><td class="setColor"></td></tr>
    <tr><td>(0042,0012)</td><td>LO</td><td>MIME Type of Encapsulated Document</td><td></td></tr>
    <tr><td class="setColor">(0042,0013)</td><td class="setColor">SQ</td><td class="setColor">Source Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0042,0014)</td><td>LO</td><td>List of MIME Types</td><td></td></tr>
    <tr><td class="setColor">(0044,0001)</td><td class="setColor">ST</td><td class="setColor">Product Package Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0044,0002)</td><td>CS</td><td>Substance Administration Approval</td><td></td></tr>
    <tr><td class="setColor">(0044,0003)</td><td class="setColor">LT</td><td class="setColor">Approval Status Further Description</td><td class="setColor"></td></tr>
    <tr><td>(0044,0004)</td><td>DT</td><td>Approval Status DateTime</td><td></td></tr>
    <tr><td class="setColor">(0044,0007)</td><td class="setColor">SQ</td><td class="setColor">Product Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0044,0008)</td><td>LO</td><td>Product Name</td><td></td></tr>
    <tr><td class="setColor">(0044,0009)</td><td class="setColor">LT</td><td class="setColor">Product Description</td><td class="setColor"></td></tr>
    <tr><td>(0044,000A)</td><td>LO</td><td>Product Lot Identifier</td><td></td></tr>
    <tr><td class="setColor">(0044,000B)</td><td class="setColor">DT</td><td class="setColor">Product Expiration DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0044,0010)</td><td>DT</td><td>Substance Administration DateTime</td><td></td></tr>
    <tr><td class="setColor">(0044,0011)</td><td class="setColor">LO</td><td class="setColor">Substance Administration Notes</td><td class="setColor"></td></tr>
    <tr><td>(0044,0012)</td><td>LO</td><td>Substance Administration Device ID</td><td></td></tr>
    <tr><td class="setColor">(0044,0013)</td><td class="setColor">SQ</td><td class="setColor">Product Parameter Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0044,0019)</td><td>SQ</td><td>Substance Administration Parameter Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0012)</td><td class="setColor">LO</td><td class="setColor">Lens Description</td><td class="setColor"></td></tr>
    <tr><td>(0046,0014)</td><td>SQ</td><td>Right Lens Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0015)</td><td class="setColor">SQ</td><td class="setColor">Left Lens Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0016)</td><td>SQ</td><td>Unspecified Laterality Lens Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0018)</td><td class="setColor">SQ</td><td class="setColor">Cylinder Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0028)</td><td>SQ</td><td>Prism Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0030)</td><td class="setColor">FD</td><td class="setColor">Horizontal Prism Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0032)</td><td>CS</td><td>Horizontal Prism Base</td><td></td></tr>
    <tr><td class="setColor">(0046,0034)</td><td class="setColor">FD</td><td class="setColor">Vertical Prism Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0036)</td><td>CS</td><td>Vertical Prism Base</td><td></td></tr>
    <tr><td class="setColor">(0046,0038)</td><td class="setColor">CS</td><td class="setColor">Lens Segment Type</td><td class="setColor"></td></tr>
    <tr><td>(0046,0040)</td><td>FD</td><td>Optical Transmittance</td><td></td></tr>
    <tr><td class="setColor">(0046,0042)</td><td class="setColor">FD</td><td class="setColor">Channel Width</td><td class="setColor"></td></tr>
    <tr><td>(0046,0044)</td><td>FD</td><td>Pupil Size</td><td></td></tr>
    <tr><td class="setColor">(0046,0046)</td><td class="setColor">FD</td><td class="setColor">Corneal Size</td><td class="setColor"></td></tr>
    <tr><td>(0046,0050)</td><td>SQ</td><td>Autorefraction Right Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0052)</td><td class="setColor">SQ</td><td class="setColor">Autorefraction Left Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0060)</td><td>FD</td><td>Distance Pupillary Distance</td><td></td></tr>
    <tr><td class="setColor">(0046,0062)</td><td class="setColor">FD</td><td class="setColor">Near Pupillary Distance</td><td class="setColor"></td></tr>
    <tr><td>(0046,0063)</td><td>FD</td><td>Intermediate Pupillary Distance</td><td></td></tr>
    <tr><td class="setColor">(0046,0064)</td><td class="setColor">FD</td><td class="setColor">Other Pupillary Distance</td><td class="setColor"></td></tr>
    <tr><td>(0046,0070)</td><td>SQ</td><td>Keratometry Right Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0071)</td><td class="setColor">SQ</td><td class="setColor">Keratometry Left Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0074)</td><td>SQ</td><td>Steep Keratometric Axis Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0075)</td><td class="setColor">FD</td><td class="setColor">Radius of Curvature</td><td class="setColor"></td></tr>
    <tr><td>(0046,0076)</td><td>FD</td><td>Keratometric Power</td><td></td></tr>
    <tr><td class="setColor">(0046,0077)</td><td class="setColor">FD</td><td class="setColor">Keratometric Axis</td><td class="setColor"></td></tr>
    <tr><td>(0046,0080)</td><td>SQ</td><td>Flat Keratometric Axis Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0092)</td><td class="setColor">CS</td><td class="setColor">Background Color</td><td class="setColor"></td></tr>
    <tr><td>(0046,0094)</td><td>CS</td><td>Optotype</td><td></td></tr>
    <tr><td class="setColor">(0046,0095)</td><td class="setColor">CS</td><td class="setColor">Optotype Presentation</td><td class="setColor"></td></tr>
    <tr><td>(0046,0097)</td><td>SQ</td><td>Subjective Refraction Right Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0098)</td><td class="setColor">SQ</td><td class="setColor">Subjective Refraction Left Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0100)</td><td>SQ</td><td>Add Near Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0101)</td><td class="setColor">SQ</td><td class="setColor">Add Intermediate Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0102)</td><td>SQ</td><td>Add Other Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0104)</td><td class="setColor">FD</td><td class="setColor">Add Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0106)</td><td>FD</td><td>Viewing Distance</td><td></td></tr>
    <tr><td class="setColor">(0046,0121)</td><td class="setColor">SQ</td><td class="setColor">Visual Acuity Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0122)</td><td>SQ</td><td>Visual Acuity Right Eye Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0123)</td><td class="setColor">SQ</td><td class="setColor">Visual Acuity Left Eye Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0124)</td><td>SQ</td><td>Visual Acuity Both Eyes Open Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0125)</td><td class="setColor">CS</td><td class="setColor">Viewing Distance Type</td><td class="setColor"></td></tr>
    <tr><td>(0046,0135)</td><td>SS</td><td>Visual Acuity Modifiers</td><td></td></tr>
    <tr><td class="setColor">(0046,0137)</td><td class="setColor">FD</td><td class="setColor">Decimal Visual Acuity</td><td class="setColor"></td></tr>
    <tr><td>(0046,0139)</td><td>LO</td><td>Optotype Detailed Definition</td><td></td></tr>
    <tr><td class="setColor">(0046,0145)</td><td class="setColor">SQ</td><td class="setColor">Referenced Refractive Measurements Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0146)</td><td>FD</td><td>Sphere Power</td><td></td></tr>
    <tr><td class="setColor">(0046,0147)</td><td class="setColor">FD</td><td class="setColor">Cylinder Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0201)</td><td>CS</td><td>Corneal Topography Surface</td><td></td></tr>
    <tr><td class="setColor">(0046,0202)</td><td class="setColor">FL</td><td class="setColor">Corneal Vertex Location</td><td class="setColor"></td></tr>
    <tr><td>(0046,0203)</td><td>FL</td><td>Pupil Centroid X-Coordinate</td><td></td></tr>
    <tr><td class="setColor">(0046,0204)</td><td class="setColor">FL</td><td class="setColor">Pupil Centroid Y-Coordinate</td><td class="setColor"></td></tr>
    <tr><td>(0046,0205)</td><td>FL</td><td>Equivalent Pupil Radius</td><td></td></tr>
    <tr><td class="setColor">(0046,0207)</td><td class="setColor">SQ</td><td class="setColor">Corneal Topography Map Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0208)</td><td>IS</td><td>Vertices of the Outline of Pupil</td><td></td></tr>
    <tr><td class="setColor">(0046,0210)</td><td class="setColor">SQ</td><td class="setColor">Corneal Topography Mapping Normals Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0211)</td><td>SQ</td><td>Maximum Corneal Curvature Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0212)</td><td class="setColor">FL</td><td class="setColor">Maximum Corneal Curvature</td><td class="setColor"></td></tr>
    <tr><td>(0046,0213)</td><td>FL</td><td>Maximum Corneal Curvature Location</td><td></td></tr>
    <tr><td class="setColor">(0046,0215)</td><td class="setColor">SQ</td><td class="setColor">Minimum Keratometric Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0046,0218)</td><td>SQ</td><td>Simulated Keratometric Cylinder Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0220)</td><td class="setColor">FL</td><td class="setColor">Average Corneal Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0224)</td><td>FL</td><td>Corneal I-S Value</td><td></td></tr>
    <tr><td class="setColor">(0046,0227)</td><td class="setColor">FL</td><td class="setColor">Analyzed Area</td><td class="setColor"></td></tr>
    <tr><td>(0046,0230)</td><td>FL</td><td>Surface Regularity Index</td><td></td></tr>
    <tr><td class="setColor">(0046,0232)</td><td class="setColor">FL</td><td class="setColor">Surface Asymmetry Index</td><td class="setColor"></td></tr>
    <tr><td>(0046,0234)</td><td>FL</td><td>Corneal Eccentricity Index</td><td></td></tr>
    <tr><td class="setColor">(0046,0236)</td><td class="setColor">FL</td><td class="setColor">Keratoconus Prediction Index</td><td class="setColor"></td></tr>
    <tr><td>(0046,0238)</td><td>FL</td><td>Decimal Potential Visual Acuity</td><td></td></tr>
    <tr><td class="setColor">(0046,0242)</td><td class="setColor">CS</td><td class="setColor">Corneal Topography Map Quality Evaluation</td><td class="setColor"></td></tr>
    <tr><td>(0046,0244)</td><td>SQ</td><td>Source Image Corneal Processed Data Sequence</td><td></td></tr>
    <tr><td class="setColor">(0046,0247)</td><td class="setColor">FL</td><td class="setColor">Corneal Point Location</td><td class="setColor"></td></tr>
    <tr><td>(0046,0248)</td><td>CS</td><td>Corneal Point Estimated</td><td></td></tr>
    <tr><td class="setColor">(0046,0249)</td><td class="setColor">FL</td><td class="setColor">Axial Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0250)</td><td>FL</td><td>Tangential Power</td><td></td></tr>
    <tr><td class="setColor">(0046,0251)</td><td class="setColor">FL</td><td class="setColor">Refractive Power</td><td class="setColor"></td></tr>
    <tr><td>(0046,0252)</td><td>FL</td><td>Relative Elevation</td><td></td></tr>
    <tr><td class="setColor">(0046,0253)</td><td class="setColor">FL</td><td class="setColor">Corneal Wavefront</td><td class="setColor"></td></tr>
    <tr><td>(0048,0001)</td><td>FL</td><td>Imaged Volume Width</td><td></td></tr>
    <tr><td class="setColor">(0048,0002)</td><td class="setColor">FL</td><td class="setColor">Imaged Volume Height</td><td class="setColor"></td></tr>
    <tr><td>(0048,0003)</td><td>FL</td><td>Imaged Volume Depth</td><td></td></tr>
    <tr><td class="setColor">(0048,0006)</td><td class="setColor">UL</td><td class="setColor">Total Pixel Matrix Columns</td><td class="setColor"></td></tr>
    <tr><td>(0048,0007)</td><td>UL</td><td>Total Pixel Matrix Rows</td><td></td></tr>
    <tr><td class="setColor">(0048,0008)</td><td class="setColor">SQ</td><td class="setColor">Total Pixel Matrix Origin Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0048,0010)</td><td>CS</td><td>Specimen Label in Image</td><td></td></tr>
    <tr><td class="setColor">(0048,0011)</td><td class="setColor">CS</td><td class="setColor">Focus Method</td><td class="setColor"></td></tr>
    <tr><td>(0048,0012)</td><td>CS</td><td>Extended Depth of Field</td><td></td></tr>
    <tr><td class="setColor">(0048,0013)</td><td class="setColor">US</td><td class="setColor">Number of Focal Planes</td><td class="setColor"></td></tr>
    <tr><td>(0048,0014)</td><td>FL</td><td>Distance Between Focal Planes</td><td></td></tr>
    <tr><td class="setColor">(0048,0015)</td><td class="setColor">US</td><td class="setColor">Recommended Absent Pixel CIELab Value</td><td class="setColor"></td></tr>
    <tr><td>(0048,0100)</td><td>SQ</td><td>Illuminator Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0048,0102)</td><td class="setColor">DS</td><td class="setColor">Image Orientation (Slide)</td><td class="setColor"></td></tr>
    <tr><td>(0048,0105)</td><td>SQ</td><td>Optical Path Sequence</td><td></td></tr>
    <tr><td class="setColor">(0048,0106)</td><td class="setColor">SH</td><td class="setColor">Optical Path Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0048,0107)</td><td>ST</td><td>Optical Path Description</td><td></td></tr>
    <tr><td class="setColor">(0048,0108)</td><td class="setColor">SQ</td><td class="setColor">Illumination Color Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0048,0110)</td><td>SQ</td><td>Specimen Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(0048,0111)</td><td class="setColor">DS</td><td class="setColor">Condenser Lens Power</td><td class="setColor"></td></tr>
    <tr><td>(0048,0112)</td><td>DS</td><td>Objective Lens Power</td><td></td></tr>
    <tr><td class="setColor">(0048,0113)</td><td class="setColor">DS</td><td class="setColor">Objective Lens Numerical Aperture</td><td class="setColor"></td></tr>
    <tr><td>(0048,0120)</td><td>SQ</td><td>Palette Color Lookup Table Sequence</td><td></td></tr>
    <tr><td class="setColor">(0048,0200)</td><td class="setColor">SQ</td><td class="setColor">Referenced Image Navigation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0048,0201)</td><td>US</td><td>Top Left Hand Corner of Localizer Area</td><td></td></tr>
    <tr><td class="setColor">(0048,0202)</td><td class="setColor">US</td><td class="setColor">Bottom Right Hand Corner of Localizer Area</td><td class="setColor"></td></tr>
    <tr><td>(0048,0207)</td><td>SQ</td><td>Optical Path Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0048,021A)</td><td class="setColor">SQ</td><td class="setColor">Plane Position (Slide) Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0048,021E)</td><td>SL</td><td>Column Position In Total Image Pixel Matrix</td><td></td></tr>
    <tr><td class="setColor">(0048,021F)</td><td class="setColor">SL</td><td class="setColor">Row Position In Total Image Pixel Matrix</td><td class="setColor"></td></tr>
    <tr><td>(0048,0301)</td><td>CS</td><td>Pixel Origin Interpretation</td><td></td></tr>
    <tr><td class="setColor">(0050,0004)</td><td class="setColor">CS</td><td class="setColor">Calibration Image</td><td class="setColor"></td></tr>
    <tr><td>(0050,0010)</td><td>SQ</td><td>Device Sequence</td><td></td></tr>
    <tr><td class="setColor">(0050,0012)</td><td class="setColor">SQ</td><td class="setColor">Container Component Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0050,0013)</td><td>FD</td><td>Container Component Thickness</td><td></td></tr>
    <tr><td class="setColor">(0050,0014)</td><td class="setColor">DS</td><td class="setColor">Device Length</td><td class="setColor"></td></tr>
    <tr><td>(0050,0015)</td><td>FD</td><td>Container Component Width</td><td></td></tr>
    <tr><td class="setColor">(0050,0016)</td><td class="setColor">DS</td><td class="setColor">Device Diameter</td><td class="setColor"></td></tr>
    <tr><td>(0050,0017)</td><td>CS</td><td>Device Diameter Units</td><td></td></tr>
    <tr><td class="setColor">(0050,0018)</td><td class="setColor">DS</td><td class="setColor">Device Volume</td><td class="setColor"></td></tr>
    <tr><td>(0050,0019)</td><td>DS</td><td>Inter-Marker Distance</td><td></td></tr>
    <tr><td class="setColor">(0050,001A)</td><td class="setColor">CS</td><td class="setColor">Container Component Material</td><td class="setColor"></td></tr>
    <tr><td>(0050,001B)</td><td>LO</td><td>Container Component ID</td><td></td></tr>
    <tr><td class="setColor">(0050,001C)</td><td class="setColor">FD</td><td class="setColor">Container Component Length</td><td class="setColor"></td></tr>
    <tr><td>(0050,001D)</td><td>FD</td><td>Container Component Diameter</td><td></td></tr>
    <tr><td class="setColor">(0050,001E)</td><td class="setColor">LO</td><td class="setColor">Container Component Description</td><td class="setColor"></td></tr>
    <tr><td>(0050,0020)</td><td>LO</td><td>Device Description</td><td></td></tr>
    <tr><td class="setColor">(0052,0001)</td><td class="setColor">FL</td><td class="setColor">Contrast/Bolus Ingredient Percent by Volume</td><td class="setColor"></td></tr>
    <tr><td>(0052,0002)</td><td>FD</td><td>OCT Focal Distance</td><td></td></tr>
    <tr><td class="setColor">(0052,0003)</td><td class="setColor">FD</td><td class="setColor">Beam Spot Size</td><td class="setColor"></td></tr>
    <tr><td>(0052,0004)</td><td>FD</td><td>Effective Refractive Index</td><td></td></tr>
    <tr><td class="setColor">(0052,0006)</td><td class="setColor">CS</td><td class="setColor">OCT Acquisition Domain</td><td class="setColor"></td></tr>
    <tr><td>(0052,0007)</td><td>FD</td><td>OCT Optical Center Wavelength</td><td></td></tr>
    <tr><td class="setColor">(0052,0008)</td><td class="setColor">FD</td><td class="setColor">Axial Resolution</td><td class="setColor"></td></tr>
    <tr><td>(0052,0009)</td><td>FD</td><td>Ranging Depth</td><td></td></tr>
    <tr><td class="setColor">(0052,0011)</td><td class="setColor">FD</td><td class="setColor">A-line Rate</td><td class="setColor"></td></tr>
    <tr><td>(0052,0012)</td><td>US</td><td>A-lines Per Frame</td><td></td></tr>
    <tr><td class="setColor">(0052,0013)</td><td class="setColor">FD</td><td class="setColor">Catheter Rotational Rate</td><td class="setColor"></td></tr>
    <tr><td>(0052,0014)</td><td>FD</td><td>A-line Pixel Spacing</td><td></td></tr>
    <tr><td class="setColor">(0052,0016)</td><td class="setColor">SQ</td><td class="setColor">Mode of Percutaneous Access Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0052,0025)</td><td>SQ</td><td>Intravascular OCT Frame Type Sequence</td><td></td></tr>
    <tr><td class="setColor">(0052,0026)</td><td class="setColor">CS</td><td class="setColor">OCT Z Offset Applied</td><td class="setColor"></td></tr>
    <tr><td>(0052,0027)</td><td>SQ</td><td>Intravascular Frame Content Sequence</td><td></td></tr>
    <tr><td class="setColor">(0052,0028)</td><td class="setColor">FD</td><td class="setColor">Intravascular Longitudinal Distance</td><td class="setColor"></td></tr>
    <tr><td>(0052,0029)</td><td>SQ</td><td>Intravascular OCT Frame Content Sequence</td><td></td></tr>
    <tr><td class="setColor">(0052,0030)</td><td class="setColor">SS</td><td class="setColor">OCT Z Offset Correction</td><td class="setColor"></td></tr>
    <tr><td>(0052,0031)</td><td>CS</td><td>Catheter Direction of Rotation</td><td></td></tr>
    <tr><td class="setColor">(0052,0033)</td><td class="setColor">FD</td><td class="setColor">Seam Line Location</td><td class="setColor"></td></tr>
    <tr><td>(0052,0034)</td><td>FD</td><td>First A-line Location</td><td></td></tr>
    <tr><td class="setColor">(0052,0036)</td><td class="setColor">US</td><td class="setColor">Seam Line Index</td><td class="setColor"></td></tr>
    <tr><td>(0052,0038)</td><td>US</td><td>Number of Padded A-lines</td><td></td></tr>
    <tr><td class="setColor">(0052,0039)</td><td class="setColor">CS</td><td class="setColor">Interpolation Type</td><td class="setColor"></td></tr>
    <tr><td>(0052,003A)</td><td>CS</td><td>Refractive Index Applied</td><td></td></tr>
    <tr><td class="setColor">(0054,0010)</td><td class="setColor">US</td><td class="setColor">Energy Window Vector</td><td class="setColor"></td></tr>
    <tr><td>(0054,0011)</td><td>US</td><td>Number of Energy Windows</td><td></td></tr>
    <tr><td class="setColor">(0054,0012)</td><td class="setColor">SQ</td><td class="setColor">Energy Window Information Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0013)</td><td>SQ</td><td>Energy Window Range Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0014)</td><td class="setColor">DS</td><td class="setColor">Energy Window Lower Limit</td><td class="setColor"></td></tr>
    <tr><td>(0054,0015)</td><td>DS</td><td>Energy Window Upper Limit</td><td></td></tr>
    <tr><td class="setColor">(0054,0016)</td><td class="setColor">SQ</td><td class="setColor">Radiopharmaceutical Information Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0017)</td><td>IS</td><td>Residual Syringe Counts</td><td></td></tr>
    <tr><td class="setColor">(0054,0018)</td><td class="setColor">SH</td><td class="setColor">Energy Window Name</td><td class="setColor"></td></tr>
    <tr><td>(0054,0020)</td><td>US</td><td>Detector Vector</td><td></td></tr>
    <tr><td class="setColor">(0054,0021)</td><td class="setColor">US</td><td class="setColor">Number of Detectors</td><td class="setColor"></td></tr>
    <tr><td>(0054,0022)</td><td>SQ</td><td>Detector Information Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0030)</td><td class="setColor">US</td><td class="setColor">Phase Vector</td><td class="setColor"></td></tr>
    <tr><td>(0054,0031)</td><td>US</td><td>Number of Phases</td><td></td></tr>
    <tr><td class="setColor">(0054,0032)</td><td class="setColor">SQ</td><td class="setColor">Phase Information Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0033)</td><td>US</td><td>Number of Frames in Phase</td><td></td></tr>
    <tr><td class="setColor">(0054,0036)</td><td class="setColor">IS</td><td class="setColor">Phase Delay</td><td class="setColor"></td></tr>
    <tr><td>(0054,0038)</td><td>IS</td><td>Pause Between Frames</td><td></td></tr>
    <tr><td class="setColor">(0054,0039)</td><td class="setColor">CS</td><td class="setColor">Phase Description</td><td class="setColor"></td></tr>
    <tr><td>(0054,0050)</td><td>US</td><td>Rotation Vector</td><td></td></tr>
    <tr><td class="setColor">(0054,0051)</td><td class="setColor">US</td><td class="setColor">Number of Rotations</td><td class="setColor"></td></tr>
    <tr><td>(0054,0052)</td><td>SQ</td><td>Rotation Information Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0053)</td><td class="setColor">US</td><td class="setColor">Number of Frames in Rotation</td><td class="setColor"></td></tr>
    <tr><td>(0054,0060)</td><td>US</td><td>R-R Interval Vector</td><td></td></tr>
    <tr><td class="setColor">(0054,0061)</td><td class="setColor">US</td><td class="setColor">Number of R-R Intervals</td><td class="setColor"></td></tr>
    <tr><td>(0054,0062)</td><td>SQ</td><td>Gated Information Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0063)</td><td class="setColor">SQ</td><td class="setColor">Data Information Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0070)</td><td>US</td><td>Time Slot Vector</td><td></td></tr>
    <tr><td class="setColor">(0054,0071)</td><td class="setColor">US</td><td class="setColor">Number of Time Slots</td><td class="setColor"></td></tr>
    <tr><td>(0054,0072)</td><td>SQ</td><td>Time Slot Information Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0073)</td><td class="setColor">DS</td><td class="setColor">Time Slot Time</td><td class="setColor"></td></tr>
    <tr><td>(0054,0080)</td><td>US</td><td>Slice Vector</td><td></td></tr>
    <tr><td class="setColor">(0054,0081)</td><td class="setColor">US</td><td class="setColor">Number of Slices</td><td class="setColor"></td></tr>
    <tr><td>(0054,0090)</td><td>US</td><td>Angular View Vector</td><td></td></tr>
    <tr><td class="setColor">(0054,0100)</td><td class="setColor">US</td><td class="setColor">Time Slice Vector</td><td class="setColor"></td></tr>
    <tr><td>(0054,0101)</td><td>US</td><td>Number of Time Slices</td><td></td></tr>
    <tr><td class="setColor">(0054,0200)</td><td class="setColor">DS</td><td class="setColor">Start Angle</td><td class="setColor"></td></tr>
    <tr><td>(0054,0202)</td><td>CS</td><td>Type of Detector Motion</td><td></td></tr>
    <tr><td class="setColor">(0054,0210)</td><td class="setColor">IS</td><td class="setColor">Trigger Vector</td><td class="setColor"></td></tr>
    <tr><td>(0054,0211)</td><td>US</td><td>Number of Triggers in Phase</td><td></td></tr>
    <tr><td class="setColor">(0054,0220)</td><td class="setColor">SQ</td><td class="setColor">View Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0222)</td><td>SQ</td><td>View Modifier Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0300)</td><td class="setColor">SQ</td><td class="setColor">Radionuclide Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0302)</td><td>SQ</td><td>Administration Route Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0304)</td><td class="setColor">SQ</td><td class="setColor">Radiopharmaceutical Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0306)</td><td>SQ</td><td>Calibration Data Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0308)</td><td class="setColor">US</td><td class="setColor">Energy Window Number</td><td class="setColor"></td></tr>
    <tr><td>(0054,0400)</td><td>SH</td><td>Image ID</td><td></td></tr>
    <tr><td class="setColor">(0054,0410)</td><td class="setColor">SQ</td><td class="setColor">Patient Orientation Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0412)</td><td>SQ</td><td>Patient Orientation Modifier Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0054,0414)</td><td class="setColor">SQ</td><td class="setColor">Patient Gantry Relationship Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0054,0500)</td><td>CS</td><td>Slice Progression Direction</td><td></td></tr>
    <tr><td class="setColor">(0054,0501)</td><td class="setColor">CS</td><td class="setColor">Scan Progression Direction</td><td class="setColor"></td></tr>
    <tr><td>(0054,1000)</td><td>CS</td><td>Series Type</td><td></td></tr>
    <tr><td class="setColor">(0054,1001)</td><td class="setColor">CS</td><td class="setColor">Units</td><td class="setColor"></td></tr>
    <tr><td>(0054,1002)</td><td>CS</td><td>Counts Source</td><td></td></tr>
    <tr><td class="setColor">(0054,1004)</td><td class="setColor">CS</td><td class="setColor">Reprojection Method</td><td class="setColor"></td></tr>
    <tr><td>(0054,1006)</td><td>CS</td><td>SUV Type</td><td></td></tr>
    <tr><td class="setColor">(0054,1100)</td><td class="setColor">CS</td><td class="setColor">Randoms Correction Method</td><td class="setColor"></td></tr>
    <tr><td>(0054,1101)</td><td>LO</td><td>Attenuation Correction Method</td><td></td></tr>
    <tr><td class="setColor">(0054,1102)</td><td class="setColor">CS</td><td class="setColor">Decay Correction</td><td class="setColor"></td></tr>
    <tr><td>(0054,1103)</td><td>LO</td><td>Reconstruction Method</td><td></td></tr>
    <tr><td class="setColor">(0054,1104)</td><td class="setColor">LO</td><td class="setColor">Detector Lines of Response Used</td><td class="setColor"></td></tr>
    <tr><td>(0054,1105)</td><td>LO</td><td>Scatter Correction Method</td><td></td></tr>
    <tr><td class="setColor">(0054,1200)</td><td class="setColor">DS</td><td class="setColor">Axial Acceptance</td><td class="setColor"></td></tr>
    <tr><td>(0054,1201)</td><td>IS</td><td>Axial Mash</td><td></td></tr>
    <tr><td class="setColor">(0054,1202)</td><td class="setColor">IS</td><td class="setColor">Transverse Mash</td><td class="setColor"></td></tr>
    <tr><td>(0054,1203)</td><td>DS</td><td>Detector Element Size</td><td></td></tr>
    <tr><td class="setColor">(0054,1210)</td><td class="setColor">DS</td><td class="setColor">Coincidence Window Width</td><td class="setColor"></td></tr>
    <tr><td>(0054,1220)</td><td>CS</td><td>Secondary Counts Type</td><td></td></tr>
    <tr><td class="setColor">(0054,1300)</td><td class="setColor">DS</td><td class="setColor">Frame Reference Time</td><td class="setColor"></td></tr>
    <tr><td>(0054,1310)</td><td>IS</td><td>Primary (Prompts) Counts Accumulated</td><td></td></tr>
    <tr><td class="setColor">(0054,1311)</td><td class="setColor">IS</td><td class="setColor">Secondary Counts Accumulated</td><td class="setColor"></td></tr>
    <tr><td>(0054,1320)</td><td>DS</td><td>Slice Sensitivity Factor</td><td></td></tr>
    <tr><td class="setColor">(0054,1321)</td><td class="setColor">DS</td><td class="setColor">Decay Factor</td><td class="setColor"></td></tr>
    <tr><td>(0054,1322)</td><td>DS</td><td>Dose Calibration Factor</td><td></td></tr>
    <tr><td class="setColor">(0054,1323)</td><td class="setColor">DS</td><td class="setColor">Scatter Fraction Factor</td><td class="setColor"></td></tr>
    <tr><td>(0054,1324)</td><td>DS</td><td>Dead Time Factor</td><td></td></tr>
    <tr><td class="setColor">(0054,1330)</td><td class="setColor">US</td><td class="setColor">Image Index</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0054,1400)</td><td class="retired">CS</td><td class="retired">Counts Included</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0054,1401)</td><td class="retired1">CS</td><td class="retired1">Dead Time Correction Flag</td><td class="retired1">Retired</td></tr>
    <tr><td>(0060,3000)</td><td>SQ</td><td>Histogram Sequence</td><td></td></tr>
    <tr><td class="setColor">(0060,3002)</td><td class="setColor">US</td><td class="setColor">Histogram Number of Bins</td><td class="setColor"></td></tr>
    <tr><td>(0060,3004)</td><td>US or SS</td><td>Histogram First Bin Value</td><td></td></tr>
    <tr><td class="setColor">(0060,3006)</td><td class="setColor">US or SS</td><td class="setColor">Histogram Last Bin Value</td><td class="setColor"></td></tr>
    <tr><td>(0060,3008)</td><td>US</td><td>Histogram Bin Width</td><td></td></tr>
    <tr><td class="setColor">(0060,3010)</td><td class="setColor">LO</td><td class="setColor">Histogram Explanation</td><td class="setColor"></td></tr>
    <tr><td>(0060,3020)</td><td>UL</td><td>Histogram Data</td><td></td></tr>
    <tr><td class="setColor">(0062,0001)</td><td class="setColor">CS</td><td class="setColor">Segmentation Type</td><td class="setColor"></td></tr>
    <tr><td>(0062,0002)</td><td>SQ</td><td>Segment Sequence</td><td></td></tr>
    <tr><td class="setColor">(0062,0003)</td><td class="setColor">SQ</td><td class="setColor">Segmented Property Category Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0062,0004)</td><td>US</td><td>Segment Number</td><td></td></tr>
    <tr><td class="setColor">(0062,0005)</td><td class="setColor">LO</td><td class="setColor">Segment Label</td><td class="setColor"></td></tr>
    <tr><td>(0062,0006)</td><td>ST</td><td>Segment Description</td><td></td></tr>
    <tr><td class="setColor">(0062,0008)</td><td class="setColor">CS</td><td class="setColor">Segment Algorithm Type</td><td class="setColor"></td></tr>
    <tr><td>(0062,0009)</td><td>LO</td><td>Segment Algorithm Name</td><td></td></tr>
    <tr><td class="setColor">(0062,000A)</td><td class="setColor">SQ</td><td class="setColor">Segment Identification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0062,000B)</td><td>US</td><td>Referenced Segment Number</td><td></td></tr>
    <tr><td class="setColor">(0062,000C)</td><td class="setColor">US</td><td class="setColor">Recommended Display Grayscale Value</td><td class="setColor"></td></tr>
    <tr><td>(0062,000D)</td><td>US</td><td>Recommended Display CIELab Value</td><td></td></tr>
    <tr><td class="setColor">(0062,000E)</td><td class="setColor">US</td><td class="setColor">Maximum Fractional Value</td><td class="setColor"></td></tr>
    <tr><td>(0062,000F)</td><td>SQ</td><td>Segmented Property Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0062,0010)</td><td class="setColor">CS</td><td class="setColor">Segmentation Fractional Type</td><td class="setColor"></td></tr>
    <tr><td>(0062,0011)</td><td>SQ</td><td>Segmented Property Type Modifier Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0062,0012)</td><td class="setColor">SQ</td><td class="setColor">Used Segments Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0062,0020)</td><td>UT</td><td>Tracking ID</td><td></td></tr>
    <tr><td class="setColor">(0062,0021)</td><td class="setColor">UI</td><td class="setColor">Tracking UID</td><td class="setColor"></td></tr>
    <tr><td>(0064,0002)</td><td>SQ</td><td>Deformable Registration Sequence</td><td></td></tr>
    <tr><td class="setColor">(0064,0003)</td><td class="setColor">UI</td><td class="setColor">Source Frame of Reference UID</td><td class="setColor"></td></tr>
    <tr><td>(0064,0005)</td><td>SQ</td><td>Deformable Registration Grid Sequence</td><td></td></tr>
    <tr><td class="setColor">(0064,0007)</td><td class="setColor">UL</td><td class="setColor">Grid Dimensions</td><td class="setColor"></td></tr>
    <tr><td>(0064,0008)</td><td>FD</td><td>Grid Resolution</td><td></td></tr>
    <tr><td class="setColor">(0064,0009)</td><td class="setColor">OF</td><td class="setColor">Vector Grid Data</td><td class="setColor"></td></tr>
    <tr><td>(0064,000F)</td><td>SQ</td><td>Pre Deformation Matrix Registration Sequence</td><td></td></tr>
    <tr><td class="setColor">(0064,0010)</td><td class="setColor">SQ</td><td class="setColor">Post Deformation Matrix Registration Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0001)</td><td>UL</td><td>Number of Surfaces</td><td></td></tr>
    <tr><td class="setColor">(0066,0002)</td><td class="setColor">SQ</td><td class="setColor">Surface Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0003)</td><td>UL</td><td>Surface Number</td><td></td></tr>
    <tr><td class="setColor">(0066,0004)</td><td class="setColor">LT</td><td class="setColor">Surface Comments</td><td class="setColor"></td></tr>
    <tr><td>(0066,0009)</td><td>CS</td><td>Surface Processing</td><td></td></tr>
    <tr><td class="setColor">(0066,000A)</td><td class="setColor">FL</td><td class="setColor">Surface Processing Ratio</td><td class="setColor"></td></tr>
    <tr><td>(0066,000B)</td><td>LO</td><td>Surface Processing Description</td><td></td></tr>
    <tr><td class="setColor">(0066,000C)</td><td class="setColor">FL</td><td class="setColor">Recommended Presentation Opacity</td><td class="setColor"></td></tr>
    <tr><td>(0066,000D)</td><td>CS</td><td>Recommended Presentation Type</td><td></td></tr>
    <tr><td class="setColor">(0066,000E)</td><td class="setColor">CS</td><td class="setColor">Finite Volume</td><td class="setColor"></td></tr>
    <tr><td>(0066,0010)</td><td>CS</td><td>Manifold</td><td></td></tr>
    <tr><td class="setColor">(0066,0011)</td><td class="setColor">SQ</td><td class="setColor">Surface Points Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0012)</td><td>SQ</td><td>Surface Points Normals Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0013)</td><td class="setColor">SQ</td><td class="setColor">Surface Mesh Primitives Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0015)</td><td>UL</td><td>Number of Surface Points</td><td></td></tr>
    <tr><td class="setColor">(0066,0016)</td><td class="setColor">OF</td><td class="setColor">Point Coordinates Data</td><td class="setColor"></td></tr>
    <tr><td>(0066,0017)</td><td>FL</td><td>Point Position Accuracy</td><td></td></tr>
    <tr><td class="setColor">(0066,0018)</td><td class="setColor">FL</td><td class="setColor">Mean Point Distance</td><td class="setColor"></td></tr>
    <tr><td>(0066,0019)</td><td>FL</td><td>Maximum Point Distance</td><td></td></tr>
    <tr><td class="setColor">(0066,001A)</td><td class="setColor">FL</td><td class="setColor">Points Bounding Box Coordinates</td><td class="setColor"></td></tr>
    <tr><td>(0066,001B)</td><td>FL</td><td>Axis of Rotation</td><td></td></tr>
    <tr><td class="setColor">(0066,001C)</td><td class="setColor">FL</td><td class="setColor">Center of Rotation</td><td class="setColor"></td></tr>
    <tr><td>(0066,001E)</td><td>UL</td><td>Number of Vectors</td><td></td></tr>
    <tr><td class="setColor">(0066,001F)</td><td class="setColor">US</td><td class="setColor">Vector Dimensionality</td><td class="setColor"></td></tr>
    <tr><td>(0066,0020)</td><td>FL</td><td>Vector Accuracy</td><td></td></tr>
    <tr><td class="setColor">(0066,0021)</td><td class="setColor">OF</td><td class="setColor">Vector Coordinate Data</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0066,0023)</td><td class="retired">OW</td><td class="retired">Triangle Point Index List</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0066,0024)</td><td class="retired1">OW</td><td class="retired1">Edge Point Index List</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0066,0025)</td><td class="retired">OW</td><td class="retired">Vertex Point Index List</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0066,0026)</td><td class="setColor">SQ</td><td class="setColor">Triangle Strip Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0027)</td><td>SQ</td><td>Triangle Fan Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0028)</td><td class="setColor">SQ</td><td class="setColor">Line Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0066,0029)</td><td class="retired">OW</td><td class="retired">Primitive Point Index List</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0066,002A)</td><td class="setColor">UL</td><td class="setColor">Surface Count</td><td class="setColor"></td></tr>
    <tr><td>(0066,002B)</td><td>SQ</td><td>Referenced Surface Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,002C)</td><td class="setColor">UL</td><td class="setColor">Referenced Surface Number</td><td class="setColor"></td></tr>
    <tr><td>(0066,002D)</td><td>SQ</td><td>Segment Surface Generation Algorithm Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,002E)</td><td class="setColor">SQ</td><td class="setColor">Segment Surface Source Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,002F)</td><td>SQ</td><td>Algorithm Family Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0030)</td><td class="setColor">SQ</td><td class="setColor">Algorithm Name Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0031)</td><td>LO</td><td>Algorithm Version</td><td></td></tr>
    <tr><td class="setColor">(0066,0032)</td><td class="setColor">LT</td><td class="setColor">Algorithm Parameters</td><td class="setColor"></td></tr>
    <tr><td>(0066,0034)</td><td>SQ</td><td>Facet Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0035)</td><td class="setColor">SQ</td><td class="setColor">Surface Processing Algorithm Identification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0036)</td><td>LO</td><td>Algorithm Name</td><td></td></tr>
    <tr><td class="setColor">(0066,0037)</td><td class="setColor">FL</td><td class="setColor">Recommended Point Radius</td><td class="setColor"></td></tr>
    <tr><td>(0066,0038)</td><td>FL</td><td>Recommended Line Thickness</td><td></td></tr>
    <tr><td class="setColor">(0066,0040)</td><td class="setColor">OL</td><td class="setColor">Long Primitive Point Index List</td><td class="setColor"></td></tr>
    <tr><td>(0066,0041)</td><td>OL</td><td>Long Triangle Point Index List</td><td></td></tr>
    <tr><td class="setColor">(0066,0042)</td><td class="setColor">OL</td><td class="setColor">Long Edge Point Index List</td><td class="setColor"></td></tr>
    <tr><td>(0066,0043)</td><td>OL</td><td>Long Vertex Point Index List</td><td></td></tr>
    <tr><td class="setColor">(0066,0101)</td><td class="setColor">SQ</td><td class="setColor">Track Set Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0102)</td><td>SQ</td><td>Track Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0103)</td><td class="setColor">OW</td><td class="setColor">Recommended Display CIELab Value List</td><td class="setColor"></td></tr>
    <tr><td>(0066,0104)</td><td>SQ</td><td>Tracking Algorithm Identification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0105)</td><td class="setColor">UL</td><td class="setColor">Track Set Number</td><td class="setColor"></td></tr>
    <tr><td>(0066,0106)</td><td>LO</td><td>Track Set Label</td><td></td></tr>
    <tr><td class="setColor">(0066,0107)</td><td class="setColor">UT</td><td class="setColor">Track Set Description</td><td class="setColor"></td></tr>
    <tr><td>(0066,0108)</td><td>SQ</td><td>Track Set Anatomical Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0121)</td><td class="setColor">SQ</td><td class="setColor">Measurements Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0124)</td><td>SQ</td><td>Track Set Statistics Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0125)</td><td class="setColor">OF</td><td class="setColor">Floating Point Values</td><td class="setColor"></td></tr>
    <tr><td>(0066,0129)</td><td>OL</td><td>Track Point Index List</td><td></td></tr>
    <tr><td class="setColor">(0066,0130)</td><td class="setColor">SQ</td><td class="setColor">Track Statistics Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0132)</td><td>SQ</td><td>Measurement Values Sequence</td><td></td></tr>
    <tr><td class="setColor">(0066,0133)</td><td class="setColor">SQ</td><td class="setColor">Diffusion Acquisition Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0066,0134)</td><td>SQ</td><td>Diffusion Model Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6210)</td><td class="setColor">LO</td><td class="setColor">Implant Size</td><td class="setColor"></td></tr>
    <tr><td>(0068,6221)</td><td>LO</td><td>Implant Template Version</td><td></td></tr>
    <tr><td class="setColor">(0068,6222)</td><td class="setColor">SQ</td><td class="setColor">Replaced Implant Template Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6223)</td><td>CS</td><td>Implant Type</td><td></td></tr>
    <tr><td class="setColor">(0068,6224)</td><td class="setColor">SQ</td><td class="setColor">Derivation Implant Template Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6225)</td><td>SQ</td><td>Original Implant Template Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6226)</td><td class="setColor">DT</td><td class="setColor">Effective DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0068,6230)</td><td>SQ</td><td>Implant Target Anatomy Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6260)</td><td class="setColor">SQ</td><td class="setColor">Information From Manufacturer Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6265)</td><td>SQ</td><td>Notification From Manufacturer Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6270)</td><td class="setColor">DT</td><td class="setColor">Information Issue DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0068,6280)</td><td>ST</td><td>Information Summary</td><td></td></tr>
    <tr><td class="setColor">(0068,62A0)</td><td class="setColor">SQ</td><td class="setColor">Implant Regulatory Disapproval Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,62A5)</td><td>FD</td><td>Overall Template Spatial Tolerance</td><td></td></tr>
    <tr><td class="setColor">(0068,62C0)</td><td class="setColor">SQ</td><td class="setColor">HPGL Document Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,62D0)</td><td>US</td><td>HPGL Document ID</td><td></td></tr>
    <tr><td class="setColor">(0068,62D5)</td><td class="setColor">LO</td><td class="setColor">HPGL Document Label</td><td class="setColor"></td></tr>
    <tr><td>(0068,62E0)</td><td>SQ</td><td>View Orientation Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,62F0)</td><td class="setColor">FD</td><td class="setColor">View Orientation Modifier</td><td class="setColor"></td></tr>
    <tr><td>(0068,62F2)</td><td>FD</td><td>HPGL Document Scaling</td><td></td></tr>
    <tr><td class="setColor">(0068,6300)</td><td class="setColor">OB</td><td class="setColor">HPGL Document</td><td class="setColor"></td></tr>
    <tr><td>(0068,6310)</td><td>US</td><td>HPGL Contour Pen Number</td><td></td></tr>
    <tr><td class="setColor">(0068,6320)</td><td class="setColor">SQ</td><td class="setColor">HPGL Pen Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6330)</td><td>US</td><td>HPGL Pen Number</td><td></td></tr>
    <tr><td class="setColor">(0068,6340)</td><td class="setColor">LO</td><td class="setColor">HPGL Pen Label</td><td class="setColor"></td></tr>
    <tr><td>(0068,6345)</td><td>ST</td><td>HPGL Pen Description</td><td></td></tr>
    <tr><td class="setColor">(0068,6346)</td><td class="setColor">FD</td><td class="setColor">Recommended Rotation Point</td><td class="setColor"></td></tr>
    <tr><td>(0068,6347)</td><td>FD</td><td>Bounding Rectangle</td><td></td></tr>
    <tr><td class="setColor">(0068,6350)</td><td class="setColor">US</td><td class="setColor">Implant Template 3D Model Surface Number</td><td class="setColor"></td></tr>
    <tr><td>(0068,6360)</td><td>SQ</td><td>Surface Model Description Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6380)</td><td class="setColor">LO</td><td class="setColor">Surface Model Label</td><td class="setColor"></td></tr>
    <tr><td>(0068,6390)</td><td>FD</td><td>Surface Model Scaling Factor</td><td></td></tr>
    <tr><td class="setColor">(0068,63A0)</td><td class="setColor">SQ</td><td class="setColor">Materials Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,63A4)</td><td>SQ</td><td>Coating Materials Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,63A8)</td><td class="setColor">SQ</td><td class="setColor">Implant Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,63AC)</td><td>SQ</td><td>Fixation Method Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,63B0)</td><td class="setColor">SQ</td><td class="setColor">Mating Feature Sets Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,63C0)</td><td>US</td><td>Mating Feature Set ID</td><td></td></tr>
    <tr><td class="setColor">(0068,63D0)</td><td class="setColor">LO</td><td class="setColor">Mating Feature Set Label</td><td class="setColor"></td></tr>
    <tr><td>(0068,63E0)</td><td>SQ</td><td>Mating Feature Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,63F0)</td><td class="setColor">US</td><td class="setColor">Mating Feature ID</td><td class="setColor"></td></tr>
    <tr><td>(0068,6400)</td><td>SQ</td><td>Mating Feature Degree of Freedom Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6410)</td><td class="setColor">US</td><td class="setColor">Degree of Freedom ID</td><td class="setColor"></td></tr>
    <tr><td>(0068,6420)</td><td>CS</td><td>Degree of Freedom Type</td><td></td></tr>
    <tr><td class="setColor">(0068,6430)</td><td class="setColor">SQ</td><td class="setColor">2D Mating Feature Coordinates Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6440)</td><td>US</td><td>Referenced HPGL Document ID</td><td></td></tr>
    <tr><td class="setColor">(0068,6450)</td><td class="setColor">FD</td><td class="setColor">2D Mating Point</td><td class="setColor"></td></tr>
    <tr><td>(0068,6460)</td><td>FD</td><td>2D Mating Axes</td><td></td></tr>
    <tr><td class="setColor">(0068,6470)</td><td class="setColor">SQ</td><td class="setColor">2D Degree of Freedom Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6490)</td><td>FD</td><td>3D Degree of Freedom Axis</td><td></td></tr>
    <tr><td class="setColor">(0068,64A0)</td><td class="setColor">FD</td><td class="setColor">Range of Freedom</td><td class="setColor"></td></tr>
    <tr><td>(0068,64C0)</td><td>FD</td><td>3D Mating Point</td><td></td></tr>
    <tr><td class="setColor">(0068,64D0)</td><td class="setColor">FD</td><td class="setColor">3D Mating Axes</td><td class="setColor"></td></tr>
    <tr><td>(0068,64F0)</td><td>FD</td><td>2D Degree of Freedom Axis</td><td></td></tr>
    <tr><td class="setColor">(0068,6500)</td><td class="setColor">SQ</td><td class="setColor">Planning Landmark Point Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6510)</td><td>SQ</td><td>Planning Landmark Line Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6520)</td><td class="setColor">SQ</td><td class="setColor">Planning Landmark Plane Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6530)</td><td>US</td><td>Planning Landmark ID</td><td></td></tr>
    <tr><td class="setColor">(0068,6540)</td><td class="setColor">LO</td><td class="setColor">Planning Landmark Description</td><td class="setColor"></td></tr>
    <tr><td>(0068,6545)</td><td>SQ</td><td>Planning Landmark Identification Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,6550)</td><td class="setColor">SQ</td><td class="setColor">2D Point Coordinates Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,6560)</td><td>FD</td><td>2D Point Coordinates</td><td></td></tr>
    <tr><td class="setColor">(0068,6590)</td><td class="setColor">FD</td><td class="setColor">3D Point Coordinates</td><td class="setColor"></td></tr>
    <tr><td>(0068,65A0)</td><td>SQ</td><td>2D Line Coordinates Sequence</td><td></td></tr>
    <tr><td class="setColor">(0068,65B0)</td><td class="setColor">FD</td><td class="setColor">2D Line Coordinates</td><td class="setColor"></td></tr>
    <tr><td>(0068,65D0)</td><td>FD</td><td>3D Line Coordinates</td><td></td></tr>
    <tr><td class="setColor">(0068,65E0)</td><td class="setColor">SQ</td><td class="setColor">2D Plane Coordinates Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0068,65F0)</td><td>FD</td><td>2D Plane Intersection</td><td></td></tr>
    <tr><td class="setColor">(0068,6610)</td><td class="setColor">FD</td><td class="setColor">3D Plane Origin</td><td class="setColor"></td></tr>
    <tr><td>(0068,6620)</td><td>FD</td><td>3D Plane Normal</td><td></td></tr>
    <tr><td class="setColor">(0070,0001)</td><td class="setColor">SQ</td><td class="setColor">Graphic Annotation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0002)</td><td>CS</td><td>Graphic Layer</td><td></td></tr>
    <tr><td class="setColor">(0070,0003)</td><td class="setColor">CS</td><td class="setColor">Bounding Box Annotation Units</td><td class="setColor"></td></tr>
    <tr><td>(0070,0004)</td><td>CS</td><td>Anchor Point Annotation Units</td><td></td></tr>
    <tr><td class="setColor">(0070,0005)</td><td class="setColor">CS</td><td class="setColor">Graphic Annotation Units</td><td class="setColor"></td></tr>
    <tr><td>(0070,0006)</td><td>ST</td><td>Unformatted Text Value</td><td></td></tr>
    <tr><td class="setColor">(0070,0008)</td><td class="setColor">SQ</td><td class="setColor">Text Object Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0009)</td><td>SQ</td><td>Graphic Object Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0010)</td><td class="setColor">FL</td><td class="setColor">Bounding Box Top Left Hand Corner</td><td class="setColor"></td></tr>
    <tr><td>(0070,0011)</td><td>FL</td><td>Bounding Box Bottom Right Hand Corner</td><td></td></tr>
    <tr><td class="setColor">(0070,0012)</td><td class="setColor">CS</td><td class="setColor">Bounding Box Text Horizontal Justification</td><td class="setColor"></td></tr>
    <tr><td>(0070,0014)</td><td>FL</td><td>Anchor Point</td><td></td></tr>
    <tr><td class="setColor">(0070,0015)</td><td class="setColor">CS</td><td class="setColor">Anchor Point Visibility</td><td class="setColor"></td></tr>
    <tr><td>(0070,0020)</td><td>US</td><td>Graphic Dimensions</td><td></td></tr>
    <tr><td class="setColor">(0070,0021)</td><td class="setColor">US</td><td class="setColor">Number of Graphic Points</td><td class="setColor"></td></tr>
    <tr><td>(0070,0022)</td><td>FL</td><td>Graphic Data</td><td></td></tr>
    <tr><td class="setColor">(0070,0023)</td><td class="setColor">CS</td><td class="setColor">Graphic Type</td><td class="setColor"></td></tr>
    <tr><td>(0070,0024)</td><td>CS</td><td>Graphic Filled</td><td></td></tr>
    <tr><td class="retired1">(0070,0040)</td><td class="retired1">IS</td><td class="retired1">Image Rotation (Retired)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0070,0041)</td><td>CS</td><td>Image Horizontal Flip</td><td></td></tr>
    <tr><td class="setColor">(0070,0042)</td><td class="setColor">US</td><td class="setColor">Image Rotation</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0070,0050)</td><td class="retired">US</td><td class="retired">Displayed Area Top Left Hand Corner (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0070,0051)</td><td class="retired1">US</td><td class="retired1">Displayed Area Bottom Right Hand Corner (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0070,0052)</td><td>SL</td><td>Displayed Area Top Left Hand Corner</td><td></td></tr>
    <tr><td class="setColor">(0070,0053)</td><td class="setColor">SL</td><td class="setColor">Displayed Area Bottom Right Hand Corner</td><td class="setColor"></td></tr>
    <tr><td>(0070,005A)</td><td>SQ</td><td>Displayed Area Selection Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0060)</td><td class="setColor">SQ</td><td class="setColor">Graphic Layer Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0062)</td><td>IS</td><td>Graphic Layer Order</td><td></td></tr>
    <tr><td class="setColor">(0070,0066)</td><td class="setColor">US</td><td class="setColor">Graphic Layer Recommended Display Grayscale Value</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0070,0067)</td><td class="retired">US</td><td class="retired">Graphic Layer Recommended Display RGB Value</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0070,0068)</td><td class="setColor">LO</td><td class="setColor">Graphic Layer Description</td><td class="setColor"></td></tr>
    <tr><td>(0070,0080)</td><td>CS</td><td>Content Label</td><td></td></tr>
    <tr><td class="setColor">(0070,0081)</td><td class="setColor">LO</td><td class="setColor">Content Description</td><td class="setColor"></td></tr>
    <tr><td>(0070,0082)</td><td>DA</td><td>Presentation Creation Date</td><td></td></tr>
    <tr><td class="setColor">(0070,0083)</td><td class="setColor">TM</td><td class="setColor">Presentation Creation Time</td><td class="setColor"></td></tr>
    <tr><td>(0070,0084)</td><td>PN</td><td>Content Creator's Name</td><td></td></tr>
    <tr><td class="setColor">(0070,0086)</td><td class="setColor">SQ</td><td class="setColor">Content Creator's Identification Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0087)</td><td>SQ</td><td>Alternate Content Description Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0100)</td><td class="setColor">CS</td><td class="setColor">Presentation Size Mode</td><td class="setColor"></td></tr>
    <tr><td>(0070,0101)</td><td>DS</td><td>Presentation Pixel Spacing</td><td></td></tr>
    <tr><td class="setColor">(0070,0102)</td><td class="setColor">IS</td><td class="setColor">Presentation Pixel Aspect Ratio</td><td class="setColor"></td></tr>
    <tr><td>(0070,0103)</td><td>FL</td><td>Presentation Pixel Magnification Ratio</td><td></td></tr>
    <tr><td class="setColor">(0070,0207)</td><td class="setColor">LO</td><td class="setColor">Graphic Group Label</td><td class="setColor"></td></tr>
    <tr><td>(0070,0208)</td><td>ST</td><td>Graphic Group Description</td><td></td></tr>
    <tr><td class="setColor">(0070,0209)</td><td class="setColor">SQ</td><td class="setColor">Compound Graphic Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0226)</td><td>UL</td><td>Compound Graphic Instance ID</td><td></td></tr>
    <tr><td class="setColor">(0070,0227)</td><td class="setColor">LO</td><td class="setColor">Font Name</td><td class="setColor"></td></tr>
    <tr><td>(0070,0228)</td><td>CS</td><td>Font Name Type</td><td></td></tr>
    <tr><td class="setColor">(0070,0229)</td><td class="setColor">LO</td><td class="setColor">CSS Font Name</td><td class="setColor"></td></tr>
    <tr><td>(0070,0230)</td><td>FD</td><td>Rotation Angle</td><td></td></tr>
    <tr><td class="setColor">(0070,0231)</td><td class="setColor">SQ</td><td class="setColor">Text Style Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0232)</td><td>SQ</td><td>Line Style Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0233)</td><td class="setColor">SQ</td><td class="setColor">Fill Style Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,0234)</td><td>SQ</td><td>Graphic Group Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0241)</td><td class="setColor">US</td><td class="setColor">Text Color CIELab Value</td><td class="setColor"></td></tr>
    <tr><td>(0070,0242)</td><td>CS</td><td>Horizontal Alignment</td><td></td></tr>
    <tr><td class="setColor">(0070,0243)</td><td class="setColor">CS</td><td class="setColor">Vertical Alignment</td><td class="setColor"></td></tr>
    <tr><td>(0070,0244)</td><td>CS</td><td>Shadow Style</td><td></td></tr>
    <tr><td class="setColor">(0070,0245)</td><td class="setColor">FL</td><td class="setColor">Shadow Offset X</td><td class="setColor"></td></tr>
    <tr><td>(0070,0246)</td><td>FL</td><td>Shadow Offset Y</td><td></td></tr>
    <tr><td class="setColor">(0070,0247)</td><td class="setColor">US</td><td class="setColor">Shadow Color CIELab Value</td><td class="setColor"></td></tr>
    <tr><td>(0070,0248)</td><td>CS</td><td>Underlined</td><td></td></tr>
    <tr><td class="setColor">(0070,0249)</td><td class="setColor">CS</td><td class="setColor">Bold</td><td class="setColor"></td></tr>
    <tr><td>(0070,0250)</td><td>CS</td><td>Italic</td><td></td></tr>
    <tr><td class="setColor">(0070,0251)</td><td class="setColor">US</td><td class="setColor">Pattern On Color CIELab Value</td><td class="setColor"></td></tr>
    <tr><td>(0070,0252)</td><td>US</td><td>Pattern Off Color CIELab Value</td><td></td></tr>
    <tr><td class="setColor">(0070,0253)</td><td class="setColor">FL</td><td class="setColor">Line Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0070,0254)</td><td>CS</td><td>Line Dashing Style</td><td></td></tr>
    <tr><td class="setColor">(0070,0255)</td><td class="setColor">UL</td><td class="setColor">Line Pattern</td><td class="setColor"></td></tr>
    <tr><td>(0070,0256)</td><td>OB</td><td>Fill Pattern</td><td></td></tr>
    <tr><td class="setColor">(0070,0257)</td><td class="setColor">CS</td><td class="setColor">Fill Mode</td><td class="setColor"></td></tr>
    <tr><td>(0070,0258)</td><td>FL</td><td>Shadow Opacity</td><td></td></tr>
    <tr><td class="setColor">(0070,0261)</td><td class="setColor">FL</td><td class="setColor">Gap Length</td><td class="setColor"></td></tr>
    <tr><td>(0070,0262)</td><td>FL</td><td>Diameter of Visibility</td><td></td></tr>
    <tr><td class="setColor">(0070,0273)</td><td class="setColor">FL</td><td class="setColor">Rotation Point</td><td class="setColor"></td></tr>
    <tr><td>(0070,0274)</td><td>CS</td><td>Tick Alignment</td><td></td></tr>
    <tr><td class="setColor">(0070,0278)</td><td class="setColor">CS</td><td class="setColor">Show Tick Label</td><td class="setColor"></td></tr>
    <tr><td>(0070,0279)</td><td>CS</td><td>Tick Label Alignment</td><td></td></tr>
    <tr><td class="setColor">(0070,0282)</td><td class="setColor">CS</td><td class="setColor">Compound Graphic Units</td><td class="setColor"></td></tr>
    <tr><td>(0070,0284)</td><td>FL</td><td>Pattern On Opacity</td><td></td></tr>
    <tr><td class="setColor">(0070,0285)</td><td class="setColor">FL</td><td class="setColor">Pattern Off Opacity</td><td class="setColor"></td></tr>
    <tr><td>(0070,0287)</td><td>SQ</td><td>Major Ticks Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0288)</td><td class="setColor">FL</td><td class="setColor">Tick Position</td><td class="setColor"></td></tr>
    <tr><td>(0070,0289)</td><td>SH</td><td>Tick Label</td><td></td></tr>
    <tr><td class="setColor">(0070,0294)</td><td class="setColor">CS</td><td class="setColor">Compound Graphic Type</td><td class="setColor"></td></tr>
    <tr><td>(0070,0295)</td><td>UL</td><td>Graphic Group ID</td><td></td></tr>
    <tr><td class="setColor">(0070,0306)</td><td class="setColor">CS</td><td class="setColor">Shape Type</td><td class="setColor"></td></tr>
    <tr><td>(0070,0308)</td><td>SQ</td><td>Registration Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0309)</td><td class="setColor">SQ</td><td class="setColor">Matrix Registration Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,030A)</td><td>SQ</td><td>Matrix Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,030B)</td><td class="setColor">FD</td><td class="setColor">Frame of Reference to Displayed Coordinate System Transformation Matrix</td><td class="setColor"></td></tr>
    <tr><td>(0070,030C)</td><td>CS</td><td>Frame of Reference Transformation Matrix Type</td><td></td></tr>
    <tr><td class="setColor">(0070,030D)</td><td class="setColor">SQ</td><td class="setColor">Registration Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,030F)</td><td>ST</td><td>Fiducial Description</td><td></td></tr>
    <tr><td class="setColor">(0070,0310)</td><td class="setColor">SH</td><td class="setColor">Fiducial Identifier</td><td class="setColor"></td></tr>
    <tr><td>(0070,0311)</td><td>SQ</td><td>Fiducial Identifier Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0312)</td><td class="setColor">FD</td><td class="setColor">Contour Uncertainty Radius</td><td class="setColor"></td></tr>
    <tr><td>(0070,0314)</td><td>SQ</td><td>Used Fiducials Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0318)</td><td class="setColor">SQ</td><td class="setColor">Graphic Coordinates Data Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,031A)</td><td>UI</td><td>Fiducial UID</td><td></td></tr>
    <tr><td class="setColor">(0070,031C)</td><td class="setColor">SQ</td><td class="setColor">Fiducial Set Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,031E)</td><td>SQ</td><td>Fiducial Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0401)</td><td class="setColor">US</td><td class="setColor">Graphic Layer Recommended Display CIELab Value</td><td class="setColor"></td></tr>
    <tr><td>(0070,0402)</td><td>SQ</td><td>Blending Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0403)</td><td class="setColor">FL</td><td class="setColor">Relative Opacity</td><td class="setColor"></td></tr>
    <tr><td>(0070,0404)</td><td>SQ</td><td>Referenced Spatial Registration Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,0405)</td><td class="setColor">CS</td><td class="setColor">Blending Position</td><td class="setColor"></td></tr>
    <tr><td>(0070,1101)</td><td>UI</td><td>Presentation Display Collection UID</td><td></td></tr>
    <tr><td class="setColor">(0070,1102)</td><td class="setColor">UI</td><td class="setColor">Presentation Sequence Collection UID</td><td class="setColor"></td></tr>
    <tr><td>(0070,1103)</td><td>US</td><td>Presentation Sequence Position Index</td><td></td></tr>
    <tr><td class="setColor">(0070,1104)</td><td class="setColor">SQ</td><td class="setColor">Rendered Image Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,1201)</td><td>SQ</td><td>Volumetric Presentation State Input Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,1202)</td><td class="setColor">CS</td><td class="setColor">Presentation Input Type</td><td class="setColor"></td></tr>
    <tr><td>(0070,1203)</td><td>US</td><td>Input Sequence Position Index</td><td></td></tr>
    <tr><td class="setColor">(0070,1204)</td><td class="setColor">CS</td><td class="setColor">Crop</td><td class="setColor"></td></tr>
    <tr><td>(0070,1205)</td><td>US</td><td>Cropping Specification Index</td><td></td></tr>
    <tr><td class="setColor">(0070,1206)</td><td class="setColor">CS</td><td class="setColor">Compositing Method</td><td class="setColor"></td></tr>
    <tr><td>(0070,1207)</td><td>US</td><td>Volumetric Presentation Input Number</td><td></td></tr>
    <tr><td class="setColor">(0070,1208)</td><td class="setColor">CS</td><td class="setColor">Image Volume Geometry</td><td class="setColor"></td></tr>
    <tr><td>(0070,1301)</td><td>SQ</td><td>Volume Cropping Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,1302)</td><td class="setColor">CS</td><td class="setColor">Volume Cropping Method</td><td class="setColor"></td></tr>
    <tr><td>(0070,1303)</td><td>FD</td><td>Bounding Box Crop</td><td></td></tr>
    <tr><td class="setColor">(0070,1304)</td><td class="setColor">SQ</td><td class="setColor">Oblique Cropping Plane Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,1305)</td><td>FD</td><td>Plane</td><td></td></tr>
    <tr><td class="setColor">(0070,1306)</td><td class="setColor">FD</td><td class="setColor">Plane Normal</td><td class="setColor"></td></tr>
    <tr><td>(0070,1309)</td><td>US</td><td>Cropping Specification Number</td><td></td></tr>
    <tr><td class="setColor">(0070,1501)</td><td class="setColor">CS</td><td class="setColor">Multi-Planar Reconstruction Style</td><td class="setColor"></td></tr>
    <tr><td>(0070,1502)</td><td>CS</td><td>MPR Thickness Type</td><td></td></tr>
    <tr><td class="setColor">(0070,1503)</td><td class="setColor">FD</td><td class="setColor">MPR Slab Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0070,1505)</td><td>FD</td><td>MPR Top Left Hand Corner</td><td></td></tr>
    <tr><td class="setColor">(0070,1507)</td><td class="setColor">FD</td><td class="setColor">MPR View Width Direction</td><td class="setColor"></td></tr>
    <tr><td>(0070,1508)</td><td>FD</td><td>MPR View Width</td><td></td></tr>
    <tr><td class="setColor">(0070,150C)</td><td class="setColor">UL</td><td class="setColor">Number of Volumetric Curve Points</td><td class="setColor"></td></tr>
    <tr><td>(0070,150D)</td><td>OD</td><td>Volumetric Curve Points</td><td></td></tr>
    <tr><td class="setColor">(0070,1511)</td><td class="setColor">FD</td><td class="setColor">MPR View Height Direction</td><td class="setColor"></td></tr>
    <tr><td>(0070,1512)</td><td>FD</td><td>MPR View Height</td><td></td></tr>
    <tr><td class="setColor">(0070,1801)</td><td class="setColor">SQ</td><td class="setColor">Presentation State Classification Component Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,1802)</td><td>CS</td><td>Component Type</td><td></td></tr>
    <tr><td class="setColor">(0070,1803)</td><td class="setColor">SQ</td><td class="setColor">Component Input Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,1804)</td><td>US</td><td>Volumetric Presentation Input Index</td><td></td></tr>
    <tr><td class="setColor">(0070,1805)</td><td class="setColor">SQ</td><td class="setColor">Presentation State Compositor Component Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,1806)</td><td>SQ</td><td>Weighting Transfer Function Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,1807)</td><td class="setColor">US</td><td class="setColor">Weighting Lookup Table Descriptor</td><td class="setColor"></td></tr>
    <tr><td>(0070,1808)</td><td>OB</td><td>Weighting Lookup Table Data</td><td></td></tr>
    <tr><td class="setColor">(0070,1901)</td><td class="setColor">SQ</td><td class="setColor">Volumetric Annotation Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0070,1903)</td><td>SQ</td><td>Referenced Structured Context Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,1904)</td><td class="setColor">UI</td><td class="setColor">Referenced Content Item</td><td class="setColor"></td></tr>
    <tr><td>(0070,1905)</td><td>SQ</td><td>Volumetric Presentation Input Annotation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,1907)</td><td class="setColor">CS</td><td class="setColor">Annotation Clipping</td><td class="setColor"></td></tr>
    <tr><td>(0070,1A01)</td><td>CS</td><td>Presentation Animation Style</td><td></td></tr>
    <tr><td class="setColor">(0070,1A03)</td><td class="setColor">FD</td><td class="setColor">Recommended Animation Rate</td><td class="setColor"></td></tr>
    <tr><td>(0070,1A04)</td><td>SQ</td><td>Animation Curve Sequence</td><td></td></tr>
    <tr><td class="setColor">(0070,1A05)</td><td class="setColor">FD</td><td class="setColor">Animation Step Size</td><td class="setColor"></td></tr>
    <tr><td>(0072,0002)</td><td>SH</td><td>Hanging Protocol Name</td><td></td></tr>
    <tr><td class="setColor">(0072,0004)</td><td class="setColor">LO</td><td class="setColor">Hanging Protocol Description</td><td class="setColor"></td></tr>
    <tr><td>(0072,0006)</td><td>CS</td><td>Hanging Protocol Level</td><td></td></tr>
    <tr><td class="setColor">(0072,0008)</td><td class="setColor">LO</td><td class="setColor">Hanging Protocol Creator</td><td class="setColor"></td></tr>
    <tr><td>(0072,000A)</td><td>DT</td><td>Hanging Protocol Creation DateTime</td><td></td></tr>
    <tr><td class="setColor">(0072,000C)</td><td class="setColor">SQ</td><td class="setColor">Hanging Protocol Definition Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,000E)</td><td>SQ</td><td>Hanging Protocol User Identification Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0010)</td><td class="setColor">LO</td><td class="setColor">Hanging Protocol User Group Name</td><td class="setColor"></td></tr>
    <tr><td>(0072,0012)</td><td>SQ</td><td>Source Hanging Protocol Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0014)</td><td class="setColor">US</td><td class="setColor">Number of Priors Referenced</td><td class="setColor"></td></tr>
    <tr><td>(0072,0020)</td><td>SQ</td><td>Image Sets Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0022)</td><td class="setColor">SQ</td><td class="setColor">Image Set Selector Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0024)</td><td>CS</td><td>Image Set Selector Usage Flag</td><td></td></tr>
    <tr><td class="setColor">(0072,0026)</td><td class="setColor">AT</td><td class="setColor">Selector Attribute</td><td class="setColor"></td></tr>
    <tr><td>(0072,0028)</td><td>US</td><td>Selector Value Number</td><td></td></tr>
    <tr><td class="setColor">(0072,0030)</td><td class="setColor">SQ</td><td class="setColor">Time Based Image Sets Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0032)</td><td>US</td><td>Image Set Number</td><td></td></tr>
    <tr><td class="setColor">(0072,0034)</td><td class="setColor">CS</td><td class="setColor">Image Set Selector Category</td><td class="setColor"></td></tr>
    <tr><td>(0072,0038)</td><td>US</td><td>Relative Time</td><td></td></tr>
    <tr><td class="setColor">(0072,003A)</td><td class="setColor">CS</td><td class="setColor">Relative Time Units</td><td class="setColor"></td></tr>
    <tr><td>(0072,003C)</td><td>SS</td><td>Abstract Prior Value</td><td></td></tr>
    <tr><td class="setColor">(0072,003E)</td><td class="setColor">SQ</td><td class="setColor">Abstract Prior Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0040)</td><td>LO</td><td>Image Set Label</td><td></td></tr>
    <tr><td class="setColor">(0072,0050)</td><td class="setColor">CS</td><td class="setColor">Selector Attribute VR</td><td class="setColor"></td></tr>
    <tr><td>(0072,0052)</td><td>AT</td><td>Selector Sequence Pointer</td><td></td></tr>
    <tr><td class="setColor">(0072,0054)</td><td class="setColor">LO</td><td class="setColor">Selector Sequence Pointer Private Creator</td><td class="setColor"></td></tr>
    <tr><td>(0072,0056)</td><td>LO</td><td>Selector Attribute Private Creator</td><td></td></tr>
    <tr><td class="setColor">(0072,005E)</td><td class="setColor">AE</td><td class="setColor">Selector AE Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,005F)</td><td>AS</td><td>Selector AS Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0060)</td><td class="setColor">AT</td><td class="setColor">Selector AT Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0061)</td><td>DA</td><td>Selector DA Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0062)</td><td class="setColor">CS</td><td class="setColor">Selector CS Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0063)</td><td>DT</td><td>Selector DT Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0064)</td><td class="setColor">IS</td><td class="setColor">Selector IS Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0065)</td><td>OB</td><td>Selector OB Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0066)</td><td class="setColor">LO</td><td class="setColor">Selector LO Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0067)</td><td>OF</td><td>Selector OF Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0068)</td><td class="setColor">LT</td><td class="setColor">Selector LT Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0069)</td><td>OW</td><td>Selector OW Value</td><td></td></tr>
    <tr><td class="setColor">(0072,006A)</td><td class="setColor">PN</td><td class="setColor">Selector PN Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,006B)</td><td>TM</td><td>Selector TM Value</td><td></td></tr>
    <tr><td class="setColor">(0072,006C)</td><td class="setColor">SH</td><td class="setColor">Selector SH Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,006D)</td><td>UN</td><td>Selector UN Value</td><td></td></tr>
    <tr><td class="setColor">(0072,006E)</td><td class="setColor">ST</td><td class="setColor">Selector ST Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,006F)</td><td>UC</td><td>Selector UC Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0070)</td><td class="setColor">UT</td><td class="setColor">Selector UT Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0071)</td><td>UR</td><td>Selector UR Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0072)</td><td class="setColor">DS</td><td class="setColor">Selector DS Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0073)</td><td>OD</td><td>Selector OD Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0074)</td><td class="setColor">FD</td><td class="setColor">Selector FD Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0075)</td><td>OL</td><td>Selector OL Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0076)</td><td class="setColor">FL</td><td class="setColor">Selector FL Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0078)</td><td>UL</td><td>Selector UL Value</td><td></td></tr>
    <tr><td class="setColor">(0072,007A)</td><td class="setColor">US</td><td class="setColor">Selector US Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,007C)</td><td>SL</td><td>Selector SL Value</td><td></td></tr>
    <tr><td class="setColor">(0072,007E)</td><td class="setColor">SS</td><td class="setColor">Selector SS Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,007F)</td><td>UI</td><td>Selector UI Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0080)</td><td class="setColor">SQ</td><td class="setColor">Selector Code Sequence Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0100)</td><td>US</td><td>Number of Screens</td><td></td></tr>
    <tr><td class="setColor">(0072,0102)</td><td class="setColor">SQ</td><td class="setColor">Nominal Screen Definition Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0104)</td><td>US</td><td>Number of Vertical Pixels</td><td></td></tr>
    <tr><td class="setColor">(0072,0106)</td><td class="setColor">US</td><td class="setColor">Number of Horizontal Pixels</td><td class="setColor"></td></tr>
    <tr><td>(0072,0108)</td><td>FD</td><td>Display Environment Spatial Position</td><td></td></tr>
    <tr><td class="setColor">(0072,010A)</td><td class="setColor">US</td><td class="setColor">Screen Minimum Grayscale Bit Depth</td><td class="setColor"></td></tr>
    <tr><td>(0072,010C)</td><td>US</td><td>Screen Minimum Color Bit Depth</td><td></td></tr>
    <tr><td class="setColor">(0072,010E)</td><td class="setColor">US</td><td class="setColor">Application Maximum Repaint Time</td><td class="setColor"></td></tr>
    <tr><td>(0072,0200)</td><td>SQ</td><td>Display Sets Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0202)</td><td class="setColor">US</td><td class="setColor">Display Set Number</td><td class="setColor"></td></tr>
    <tr><td>(0072,0203)</td><td>LO</td><td>Display Set Label</td><td></td></tr>
    <tr><td class="setColor">(0072,0204)</td><td class="setColor">US</td><td class="setColor">Display Set Presentation Group</td><td class="setColor"></td></tr>
    <tr><td>(0072,0206)</td><td>LO</td><td>Display Set Presentation Group Description</td><td></td></tr>
    <tr><td class="setColor">(0072,0208)</td><td class="setColor">CS</td><td class="setColor">Partial Data Display Handling</td><td class="setColor"></td></tr>
    <tr><td>(0072,0210)</td><td>SQ</td><td>Synchronized Scrolling Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0212)</td><td class="setColor">US</td><td class="setColor">Display Set Scrolling Group</td><td class="setColor"></td></tr>
    <tr><td>(0072,0214)</td><td>SQ</td><td>Navigation Indicator Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0216)</td><td class="setColor">US</td><td class="setColor">Navigation Display Set</td><td class="setColor"></td></tr>
    <tr><td>(0072,0218)</td><td>US</td><td>Reference Display Sets</td><td></td></tr>
    <tr><td class="setColor">(0072,0300)</td><td class="setColor">SQ</td><td class="setColor">Image Boxes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0302)</td><td>US</td><td>Image Box Number</td><td></td></tr>
    <tr><td class="setColor">(0072,0304)</td><td class="setColor">CS</td><td class="setColor">Image Box Layout Type</td><td class="setColor"></td></tr>
    <tr><td>(0072,0306)</td><td>US</td><td>Image Box Tile Horizontal Dimension</td><td></td></tr>
    <tr><td class="setColor">(0072,0308)</td><td class="setColor">US</td><td class="setColor">Image Box Tile Vertical Dimension</td><td class="setColor"></td></tr>
    <tr><td>(0072,0310)</td><td>CS</td><td>Image Box Scroll Direction</td><td></td></tr>
    <tr><td class="setColor">(0072,0312)</td><td class="setColor">CS</td><td class="setColor">Image Box Small Scroll Type</td><td class="setColor"></td></tr>
    <tr><td>(0072,0314)</td><td>US</td><td>Image Box Small Scroll Amount</td><td></td></tr>
    <tr><td class="setColor">(0072,0316)</td><td class="setColor">CS</td><td class="setColor">Image Box Large Scroll Type</td><td class="setColor"></td></tr>
    <tr><td>(0072,0318)</td><td>US</td><td>Image Box Large Scroll Amount</td><td></td></tr>
    <tr><td class="setColor">(0072,0320)</td><td class="setColor">US</td><td class="setColor">Image Box Overlap Priority</td><td class="setColor"></td></tr>
    <tr><td>(0072,0330)</td><td>FD</td><td>Cine Relative to Real-Time</td><td></td></tr>
    <tr><td class="setColor">(0072,0400)</td><td class="setColor">SQ</td><td class="setColor">Filter Operations Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0402)</td><td>CS</td><td>Filter-by Category</td><td></td></tr>
    <tr><td class="setColor">(0072,0404)</td><td class="setColor">CS</td><td class="setColor">Filter-by Attribute Presence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0406)</td><td>CS</td><td>Filter-by Operator</td><td></td></tr>
    <tr><td class="setColor">(0072,0420)</td><td class="setColor">US</td><td class="setColor">Structured Display Background CIELab Value</td><td class="setColor"></td></tr>
    <tr><td>(0072,0421)</td><td>US</td><td>Empty Image Box CIELab Value</td><td></td></tr>
    <tr><td class="setColor">(0072,0422)</td><td class="setColor">SQ</td><td class="setColor">Structured Display Image Box Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0424)</td><td>SQ</td><td>Structured Display Text Box Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0427)</td><td class="setColor">SQ</td><td class="setColor">Referenced First Frame Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0430)</td><td>SQ</td><td>Image Box Synchronization Sequence</td><td></td></tr>
    <tr><td class="setColor">(0072,0432)</td><td class="setColor">US</td><td class="setColor">Synchronized Image Box List</td><td class="setColor"></td></tr>
    <tr><td>(0072,0434)</td><td>CS</td><td>Type of Synchronization</td><td></td></tr>
    <tr><td class="setColor">(0072,0500)</td><td class="setColor">CS</td><td class="setColor">Blending Operation Type</td><td class="setColor"></td></tr>
    <tr><td>(0072,0510)</td><td>CS</td><td>Reformatting Operation Type</td><td></td></tr>
    <tr><td class="setColor">(0072,0512)</td><td class="setColor">FD</td><td class="setColor">Reformatting Thickness</td><td class="setColor"></td></tr>
    <tr><td>(0072,0514)</td><td>FD</td><td>Reformatting Interval</td><td></td></tr>
    <tr><td class="setColor">(0072,0516)</td><td class="setColor">CS</td><td class="setColor">Reformatting Operation Initial View Direction</td><td class="setColor"></td></tr>
    <tr><td>(0072,0520)</td><td>CS</td><td>3D Rendering Type</td><td></td></tr>
    <tr><td class="setColor">(0072,0600)</td><td class="setColor">SQ</td><td class="setColor">Sorting Operations Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0602)</td><td>CS</td><td>Sort-by Category</td><td></td></tr>
    <tr><td class="setColor">(0072,0604)</td><td class="setColor">CS</td><td class="setColor">Sorting Direction</td><td class="setColor"></td></tr>
    <tr><td>(0072,0700)</td><td>CS</td><td>Display Set Patient Orientation</td><td></td></tr>
    <tr><td class="setColor">(0072,0702)</td><td class="setColor">CS</td><td class="setColor">VOI Type</td><td class="setColor"></td></tr>
    <tr><td>(0072,0704)</td><td>CS</td><td>Pseudo-Color Type</td><td></td></tr>
    <tr><td class="setColor">(0072,0705)</td><td class="setColor">SQ</td><td class="setColor">Pseudo-Color Palette Instance Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0072,0706)</td><td>CS</td><td>Show Grayscale Inverted</td><td></td></tr>
    <tr><td class="setColor">(0072,0710)</td><td class="setColor">CS</td><td class="setColor">Show Image True Size Flag</td><td class="setColor"></td></tr>
    <tr><td>(0072,0712)</td><td>CS</td><td>Show Graphic Annotation Flag</td><td></td></tr>
    <tr><td class="setColor">(0072,0714)</td><td class="setColor">CS</td><td class="setColor">Show Patient Demographics Flag</td><td class="setColor"></td></tr>
    <tr><td>(0072,0716)</td><td>CS</td><td>Show Acquisition Techniques Flag</td><td></td></tr>
    <tr><td class="setColor">(0072,0717)</td><td class="setColor">CS</td><td class="setColor">Display Set Horizontal Justification</td><td class="setColor"></td></tr>
    <tr><td>(0072,0718)</td><td>CS</td><td>Display Set Vertical Justification</td><td></td></tr>
    <tr><td class="setColor">(0074,0120)</td><td class="setColor">FD</td><td class="setColor">Continuation Start Meterset</td><td class="setColor"></td></tr>
    <tr><td>(0074,0121)</td><td>FD</td><td>Continuation End Meterset</td><td></td></tr>
    <tr><td class="setColor">(0074,1000)</td><td class="setColor">CS</td><td class="setColor">Procedure Step State</td><td class="setColor"></td></tr>
    <tr><td>(0074,1002)</td><td>SQ</td><td>Procedure Step Progress Information Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1004)</td><td class="setColor">DS</td><td class="setColor">Procedure Step Progress</td><td class="setColor"></td></tr>
    <tr><td>(0074,1006)</td><td>ST</td><td>Procedure Step Progress Description</td><td></td></tr>
    <tr><td class="setColor">(0074,1008)</td><td class="setColor">SQ</td><td class="setColor">Procedure Step Communications URI Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,100A)</td><td>UR</td><td>Contact URI</td><td></td></tr>
    <tr><td class="setColor">(0074,100C)</td><td class="setColor">LO</td><td class="setColor">Contact Display Name</td><td class="setColor"></td></tr>
    <tr><td>(0074,100E)</td><td>SQ</td><td>Procedure Step Discontinuation Reason Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1020)</td><td class="setColor">SQ</td><td class="setColor">Beam Task Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,1022)</td><td>CS</td><td>Beam Task Type</td><td></td></tr>
    <tr><td class="retired1">(0074,1024)</td><td class="retired1">IS</td><td class="retired1">Beam Order Index (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0074,1025)</td><td>CS</td><td>Autosequence Flag</td><td></td></tr>
    <tr><td class="setColor">(0074,1026)</td><td class="setColor">FD</td><td class="setColor">Table Top Vertical Adjusted Position</td><td class="setColor"></td></tr>
    <tr><td>(0074,1027)</td><td>FD</td><td>Table Top Longitudinal Adjusted Position</td><td></td></tr>
    <tr><td class="setColor">(0074,1028)</td><td class="setColor">FD</td><td class="setColor">Table Top Lateral Adjusted Position</td><td class="setColor"></td></tr>
    <tr><td>(0074,102A)</td><td>FD</td><td>Patient Support Adjusted Angle</td><td></td></tr>
    <tr><td class="setColor">(0074,102B)</td><td class="setColor">FD</td><td class="setColor">Table Top Eccentric Adjusted Angle</td><td class="setColor"></td></tr>
    <tr><td>(0074,102C)</td><td>FD</td><td>Table Top Pitch Adjusted Angle</td><td></td></tr>
    <tr><td class="setColor">(0074,102D)</td><td class="setColor">FD</td><td class="setColor">Table Top Roll Adjusted Angle</td><td class="setColor"></td></tr>
    <tr><td>(0074,1030)</td><td>SQ</td><td>Delivery Verification Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1032)</td><td class="setColor">CS</td><td class="setColor">Verification Image Timing</td><td class="setColor"></td></tr>
    <tr><td>(0074,1034)</td><td>CS</td><td>Double Exposure Flag</td><td></td></tr>
    <tr><td class="setColor">(0074,1036)</td><td class="setColor">CS</td><td class="setColor">Double Exposure Ordering</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0074,1038)</td><td class="retired">DS</td><td class="retired">Double Exposure Meterset (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0074,103A)</td><td class="retired1">DS</td><td class="retired1">Double Exposure Field Delta (Trial)</td><td class="retired1">Retired</td></tr>
    <tr><td>(0074,1040)</td><td>SQ</td><td>Related Reference RT Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1042)</td><td class="setColor">SQ</td><td class="setColor">General Machine Verification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,1044)</td><td>SQ</td><td>Conventional Machine Verification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1046)</td><td class="setColor">SQ</td><td class="setColor">Ion Machine Verification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,1048)</td><td>SQ</td><td>Failed Attributes Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,104A)</td><td class="setColor">SQ</td><td class="setColor">Overridden Attributes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,104C)</td><td>SQ</td><td>Conventional Control Point Verification Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,104E)</td><td class="setColor">SQ</td><td class="setColor">Ion Control Point Verification Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,1050)</td><td>SQ</td><td>Attribute Occurrence Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1052)</td><td class="setColor">AT</td><td class="setColor">Attribute Occurrence Pointer</td><td class="setColor"></td></tr>
    <tr><td>(0074,1054)</td><td>UL</td><td>Attribute Item Selector</td><td></td></tr>
    <tr><td class="setColor">(0074,1056)</td><td class="setColor">LO</td><td class="setColor">Attribute Occurrence Private Creator</td><td class="setColor"></td></tr>
    <tr><td>(0074,1057)</td><td>IS</td><td>Selector Sequence Pointer Items</td><td></td></tr>
    <tr><td class="setColor">(0074,1200)</td><td class="setColor">CS</td><td class="setColor">Scheduled Procedure Step Priority</td><td class="setColor"></td></tr>
    <tr><td>(0074,1202)</td><td>LO</td><td>Worklist Label</td><td></td></tr>
    <tr><td class="setColor">(0074,1204)</td><td class="setColor">LO</td><td class="setColor">Procedure Step Label</td><td class="setColor"></td></tr>
    <tr><td>(0074,1210)</td><td>SQ</td><td>Scheduled Processing Parameters Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1212)</td><td class="setColor">SQ</td><td class="setColor">Performed Processing Parameters Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,1216)</td><td>SQ</td><td>Unified Procedure Step Performed Procedure Sequence</td><td></td></tr>
    <tr><td class="retired1">(0074,1220)</td><td class="retired1">SQ</td><td class="retired1">Related Procedure Step Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0074,1222)</td><td class="retired">LO</td><td class="retired">Procedure Step Relationship Type</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(0074,1224)</td><td class="setColor">SQ</td><td class="setColor">Replaced Procedure Step Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0074,1230)</td><td>LO</td><td>Deletion Lock</td><td></td></tr>
    <tr><td class="setColor">(0074,1234)</td><td class="setColor">AE</td><td class="setColor">Receiving AE</td><td class="setColor"></td></tr>
    <tr><td>(0074,1236)</td><td>AE</td><td>Requesting AE</td><td></td></tr>
    <tr><td class="setColor">(0074,1238)</td><td class="setColor">LT</td><td class="setColor">Reason for Cancellation</td><td class="setColor"></td></tr>
    <tr><td>(0074,1242)</td><td>CS</td><td>SCP Status</td><td></td></tr>
    <tr><td class="setColor">(0074,1244)</td><td class="setColor">CS</td><td class="setColor">Subscription List Status</td><td class="setColor"></td></tr>
    <tr><td>(0074,1246)</td><td>CS</td><td>Unified Procedure Step List Status</td><td></td></tr>
    <tr><td class="setColor">(0074,1324)</td><td class="setColor">UL</td><td class="setColor">Beam Order Index</td><td class="setColor"></td></tr>
    <tr><td>(0074,1338)</td><td>FD</td><td>Double Exposure Meterset</td><td></td></tr>
    <tr><td class="setColor">(0074,133A)</td><td class="setColor">FD</td><td class="setColor">Double Exposure Field Delta</td><td class="setColor"></td></tr>
    <tr><td>(0074,1401)</td><td>SQ</td><td>Brachy Task Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1402)</td><td class="setColor">DS</td><td class="setColor">Continuation Start Total Reference Air Kerma</td><td class="setColor"></td></tr>
    <tr><td>(0074,1403)</td><td>DS</td><td>Continuation End Total Reference Air Kerma</td><td></td></tr>
    <tr><td class="setColor">(0074,1404)</td><td class="setColor">IS</td><td class="setColor">Continuation Pulse Number</td><td class="setColor"></td></tr>
    <tr><td>(0074,1405)</td><td>SQ</td><td>Channel Delivery Order Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,1406)</td><td class="setColor">IS</td><td class="setColor">Referenced Channel Number</td><td class="setColor"></td></tr>
    <tr><td>(0074,1407)</td><td>DS</td><td>Start Cumulative Time Weight</td><td></td></tr>
    <tr><td class="setColor">(0074,1408)</td><td class="setColor">DS</td><td class="setColor">End Cumulative Time Weight</td><td class="setColor"></td></tr>
    <tr><td>(0074,1409)</td><td>SQ</td><td>Omitted Channel Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,140A)</td><td class="setColor">CS</td><td class="setColor">Reason for Channel Omission</td><td class="setColor"></td></tr>
    <tr><td>(0074,140B)</td><td>LO</td><td>Reason for Channel Omission Description</td><td></td></tr>
    <tr><td class="setColor">(0074,140C)</td><td class="setColor">IS</td><td class="setColor">Channel Delivery Order Index</td><td class="setColor"></td></tr>
    <tr><td>(0074,140D)</td><td>SQ</td><td>Channel Delivery Continuation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0074,140E)</td><td class="setColor">SQ</td><td class="setColor">Omitted Application Setup Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0076,0001)</td><td>LO</td><td>Implant Assembly Template Name</td><td></td></tr>
    <tr><td class="setColor">(0076,0003)</td><td class="setColor">LO</td><td class="setColor">Implant Assembly Template Issuer</td><td class="setColor"></td></tr>
    <tr><td>(0076,0006)</td><td>LO</td><td>Implant Assembly Template Version</td><td></td></tr>
    <tr><td class="setColor">(0076,0008)</td><td class="setColor">SQ</td><td class="setColor">Replaced Implant Assembly Template Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0076,000A)</td><td>CS</td><td>Implant Assembly Template Type</td><td></td></tr>
    <tr><td class="setColor">(0076,000C)</td><td class="setColor">SQ</td><td class="setColor">Original Implant Assembly Template Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0076,000E)</td><td>SQ</td><td>Derivation Implant Assembly Template Sequence</td><td></td></tr>
    <tr><td class="setColor">(0076,0010)</td><td class="setColor">SQ</td><td class="setColor">Implant Assembly Template Target Anatomy Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0076,0020)</td><td>SQ</td><td>Procedure Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0076,0030)</td><td class="setColor">LO</td><td class="setColor">Surgical Technique</td><td class="setColor"></td></tr>
    <tr><td>(0076,0032)</td><td>SQ</td><td>Component Types Sequence</td><td></td></tr>
    <tr><td class="setColor">(0076,0034)</td><td class="setColor">CS</td><td class="setColor">Component Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0076,0036)</td><td>CS</td><td>Exclusive Component Type</td><td></td></tr>
    <tr><td class="setColor">(0076,0038)</td><td class="setColor">CS</td><td class="setColor">Mandatory Component Type</td><td class="setColor"></td></tr>
    <tr><td>(0076,0040)</td><td>SQ</td><td>Component Sequence</td><td></td></tr>
    <tr><td class="setColor">(0076,0055)</td><td class="setColor">US</td><td class="setColor">Component ID</td><td class="setColor"></td></tr>
    <tr><td>(0076,0060)</td><td>SQ</td><td>Component Assembly Sequence</td><td></td></tr>
    <tr><td class="setColor">(0076,0070)</td><td class="setColor">US</td><td class="setColor">Component 1 Referenced ID</td><td class="setColor"></td></tr>
    <tr><td>(0076,0080)</td><td>US</td><td>Component 1 Referenced Mating Feature Set ID</td><td></td></tr>
    <tr><td class="setColor">(0076,0090)</td><td class="setColor">US</td><td class="setColor">Component 1 Referenced Mating Feature ID</td><td class="setColor"></td></tr>
    <tr><td>(0076,00A0)</td><td>US</td><td>Component 2 Referenced ID</td><td></td></tr>
    <tr><td class="setColor">(0076,00B0)</td><td class="setColor">US</td><td class="setColor">Component 2 Referenced Mating Feature Set ID</td><td class="setColor"></td></tr>
    <tr><td>(0076,00C0)</td><td>US</td><td>Component 2 Referenced Mating Feature ID</td><td></td></tr>
    <tr><td class="setColor">(0078,0001)</td><td class="setColor">LO</td><td class="setColor">Implant Template Group Name</td><td class="setColor"></td></tr>
    <tr><td>(0078,0010)</td><td>ST</td><td>Implant Template Group Description</td><td></td></tr>
    <tr><td class="setColor">(0078,0020)</td><td class="setColor">LO</td><td class="setColor">Implant Template Group Issuer</td><td class="setColor"></td></tr>
    <tr><td>(0078,0024)</td><td>LO</td><td>Implant Template Group Version</td><td></td></tr>
    <tr><td class="setColor">(0078,0026)</td><td class="setColor">SQ</td><td class="setColor">Replaced Implant Template Group Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0078,0028)</td><td>SQ</td><td>Implant Template Group Target Anatomy Sequence</td><td></td></tr>
    <tr><td class="setColor">(0078,002A)</td><td class="setColor">SQ</td><td class="setColor">Implant Template Group Members Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0078,002E)</td><td>US</td><td>Implant Template Group Member ID</td><td></td></tr>
    <tr><td class="setColor">(0078,0050)</td><td class="setColor">FD</td><td class="setColor">3D Implant Template Group Member Matching Point</td><td class="setColor"></td></tr>
    <tr><td>(0078,0060)</td><td>FD</td><td>3D Implant Template Group Member Matching Axes</td><td></td></tr>
    <tr><td class="setColor">(0078,0070)</td><td class="setColor">SQ</td><td class="setColor">Implant Template Group Member Matching 2D Coordinates Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0078,0090)</td><td>FD</td><td>2D Implant Template Group Member Matching Point</td><td></td></tr>
    <tr><td class="setColor">(0078,00A0)</td><td class="setColor">FD</td><td class="setColor">2D Implant Template Group Member Matching Axes</td><td class="setColor"></td></tr>
    <tr><td>(0078,00B0)</td><td>SQ</td><td>Implant Template Group Variation Dimension Sequence</td><td></td></tr>
    <tr><td class="setColor">(0078,00B2)</td><td class="setColor">LO</td><td class="setColor">Implant Template Group Variation Dimension Name</td><td class="setColor"></td></tr>
    <tr><td>(0078,00B4)</td><td>SQ</td><td>Implant Template Group Variation Dimension Rank Sequence</td><td></td></tr>
    <tr><td class="setColor">(0078,00B6)</td><td class="setColor">US</td><td class="setColor">Referenced Implant Template Group Member ID</td><td class="setColor"></td></tr>
    <tr><td>(0078,00B8)</td><td>US</td><td>Implant Template Group Variation Dimension Rank</td><td></td></tr>
    <tr><td class="setColor">(0080,0001)</td><td class="setColor">SQ</td><td class="setColor">Surface Scan Acquisition Type Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0080,0002)</td><td>SQ</td><td>Surface Scan Mode Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0080,0003)</td><td class="setColor">SQ</td><td class="setColor">Registration Method Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0080,0004)</td><td>FD</td><td>Shot Duration Time</td><td></td></tr>
    <tr><td class="setColor">(0080,0005)</td><td class="setColor">FD</td><td class="setColor">Shot Offset Time</td><td class="setColor"></td></tr>
    <tr><td>(0080,0006)</td><td>US</td><td>Surface Point Presentation Value Data</td><td></td></tr>
    <tr><td class="setColor">(0080,0007)</td><td class="setColor">US</td><td class="setColor">Surface Point Color CIELab Value Data</td><td class="setColor"></td></tr>
    <tr><td>(0080,0008)</td><td>SQ</td><td>UV Mapping Sequence</td><td></td></tr>
    <tr><td class="setColor">(0080,0009)</td><td class="setColor">SH</td><td class="setColor">Texture Label</td><td class="setColor"></td></tr>
    <tr><td>(0080,0010)</td><td>OF</td><td>U Value Data</td><td></td></tr>
    <tr><td class="setColor">(0080,0011)</td><td class="setColor">OF</td><td class="setColor">V Value Data</td><td class="setColor"></td></tr>
    <tr><td>(0080,0012)</td><td>SQ</td><td>Referenced Texture Sequence</td><td></td></tr>
    <tr><td class="setColor">(0080,0013)</td><td class="setColor">SQ</td><td class="setColor">Referenced Surface Data Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0001)</td><td>CS</td><td>Assessment Summary</td><td></td></tr>
    <tr><td class="setColor">(0082,0003)</td><td class="setColor">UT</td><td class="setColor">Assessment Summary Description</td><td class="setColor"></td></tr>
    <tr><td>(0082,0004)</td><td>SQ</td><td>Assessed SOP Instance Sequence</td><td></td></tr>
    <tr><td class="setColor">(0082,0005)</td><td class="setColor">SQ</td><td class="setColor">Referenced Comparison SOP Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0006)</td><td>UL</td><td>Number of Assessment Observations</td><td></td></tr>
    <tr><td class="setColor">(0082,0007)</td><td class="setColor">SQ</td><td class="setColor">Assessment Observations Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0008)</td><td>CS</td><td>Observation Significance</td><td></td></tr>
    <tr><td class="setColor">(0082,000A)</td><td class="setColor">UT</td><td class="setColor">Observation Description</td><td class="setColor"></td></tr>
    <tr><td>(0082,000C)</td><td>SQ</td><td>Structured Constraint Observation Sequence</td><td></td></tr>
    <tr><td class="setColor">(0082,0010)</td><td class="setColor">SQ</td><td class="setColor">Assessed Attribute Value Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0016)</td><td>LO</td><td>Assessment Set ID</td><td></td></tr>
    <tr><td class="setColor">(0082,0017)</td><td class="setColor">SQ</td><td class="setColor">Assessment Requester Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0018)</td><td>LO</td><td>Selector Attribute Name</td><td></td></tr>
    <tr><td class="setColor">(0082,0019)</td><td class="setColor">LO</td><td class="setColor">Selector Attribute Keyword</td><td class="setColor"></td></tr>
    <tr><td>(0082,0021)</td><td>SQ</td><td>Assessment Type Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0082,0022)</td><td class="setColor">SQ</td><td class="setColor">Observation Basis Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0023)</td><td>LO</td><td>Assessment Label</td><td></td></tr>
    <tr><td class="setColor">(0082,0032)</td><td class="setColor">CS</td><td class="setColor">Constraint Type</td><td class="setColor"></td></tr>
    <tr><td>(0082,0033)</td><td>UT</td><td>Specification Selection Guidance</td><td></td></tr>
    <tr><td class="setColor">(0082,0034)</td><td class="setColor">SQ</td><td class="setColor">Constraint Value Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0082,0035)</td><td>SQ</td><td>Recommended Default Value Sequence</td><td></td></tr>
    <tr><td class="setColor">(0082,0036)</td><td class="setColor">CS</td><td class="setColor">Constraint Violation Significance</td><td class="setColor"></td></tr>
    <tr><td>(0082,0037)</td><td>UT</td><td>Constraint Violation Condition</td><td></td></tr>
    <tr><td class="setColor">(0088,0130)</td><td class="setColor">SH</td><td class="setColor">Storage Media File-set ID</td><td class="setColor"></td></tr>
    <tr><td>(0088,0140)</td><td>UI</td><td>Storage Media File-set UID</td><td></td></tr>
    <tr><td class="setColor">(0088,0200)</td><td class="setColor">SQ</td><td class="setColor">Icon Image Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(0088,0904)</td><td class="retired">LO</td><td class="retired">Topic Title</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0088,0906)</td><td class="retired1">ST</td><td class="retired1">Topic Subject</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(0088,0910)</td><td class="retired">LO</td><td class="retired">Topic Author</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(0088,0912)</td><td class="retired1">LO</td><td class="retired1">Topic Keywords</td><td class="retired1">Retired</td></tr>
    <tr><td>(0100,0410)</td><td>CS</td><td>SOP Instance Status</td><td></td></tr>
    <tr><td class="setColor">(0100,0420)</td><td class="setColor">DT</td><td class="setColor">SOP Authorization DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0100,0424)</td><td>LT</td><td>SOP Authorization Comment</td><td></td></tr>
    <tr><td class="setColor">(0100,0426)</td><td class="setColor">LO</td><td class="setColor">Authorization Equipment Certification Number</td><td class="setColor"></td></tr>
    <tr><td>(0400,0005)</td><td>US</td><td>MAC ID Number</td><td></td></tr>
    <tr><td class="setColor">(0400,0010)</td><td class="setColor">UI</td><td class="setColor">MAC Calculation Transfer Syntax UID</td><td class="setColor"></td></tr>
    <tr><td>(0400,0015)</td><td>CS</td><td>MAC Algorithm</td><td></td></tr>
    <tr><td class="setColor">(0400,0020)</td><td class="setColor">AT</td><td class="setColor">Data Elements Signed</td><td class="setColor"></td></tr>
    <tr><td>(0400,0100)</td><td>UI</td><td>Digital Signature UID</td><td></td></tr>
    <tr><td class="setColor">(0400,0105)</td><td class="setColor">DT</td><td class="setColor">Digital Signature DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0400,0110)</td><td>CS</td><td>Certificate Type</td><td></td></tr>
    <tr><td class="setColor">(0400,0115)</td><td class="setColor">OB</td><td class="setColor">Certificate of Signer</td><td class="setColor"></td></tr>
    <tr><td>(0400,0120)</td><td>OB</td><td>Signature</td><td></td></tr>
    <tr><td class="setColor">(0400,0305)</td><td class="setColor">CS</td><td class="setColor">Certified Timestamp Type</td><td class="setColor"></td></tr>
    <tr><td>(0400,0310)</td><td>OB</td><td>Certified Timestamp</td><td></td></tr>
    <tr><td class="retired1">(0400,0315)</td><td class="retired1">FL</td><td class="retired1"></td><td class="retired1">Retired</td></tr>
    <tr><td>(0400,0401)</td><td>SQ</td><td>Digital Signature Purpose Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(0400,0402)</td><td class="setColor">SQ</td><td class="setColor">Referenced Digital Signature Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0400,0403)</td><td>SQ</td><td>Referenced SOP Instance MAC Sequence</td><td></td></tr>
    <tr><td class="setColor">(0400,0404)</td><td class="setColor">OB</td><td class="setColor">MAC</td><td class="setColor"></td></tr>
    <tr><td>(0400,0500)</td><td>SQ</td><td>Encrypted Attributes Sequence</td><td></td></tr>
    <tr><td class="setColor">(0400,0510)</td><td class="setColor">UI</td><td class="setColor">Encrypted Content Transfer Syntax UID</td><td class="setColor"></td></tr>
    <tr><td>(0400,0520)</td><td>OB</td><td>Encrypted Content</td><td></td></tr>
    <tr><td class="setColor">(0400,0550)</td><td class="setColor">SQ</td><td class="setColor">Modified Attributes Sequence</td><td class="setColor"></td></tr>
    <tr><td>(0400,0561)</td><td>SQ</td><td>Original Attributes Sequence</td><td></td></tr>
    <tr><td class="setColor">(0400,0562)</td><td class="setColor">DT</td><td class="setColor">Attribute Modification DateTime</td><td class="setColor"></td></tr>
    <tr><td>(0400,0563)</td><td>LO</td><td>Modifying System</td><td></td></tr>
    <tr><td class="setColor">(0400,0564)</td><td class="setColor">LO</td><td class="setColor">Source of Previous Values</td><td class="setColor"></td></tr>
    <tr><td>(0400,0565)</td><td>CS</td><td>Reason for the Attribute Modification</td><td></td></tr>
    <tr><td class="retired1">(1000,xxx0)</td><td class="retired1">US</td><td class="retired1">Escape Triplet</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(1000,xxx1)</td><td class="retired">US</td><td class="retired">Run Length Triplet</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(1000,xxx2)</td><td class="retired1">US</td><td class="retired1">Huffman Table Size</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(1000,xxx3)</td><td class="retired">US</td><td class="retired">Huffman Table Triplet</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(1000,xxx4)</td><td class="retired1">US</td><td class="retired1">Shift Table Size</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(1000,xxx5)</td><td class="retired">US</td><td class="retired">Shift Table Triplet</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(1010,xxxx)</td><td class="retired1">US</td><td class="retired1">Zonal Map</td><td class="retired1">Retired</td></tr>
    <tr><td>(2000,0010)</td><td>IS</td><td>Number of Copies</td><td></td></tr>
    <tr><td class="setColor">(2000,001E)</td><td class="setColor">SQ</td><td class="setColor">Printer Configuration Sequence</td><td class="setColor"></td></tr>
    <tr><td>(2000,0020)</td><td>CS</td><td>Print Priority</td><td></td></tr>
    <tr><td class="setColor">(2000,0030)</td><td class="setColor">CS</td><td class="setColor">Medium Type</td><td class="setColor"></td></tr>
    <tr><td>(2000,0040)</td><td>CS</td><td>Film Destination</td><td></td></tr>
    <tr><td class="setColor">(2000,0050)</td><td class="setColor">LO</td><td class="setColor">Film Session Label</td><td class="setColor"></td></tr>
    <tr><td>(2000,0060)</td><td>IS</td><td>Memory Allocation</td><td></td></tr>
    <tr><td class="setColor">(2000,0061)</td><td class="setColor">IS</td><td class="setColor">Maximum Memory Allocation</td><td class="setColor"></td></tr>
    <tr><td class="retired">(2000,0062)</td><td class="retired">CS</td><td class="retired">Color Image Printing Flag</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2000,0063)</td><td class="retired1">CS</td><td class="retired1">Collation Flag</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2000,0065)</td><td class="retired">CS</td><td class="retired">Annotation Flag</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2000,0067)</td><td class="retired1">CS</td><td class="retired1">Image Overlay Flag</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2000,0069)</td><td class="retired">CS</td><td class="retired">Presentation LUT Flag</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2000,006A)</td><td class="retired1">CS</td><td class="retired1">Image Box Presentation LUT Flag</td><td class="retired1">Retired</td></tr>
    <tr><td>(2000,00A0)</td><td>US</td><td>Memory Bit Depth</td><td></td></tr>
    <tr><td class="setColor">(2000,00A1)</td><td class="setColor">US</td><td class="setColor">Printing Bit Depth</td><td class="setColor"></td></tr>
    <tr><td>(2000,00A2)</td><td>SQ</td><td>Media Installed Sequence</td><td></td></tr>
    <tr><td class="setColor">(2000,00A4)</td><td class="setColor">SQ</td><td class="setColor">Other Media Available Sequence</td><td class="setColor"></td></tr>
    <tr><td>(2000,00A8)</td><td>SQ</td><td>Supported Image Display Formats Sequence</td><td></td></tr>
    <tr><td class="setColor">(2000,0500)</td><td class="setColor">SQ</td><td class="setColor">Referenced Film Box Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(2000,0510)</td><td class="retired">SQ</td><td class="retired">Referenced Stored Print Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(2010,0010)</td><td class="setColor">ST</td><td class="setColor">Image Display Format</td><td class="setColor"></td></tr>
    <tr><td>(2010,0030)</td><td>CS</td><td>Annotation Display Format ID</td><td></td></tr>
    <tr><td class="setColor">(2010,0040)</td><td class="setColor">CS</td><td class="setColor">Film Orientation</td><td class="setColor"></td></tr>
    <tr><td>(2010,0050)</td><td>CS</td><td>Film Size ID</td><td></td></tr>
    <tr><td class="setColor">(2010,0052)</td><td class="setColor">CS</td><td class="setColor">Printer Resolution ID</td><td class="setColor"></td></tr>
    <tr><td>(2010,0054)</td><td>CS</td><td>Default Printer Resolution ID</td><td></td></tr>
    <tr><td class="setColor">(2010,0060)</td><td class="setColor">CS</td><td class="setColor">Magnification Type</td><td class="setColor"></td></tr>
    <tr><td>(2010,0080)</td><td>CS</td><td>Smoothing Type</td><td></td></tr>
    <tr><td class="setColor">(2010,00A6)</td><td class="setColor">CS</td><td class="setColor">Default Magnification Type</td><td class="setColor"></td></tr>
    <tr><td>(2010,00A7)</td><td>CS</td><td>Other Magnification Types Available</td><td></td></tr>
    <tr><td class="setColor">(2010,00A8)</td><td class="setColor">CS</td><td class="setColor">Default Smoothing Type</td><td class="setColor"></td></tr>
    <tr><td>(2010,00A9)</td><td>CS</td><td>Other Smoothing Types Available</td><td></td></tr>
    <tr><td class="setColor">(2010,0100)</td><td class="setColor">CS</td><td class="setColor">Border Density</td><td class="setColor"></td></tr>
    <tr><td>(2010,0110)</td><td>CS</td><td>Empty Image Density</td><td></td></tr>
    <tr><td class="setColor">(2010,0120)</td><td class="setColor">US</td><td class="setColor">Min Density</td><td class="setColor"></td></tr>
    <tr><td>(2010,0130)</td><td>US</td><td>Max Density</td><td></td></tr>
    <tr><td class="setColor">(2010,0140)</td><td class="setColor">CS</td><td class="setColor">Trim</td><td class="setColor"></td></tr>
    <tr><td>(2010,0150)</td><td>ST</td><td>Configuration Information</td><td></td></tr>
    <tr><td class="setColor">(2010,0152)</td><td class="setColor">LT</td><td class="setColor">Configuration Information Description</td><td class="setColor"></td></tr>
    <tr><td>(2010,0154)</td><td>IS</td><td>Maximum Collated Films</td><td></td></tr>
    <tr><td class="setColor">(2010,015E)</td><td class="setColor">US</td><td class="setColor">Illumination</td><td class="setColor"></td></tr>
    <tr><td>(2010,0160)</td><td>US</td><td>Reflected Ambient Light</td><td></td></tr>
    <tr><td class="setColor">(2010,0376)</td><td class="setColor">DS</td><td class="setColor">Printer Pixel Spacing</td><td class="setColor"></td></tr>
    <tr><td>(2010,0500)</td><td>SQ</td><td>Referenced Film Session Sequence</td><td></td></tr>
    <tr><td class="setColor">(2010,0510)</td><td class="setColor">SQ</td><td class="setColor">Referenced Image Box Sequence</td><td class="setColor"></td></tr>
    <tr><td>(2010,0520)</td><td>SQ</td><td>Referenced Basic Annotation Box Sequence</td><td></td></tr>
    <tr><td class="setColor">(2020,0010)</td><td class="setColor">US</td><td class="setColor">Image Box Position</td><td class="setColor"></td></tr>
    <tr><td>(2020,0020)</td><td>CS</td><td>Polarity</td><td></td></tr>
    <tr><td class="setColor">(2020,0030)</td><td class="setColor">DS</td><td class="setColor">Requested Image Size</td><td class="setColor"></td></tr>
    <tr><td>(2020,0040)</td><td>CS</td><td>Requested Decimate/Crop Behavior</td><td></td></tr>
    <tr><td class="setColor">(2020,0050)</td><td class="setColor">CS</td><td class="setColor">Requested Resolution ID</td><td class="setColor"></td></tr>
    <tr><td>(2020,00A0)</td><td>CS</td><td>Requested Image Size Flag</td><td></td></tr>
    <tr><td class="setColor">(2020,00A2)</td><td class="setColor">CS</td><td class="setColor">Decimate/Crop Result</td><td class="setColor"></td></tr>
    <tr><td>(2020,0110)</td><td>SQ</td><td>Basic Grayscale Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(2020,0111)</td><td class="setColor">SQ</td><td class="setColor">Basic Color Image Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(2020,0130)</td><td class="retired">SQ</td><td class="retired">Referenced Image Overlay Box Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2020,0140)</td><td class="retired1">SQ</td><td class="retired1">Referenced VOI LUT Box Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td>(2030,0010)</td><td>US</td><td>Annotation Position</td><td></td></tr>
    <tr><td class="setColor">(2030,0020)</td><td class="setColor">LO</td><td class="setColor">Text String</td><td class="setColor"></td></tr>
    <tr><td class="retired">(2040,0010)</td><td class="retired">SQ</td><td class="retired">Referenced Overlay Plane Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2040,0011)</td><td class="retired1">US</td><td class="retired1">Referenced Overlay Plane Groups</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2040,0020)</td><td class="retired">SQ</td><td class="retired">Overlay Pixel Data Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2040,0060)</td><td class="retired1">CS</td><td class="retired1">Overlay Magnification Type</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2040,0070)</td><td class="retired">CS</td><td class="retired">Overlay Smoothing Type</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2040,0072)</td><td class="retired1">CS</td><td class="retired1">Overlay or Image Magnification</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2040,0074)</td><td class="retired">US</td><td class="retired">Magnify to Number of Columns</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2040,0080)</td><td class="retired1">CS</td><td class="retired1">Overlay Foreground Density</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2040,0082)</td><td class="retired">CS</td><td class="retired">Overlay Background Density</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2040,0090)</td><td class="retired1">CS</td><td class="retired1">Overlay Mode</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2040,0100)</td><td class="retired">CS</td><td class="retired">Threshold Density</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2040,0500)</td><td class="retired1">SQ</td><td class="retired1">Referenced Image Box Sequence (Retired)</td><td class="retired1">Retired</td></tr>
    <tr><td>(2050,0010)</td><td>SQ</td><td>Presentation LUT Sequence</td><td></td></tr>
    <tr><td class="setColor">(2050,0020)</td><td class="setColor">CS</td><td class="setColor">Presentation LUT Shape</td><td class="setColor"></td></tr>
    <tr><td>(2050,0500)</td><td>SQ</td><td>Referenced Presentation LUT Sequence</td><td></td></tr>
    <tr><td class="retired1">(2100,0010)</td><td class="retired1">SH</td><td class="retired1">Print Job ID</td><td class="retired1">Retired</td></tr>
    <tr><td>(2100,0020)</td><td>CS</td><td>Execution Status</td><td></td></tr>
    <tr><td class="setColor">(2100,0030)</td><td class="setColor">CS</td><td class="setColor">Execution Status Info</td><td class="setColor"></td></tr>
    <tr><td>(2100,0040)</td><td>DA</td><td>Creation Date</td><td></td></tr>
    <tr><td class="setColor">(2100,0050)</td><td class="setColor">TM</td><td class="setColor">Creation Time</td><td class="setColor"></td></tr>
    <tr><td>(2100,0070)</td><td>AE</td><td>Originator</td><td></td></tr>
    <tr><td class="setColor">(2100,0140)</td><td class="setColor">AE</td><td class="setColor">Destination AE</td><td class="setColor"></td></tr>
    <tr><td>(2100,0160)</td><td>SH</td><td>Owner ID</td><td></td></tr>
    <tr><td class="setColor">(2100,0170)</td><td class="setColor">IS</td><td class="setColor">Number of Films</td><td class="setColor"></td></tr>
    <tr><td class="retired">(2100,0500)</td><td class="retired">SQ</td><td class="retired">Referenced Print Job Sequence (Pull Stored Print)</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(2110,0010)</td><td class="setColor">CS</td><td class="setColor">Printer Status</td><td class="setColor"></td></tr>
    <tr><td>(2110,0020)</td><td>CS</td><td>Printer Status Info</td><td></td></tr>
    <tr><td class="setColor">(2110,0030)</td><td class="setColor">LO</td><td class="setColor">Printer Name</td><td class="setColor"></td></tr>
    <tr><td class="retired">(2110,0099)</td><td class="retired">SH</td><td class="retired">Print Queue ID</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2120,0010)</td><td class="retired1">CS</td><td class="retired1">Queue Status</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2120,0050)</td><td class="retired">SQ</td><td class="retired">Print Job Description Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2120,0070)</td><td class="retired1">SQ</td><td class="retired1">Referenced Print Job Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2130,0010)</td><td class="retired">SQ</td><td class="retired">Print Management Capabilities Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2130,0015)</td><td class="retired1">SQ</td><td class="retired1">Printer Characteristics Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2130,0030)</td><td class="retired">SQ</td><td class="retired">Film Box Content Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2130,0040)</td><td class="retired1">SQ</td><td class="retired1">Image Box Content Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2130,0050)</td><td class="retired">SQ</td><td class="retired">Annotation Content Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2130,0060)</td><td class="retired1">SQ</td><td class="retired1">Image Overlay Box Content Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2130,0080)</td><td class="retired">SQ</td><td class="retired">Presentation LUT Content Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(2130,00A0)</td><td class="retired1">SQ</td><td class="retired1">Proposed Study Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(2130,00C0)</td><td class="retired">SQ</td><td class="retired">Original Image Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(2200,0001)</td><td class="setColor">CS</td><td class="setColor">Label Using Information Extracted From Instances</td><td class="setColor"></td></tr>
    <tr><td>(2200,0002)</td><td>UT</td><td>Label Text</td><td></td></tr>
    <tr><td class="setColor">(2200,0003)</td><td class="setColor">CS</td><td class="setColor">Label Style Selection</td><td class="setColor"></td></tr>
    <tr><td>(2200,0004)</td><td>LT</td><td>Media Disposition</td><td></td></tr>
    <tr><td class="setColor">(2200,0005)</td><td class="setColor">LT</td><td class="setColor">Barcode Value</td><td class="setColor"></td></tr>
    <tr><td>(2200,0006)</td><td>CS</td><td>Barcode Symbology</td><td></td></tr>
    <tr><td class="setColor">(2200,0007)</td><td class="setColor">CS</td><td class="setColor">Allow Media Splitting</td><td class="setColor"></td></tr>
    <tr><td>(2200,0008)</td><td>CS</td><td>Include Non-DICOM Objects</td><td></td></tr>
    <tr><td class="setColor">(2200,0009)</td><td class="setColor">CS</td><td class="setColor">Include Display Application</td><td class="setColor"></td></tr>
    <tr><td>(2200,000A)</td><td>CS</td><td>Preserve Composite Instances After Media Creation</td><td></td></tr>
    <tr><td class="setColor">(2200,000B)</td><td class="setColor">US</td><td class="setColor">Total Number of Pieces of Media Created</td><td class="setColor"></td></tr>
    <tr><td>(2200,000C)</td><td>LO</td><td>Requested Media Application Profile</td><td></td></tr>
    <tr><td class="setColor">(2200,000D)</td><td class="setColor">SQ</td><td class="setColor">Referenced Storage Media Sequence</td><td class="setColor"></td></tr>
    <tr><td>(2200,000E)</td><td>AT</td><td>Failure Attributes</td><td></td></tr>
    <tr><td class="setColor">(2200,000F)</td><td class="setColor">CS</td><td class="setColor">Allow Lossy Compression</td><td class="setColor"></td></tr>
    <tr><td>(2200,0020)</td><td>CS</td><td>Request Priority</td><td></td></tr>
    <tr><td class="setColor">(3002,0002)</td><td class="setColor">SH</td><td class="setColor">RT Image Label</td><td class="setColor"></td></tr>
    <tr><td>(3002,0003)</td><td>LO</td><td>RT Image Name</td><td></td></tr>
    <tr><td class="setColor">(3002,0004)</td><td class="setColor">ST</td><td class="setColor">RT Image Description</td><td class="setColor"></td></tr>
    <tr><td>(3002,000A)</td><td>CS</td><td>Reported Values Origin</td><td></td></tr>
    <tr><td class="setColor">(3002,000C)</td><td class="setColor">CS</td><td class="setColor">RT Image Plane</td><td class="setColor"></td></tr>
    <tr><td>(3002,000D)</td><td>DS</td><td>X-Ray Image Receptor Translation</td><td></td></tr>
    <tr><td class="setColor">(3002,000E)</td><td class="setColor">DS</td><td class="setColor">X-Ray Image Receptor Angle</td><td class="setColor"></td></tr>
    <tr><td>(3002,0010)</td><td>DS</td><td>RT Image Orientation</td><td></td></tr>
    <tr><td class="setColor">(3002,0011)</td><td class="setColor">DS</td><td class="setColor">Image Plane Pixel Spacing</td><td class="setColor"></td></tr>
    <tr><td>(3002,0012)</td><td>DS</td><td>RT Image Position</td><td></td></tr>
    <tr><td class="setColor">(3002,0020)</td><td class="setColor">SH</td><td class="setColor">Radiation Machine Name</td><td class="setColor"></td></tr>
    <tr><td>(3002,0022)</td><td>DS</td><td>Radiation Machine SAD</td><td></td></tr>
    <tr><td class="setColor">(3002,0024)</td><td class="setColor">DS</td><td class="setColor">Radiation Machine SSD</td><td class="setColor"></td></tr>
    <tr><td>(3002,0026)</td><td>DS</td><td>RT Image SID</td><td></td></tr>
    <tr><td class="setColor">(3002,0028)</td><td class="setColor">DS</td><td class="setColor">Source to Reference Object Distance</td><td class="setColor"></td></tr>
    <tr><td>(3002,0029)</td><td>IS</td><td>Fraction Number</td><td></td></tr>
    <tr><td class="setColor">(3002,0030)</td><td class="setColor">SQ</td><td class="setColor">Exposure Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3002,0032)</td><td>DS</td><td>Meterset Exposure</td><td></td></tr>
    <tr><td class="setColor">(3002,0034)</td><td class="setColor">DS</td><td class="setColor">Diaphragm Position</td><td class="setColor"></td></tr>
    <tr><td>(3002,0040)</td><td>SQ</td><td>Fluence Map Sequence</td><td></td></tr>
    <tr><td class="setColor">(3002,0041)</td><td class="setColor">CS</td><td class="setColor">Fluence Data Source</td><td class="setColor"></td></tr>
    <tr><td>(3002,0042)</td><td>DS</td><td>Fluence Data Scale</td><td></td></tr>
    <tr><td class="setColor">(3002,0050)</td><td class="setColor">SQ</td><td class="setColor">Primary Fluence Mode Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3002,0051)</td><td>CS</td><td>Fluence Mode</td><td></td></tr>
    <tr><td class="setColor">(3002,0052)</td><td class="setColor">SH</td><td class="setColor">Fluence Mode ID</td><td class="setColor"></td></tr>
    <tr><td>(3004,0001)</td><td>CS</td><td>DVH Type</td><td></td></tr>
    <tr><td class="setColor">(3004,0002)</td><td class="setColor">CS</td><td class="setColor">Dose Units</td><td class="setColor"></td></tr>
    <tr><td>(3004,0004)</td><td>CS</td><td>Dose Type</td><td></td></tr>
    <tr><td class="setColor">(3004,0005)</td><td class="setColor">CS</td><td class="setColor">Spatial Transform of Dose</td><td class="setColor"></td></tr>
    <tr><td>(3004,0006)</td><td>LO</td><td>Dose Comment</td><td></td></tr>
    <tr><td class="setColor">(3004,0008)</td><td class="setColor">DS</td><td class="setColor">Normalization Point</td><td class="setColor"></td></tr>
    <tr><td>(3004,000A)</td><td>CS</td><td>Dose Summation Type</td><td></td></tr>
    <tr><td class="setColor">(3004,000C)</td><td class="setColor">DS</td><td class="setColor">Grid Frame Offset Vector</td><td class="setColor"></td></tr>
    <tr><td>(3004,000E)</td><td>DS</td><td>Dose Grid Scaling</td><td></td></tr>
    <tr><td class="setColor">(3004,0010)</td><td class="setColor">SQ</td><td class="setColor">RT Dose ROI Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3004,0012)</td><td>DS</td><td>Dose Value</td><td></td></tr>
    <tr><td class="setColor">(3004,0014)</td><td class="setColor">CS</td><td class="setColor">Tissue Heterogeneity Correction</td><td class="setColor"></td></tr>
    <tr><td>(3004,0040)</td><td>DS</td><td>DVH Normalization Point</td><td></td></tr>
    <tr><td class="setColor">(3004,0042)</td><td class="setColor">DS</td><td class="setColor">DVH Normalization Dose Value</td><td class="setColor"></td></tr>
    <tr><td>(3004,0050)</td><td>SQ</td><td>DVH Sequence</td><td></td></tr>
    <tr><td class="setColor">(3004,0052)</td><td class="setColor">DS</td><td class="setColor">DVH Dose Scaling</td><td class="setColor"></td></tr>
    <tr><td>(3004,0054)</td><td>CS</td><td>DVH Volume Units</td><td></td></tr>
    <tr><td class="setColor">(3004,0056)</td><td class="setColor">IS</td><td class="setColor">DVH Number of Bins</td><td class="setColor"></td></tr>
    <tr><td>(3004,0058)</td><td>DS</td><td>DVH Data</td><td></td></tr>
    <tr><td class="setColor">(3004,0060)</td><td class="setColor">SQ</td><td class="setColor">DVH Referenced ROI Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3004,0062)</td><td>CS</td><td>DVH ROI Contribution Type</td><td></td></tr>
    <tr><td class="setColor">(3004,0070)</td><td class="setColor">DS</td><td class="setColor">DVH Minimum Dose</td><td class="setColor"></td></tr>
    <tr><td>(3004,0072)</td><td>DS</td><td>DVH Maximum Dose</td><td></td></tr>
    <tr><td class="setColor">(3004,0074)</td><td class="setColor">DS</td><td class="setColor">DVH Mean Dose</td><td class="setColor"></td></tr>
    <tr><td>(3006,0002)</td><td>SH</td><td>Structure Set Label</td><td></td></tr>
    <tr><td class="setColor">(3006,0004)</td><td class="setColor">LO</td><td class="setColor">Structure Set Name</td><td class="setColor"></td></tr>
    <tr><td>(3006,0006)</td><td>ST</td><td>Structure Set Description</td><td></td></tr>
    <tr><td class="setColor">(3006,0008)</td><td class="setColor">DA</td><td class="setColor">Structure Set Date</td><td class="setColor"></td></tr>
    <tr><td>(3006,0009)</td><td>TM</td><td>Structure Set Time</td><td></td></tr>
    <tr><td class="setColor">(3006,0010)</td><td class="setColor">SQ</td><td class="setColor">Referenced Frame of Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3006,0012)</td><td>SQ</td><td>RT Referenced Study Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,0014)</td><td class="setColor">SQ</td><td class="setColor">RT Referenced Series Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3006,0016)</td><td>SQ</td><td>Contour Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,0018)</td><td class="setColor">SQ</td><td class="setColor">Predecessor Structure Set Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3006,0020)</td><td>SQ</td><td>Structure Set ROI Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,0022)</td><td class="setColor">IS</td><td class="setColor">ROI Number</td><td class="setColor"></td></tr>
    <tr><td>(3006,0024)</td><td>UI</td><td>Referenced Frame of Reference UID</td><td></td></tr>
    <tr><td class="setColor">(3006,0026)</td><td class="setColor">LO</td><td class="setColor">ROI Name</td><td class="setColor"></td></tr>
    <tr><td>(3006,0028)</td><td>ST</td><td>ROI Description</td><td></td></tr>
    <tr><td class="setColor">(3006,002A)</td><td class="setColor">IS</td><td class="setColor">ROI Display Color</td><td class="setColor"></td></tr>
    <tr><td>(3006,002C)</td><td>DS</td><td>ROI Volume</td><td></td></tr>
    <tr><td class="setColor">(3006,0030)</td><td class="setColor">SQ</td><td class="setColor">RT Related ROI Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3006,0033)</td><td>CS</td><td>RT ROI Relationship</td><td></td></tr>
    <tr><td class="setColor">(3006,0036)</td><td class="setColor">CS</td><td class="setColor">ROI Generation Algorithm</td><td class="setColor"></td></tr>
    <tr><td>(3006,0038)</td><td>LO</td><td>ROI Generation Description</td><td></td></tr>
    <tr><td class="setColor">(3006,0039)</td><td class="setColor">SQ</td><td class="setColor">ROI Contour Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3006,0040)</td><td>SQ</td><td>Contour Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,0042)</td><td class="setColor">CS</td><td class="setColor">Contour Geometric Type</td><td class="setColor"></td></tr>
    <tr><td>(3006,0044)</td><td>DS</td><td>Contour Slab Thickness</td><td></td></tr>
    <tr><td class="setColor">(3006,0045)</td><td class="setColor">DS</td><td class="setColor">Contour Offset Vector</td><td class="setColor"></td></tr>
    <tr><td>(3006,0046)</td><td>IS</td><td>Number of Contour Points</td><td></td></tr>
    <tr><td class="setColor">(3006,0048)</td><td class="setColor">IS</td><td class="setColor">Contour Number</td><td class="setColor"></td></tr>
    <tr><td>(3006,0049)</td><td>IS</td><td>Attached Contours</td><td></td></tr>
    <tr><td class="setColor">(3006,0050)</td><td class="setColor">DS</td><td class="setColor">Contour Data</td><td class="setColor"></td></tr>
    <tr><td>(3006,0080)</td><td>SQ</td><td>RT ROI Observations Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,0082)</td><td class="setColor">IS</td><td class="setColor">Observation Number</td><td class="setColor"></td></tr>
    <tr><td>(3006,0084)</td><td>IS</td><td>Referenced ROI Number</td><td></td></tr>
    <tr><td class="setColor">(3006,0085)</td><td class="setColor">SH</td><td class="setColor">ROI Observation Label</td><td class="setColor"></td></tr>
    <tr><td>(3006,0086)</td><td>SQ</td><td>RT ROI Identification Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,0088)</td><td class="setColor">ST</td><td class="setColor">ROI Observation Description</td><td class="setColor"></td></tr>
    <tr><td>(3006,00A0)</td><td>SQ</td><td>Related RT ROI Observations Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,00A4)</td><td class="setColor">CS</td><td class="setColor">RT ROI Interpreted Type</td><td class="setColor"></td></tr>
    <tr><td>(3006,00A6)</td><td>PN</td><td>ROI Interpreter</td><td></td></tr>
    <tr><td class="setColor">(3006,00B0)</td><td class="setColor">SQ</td><td class="setColor">ROI Physical Properties Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3006,00B2)</td><td>CS</td><td>ROI Physical Property</td><td></td></tr>
    <tr><td class="setColor">(3006,00B4)</td><td class="setColor">DS</td><td class="setColor">ROI Physical Property Value</td><td class="setColor"></td></tr>
    <tr><td>(3006,00B6)</td><td>SQ</td><td>ROI Elemental Composition Sequence</td><td></td></tr>
    <tr><td class="setColor">(3006,00B7)</td><td class="setColor">US</td><td class="setColor">ROI Elemental Composition Atomic Number</td><td class="setColor"></td></tr>
    <tr><td>(3006,00B8)</td><td>FL</td><td>ROI Elemental Composition Atomic Mass Fraction</td><td></td></tr>
    <tr><td class="setColor">(3006,00B9)</td><td class="setColor">SQ</td><td class="setColor">Additional RT ROI Identification Code Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(3006,00C0)</td><td class="retired">SQ</td><td class="retired">Frame of Reference Relationship Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(3006,00C2)</td><td class="retired1">UI</td><td class="retired1">Related Frame of Reference UID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(3006,00C4)</td><td class="retired">CS</td><td class="retired">Frame of Reference Transformation Type</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(3006,00C6)</td><td class="setColor">DS</td><td class="setColor">Frame of Reference Transformation Matrix</td><td class="setColor"></td></tr>
    <tr><td>(3006,00C8)</td><td>LO</td><td>Frame of Reference Transformation Comment</td><td></td></tr>
    <tr><td class="setColor">(3008,0010)</td><td class="setColor">SQ</td><td class="setColor">Measured Dose Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0012)</td><td>ST</td><td>Measured Dose Description</td><td></td></tr>
    <tr><td class="setColor">(3008,0014)</td><td class="setColor">CS</td><td class="setColor">Measured Dose Type</td><td class="setColor"></td></tr>
    <tr><td>(3008,0016)</td><td>DS</td><td>Measured Dose Value</td><td></td></tr>
    <tr><td class="setColor">(3008,0020)</td><td class="setColor">SQ</td><td class="setColor">Treatment Session Beam Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0021)</td><td>SQ</td><td>Treatment Session Ion Beam Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0022)</td><td class="setColor">IS</td><td class="setColor">Current Fraction Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0024)</td><td>DA</td><td>Treatment Control Point Date</td><td></td></tr>
    <tr><td class="setColor">(3008,0025)</td><td class="setColor">TM</td><td class="setColor">Treatment Control Point Time</td><td class="setColor"></td></tr>
    <tr><td>(3008,002A)</td><td>CS</td><td>Treatment Termination Status</td><td></td></tr>
    <tr><td class="setColor">(3008,002B)</td><td class="setColor">SH</td><td class="setColor">Treatment Termination Code</td><td class="setColor"></td></tr>
    <tr><td>(3008,002C)</td><td>CS</td><td>Treatment Verification Status</td><td></td></tr>
    <tr><td class="setColor">(3008,0030)</td><td class="setColor">SQ</td><td class="setColor">Referenced Treatment Record Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0032)</td><td>DS</td><td>Specified Primary Meterset</td><td></td></tr>
    <tr><td class="setColor">(3008,0033)</td><td class="setColor">DS</td><td class="setColor">Specified Secondary Meterset</td><td class="setColor"></td></tr>
    <tr><td>(3008,0036)</td><td>DS</td><td>Delivered Primary Meterset</td><td></td></tr>
    <tr><td class="setColor">(3008,0037)</td><td class="setColor">DS</td><td class="setColor">Delivered Secondary Meterset</td><td class="setColor"></td></tr>
    <tr><td>(3008,003A)</td><td>DS</td><td>Specified Treatment Time</td><td></td></tr>
    <tr><td class="setColor">(3008,003B)</td><td class="setColor">DS</td><td class="setColor">Delivered Treatment Time</td><td class="setColor"></td></tr>
    <tr><td>(3008,0040)</td><td>SQ</td><td>Control Point Delivery Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0041)</td><td class="setColor">SQ</td><td class="setColor">Ion Control Point Delivery Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0042)</td><td>DS</td><td>Specified Meterset</td><td></td></tr>
    <tr><td class="setColor">(3008,0044)</td><td class="setColor">DS</td><td class="setColor">Delivered Meterset</td><td class="setColor"></td></tr>
    <tr><td>(3008,0045)</td><td>FL</td><td>Meterset Rate Set</td><td></td></tr>
    <tr><td class="setColor">(3008,0046)</td><td class="setColor">FL</td><td class="setColor">Meterset Rate Delivered</td><td class="setColor"></td></tr>
    <tr><td>(3008,0047)</td><td>FL</td><td>Scan Spot Metersets Delivered</td><td></td></tr>
    <tr><td class="setColor">(3008,0048)</td><td class="setColor">DS</td><td class="setColor">Dose Rate Delivered</td><td class="setColor"></td></tr>
    <tr><td>(3008,0050)</td><td>SQ</td><td>Treatment Summary Calculated Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0052)</td><td class="setColor">DS</td><td class="setColor">Cumulative Dose to Dose Reference</td><td class="setColor"></td></tr>
    <tr><td>(3008,0054)</td><td>DA</td><td>First Treatment Date</td><td></td></tr>
    <tr><td class="setColor">(3008,0056)</td><td class="setColor">DA</td><td class="setColor">Most Recent Treatment Date</td><td class="setColor"></td></tr>
    <tr><td>(3008,005A)</td><td>IS</td><td>Number of Fractions Delivered</td><td></td></tr>
    <tr><td class="setColor">(3008,0060)</td><td class="setColor">SQ</td><td class="setColor">Override Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0061)</td><td>AT</td><td>Parameter Sequence Pointer</td><td></td></tr>
    <tr><td class="setColor">(3008,0062)</td><td class="setColor">AT</td><td class="setColor">Override Parameter Pointer</td><td class="setColor"></td></tr>
    <tr><td>(3008,0063)</td><td>IS</td><td>Parameter Item Index</td><td></td></tr>
    <tr><td class="setColor">(3008,0064)</td><td class="setColor">IS</td><td class="setColor">Measured Dose Reference Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0065)</td><td>AT</td><td>Parameter Pointer</td><td></td></tr>
    <tr><td class="setColor">(3008,0066)</td><td class="setColor">ST</td><td class="setColor">Override Reason</td><td class="setColor"></td></tr>
    <tr><td>(3008,0068)</td><td>SQ</td><td>Corrected Parameter Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,006A)</td><td class="setColor">FL</td><td class="setColor">Correction Value</td><td class="setColor"></td></tr>
    <tr><td>(3008,0070)</td><td>SQ</td><td>Calculated Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0072)</td><td class="setColor">IS</td><td class="setColor">Calculated Dose Reference Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0074)</td><td>ST</td><td>Calculated Dose Reference Description</td><td></td></tr>
    <tr><td class="setColor">(3008,0076)</td><td class="setColor">DS</td><td class="setColor">Calculated Dose Reference Dose Value</td><td class="setColor"></td></tr>
    <tr><td>(3008,0078)</td><td>DS</td><td>Start Meterset</td><td></td></tr>
    <tr><td class="setColor">(3008,007A)</td><td class="setColor">DS</td><td class="setColor">End Meterset</td><td class="setColor"></td></tr>
    <tr><td>(3008,0080)</td><td>SQ</td><td>Referenced Measured Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0082)</td><td class="setColor">IS</td><td class="setColor">Referenced Measured Dose Reference Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0090)</td><td>SQ</td><td>Referenced Calculated Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0092)</td><td class="setColor">IS</td><td class="setColor">Referenced Calculated Dose Reference Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,00A0)</td><td>SQ</td><td>Beam Limiting Device Leaf Pairs Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,00B0)</td><td class="setColor">SQ</td><td class="setColor">Recorded Wedge Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,00C0)</td><td>SQ</td><td>Recorded Compensator Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,00D0)</td><td class="setColor">SQ</td><td class="setColor">Recorded Block Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,00E0)</td><td>SQ</td><td>Treatment Summary Measured Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,00F0)</td><td class="setColor">SQ</td><td class="setColor">Recorded Snout Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,00F2)</td><td>SQ</td><td>Recorded Range Shifter Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,00F4)</td><td class="setColor">SQ</td><td class="setColor">Recorded Lateral Spreading Device Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,00F6)</td><td>SQ</td><td>Recorded Range Modulator Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0100)</td><td class="setColor">SQ</td><td class="setColor">Recorded Source Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0105)</td><td>LO</td><td>Source Serial Number</td><td></td></tr>
    <tr><td class="setColor">(3008,0110)</td><td class="setColor">SQ</td><td class="setColor">Treatment Session Application Setup Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0116)</td><td>CS</td><td>Application Setup Check</td><td></td></tr>
    <tr><td class="setColor">(3008,0120)</td><td class="setColor">SQ</td><td class="setColor">Recorded Brachy Accessory Device Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0122)</td><td>IS</td><td>Referenced Brachy Accessory Device Number</td><td></td></tr>
    <tr><td class="setColor">(3008,0130)</td><td class="setColor">SQ</td><td class="setColor">Recorded Channel Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0132)</td><td>DS</td><td>Specified Channel Total Time</td><td></td></tr>
    <tr><td class="setColor">(3008,0134)</td><td class="setColor">DS</td><td class="setColor">Delivered Channel Total Time</td><td class="setColor"></td></tr>
    <tr><td>(3008,0136)</td><td>IS</td><td>Specified Number of Pulses</td><td></td></tr>
    <tr><td class="setColor">(3008,0138)</td><td class="setColor">IS</td><td class="setColor">Delivered Number of Pulses</td><td class="setColor"></td></tr>
    <tr><td>(3008,013A)</td><td>DS</td><td>Specified Pulse Repetition Interval</td><td></td></tr>
    <tr><td class="setColor">(3008,013C)</td><td class="setColor">DS</td><td class="setColor">Delivered Pulse Repetition Interval</td><td class="setColor"></td></tr>
    <tr><td>(3008,0140)</td><td>SQ</td><td>Recorded Source Applicator Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0142)</td><td class="setColor">IS</td><td class="setColor">Referenced Source Applicator Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0150)</td><td>SQ</td><td>Recorded Channel Shield Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0152)</td><td class="setColor">IS</td><td class="setColor">Referenced Channel Shield Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0160)</td><td>SQ</td><td>Brachy Control Point Delivered Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0162)</td><td class="setColor">DA</td><td class="setColor">Safe Position Exit Date</td><td class="setColor"></td></tr>
    <tr><td>(3008,0164)</td><td>TM</td><td>Safe Position Exit Time</td><td></td></tr>
    <tr><td class="setColor">(3008,0166)</td><td class="setColor">DA</td><td class="setColor">Safe Position Return Date</td><td class="setColor"></td></tr>
    <tr><td>(3008,0168)</td><td>TM</td><td>Safe Position Return Time</td><td></td></tr>
    <tr><td class="setColor">(3008,0171)</td><td class="setColor">SQ</td><td class="setColor">Pulse Specific Brachy Control Point Delivered Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0172)</td><td>US</td><td>Pulse Number</td><td></td></tr>
    <tr><td class="setColor">(3008,0173)</td><td class="setColor">SQ</td><td class="setColor">Brachy Pulse Control Point Delivered Sequence</td><td class="setColor"></td></tr>
    <tr><td>(3008,0200)</td><td>CS</td><td>Current Treatment Status</td><td></td></tr>
    <tr><td class="setColor">(3008,0202)</td><td class="setColor">ST</td><td class="setColor">Treatment Status Comment</td><td class="setColor"></td></tr>
    <tr><td>(3008,0220)</td><td>SQ</td><td>Fraction Group Summary Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0223)</td><td class="setColor">IS</td><td class="setColor">Referenced Fraction Number</td><td class="setColor"></td></tr>
    <tr><td>(3008,0224)</td><td>CS</td><td>Fraction Group Type</td><td></td></tr>
    <tr><td class="setColor">(3008,0230)</td><td class="setColor">CS</td><td class="setColor">Beam Stopper Position</td><td class="setColor"></td></tr>
    <tr><td>(3008,0240)</td><td>SQ</td><td>Fraction Status Summary Sequence</td><td></td></tr>
    <tr><td class="setColor">(3008,0250)</td><td class="setColor">DA</td><td class="setColor">Treatment Date</td><td class="setColor"></td></tr>
    <tr><td>(3008,0251)</td><td>TM</td><td>Treatment Time</td><td></td></tr>
    <tr><td class="setColor">(300A,0002)</td><td class="setColor">SH</td><td class="setColor">RT Plan Label</td><td class="setColor"></td></tr>
    <tr><td>(300A,0003)</td><td>LO</td><td>RT Plan Name</td><td></td></tr>
    <tr><td class="setColor">(300A,0004)</td><td class="setColor">ST</td><td class="setColor">RT Plan Description</td><td class="setColor"></td></tr>
    <tr><td>(300A,0006)</td><td>DA</td><td>RT Plan Date</td><td></td></tr>
    <tr><td class="setColor">(300A,0007)</td><td class="setColor">TM</td><td class="setColor">RT Plan Time</td><td class="setColor"></td></tr>
    <tr><td>(300A,0009)</td><td>LO</td><td>Treatment Protocols</td><td></td></tr>
    <tr><td class="setColor">(300A,000A)</td><td class="setColor">CS</td><td class="setColor">Plan Intent</td><td class="setColor"></td></tr>
    <tr><td>(300A,000B)</td><td>LO</td><td>Treatment Sites</td><td></td></tr>
    <tr><td class="setColor">(300A,000C)</td><td class="setColor">CS</td><td class="setColor">RT Plan Geometry</td><td class="setColor"></td></tr>
    <tr><td>(300A,000E)</td><td>ST</td><td>Prescription Description</td><td></td></tr>
    <tr><td class="setColor">(300A,0010)</td><td class="setColor">SQ</td><td class="setColor">Dose Reference Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0012)</td><td>IS</td><td>Dose Reference Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0013)</td><td class="setColor">UI</td><td class="setColor">Dose Reference UID</td><td class="setColor"></td></tr>
    <tr><td>(300A,0014)</td><td>CS</td><td>Dose Reference Structure Type</td><td></td></tr>
    <tr><td class="setColor">(300A,0015)</td><td class="setColor">CS</td><td class="setColor">Nominal Beam Energy Unit</td><td class="setColor"></td></tr>
    <tr><td>(300A,0016)</td><td>LO</td><td>Dose Reference Description</td><td></td></tr>
    <tr><td class="setColor">(300A,0018)</td><td class="setColor">DS</td><td class="setColor">Dose Reference Point Coordinates</td><td class="setColor"></td></tr>
    <tr><td>(300A,001A)</td><td>DS</td><td>Nominal Prior Dose</td><td></td></tr>
    <tr><td class="setColor">(300A,0020)</td><td class="setColor">CS</td><td class="setColor">Dose Reference Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0021)</td><td>DS</td><td>Constraint Weight</td><td></td></tr>
    <tr><td class="setColor">(300A,0022)</td><td class="setColor">DS</td><td class="setColor">Delivery Warning Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,0023)</td><td>DS</td><td>Delivery Maximum Dose</td><td></td></tr>
    <tr><td class="setColor">(300A,0025)</td><td class="setColor">DS</td><td class="setColor">Target Minimum Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,0026)</td><td>DS</td><td>Target Prescription Dose</td><td></td></tr>
    <tr><td class="setColor">(300A,0027)</td><td class="setColor">DS</td><td class="setColor">Target Maximum Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,0028)</td><td>DS</td><td>Target Underdose Volume Fraction</td><td></td></tr>
    <tr><td class="setColor">(300A,002A)</td><td class="setColor">DS</td><td class="setColor">Organ at Risk Full-volume Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,002B)</td><td>DS</td><td>Organ at Risk Limit Dose</td><td></td></tr>
    <tr><td class="setColor">(300A,002C)</td><td class="setColor">DS</td><td class="setColor">Organ at Risk Maximum Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,002D)</td><td>DS</td><td>Organ at Risk Overdose Volume Fraction</td><td></td></tr>
    <tr><td class="setColor">(300A,0040)</td><td class="setColor">SQ</td><td class="setColor">Tolerance Table Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0042)</td><td>IS</td><td>Tolerance Table Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0043)</td><td class="setColor">SH</td><td class="setColor">Tolerance Table Label</td><td class="setColor"></td></tr>
    <tr><td>(300A,0044)</td><td>DS</td><td>Gantry Angle Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,0046)</td><td class="setColor">DS</td><td class="setColor">Beam Limiting Device Angle Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0048)</td><td>SQ</td><td>Beam Limiting Device Tolerance Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,004A)</td><td class="setColor">DS</td><td class="setColor">Beam Limiting Device Position Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,004B)</td><td>FL</td><td>Snout Position Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,004C)</td><td class="setColor">DS</td><td class="setColor">Patient Support Angle Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,004E)</td><td>DS</td><td>Table Top Eccentric Angle Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,004F)</td><td class="setColor">FL</td><td class="setColor">Table Top Pitch Angle Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0050)</td><td>FL</td><td>Table Top Roll Angle Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,0051)</td><td class="setColor">DS</td><td class="setColor">Table Top Vertical Position Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0052)</td><td>DS</td><td>Table Top Longitudinal Position Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,0053)</td><td class="setColor">DS</td><td class="setColor">Table Top Lateral Position Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0055)</td><td>CS</td><td>RT Plan Relationship</td><td></td></tr>
    <tr><td class="setColor">(300A,0070)</td><td class="setColor">SQ</td><td class="setColor">Fraction Group Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0071)</td><td>IS</td><td>Fraction Group Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0072)</td><td class="setColor">LO</td><td class="setColor">Fraction Group Description</td><td class="setColor"></td></tr>
    <tr><td>(300A,0078)</td><td>IS</td><td>Number of Fractions Planned</td><td></td></tr>
    <tr><td class="setColor">(300A,0079)</td><td class="setColor">IS</td><td class="setColor">Number of Fraction Pattern Digits Per Day</td><td class="setColor"></td></tr>
    <tr><td>(300A,007A)</td><td>IS</td><td>Repeat Fraction Cycle Length</td><td></td></tr>
    <tr><td class="setColor">(300A,007B)</td><td class="setColor">LT</td><td class="setColor">Fraction Pattern</td><td class="setColor"></td></tr>
    <tr><td>(300A,0080)</td><td>IS</td><td>Number of Beams</td><td></td></tr>
    <tr><td class="setColor">(300A,0082)</td><td class="setColor">DS</td><td class="setColor">Beam Dose Specification Point</td><td class="setColor"></td></tr>
    <tr><td>(300A,0084)</td><td>DS</td><td>Beam Dose</td><td></td></tr>
    <tr><td class="setColor">(300A,0086)</td><td class="setColor">DS</td><td class="setColor">Beam Meterset</td><td class="setColor"></td></tr>
    <tr><td class="retired">(300A,0088)</td><td class="retired">FL</td><td class="retired">Beam Dose Point Depth</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(300A,0089)</td><td class="retired1">FL</td><td class="retired1">Beam Dose Point Equivalent Depth</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(300A,008A)</td><td class="retired">FL</td><td class="retired">Beam Dose Point SSD</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(300A,008B)</td><td class="setColor">CS</td><td class="setColor">Beam Dose Meaning</td><td class="setColor"></td></tr>
    <tr><td>(300A,008C)</td><td>SQ</td><td>Beam Dose Verification Control Point Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,008D)</td><td class="setColor">FL</td><td class="setColor">Average Beam Dose Point Depth</td><td class="setColor"></td></tr>
    <tr><td>(300A,008E)</td><td>FL</td><td>Average Beam Dose Point Equivalent Depth</td><td></td></tr>
    <tr><td class="setColor">(300A,008F)</td><td class="setColor">FL</td><td class="setColor">Average Beam Dose Point SSD</td><td class="setColor"></td></tr>
    <tr><td>(300A,0090)</td><td>CS</td><td>Beam Dose Type</td><td></td></tr>
    <tr><td class="setColor">(300A,0091)</td><td class="setColor">DS</td><td class="setColor">Alternate Beam Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,0092)</td><td>CS</td><td>Alternate Beam Dose Type</td><td></td></tr>
    <tr><td class="setColor">(300A,00A0)</td><td class="setColor">IS</td><td class="setColor">Number of Brachy Application Setups</td><td class="setColor"></td></tr>
    <tr><td>(300A,00A2)</td><td>DS</td><td>Brachy Application Setup Dose Specification Point</td><td></td></tr>
    <tr><td class="setColor">(300A,00A4)</td><td class="setColor">DS</td><td class="setColor">Brachy Application Setup Dose</td><td class="setColor"></td></tr>
    <tr><td>(300A,00B0)</td><td>SQ</td><td>Beam Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,00B2)</td><td class="setColor">SH</td><td class="setColor">Treatment Machine Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,00B3)</td><td>CS</td><td>Primary Dosimeter Unit</td><td></td></tr>
    <tr><td class="setColor">(300A,00B4)</td><td class="setColor">DS</td><td class="setColor">Source-Axis Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,00B6)</td><td>SQ</td><td>Beam Limiting Device Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,00B8)</td><td class="setColor">CS</td><td class="setColor">RT Beam Limiting Device Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,00BA)</td><td>DS</td><td>Source to Beam Limiting Device Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,00BB)</td><td class="setColor">FL</td><td class="setColor">Isocenter to Beam Limiting Device Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,00BC)</td><td>IS</td><td>Number of Leaf/Jaw Pairs</td><td></td></tr>
    <tr><td class="setColor">(300A,00BE)</td><td class="setColor">DS</td><td class="setColor">Leaf Position Boundaries</td><td class="setColor"></td></tr>
    <tr><td>(300A,00C0)</td><td>IS</td><td>Beam Number</td><td></td></tr>
    <tr><td class="setColor">(300A,00C2)</td><td class="setColor">LO</td><td class="setColor">Beam Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,00C3)</td><td>ST</td><td>Beam Description</td><td></td></tr>
    <tr><td class="setColor">(300A,00C4)</td><td class="setColor">CS</td><td class="setColor">Beam Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,00C5)</td><td>FD</td><td>Beam Delivery Duration Limit</td><td></td></tr>
    <tr><td class="setColor">(300A,00C6)</td><td class="setColor">CS</td><td class="setColor">Radiation Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,00C7)</td><td>CS</td><td>High-Dose Technique Type</td><td></td></tr>
    <tr><td class="setColor">(300A,00C8)</td><td class="setColor">IS</td><td class="setColor">Reference Image Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,00CA)</td><td>SQ</td><td>Planned Verification Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,00CC)</td><td class="setColor">LO</td><td class="setColor">Imaging Device-Specific Acquisition Parameters</td><td class="setColor"></td></tr>
    <tr><td>(300A,00CE)</td><td>CS</td><td>Treatment Delivery Type</td><td></td></tr>
    <tr><td class="setColor">(300A,00D0)</td><td class="setColor">IS</td><td class="setColor">Number of Wedges</td><td class="setColor"></td></tr>
    <tr><td>(300A,00D1)</td><td>SQ</td><td>Wedge Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,00D2)</td><td class="setColor">IS</td><td class="setColor">Wedge Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,00D3)</td><td>CS</td><td>Wedge Type</td><td></td></tr>
    <tr><td class="setColor">(300A,00D4)</td><td class="setColor">SH</td><td class="setColor">Wedge ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,00D5)</td><td>IS</td><td>Wedge Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,00D6)</td><td class="setColor">DS</td><td class="setColor">Wedge Factor</td><td class="setColor"></td></tr>
    <tr><td>(300A,00D7)</td><td>FL</td><td>Total Wedge Tray Water-Equivalent Thickness</td><td></td></tr>
    <tr><td class="setColor">(300A,00D8)</td><td class="setColor">DS</td><td class="setColor">Wedge Orientation</td><td class="setColor"></td></tr>
    <tr><td>(300A,00D9)</td><td>FL</td><td>Isocenter to Wedge Tray Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,00DA)</td><td class="setColor">DS</td><td class="setColor">Source to Wedge Tray Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,00DB)</td><td>FL</td><td>Wedge Thin Edge Position</td><td></td></tr>
    <tr><td class="setColor">(300A,00DC)</td><td class="setColor">SH</td><td class="setColor">Bolus ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,00DD)</td><td>ST</td><td>Bolus Description</td><td></td></tr>
    <tr><td class="setColor">(300A,00DE)</td><td class="setColor">DS</td><td class="setColor">Effective Wedge Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,00E0)</td><td>IS</td><td>Number of Compensators</td><td></td></tr>
    <tr><td class="setColor">(300A,00E1)</td><td class="setColor">SH</td><td class="setColor">Material ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,00E2)</td><td>DS</td><td>Total Compensator Tray Factor</td><td></td></tr>
    <tr><td class="setColor">(300A,00E3)</td><td class="setColor">SQ</td><td class="setColor">Compensator Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,00E4)</td><td>IS</td><td>Compensator Number</td><td></td></tr>
    <tr><td class="setColor">(300A,00E5)</td><td class="setColor">SH</td><td class="setColor">Compensator ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,00E6)</td><td>DS</td><td>Source to Compensator Tray Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,00E7)</td><td class="setColor">IS</td><td class="setColor">Compensator Rows</td><td class="setColor"></td></tr>
    <tr><td>(300A,00E8)</td><td>IS</td><td>Compensator Columns</td><td></td></tr>
    <tr><td class="setColor">(300A,00E9)</td><td class="setColor">DS</td><td class="setColor">Compensator Pixel Spacing</td><td class="setColor"></td></tr>
    <tr><td>(300A,00EA)</td><td>DS</td><td>Compensator Position</td><td></td></tr>
    <tr><td class="setColor">(300A,00EB)</td><td class="setColor">DS</td><td class="setColor">Compensator Transmission Data</td><td class="setColor"></td></tr>
    <tr><td>(300A,00EC)</td><td>DS</td><td>Compensator Thickness Data</td><td></td></tr>
    <tr><td class="setColor">(300A,00ED)</td><td class="setColor">IS</td><td class="setColor">Number of Boli</td><td class="setColor"></td></tr>
    <tr><td>(300A,00EE)</td><td>CS</td><td>Compensator Type</td><td></td></tr>
    <tr><td class="setColor">(300A,00EF)</td><td class="setColor">SH</td><td class="setColor">Compensator Tray ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,00F0)</td><td>IS</td><td>Number of Blocks</td><td></td></tr>
    <tr><td class="setColor">(300A,00F2)</td><td class="setColor">DS</td><td class="setColor">Total Block Tray Factor</td><td class="setColor"></td></tr>
    <tr><td>(300A,00F3)</td><td>FL</td><td>Total Block Tray Water-Equivalent Thickness</td><td></td></tr>
    <tr><td class="setColor">(300A,00F4)</td><td class="setColor">SQ</td><td class="setColor">Block Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,00F5)</td><td>SH</td><td>Block Tray ID</td><td></td></tr>
    <tr><td class="setColor">(300A,00F6)</td><td class="setColor">DS</td><td class="setColor">Source to Block Tray Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,00F7)</td><td>FL</td><td>Isocenter to Block Tray Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,00F8)</td><td class="setColor">CS</td><td class="setColor">Block Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,00F9)</td><td>LO</td><td>Accessory Code</td><td></td></tr>
    <tr><td class="setColor">(300A,00FA)</td><td class="setColor">CS</td><td class="setColor">Block Divergence</td><td class="setColor"></td></tr>
    <tr><td>(300A,00FB)</td><td>CS</td><td>Block Mounting Position</td><td></td></tr>
    <tr><td class="setColor">(300A,00FC)</td><td class="setColor">IS</td><td class="setColor">Block Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,00FE)</td><td>LO</td><td>Block Name</td><td></td></tr>
    <tr><td class="setColor">(300A,0100)</td><td class="setColor">DS</td><td class="setColor">Block Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,0102)</td><td>DS</td><td>Block Transmission</td><td></td></tr>
    <tr><td class="setColor">(300A,0104)</td><td class="setColor">IS</td><td class="setColor">Block Number of Points</td><td class="setColor"></td></tr>
    <tr><td>(300A,0106)</td><td>DS</td><td>Block Data</td><td></td></tr>
    <tr><td class="setColor">(300A,0107)</td><td class="setColor">SQ</td><td class="setColor">Applicator Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0108)</td><td>SH</td><td>Applicator ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0109)</td><td class="setColor">CS</td><td class="setColor">Applicator Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,010A)</td><td>LO</td><td>Applicator Description</td><td></td></tr>
    <tr><td class="setColor">(300A,010C)</td><td class="setColor">DS</td><td class="setColor">Cumulative Dose Reference Coefficient</td><td class="setColor"></td></tr>
    <tr><td>(300A,010E)</td><td>DS</td><td>Final Cumulative Meterset Weight</td><td></td></tr>
    <tr><td class="setColor">(300A,0110)</td><td class="setColor">IS</td><td class="setColor">Number of Control Points</td><td class="setColor"></td></tr>
    <tr><td>(300A,0111)</td><td>SQ</td><td>Control Point Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0112)</td><td class="setColor">IS</td><td class="setColor">Control Point Index</td><td class="setColor"></td></tr>
    <tr><td>(300A,0114)</td><td>DS</td><td>Nominal Beam Energy</td><td></td></tr>
    <tr><td class="setColor">(300A,0115)</td><td class="setColor">DS</td><td class="setColor">Dose Rate Set</td><td class="setColor"></td></tr>
    <tr><td>(300A,0116)</td><td>SQ</td><td>Wedge Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0118)</td><td class="setColor">CS</td><td class="setColor">Wedge Position</td><td class="setColor"></td></tr>
    <tr><td>(300A,011A)</td><td>SQ</td><td>Beam Limiting Device Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,011C)</td><td class="setColor">DS</td><td class="setColor">Leaf/Jaw Positions</td><td class="setColor"></td></tr>
    <tr><td>(300A,011E)</td><td>DS</td><td>Gantry Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,011F)</td><td class="setColor">CS</td><td class="setColor">Gantry Rotation Direction</td><td class="setColor"></td></tr>
    <tr><td>(300A,0120)</td><td>DS</td><td>Beam Limiting Device Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,0121)</td><td class="setColor">CS</td><td class="setColor">Beam Limiting Device Rotation Direction</td><td class="setColor"></td></tr>
    <tr><td>(300A,0122)</td><td>DS</td><td>Patient Support Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,0123)</td><td class="setColor">CS</td><td class="setColor">Patient Support Rotation Direction</td><td class="setColor"></td></tr>
    <tr><td>(300A,0124)</td><td>DS</td><td>Table Top Eccentric Axis Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0125)</td><td class="setColor">DS</td><td class="setColor">Table Top Eccentric Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,0126)</td><td>CS</td><td>Table Top Eccentric Rotation Direction</td><td></td></tr>
    <tr><td class="setColor">(300A,0128)</td><td class="setColor">DS</td><td class="setColor">Table Top Vertical Position</td><td class="setColor"></td></tr>
    <tr><td>(300A,0129)</td><td>DS</td><td>Table Top Longitudinal Position</td><td></td></tr>
    <tr><td class="setColor">(300A,012A)</td><td class="setColor">DS</td><td class="setColor">Table Top Lateral Position</td><td class="setColor"></td></tr>
    <tr><td>(300A,012C)</td><td>DS</td><td>Isocenter Position</td><td></td></tr>
    <tr><td class="setColor">(300A,012E)</td><td class="setColor">DS</td><td class="setColor">Surface Entry Point</td><td class="setColor"></td></tr>
    <tr><td>(300A,0130)</td><td>DS</td><td>Source to Surface Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0131)</td><td class="setColor">FL</td><td class="setColor">Average Beam Dose Point Source to External Contour Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0132)</td><td>FL</td><td>Source to External Contour Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0133)</td><td class="setColor">FL</td><td class="setColor">External Contour Entry Point</td><td class="setColor"></td></tr>
    <tr><td>(300A,0134)</td><td>DS</td><td>Cumulative Meterset Weight</td><td></td></tr>
    <tr><td class="setColor">(300A,0140)</td><td class="setColor">FL</td><td class="setColor">Table Top Pitch Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,0142)</td><td>CS</td><td>Table Top Pitch Rotation Direction</td><td></td></tr>
    <tr><td class="setColor">(300A,0144)</td><td class="setColor">FL</td><td class="setColor">Table Top Roll Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,0146)</td><td>CS</td><td>Table Top Roll Rotation Direction</td><td></td></tr>
    <tr><td class="setColor">(300A,0148)</td><td class="setColor">FL</td><td class="setColor">Head Fixation Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,014A)</td><td>FL</td><td>Gantry Pitch Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,014C)</td><td class="setColor">CS</td><td class="setColor">Gantry Pitch Rotation Direction</td><td class="setColor"></td></tr>
    <tr><td>(300A,014E)</td><td>FL</td><td>Gantry Pitch Angle Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,0150)</td><td class="setColor">CS</td><td class="setColor">Fixation Eye</td><td class="setColor"></td></tr>
    <tr><td>(300A,0151)</td><td>DS</td><td>Chair Head Frame Position</td><td></td></tr>
    <tr><td class="setColor">(300A,0152)</td><td class="setColor">DS</td><td class="setColor">Head Fixation Angle Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0153)</td><td>DS</td><td>Chair Head Frame Position Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,0154)</td><td class="setColor">DS</td><td class="setColor">Fixation Light Azimuthal Angle Tolerance</td><td class="setColor"></td></tr>
    <tr><td>(300A,0155)</td><td>DS</td><td>Fixation Light Polar Angle Tolerance</td><td></td></tr>
    <tr><td class="setColor">(300A,0180)</td><td class="setColor">SQ</td><td class="setColor">Patient Setup Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0182)</td><td>IS</td><td>Patient Setup Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0183)</td><td class="setColor">LO</td><td class="setColor">Patient Setup Label</td><td class="setColor"></td></tr>
    <tr><td>(300A,0184)</td><td>LO</td><td>Patient Additional Position</td><td></td></tr>
    <tr><td class="setColor">(300A,0190)</td><td class="setColor">SQ</td><td class="setColor">Fixation Device Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0192)</td><td>CS</td><td>Fixation Device Type</td><td></td></tr>
    <tr><td class="setColor">(300A,0194)</td><td class="setColor">SH</td><td class="setColor">Fixation Device Label</td><td class="setColor"></td></tr>
    <tr><td>(300A,0196)</td><td>ST</td><td>Fixation Device Description</td><td></td></tr>
    <tr><td class="setColor">(300A,0198)</td><td class="setColor">SH</td><td class="setColor">Fixation Device Position</td><td class="setColor"></td></tr>
    <tr><td>(300A,0199)</td><td>FL</td><td>Fixation Device Pitch Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,019A)</td><td class="setColor">FL</td><td class="setColor">Fixation Device Roll Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,01A0)</td><td>SQ</td><td>Shielding Device Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,01A2)</td><td class="setColor">CS</td><td class="setColor">Shielding Device Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,01A4)</td><td>SH</td><td>Shielding Device Label</td><td></td></tr>
    <tr><td class="setColor">(300A,01A6)</td><td class="setColor">ST</td><td class="setColor">Shielding Device Description</td><td class="setColor"></td></tr>
    <tr><td>(300A,01A8)</td><td>SH</td><td>Shielding Device Position</td><td></td></tr>
    <tr><td class="setColor">(300A,01B0)</td><td class="setColor">CS</td><td class="setColor">Setup Technique</td><td class="setColor"></td></tr>
    <tr><td>(300A,01B2)</td><td>ST</td><td>Setup Technique Description</td><td></td></tr>
    <tr><td class="setColor">(300A,01B4)</td><td class="setColor">SQ</td><td class="setColor">Setup Device Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,01B6)</td><td>CS</td><td>Setup Device Type</td><td></td></tr>
    <tr><td class="setColor">(300A,01B8)</td><td class="setColor">SH</td><td class="setColor">Setup Device Label</td><td class="setColor"></td></tr>
    <tr><td>(300A,01BA)</td><td>ST</td><td>Setup Device Description</td><td></td></tr>
    <tr><td class="setColor">(300A,01BC)</td><td class="setColor">DS</td><td class="setColor">Setup Device Parameter</td><td class="setColor"></td></tr>
    <tr><td>(300A,01D0)</td><td>ST</td><td>Setup Reference Description</td><td></td></tr>
    <tr><td class="setColor">(300A,01D2)</td><td class="setColor">DS</td><td class="setColor">Table Top Vertical Setup Displacement</td><td class="setColor"></td></tr>
    <tr><td>(300A,01D4)</td><td>DS</td><td>Table Top Longitudinal Setup Displacement</td><td></td></tr>
    <tr><td class="setColor">(300A,01D6)</td><td class="setColor">DS</td><td class="setColor">Table Top Lateral Setup Displacement</td><td class="setColor"></td></tr>
    <tr><td>(300A,0200)</td><td>CS</td><td>Brachy Treatment Technique</td><td></td></tr>
    <tr><td class="setColor">(300A,0202)</td><td class="setColor">CS</td><td class="setColor">Brachy Treatment Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0206)</td><td>SQ</td><td>Treatment Machine Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0210)</td><td class="setColor">SQ</td><td class="setColor">Source Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0212)</td><td>IS</td><td>Source Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0214)</td><td class="setColor">CS</td><td class="setColor">Source Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0216)</td><td>LO</td><td>Source Manufacturer</td><td></td></tr>
    <tr><td class="setColor">(300A,0218)</td><td class="setColor">DS</td><td class="setColor">Active Source Diameter</td><td class="setColor"></td></tr>
    <tr><td>(300A,021A)</td><td>DS</td><td>Active Source Length</td><td></td></tr>
    <tr><td class="setColor">(300A,021B)</td><td class="setColor">SH</td><td class="setColor">Source Model ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,021C)</td><td>LO</td><td>Source Description</td><td></td></tr>
    <tr><td class="setColor">(300A,0222)</td><td class="setColor">DS</td><td class="setColor">Source Encapsulation Nominal Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,0224)</td><td>DS</td><td>Source Encapsulation Nominal Transmission</td><td></td></tr>
    <tr><td class="setColor">(300A,0226)</td><td class="setColor">LO</td><td class="setColor">Source Isotope Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,0228)</td><td>DS</td><td>Source Isotope Half Life</td><td></td></tr>
    <tr><td class="setColor">(300A,0229)</td><td class="setColor">CS</td><td class="setColor">Source Strength Units</td><td class="setColor"></td></tr>
    <tr><td>(300A,022A)</td><td>DS</td><td>Reference Air Kerma Rate</td><td></td></tr>
    <tr><td class="setColor">(300A,022B)</td><td class="setColor">DS</td><td class="setColor">Source Strength</td><td class="setColor"></td></tr>
    <tr><td>(300A,022C)</td><td>DA</td><td>Source Strength Reference Date</td><td></td></tr>
    <tr><td class="setColor">(300A,022E)</td><td class="setColor">TM</td><td class="setColor">Source Strength Reference Time</td><td class="setColor"></td></tr>
    <tr><td>(300A,0230)</td><td>SQ</td><td>Application Setup Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0232)</td><td class="setColor">CS</td><td class="setColor">Application Setup Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0234)</td><td>IS</td><td>Application Setup Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0236)</td><td class="setColor">LO</td><td class="setColor">Application Setup Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,0238)</td><td>LO</td><td>Application Setup Manufacturer</td><td></td></tr>
    <tr><td class="setColor">(300A,0240)</td><td class="setColor">IS</td><td class="setColor">Template Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0242)</td><td>SH</td><td>Template Type</td><td></td></tr>
    <tr><td class="setColor">(300A,0244)</td><td class="setColor">LO</td><td class="setColor">Template Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,0250)</td><td>DS</td><td>Total Reference Air Kerma</td><td></td></tr>
    <tr><td class="setColor">(300A,0260)</td><td class="setColor">SQ</td><td class="setColor">Brachy Accessory Device Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0262)</td><td>IS</td><td>Brachy Accessory Device Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0263)</td><td class="setColor">SH</td><td class="setColor">Brachy Accessory Device ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,0264)</td><td>CS</td><td>Brachy Accessory Device Type</td><td></td></tr>
    <tr><td class="setColor">(300A,0266)</td><td class="setColor">LO</td><td class="setColor">Brachy Accessory Device Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,026A)</td><td>DS</td><td>Brachy Accessory Device Nominal Thickness</td><td></td></tr>
    <tr><td class="setColor">(300A,026C)</td><td class="setColor">DS</td><td class="setColor">Brachy Accessory Device Nominal Transmission</td><td class="setColor"></td></tr>
    <tr><td>(300A,0280)</td><td>SQ</td><td>Channel Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0282)</td><td class="setColor">IS</td><td class="setColor">Channel Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0284)</td><td>DS</td><td>Channel Length</td><td></td></tr>
    <tr><td class="setColor">(300A,0286)</td><td class="setColor">DS</td><td class="setColor">Channel Total Time</td><td class="setColor"></td></tr>
    <tr><td>(300A,0288)</td><td>CS</td><td>Source Movement Type</td><td></td></tr>
    <tr><td class="setColor">(300A,028A)</td><td class="setColor">IS</td><td class="setColor">Number of Pulses</td><td class="setColor"></td></tr>
    <tr><td>(300A,028C)</td><td>DS</td><td>Pulse Repetition Interval</td><td></td></tr>
    <tr><td class="setColor">(300A,0290)</td><td class="setColor">IS</td><td class="setColor">Source Applicator Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0291)</td><td>SH</td><td>Source Applicator ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0292)</td><td class="setColor">CS</td><td class="setColor">Source Applicator Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0294)</td><td>LO</td><td>Source Applicator Name</td><td></td></tr>
    <tr><td class="setColor">(300A,0296)</td><td class="setColor">DS</td><td class="setColor">Source Applicator Length</td><td class="setColor"></td></tr>
    <tr><td>(300A,0298)</td><td>LO</td><td>Source Applicator Manufacturer</td><td></td></tr>
    <tr><td class="setColor">(300A,029C)</td><td class="setColor">DS</td><td class="setColor">Source Applicator Wall Nominal Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,029E)</td><td>DS</td><td>Source Applicator Wall Nominal Transmission</td><td></td></tr>
    <tr><td class="setColor">(300A,02A0)</td><td class="setColor">DS</td><td class="setColor">Source Applicator Step Size</td><td class="setColor"></td></tr>
    <tr><td>(300A,02A2)</td><td>IS</td><td>Transfer Tube Number</td><td></td></tr>
    <tr><td class="setColor">(300A,02A4)</td><td class="setColor">DS</td><td class="setColor">Transfer Tube Length</td><td class="setColor"></td></tr>
    <tr><td>(300A,02B0)</td><td>SQ</td><td>Channel Shield Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,02B2)</td><td class="setColor">IS</td><td class="setColor">Channel Shield Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,02B3)</td><td>SH</td><td>Channel Shield ID</td><td></td></tr>
    <tr><td class="setColor">(300A,02B4)</td><td class="setColor">LO</td><td class="setColor">Channel Shield Name</td><td class="setColor"></td></tr>
    <tr><td>(300A,02B8)</td><td>DS</td><td>Channel Shield Nominal Thickness</td><td></td></tr>
    <tr><td class="setColor">(300A,02BA)</td><td class="setColor">DS</td><td class="setColor">Channel Shield Nominal Transmission</td><td class="setColor"></td></tr>
    <tr><td>(300A,02C8)</td><td>DS</td><td>Final Cumulative Time Weight</td><td></td></tr>
    <tr><td class="setColor">(300A,02D0)</td><td class="setColor">SQ</td><td class="setColor">Brachy Control Point Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,02D2)</td><td>DS</td><td>Control Point Relative Position</td><td></td></tr>
    <tr><td class="setColor">(300A,02D4)</td><td class="setColor">DS</td><td class="setColor">Control Point 3D Position</td><td class="setColor"></td></tr>
    <tr><td>(300A,02D6)</td><td>DS</td><td>Cumulative Time Weight</td><td></td></tr>
    <tr><td class="setColor">(300A,02E0)</td><td class="setColor">CS</td><td class="setColor">Compensator Divergence</td><td class="setColor"></td></tr>
    <tr><td>(300A,02E1)</td><td>CS</td><td>Compensator Mounting Position</td><td></td></tr>
    <tr><td class="setColor">(300A,02E2)</td><td class="setColor">DS</td><td class="setColor">Source to Compensator Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,02E3)</td><td>FL</td><td>Total Compensator Tray Water-Equivalent Thickness</td><td></td></tr>
    <tr><td class="setColor">(300A,02E4)</td><td class="setColor">FL</td><td class="setColor">Isocenter to Compensator Tray Distance</td><td class="setColor"></td></tr>
    <tr><td>(300A,02E5)</td><td>FL</td><td>Compensator Column Offset</td><td></td></tr>
    <tr><td class="setColor">(300A,02E6)</td><td class="setColor">FL</td><td class="setColor">Isocenter to Compensator Distances</td><td class="setColor"></td></tr>
    <tr><td>(300A,02E7)</td><td>FL</td><td>Compensator Relative Stopping Power Ratio</td><td></td></tr>
    <tr><td class="setColor">(300A,02E8)</td><td class="setColor">FL</td><td class="setColor">Compensator Milling Tool Diameter</td><td class="setColor"></td></tr>
    <tr><td>(300A,02EA)</td><td>SQ</td><td>Ion Range Compensator Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,02EB)</td><td class="setColor">LT</td><td class="setColor">Compensator Description</td><td class="setColor"></td></tr>
    <tr><td>(300A,0302)</td><td>IS</td><td>Radiation Mass Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0304)</td><td class="setColor">IS</td><td class="setColor">Radiation Atomic Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0306)</td><td>SS</td><td>Radiation Charge State</td><td></td></tr>
    <tr><td class="setColor">(300A,0308)</td><td class="setColor">CS</td><td class="setColor">Scan Mode</td><td class="setColor"></td></tr>
    <tr><td>(300A,0309)</td><td>CS</td><td>Modulated Scan Mode Type</td><td></td></tr>
    <tr><td class="setColor">(300A,030A)</td><td class="setColor">FL</td><td class="setColor">Virtual Source-Axis Distances</td><td class="setColor"></td></tr>
    <tr><td>(300A,030C)</td><td>SQ</td><td>Snout Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,030D)</td><td class="setColor">FL</td><td class="setColor">Snout Position</td><td class="setColor"></td></tr>
    <tr><td>(300A,030F)</td><td>SH</td><td>Snout ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0312)</td><td class="setColor">IS</td><td class="setColor">Number of Range Shifters</td><td class="setColor"></td></tr>
    <tr><td>(300A,0314)</td><td>SQ</td><td>Range Shifter Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0316)</td><td class="setColor">IS</td><td class="setColor">Range Shifter Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0318)</td><td>SH</td><td>Range Shifter ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0320)</td><td class="setColor">CS</td><td class="setColor">Range Shifter Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0322)</td><td>LO</td><td>Range Shifter Description</td><td></td></tr>
    <tr><td class="setColor">(300A,0330)</td><td class="setColor">IS</td><td class="setColor">Number of Lateral Spreading Devices</td><td class="setColor"></td></tr>
    <tr><td>(300A,0332)</td><td>SQ</td><td>Lateral Spreading Device Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0334)</td><td class="setColor">IS</td><td class="setColor">Lateral Spreading Device Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0336)</td><td>SH</td><td>Lateral Spreading Device ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0338)</td><td class="setColor">CS</td><td class="setColor">Lateral Spreading Device Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,033A)</td><td>LO</td><td>Lateral Spreading Device Description</td><td></td></tr>
    <tr><td class="setColor">(300A,033C)</td><td class="setColor">FL</td><td class="setColor">Lateral Spreading Device Water Equivalent Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,0340)</td><td>IS</td><td>Number of Range Modulators</td><td></td></tr>
    <tr><td class="setColor">(300A,0342)</td><td class="setColor">SQ</td><td class="setColor">Range Modulator Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0344)</td><td>IS</td><td>Range Modulator Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0346)</td><td class="setColor">SH</td><td class="setColor">Range Modulator ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,0348)</td><td>CS</td><td>Range Modulator Type</td><td></td></tr>
    <tr><td class="setColor">(300A,034A)</td><td class="setColor">LO</td><td class="setColor">Range Modulator Description</td><td class="setColor"></td></tr>
    <tr><td>(300A,034C)</td><td>SH</td><td>Beam Current Modulation ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0350)</td><td class="setColor">CS</td><td class="setColor">Patient Support Type</td><td class="setColor"></td></tr>
    <tr><td>(300A,0352)</td><td>SH</td><td>Patient Support ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0354)</td><td class="setColor">LO</td><td class="setColor">Patient Support Accessory Code</td><td class="setColor"></td></tr>
    <tr><td>(300A,0355)</td><td>LO</td><td>Tray Accessory Code</td><td></td></tr>
    <tr><td class="setColor">(300A,0356)</td><td class="setColor">FL</td><td class="setColor">Fixation Light Azimuthal Angle</td><td class="setColor"></td></tr>
    <tr><td>(300A,0358)</td><td>FL</td><td>Fixation Light Polar Angle</td><td></td></tr>
    <tr><td class="setColor">(300A,035A)</td><td class="setColor">FL</td><td class="setColor">Meterset Rate</td><td class="setColor"></td></tr>
    <tr><td>(300A,0360)</td><td>SQ</td><td>Range Shifter Settings Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0362)</td><td class="setColor">LO</td><td class="setColor">Range Shifter Setting</td><td class="setColor"></td></tr>
    <tr><td>(300A,0364)</td><td>FL</td><td>Isocenter to Range Shifter Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0366)</td><td class="setColor">FL</td><td class="setColor">Range Shifter Water Equivalent Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,0370)</td><td>SQ</td><td>Lateral Spreading Device Settings Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0372)</td><td class="setColor">LO</td><td class="setColor">Lateral Spreading Device Setting</td><td class="setColor"></td></tr>
    <tr><td>(300A,0374)</td><td>FL</td><td>Isocenter to Lateral Spreading Device Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0380)</td><td class="setColor">SQ</td><td class="setColor">Range Modulator Settings Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0382)</td><td>FL</td><td>Range Modulator Gating Start Value</td><td></td></tr>
    <tr><td class="setColor">(300A,0384)</td><td class="setColor">FL</td><td class="setColor">Range Modulator Gating Stop Value</td><td class="setColor"></td></tr>
    <tr><td>(300A,0386)</td><td>FL</td><td>Range Modulator Gating Start Water Equivalent Thickness</td><td></td></tr>
    <tr><td class="setColor">(300A,0388)</td><td class="setColor">FL</td><td class="setColor">Range Modulator Gating Stop Water Equivalent Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,038A)</td><td>FL</td><td>Isocenter to Range Modulator Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0390)</td><td class="setColor">SH</td><td class="setColor">Scan Spot Tune ID</td><td class="setColor"></td></tr>
    <tr><td>(300A,0391)</td><td>IS</td><td>Scan Spot Prescribed Indices</td><td></td></tr>
    <tr><td class="setColor">(300A,0392)</td><td class="setColor">IS</td><td class="setColor">Number of Scan Spot Positions</td><td class="setColor"></td></tr>
    <tr><td>(300A,0393)</td><td>CS</td><td>Scan Spot Reordered</td><td></td></tr>
    <tr><td class="setColor">(300A,0394)</td><td class="setColor">FL</td><td class="setColor">Scan Spot Position Map</td><td class="setColor"></td></tr>
    <tr><td>(300A,0395)</td><td>CS</td><td>Scan Spot Reordering Allowed</td><td></td></tr>
    <tr><td class="setColor">(300A,0396)</td><td class="setColor">FL</td><td class="setColor">Scan Spot Meterset Weights</td><td class="setColor"></td></tr>
    <tr><td>(300A,0398)</td><td>FL</td><td>Scanning Spot Size</td><td></td></tr>
    <tr><td class="setColor">(300A,039A)</td><td class="setColor">IS</td><td class="setColor">Number of Paintings</td><td class="setColor"></td></tr>
    <tr><td>(300A,03A0)</td><td>SQ</td><td>Ion Tolerance Table Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,03A2)</td><td class="setColor">SQ</td><td class="setColor">Ion Beam Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,03A4)</td><td>SQ</td><td>Ion Beam Limiting Device Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,03A6)</td><td class="setColor">SQ</td><td class="setColor">Ion Block Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,03A8)</td><td>SQ</td><td>Ion Control Point Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,03AA)</td><td class="setColor">SQ</td><td class="setColor">Ion Wedge Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,03AC)</td><td>SQ</td><td>Ion Wedge Position Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0401)</td><td class="setColor">SQ</td><td class="setColor">Referenced Setup Image Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0402)</td><td>ST</td><td>Setup Image Comment</td><td></td></tr>
    <tr><td class="setColor">(300A,0410)</td><td class="setColor">SQ</td><td class="setColor">Motion Synchronization Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0412)</td><td>FL</td><td>Control Point Orientation</td><td></td></tr>
    <tr><td class="setColor">(300A,0420)</td><td class="setColor">SQ</td><td class="setColor">General Accessory Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0421)</td><td>SH</td><td>General Accessory ID</td><td></td></tr>
    <tr><td class="setColor">(300A,0422)</td><td class="setColor">ST</td><td class="setColor">General Accessory Description</td><td class="setColor"></td></tr>
    <tr><td>(300A,0423)</td><td>CS</td><td>General Accessory Type</td><td></td></tr>
    <tr><td class="setColor">(300A,0424)</td><td class="setColor">IS</td><td class="setColor">General Accessory Number</td><td class="setColor"></td></tr>
    <tr><td>(300A,0425)</td><td>FL</td><td>Source to General Accessory Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0431)</td><td class="setColor">SQ</td><td class="setColor">Applicator Geometry Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0432)</td><td>CS</td><td>Applicator Aperture Shape</td><td></td></tr>
    <tr><td class="setColor">(300A,0433)</td><td class="setColor">FL</td><td class="setColor">Applicator Opening</td><td class="setColor"></td></tr>
    <tr><td>(300A,0434)</td><td>FL</td><td>Applicator Opening X</td><td></td></tr>
    <tr><td class="setColor">(300A,0435)</td><td class="setColor">FL</td><td class="setColor">Applicator Opening Y</td><td class="setColor"></td></tr>
    <tr><td>(300A,0436)</td><td>FL</td><td>Source to Applicator Mounting Position Distance</td><td></td></tr>
    <tr><td class="setColor">(300A,0440)</td><td class="setColor">IS</td><td class="setColor">Number of Block Slab Items</td><td class="setColor"></td></tr>
    <tr><td>(300A,0441)</td><td>SQ</td><td>Block Slab Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0442)</td><td class="setColor">DS</td><td class="setColor">Block Slab Thickness</td><td class="setColor"></td></tr>
    <tr><td>(300A,0443)</td><td>US</td><td>Block Slab Number</td><td></td></tr>
    <tr><td class="setColor">(300A,0450)</td><td class="setColor">SQ</td><td class="setColor">Device Motion Control Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0451)</td><td>CS</td><td>Device Motion Execution Mode</td><td></td></tr>
    <tr><td class="setColor">(300A,0452)</td><td class="setColor">CS</td><td class="setColor">Device Motion Observation Mode</td><td class="setColor"></td></tr>
    <tr><td>(300A,0453)</td><td>SQ</td><td>Device Motion Parameter Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0501)</td><td class="setColor">FL</td><td class="setColor">Distal Depth Fraction</td><td class="setColor"></td></tr>
    <tr><td>(300A,0502)</td><td>FL</td><td>Distal Depth</td><td></td></tr>
    <tr><td class="setColor">(300A,0503)</td><td class="setColor">FL</td><td class="setColor">Nominal Range Modulation Fractions</td><td class="setColor"></td></tr>
    <tr><td>(300A,0504)</td><td>FL</td><td>Nominal Range Modulated Region Depths</td><td></td></tr>
    <tr><td class="setColor">(300A,0505)</td><td class="setColor">SQ</td><td class="setColor">Depth Dose Parameters Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300A,0506)</td><td>SQ</td><td>Delivered Depth Dose Parameters Sequence</td><td></td></tr>
    <tr><td class="setColor">(300A,0507)</td><td class="setColor">FL</td><td class="setColor">Delivered Distal Depth Fraction</td><td class="setColor"></td></tr>
    <tr><td>(300A,0508)</td><td>FL</td><td>Delivered Distal Depth</td><td></td></tr>
    <tr><td class="setColor">(300A,0509)</td><td class="setColor">FL</td><td class="setColor">Delivered Nominal Range Modulation Fractions</td><td class="setColor"></td></tr>
    <tr><td>(300A,0510)</td><td>FL</td><td>Delivered Nominal Range Modulated Region Depths</td><td></td></tr>
    <tr><td class="setColor">(300A,0511)</td><td class="setColor">CS</td><td class="setColor">Delivered Reference Dose Definition</td><td class="setColor"></td></tr>
    <tr><td>(300A,0512)</td><td>CS</td><td>Reference Dose Definition</td><td></td></tr>
    <tr><td class="setColor">(300C,0002)</td><td class="setColor">SQ</td><td class="setColor">Referenced RT Plan Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300C,0004)</td><td>SQ</td><td>Referenced Beam Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,0006)</td><td class="setColor">IS</td><td class="setColor">Referenced Beam Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,0007)</td><td>IS</td><td>Referenced Reference Image Number</td><td></td></tr>
    <tr><td class="setColor">(300C,0008)</td><td class="setColor">DS</td><td class="setColor">Start Cumulative Meterset Weight</td><td class="setColor"></td></tr>
    <tr><td>(300C,0009)</td><td>DS</td><td>End Cumulative Meterset Weight</td><td></td></tr>
    <tr><td class="setColor">(300C,000A)</td><td class="setColor">SQ</td><td class="setColor">Referenced Brachy Application Setup Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300C,000C)</td><td>IS</td><td>Referenced Brachy Application Setup Number</td><td></td></tr>
    <tr><td class="setColor">(300C,000E)</td><td class="setColor">IS</td><td class="setColor">Referenced Source Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,0020)</td><td>SQ</td><td>Referenced Fraction Group Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,0022)</td><td class="setColor">IS</td><td class="setColor">Referenced Fraction Group Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,0040)</td><td>SQ</td><td>Referenced Verification Image Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,0042)</td><td class="setColor">SQ</td><td class="setColor">Referenced Reference Image Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300C,0050)</td><td>SQ</td><td>Referenced Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,0051)</td><td class="setColor">IS</td><td class="setColor">Referenced Dose Reference Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,0055)</td><td>SQ</td><td>Brachy Referenced Dose Reference Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,0060)</td><td class="setColor">SQ</td><td class="setColor">Referenced Structure Set Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300C,006A)</td><td>IS</td><td>Referenced Patient Setup Number</td><td></td></tr>
    <tr><td class="setColor">(300C,0080)</td><td class="setColor">SQ</td><td class="setColor">Referenced Dose Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300C,00A0)</td><td>IS</td><td>Referenced Tolerance Table Number</td><td></td></tr>
    <tr><td class="setColor">(300C,00B0)</td><td class="setColor">SQ</td><td class="setColor">Referenced Bolus Sequence</td><td class="setColor"></td></tr>
    <tr><td>(300C,00C0)</td><td>IS</td><td>Referenced Wedge Number</td><td></td></tr>
    <tr><td class="setColor">(300C,00D0)</td><td class="setColor">IS</td><td class="setColor">Referenced Compensator Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,00E0)</td><td>IS</td><td>Referenced Block Number</td><td></td></tr>
    <tr><td class="setColor">(300C,00F0)</td><td class="setColor">IS</td><td class="setColor">Referenced Control Point Index</td><td class="setColor"></td></tr>
    <tr><td>(300C,00F2)</td><td>SQ</td><td>Referenced Control Point Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,00F4)</td><td class="setColor">IS</td><td class="setColor">Referenced Start Control Point Index</td><td class="setColor"></td></tr>
    <tr><td>(300C,00F6)</td><td>IS</td><td>Referenced Stop Control Point Index</td><td></td></tr>
    <tr><td class="setColor">(300C,0100)</td><td class="setColor">IS</td><td class="setColor">Referenced Range Shifter Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,0102)</td><td>IS</td><td>Referenced Lateral Spreading Device Number</td><td></td></tr>
    <tr><td class="setColor">(300C,0104)</td><td class="setColor">IS</td><td class="setColor">Referenced Range Modulator Number</td><td class="setColor"></td></tr>
    <tr><td>(300C,0111)</td><td>SQ</td><td>Omitted Beam Task Sequence</td><td></td></tr>
    <tr><td class="setColor">(300C,0112)</td><td class="setColor">CS</td><td class="setColor">Reason for Omission</td><td class="setColor"></td></tr>
    <tr><td>(300C,0113)</td><td>LO</td><td>Reason for Omission Description</td><td></td></tr>
    <tr><td class="setColor">(300E,0002)</td><td class="setColor">CS</td><td class="setColor">Approval Status</td><td class="setColor"></td></tr>
    <tr><td>(300E,0004)</td><td>DA</td><td>Review Date</td><td></td></tr>
    <tr><td class="setColor">(300E,0005)</td><td class="setColor">TM</td><td class="setColor">Review Time</td><td class="setColor"></td></tr>
    <tr><td>(300E,0008)</td><td>PN</td><td>Reviewer Name</td><td></td></tr>
    <tr><td class="retired1">(4000,0010)</td><td class="retired1">LT</td><td class="retired1">Arbitrary</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4000,4000)</td><td class="retired">LT</td><td class="retired">Text Comments</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0040)</td><td class="retired1">SH</td><td class="retired1">Results ID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0042)</td><td class="retired">LO</td><td class="retired">Results ID Issuer</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0050)</td><td class="retired1">SQ</td><td class="retired1">Referenced Interpretation Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,00FF)</td><td class="retired">CS</td><td class="retired">Report Production Status (Trial)</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0100)</td><td class="retired1">DA</td><td class="retired1">Interpretation Recorded Date</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0101)</td><td class="retired">TM</td><td class="retired">Interpretation Recorded Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0102)</td><td class="retired1">PN</td><td class="retired1">Interpretation Recorder</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0103)</td><td class="retired">LO</td><td class="retired">Reference to Recorded Sound</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0108)</td><td class="retired1">DA</td><td class="retired1">Interpretation Transcription Date</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0109)</td><td class="retired">TM</td><td class="retired">Interpretation Transcription Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,010A)</td><td class="retired1">PN</td><td class="retired1">Interpretation Transcriber</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,010B)</td><td class="retired">ST</td><td class="retired">Interpretation Text</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,010C)</td><td class="retired1">PN</td><td class="retired1">Interpretation Author</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0111)</td><td class="retired">SQ</td><td class="retired">Interpretation Approver Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0112)</td><td class="retired1">DA</td><td class="retired1">Interpretation Approval Date</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0113)</td><td class="retired">TM</td><td class="retired">Interpretation Approval Time</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0114)</td><td class="retired1">PN</td><td class="retired1">Physician Approving Interpretation</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0115)</td><td class="retired">LT</td><td class="retired">Interpretation Diagnosis Description</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0117)</td><td class="retired1">SQ</td><td class="retired1">Interpretation Diagnosis Code Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0118)</td><td class="retired">SQ</td><td class="retired">Results Distribution List Sequence</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0119)</td><td class="retired1">PN</td><td class="retired1">Distribution Name</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,011A)</td><td class="retired">LO</td><td class="retired">Distribution Address</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0200)</td><td class="retired1">SH</td><td class="retired1">Interpretation ID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0202)</td><td class="retired">LO</td><td class="retired">Interpretation ID Issuer</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0210)</td><td class="retired1">CS</td><td class="retired1">Interpretation Type ID</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,0212)</td><td class="retired">CS</td><td class="retired">Interpretation Status ID</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(4008,0300)</td><td class="retired1">ST</td><td class="retired1">Impressions</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(4008,4000)</td><td class="retired">ST</td><td class="retired">Results Comments</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(4010,0001)</td><td class="setColor">CS</td><td class="setColor">Low Energy Detectors</td><td class="setColor"></td></tr>
    <tr><td>(4010,0002)</td><td>CS</td><td>High Energy Detectors</td><td></td></tr>
    <tr><td class="setColor">(4010,0004)</td><td class="setColor">SQ</td><td class="setColor">Detector Geometry Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1001)</td><td>SQ</td><td>Threat ROI Voxel Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1004)</td><td class="setColor">FL</td><td class="setColor">Threat ROI Base</td><td class="setColor"></td></tr>
    <tr><td>(4010,1005)</td><td>FL</td><td>Threat ROI Extents</td><td></td></tr>
    <tr><td class="setColor">(4010,1006)</td><td class="setColor">OB</td><td class="setColor">Threat ROI Bitmap</td><td class="setColor"></td></tr>
    <tr><td>(4010,1007)</td><td>SH</td><td>Route Segment ID</td><td></td></tr>
    <tr><td class="setColor">(4010,1008)</td><td class="setColor">CS</td><td class="setColor">Gantry Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1009)</td><td>CS</td><td>OOI Owner Type</td><td></td></tr>
    <tr><td class="setColor">(4010,100A)</td><td class="setColor">SQ</td><td class="setColor">Route Segment Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1010)</td><td>US</td><td>Potential Threat Object ID</td><td></td></tr>
    <tr><td class="setColor">(4010,1011)</td><td class="setColor">SQ</td><td class="setColor">Threat Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1012)</td><td>CS</td><td>Threat Category</td><td></td></tr>
    <tr><td class="setColor">(4010,1013)</td><td class="setColor">LT</td><td class="setColor">Threat Category Description</td><td class="setColor"></td></tr>
    <tr><td>(4010,1014)</td><td>CS</td><td>ATD Ability Assessment</td><td></td></tr>
    <tr><td class="setColor">(4010,1015)</td><td class="setColor">CS</td><td class="setColor">ATD Assessment Flag</td><td class="setColor"></td></tr>
    <tr><td>(4010,1016)</td><td>FL</td><td>ATD Assessment Probability</td><td></td></tr>
    <tr><td class="setColor">(4010,1017)</td><td class="setColor">FL</td><td class="setColor">Mass</td><td class="setColor"></td></tr>
    <tr><td>(4010,1018)</td><td>FL</td><td>Density</td><td></td></tr>
    <tr><td class="setColor">(4010,1019)</td><td class="setColor">FL</td><td class="setColor">Z Effective</td><td class="setColor"></td></tr>
    <tr><td>(4010,101A)</td><td>SH</td><td>Boarding Pass ID</td><td></td></tr>
    <tr><td class="setColor">(4010,101B)</td><td class="setColor">FL</td><td class="setColor">Center of Mass</td><td class="setColor"></td></tr>
    <tr><td>(4010,101C)</td><td>FL</td><td>Center of PTO</td><td></td></tr>
    <tr><td class="setColor">(4010,101D)</td><td class="setColor">FL</td><td class="setColor">Bounding Polygon</td><td class="setColor"></td></tr>
    <tr><td>(4010,101E)</td><td>SH</td><td>Route Segment Start Location ID</td><td></td></tr>
    <tr><td class="setColor">(4010,101F)</td><td class="setColor">SH</td><td class="setColor">Route Segment End Location ID</td><td class="setColor"></td></tr>
    <tr><td>(4010,1020)</td><td>CS</td><td>Route Segment Location ID Type</td><td></td></tr>
    <tr><td class="setColor">(4010,1021)</td><td class="setColor">CS</td><td class="setColor">Abort Reason</td><td class="setColor"></td></tr>
    <tr><td>(4010,1023)</td><td>FL</td><td>Volume of PTO</td><td></td></tr>
    <tr><td class="setColor">(4010,1024)</td><td class="setColor">CS</td><td class="setColor">Abort Flag</td><td class="setColor"></td></tr>
    <tr><td>(4010,1025)</td><td>DT</td><td>Route Segment Start Time</td><td></td></tr>
    <tr><td class="setColor">(4010,1026)</td><td class="setColor">DT</td><td class="setColor">Route Segment End Time</td><td class="setColor"></td></tr>
    <tr><td>(4010,1027)</td><td>CS</td><td>TDR Type</td><td></td></tr>
    <tr><td class="setColor">(4010,1028)</td><td class="setColor">CS</td><td class="setColor">International Route Segment</td><td class="setColor"></td></tr>
    <tr><td>(4010,1029)</td><td>LO</td><td>Threat Detection Algorithm and Version</td><td></td></tr>
    <tr><td class="setColor">(4010,102A)</td><td class="setColor">SH</td><td class="setColor">Assigned Location</td><td class="setColor"></td></tr>
    <tr><td>(4010,102B)</td><td>DT</td><td>Alarm Decision Time</td><td></td></tr>
    <tr><td class="setColor">(4010,1031)</td><td class="setColor">CS</td><td class="setColor">Alarm Decision</td><td class="setColor"></td></tr>
    <tr><td>(4010,1033)</td><td>US</td><td>Number of Total Objects</td><td></td></tr>
    <tr><td class="setColor">(4010,1034)</td><td class="setColor">US</td><td class="setColor">Number of Alarm Objects</td><td class="setColor"></td></tr>
    <tr><td>(4010,1037)</td><td>SQ</td><td>PTO Representation Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1038)</td><td class="setColor">SQ</td><td class="setColor">ATD Assessment Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1039)</td><td>CS</td><td>TIP Type</td><td></td></tr>
    <tr><td class="setColor">(4010,103A)</td><td class="setColor">CS</td><td class="setColor"> Version</td><td class="setColor"></td></tr>
    <tr><td>(4010,1041)</td><td>DT</td><td>OOI Owner Creation Time</td><td></td></tr>
    <tr><td class="setColor">(4010,1042)</td><td class="setColor">CS</td><td class="setColor">OOI Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1043)</td><td>FL</td><td>OOI Size</td><td></td></tr>
    <tr><td class="setColor">(4010,1044)</td><td class="setColor">CS</td><td class="setColor">Acquisition Status</td><td class="setColor"></td></tr>
    <tr><td>(4010,1045)</td><td>SQ</td><td>Basis Materials Code Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1046)</td><td class="setColor">CS</td><td class="setColor">Phantom Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1047)</td><td>SQ</td><td>OOI Owner Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1048)</td><td class="setColor">CS</td><td class="setColor">Scan Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1051)</td><td>LO</td><td>Itinerary ID</td><td></td></tr>
    <tr><td class="setColor">(4010,1052)</td><td class="setColor">SH</td><td class="setColor">Itinerary ID Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1053)</td><td>LO</td><td>Itinerary ID Assigning Authority</td><td></td></tr>
    <tr><td class="setColor">(4010,1054)</td><td class="setColor">SH</td><td class="setColor">Route ID</td><td class="setColor"></td></tr>
    <tr><td>(4010,1055)</td><td>SH</td><td>Route ID Assigning Authority</td><td></td></tr>
    <tr><td class="setColor">(4010,1056)</td><td class="setColor">CS</td><td class="setColor">Inbound Arrival Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1058)</td><td>SH</td><td>Carrier ID</td><td></td></tr>
    <tr><td class="setColor">(4010,1059)</td><td class="setColor">CS</td><td class="setColor">Carrier ID Assigning Authority</td><td class="setColor"></td></tr>
    <tr><td>(4010,1060)</td><td>FL</td><td>Source Orientation</td><td></td></tr>
    <tr><td class="setColor">(4010,1061)</td><td class="setColor">FL</td><td class="setColor">Source Position</td><td class="setColor"></td></tr>
    <tr><td>(4010,1062)</td><td>FL</td><td>Belt Height</td><td></td></tr>
    <tr><td class="setColor">(4010,1064)</td><td class="setColor">SQ</td><td class="setColor">Algorithm Routing Code Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1067)</td><td>CS</td><td>Transport Classification</td><td></td></tr>
    <tr><td class="setColor">(4010,1068)</td><td class="setColor">LT</td><td class="setColor">OOI Type Descriptor</td><td class="setColor"></td></tr>
    <tr><td>(4010,1069)</td><td>FL</td><td>Total Processing Time</td><td></td></tr>
    <tr><td class="setColor">(4010,106C)</td><td class="setColor">OB</td><td class="setColor">Detector Calibration Data</td><td class="setColor"></td></tr>
    <tr><td>(4010,106D)</td><td>CS</td><td>Additional Screening Performed</td><td></td></tr>
    <tr><td class="setColor">(4010,106E)</td><td class="setColor">CS</td><td class="setColor">Additional Inspection Selection Criteria</td><td class="setColor"></td></tr>
    <tr><td>(4010,106F)</td><td>SQ</td><td>Additional Inspection Method Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1070)</td><td class="setColor">CS</td><td class="setColor">AIT Device Type</td><td class="setColor"></td></tr>
    <tr><td>(4010,1071)</td><td>SQ</td><td>QR Measurements Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1072)</td><td class="setColor">SQ</td><td class="setColor">Target Material Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1073)</td><td>FD</td><td>SNR Threshold</td><td></td></tr>
    <tr><td class="setColor">(4010,1075)</td><td class="setColor">DS</td><td class="setColor">Image Scale Representation</td><td class="setColor"></td></tr>
    <tr><td>(4010,1076)</td><td>SQ</td><td>Referenced PTO Sequence</td><td></td></tr>
    <tr><td class="setColor">(4010,1077)</td><td class="setColor">SQ</td><td class="setColor">Referenced TDR Instance Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,1078)</td><td>ST</td><td>PTO Location Description</td><td></td></tr>
    <tr><td class="setColor">(4010,1079)</td><td class="setColor">SQ</td><td class="setColor">Anomaly Locator Indicator Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,107A)</td><td>FL</td><td>Anomaly Locator Indicator</td><td></td></tr>
    <tr><td class="setColor">(4010,107B)</td><td class="setColor">SQ</td><td class="setColor">PTO Region Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,107C)</td><td>CS</td><td>Inspection Selection Criteria</td><td></td></tr>
    <tr><td class="setColor">(4010,107D)</td><td class="setColor">SQ</td><td class="setColor">Secondary Inspection Method Sequence</td><td class="setColor"></td></tr>
    <tr><td>(4010,107E)</td><td>DS</td><td>PRCS to RCS Orientation</td><td></td></tr>
    <tr><td class="setColor">(4FFE,0001)</td><td class="setColor">SQ</td><td class="setColor">MAC Parameters Sequence</td><td class="setColor"></td></tr>
    <tr><td class="retired">(50xx,0005)</td><td class="retired">US</td><td class="retired">Curve Dimensions</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,0010)</td><td class="retired1">US</td><td class="retired1">Number of Points</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,0020)</td><td class="retired">CS</td><td class="retired">Type of Data</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,0022)</td><td class="retired1">LO</td><td class="retired1">Curve Description</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,0030)</td><td class="retired">SH</td><td class="retired">Axis Units</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,0040)</td><td class="retired1">SH</td><td class="retired1">Axis Labels</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,0103)</td><td class="retired">US</td><td class="retired">Data Value Representation</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,0104)</td><td class="retired1">US</td><td class="retired1">Minimum Coordinate Value</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,0105)</td><td class="retired">US</td><td class="retired">Maximum Coordinate Value</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,0106)</td><td class="retired1">SH</td><td class="retired1">Curve Range</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,0110)</td><td class="retired">US</td><td class="retired">Curve Data Descriptor</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,0112)</td><td class="retired1">US</td><td class="retired1">Coordinate Start Value</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,0114)</td><td class="retired">US</td><td class="retired">Coordinate Step Value</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,1001)</td><td class="retired1">CS</td><td class="retired1">Curve Activation Layer</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,2000)</td><td class="retired">US</td><td class="retired">Audio Type</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,2002)</td><td class="retired1">US</td><td class="retired1">Audio Sample Format</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,2004)</td><td class="retired">US</td><td class="retired">Number of Channels</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,2006)</td><td class="retired1">UL</td><td class="retired1">Number of Samples</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,2008)</td><td class="retired">UL</td><td class="retired">Sample Rate</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,200A)</td><td class="retired1">UL</td><td class="retired1">Total Time</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,200C)</td><td class="retired">OB or OW</td><td class="retired">Audio Sample Data</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,200E)</td><td class="retired1">LT</td><td class="retired1">Audio Comments</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,2500)</td><td class="retired">LO</td><td class="retired">Curve Label</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,2600)</td><td class="retired1">SQ</td><td class="retired1">Curve Referenced Overlay Sequence</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(50xx,2610)</td><td class="retired">US</td><td class="retired">Curve Referenced Overlay Group</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(50xx,3000)</td><td class="retired1">OB or OW</td><td class="retired1">Curve Data</td><td class="retired1">Retired</td></tr>
    <tr><td>(5200,9229)</td><td>SQ</td><td>Shared Functional Groups Sequence</td><td></td></tr>
    <tr><td class="setColor">(5200,9230)</td><td class="setColor">SQ</td><td class="setColor">Per-frame Functional Groups Sequence</td><td class="setColor"></td></tr>
    <tr><td>(5400,0100)</td><td>SQ</td><td>Waveform Sequence</td><td></td></tr>
    <tr><td class="setColor">(5400,0110)</td><td class="setColor">OB or OW</td><td class="setColor">Channel Minimum Value</td><td class="setColor"></td></tr>
    <tr><td>(5400,0112)</td><td>OB or OW</td><td>Channel Maximum Value</td><td></td></tr>
    <tr><td class="setColor">(5400,1004)</td><td class="setColor">US</td><td class="setColor">Waveform Bits Allocated</td><td class="setColor"></td></tr>
    <tr><td>(5400,1006)</td><td>CS</td><td>Waveform Sample Interpretation</td><td></td></tr>
    <tr><td class="setColor">(5400,100A)</td><td class="setColor">OB or OW</td><td class="setColor">Waveform Padding Value</td><td class="setColor"></td></tr>
    <tr><td>(5400,1010)</td><td>OB or OW</td><td>Waveform Data</td><td></td></tr>
    <tr><td class="setColor">(5600,0010)</td><td class="setColor">OF</td><td class="setColor">First Order Phase Correction Angle</td><td class="setColor"></td></tr>
    <tr><td>(5600,0020)</td><td>OF</td><td>Spectroscopy Data</td><td></td></tr>
    <tr><td class="setColor">(60xx,0010)</td><td class="setColor">US</td><td class="setColor">Overlay Rows</td><td class="setColor"></td></tr>
    <tr><td>(60xx,0011)</td><td>US</td><td>Overlay Columns</td><td></td></tr>
    <tr><td class="retired1">(60xx,0012)</td><td class="retired1">US</td><td class="retired1">Overlay Planes</td><td class="retired1">Retired</td></tr>
    <tr><td>(60xx,0015)</td><td>IS</td><td>Number of Frames in Overlay</td><td></td></tr>
    <tr><td class="setColor">(60xx,0022)</td><td class="setColor">LO</td><td class="setColor">Overlay Description</td><td class="setColor"></td></tr>
    <tr><td>(60xx,0040)</td><td>CS</td><td>Overlay Type</td><td></td></tr>
    <tr><td class="setColor">(60xx,0045)</td><td class="setColor">LO</td><td class="setColor">Overlay Subtype</td><td class="setColor"></td></tr>
    <tr><td>(60xx,0050)</td><td>SS</td><td>Overlay Origin</td><td></td></tr>
    <tr><td class="setColor">(60xx,0051)</td><td class="setColor">US</td><td class="setColor">Image Frame Origin</td><td class="setColor"></td></tr>
    <tr><td class="retired">(60xx,0052)</td><td class="retired">US</td><td class="retired">Overlay Plane Origin</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0060)</td><td class="retired1">CS</td><td class="retired1">Overlay Compression Code</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,0061)</td><td class="retired">SH</td><td class="retired">Overlay Compression Originator</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0062)</td><td class="retired1">SH</td><td class="retired1">Overlay Compression Label</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,0063)</td><td class="retired">CS</td><td class="retired">Overlay Compression Description</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0066)</td><td class="retired1">AT</td><td class="retired1">Overlay Compression Step Pointers</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,0068)</td><td class="retired">US</td><td class="retired">Overlay Repeat Interval</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0069)</td><td class="retired1">US</td><td class="retired1">Overlay Bits Grouped</td><td class="retired1">Retired</td></tr>
    <tr><td>(60xx,0100)</td><td>US</td><td>Overlay Bits Allocated</td><td></td></tr>
    <tr><td class="setColor">(60xx,0102)</td><td class="setColor">US</td><td class="setColor">Overlay Bit Position</td><td class="setColor"></td></tr>
    <tr><td class="retired">(60xx,0110)</td><td class="retired">CS</td><td class="retired">Overlay Format</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0200)</td><td class="retired1">US</td><td class="retired1">Overlay Location</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,0800)</td><td class="retired">CS</td><td class="retired">Overlay Code Label</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0802)</td><td class="retired1">US</td><td class="retired1">Overlay Number of Tables</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,0803)</td><td class="retired">AT</td><td class="retired">Overlay Code Table Location</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,0804)</td><td class="retired1">US</td><td class="retired1">Overlay Bits For Code Word</td><td class="retired1">Retired</td></tr>
    <tr><td>(60xx,1001)</td><td>CS</td><td>Overlay Activation Layer</td><td></td></tr>
    <tr><td class="retired1">(60xx,1100)</td><td class="retired1">US</td><td class="retired1">Overlay Descriptor - Gray</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,1101)</td><td class="retired">US</td><td class="retired">Overlay Descriptor - Red</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,1102)</td><td class="retired1">US</td><td class="retired1">Overlay Descriptor - Green</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,1103)</td><td class="retired">US</td><td class="retired">Overlay Descriptor - Blue</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,1200)</td><td class="retired1">US</td><td class="retired1">Overlays - Gray</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,1201)</td><td class="retired">US</td><td class="retired">Overlays - Red</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(60xx,1202)</td><td class="retired1">US</td><td class="retired1">Overlays - Green</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(60xx,1203)</td><td class="retired">US</td><td class="retired">Overlays - Blue</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(60xx,1301)</td><td class="setColor">IS</td><td class="setColor">ROI Area</td><td class="setColor"></td></tr>
    <tr><td>(60xx,1302)</td><td>DS</td><td>ROI Mean</td><td></td></tr>
    <tr><td class="setColor">(60xx,1303)</td><td class="setColor">DS</td><td class="setColor">ROI Standard Deviation</td><td class="setColor"></td></tr>
    <tr><td>(60xx,1500)</td><td>LO</td><td>Overlay Label</td><td></td></tr>
    <tr><td class="setColor">(60xx,3000)</td><td class="setColor">OB or OW</td><td class="setColor">Overlay Data</td><td class="setColor"></td></tr>
    <tr><td class="retired">(60xx,4000)</td><td class="retired">LT</td><td class="retired">Overlay Comments</td><td class="retired">Retired</td></tr>
    <tr><td class="setColor">(7FE0,0008)</td><td class="setColor">OF</td><td class="setColor">Float Pixel Data</td><td class="setColor"></td></tr>
    <tr><td>(7FE0,0009)</td><td>OD</td><td>Double Float Pixel Data</td><td></td></tr>
    <tr><td class="setColor">(7FE0,0010)</td><td class="setColor">OB or OW</td><td class="setColor">Pixel Data</td><td class="setColor"></td></tr>
    <tr><td class="retired">(7FE0,0020)</td><td class="retired">OW</td><td class="retired">Coefficients SDVN</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(7FE0,0030)</td><td class="retired1">OW</td><td class="retired1">Coefficients SDHN</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(7FE0,0040)</td><td class="retired">OW</td><td class="retired">Coefficients SDDN</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(7Fxx,0010)</td><td class="retired1">OB or OW</td><td class="retired1">Variable Pixel Data</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(7Fxx,0011)</td><td class="retired">US</td><td class="retired">Variable Next Data Group</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(7Fxx,0020)</td><td class="retired1">OW</td><td class="retired1">Variable Coefficients SDVN</td><td class="retired1">Retired</td></tr>
    <tr><td class="retired">(7Fxx,0030)</td><td class="retired">OW</td><td class="retired">Variable Coefficients SDHN</td><td class="retired">Retired</td></tr>
    <tr><td class="retired1">(7Fxx,0040)</td><td class="retired1">OW</td><td class="retired1">Variable Coefficients SDDN</td><td class="retired1">Retired</td></tr>
    <tr><td>(FFFA,FFFA)</td><td>SQ</td><td>Digital Signatures Sequence</td><td></td></tr>
    <tr><td class="setColor">(FFFC,FFFC)</td><td class="setColor">OB</td><td class="setColor">Data Set Trailing Padding</td><td class="setColor"></td></tr>
    <tr><td>(FFFE,E000)</td><td></td><td>Item</td><td></td></tr>
    <tr><td class="setColor">(FFFE,E00D)</td><td class="setColor"></td><td class="setColor">Item Delimitation Item</td><td class="setColor"></td></tr>
    <tr><td>(FFFE,E0DD)</td><td></td><td>Sequence Delimitation Item</td><td></td></tr>
</table>
`
