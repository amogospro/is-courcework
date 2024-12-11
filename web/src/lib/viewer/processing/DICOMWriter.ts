// DICOMWriter.ts
class DICOMWriter {
    private buffer: ArrayBuffer;
    private view: DataView;
    private byteOffset: number;

    constructor() {
        this.buffer = new ArrayBuffer(0);
        this.view = new DataView(this.buffer);
        this.byteOffset = 0;
    }

    initBuffer(size: number): void {
        this.buffer = new ArrayBuffer(size);
        this.view = new DataView(this.buffer);
        this.byteOffset = 128;

        this.addString('DICM');
    }

    addString(value: string): void {
        for (let i = 0; i < value.length; i++) {
            this.view.setUint8(this.byteOffset++, value.charCodeAt(i));
        }
    }

    addTag(tag: string, vr: string, value: string | number): void {
        // Convert tag to hex value
        const group = parseInt(tag.substring(1, 5), 16);
        const element = parseInt(tag.substring(5, 9), 16);

        this.view.setUint16(this.byteOffset, group, true); // Little endian
        this.byteOffset += 2;
        this.view.setUint16(this.byteOffset, element, true); // Little endian
        this.byteOffset += 2;

        // Value Representation (VR)
        this.addString(vr);

        // Length of the value
        // For simplicity, assuming all values are short strings or numbers
        const length = typeof value === 'string' ? value.length : 2;
        this.view.setUint16(this.byteOffset, length, true); // Little endian for length
        this.byteOffset += 2;

        // The value itself
        if (typeof value === 'string') {
            this.addString(value);
        } else if (typeof value === 'number') {
            this.view.setUint16(this.byteOffset, value, true); // Assuming value fits in 16 bits
            this.byteOffset += 2;
        }
    }

    addPixelData(pixels: Uint16Array | Float32Array): void {
        const isUint16 = pixels instanceof Uint16Array;
        const bytesPerPixel = isUint16 ? 2 : 4;

        for (let i = 0; i < pixels.length; i++) {
            if (isUint16) {
                this.view.setUint16(this.byteOffset, pixels[i], true); // Little endian
            } else {
                this.view.setFloat32(this.byteOffset, pixels[i], true); // Little endian
            }
            this.byteOffset += bytesPerPixel;
        }
    }

    write(): ArrayBuffer {
        return this.buffer.slice(0, this.byteOffset); // Return only the used part of the buffer
    }
}

export default DICOMWriter;