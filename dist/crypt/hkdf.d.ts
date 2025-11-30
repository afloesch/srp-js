/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import crypto from 'crypto';
import { Buffer } from 'buffer';
export declare class HKDF {
    hashAlg: string;
    salt: string;
    ikm: string;
    hashLength: number;
    prk: Buffer;
    constructor(hashAlg: string, salt: string, ikm: string);
    derive(info: Buffer | crypto.BinaryLike, size: number, cb: {
        (buffer: Buffer): void;
        (arg0: any): void;
    }): void;
}
