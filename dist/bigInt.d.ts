/// <reference types="node" />
/// <reference types="node" />
import { Buffer } from "buffer";
import { BigInteger as _BigInteger } from "jsbn";
export declare class BigInteger extends _BigInteger {
    bigNum: boolean;
    constructor(v: number | string, r?: number);
    toBuffer(): Buffer;
    bitLength(): number;
    mod(n: BigInteger | _BigInteger | number): BigInteger;
    add(n: BigInteger | _BigInteger | number): BigInteger;
    mul(n: BigInteger): BigInteger;
    sub(n: BigInteger): BigInteger;
    powm(n: BigInteger, m: BigInteger): BigInteger;
    eq(n: BigInteger): boolean;
    ge(n: BigInteger): boolean;
    le(n: BigInteger): boolean;
    static fromBuffer(buffer: Buffer): BigInteger;
    ensureBI(n: BigInteger | _BigInteger | number): BigInteger;
}
