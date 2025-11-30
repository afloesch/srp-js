import { BigInteger } from "./bigInt";
export type Params = {
    N_length_bits: number;
    N: BigInteger;
    g: BigInteger;
    hash: "sha1" | "sha256" | "sha512";
};
declare const params: Record<string, Params>;
export default params;
