/// <reference types="webpack" />
/// <reference types="node" />
import { loader } from 'webpack';
export declare function loadResources(this: loader.LoaderContext, source: string | Buffer, callback: loader.loaderCallback): Promise<void>;
