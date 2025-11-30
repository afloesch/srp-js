export declare const overheadLength: number;
export declare const keyPair: import("tweetnacl").boxProps.keyPair;
export declare function open(sealedbox: Uint8Array, pk: Uint8Array, sk: Uint8Array): Uint8Array | null;
export declare function seal(data: Uint8Array, pk: Uint8Array): Uint8Array;
