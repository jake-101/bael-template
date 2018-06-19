/// <reference types="node" />
/// <reference types="glob" />
import * as glob from 'glob';
export declare type StyleResourcesFileExt = 'sass' | 'scss' | 'less' | 'styl';
export interface StyleResource {
    file: string;
    content: string;
}
export declare type StyleResources = ReadonlyArray<StyleResource>;
export declare type StyleResourcesInjector = (source: string | Buffer, resources: StyleResources) => string;
export declare type StyleResourcesInternalInjectors = Record<'prepend' | 'append', StyleResourcesInjector>;
export declare type StyleResourcesOriginalInjector = StyleResourcesInjector | keyof StyleResourcesInternalInjectors;
export interface StyleResourcesLoaderOptions {
    patterns: string | string[];
    injector: StyleResourcesInjector;
    globOptions: glob.IOptions;
    resolveUrl: boolean;
}
export declare type StyleResourcesLoaderOriginalOptions = Partial<{
    patterns: string | string[];
    injector: StyleResourcesOriginalInjector;
    globOptions: glob.IOptions;
    resolveUrl: boolean;
}>;
