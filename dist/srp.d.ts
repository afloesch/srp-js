/// <reference types="node" />
/// <reference types="node" />
import { BigInteger } from "./bigInt";
import { Buffer } from "buffer";
type Params = {
    N: BigInteger;
    g: BigInteger;
    hash: string;
    N_length_bits: number;
};
declare function computeVerifier(params: Params, salt: Buffer, I: Buffer, P: Buffer): Buffer;
declare function genKey(bytes?: number): Promise<Buffer>;
export declare class Client {
    _private: {
        params: Params;
        k_num: BigInteger;
        x_num: BigInteger;
        a_num: BigInteger;
        u_num?: BigInteger;
        A_buf: Buffer;
        K_buf?: Buffer;
        M1_buf?: Buffer;
        M2_buf?: Buffer;
        S_buf?: Buffer;
    };
    constructor(params: Params, salt_buf: Buffer, identity_buf: Buffer, password_buf: Buffer, secret1_buf: Buffer);
    computeA(): Buffer;
    setB(B_buf: Buffer): void;
    computeM1(): Buffer;
    checkM2(serverM2_buf: Buffer): void;
    computeK(): Buffer;
}
export declare class Server {
    _private: {
        params: Params;
        k_num: BigInteger;
        b_num: BigInteger;
        v_num: BigInteger;
        B_buf: Buffer;
        u_num?: BigInteger;
        A_buf?: Buffer;
        K_buf?: Buffer;
        M1_buf?: Buffer;
        M2_buf?: Buffer;
        S_buf?: Buffer;
    };
    constructor(params: Params, verifier_buf: Buffer, secret2_buf: Buffer);
    computeB(): Buffer;
    setA(A_buf: Buffer): void;
    checkM1(clientM1_buf: Buffer): Buffer | undefined;
    computeK(): Buffer;
}
export { genKey, computeVerifier };
