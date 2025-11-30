export declare function encodeBox<T>(data: T, publicKey: Uint8Array): Promise<{
    key: string;
    data: string;
}>;
export declare function decodeBox<T>(data: string, publicKey: Uint8Array, secretKey: Uint8Array): Promise<T | null>;
