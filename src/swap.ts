import { Atom } from "./atom";
import { AtomStateProxy } from "./atomStateProxy";
import { err, ok, Result } from "./lib/result";
import { SwapFn } from "./types/domain/swap";

export const swap = <T>(
    atom: Atom<T>,
    updateFn: SwapFn<T>,
    ...args: any[]
): Result<null, string> => {
    const atomStateProxy = AtomStateProxy.getAtomStateProxyInstance();
    try {
        atomStateProxy.setState(atom, updateFn, ...args);
    } catch (e) {
        return err((e as Error).message);
    }

    return ok(null);
}