/// <reference types="webpack" />
import { loader } from 'webpack';
import { StyleResource, StyleResourcesLoaderOptions } from '../';
export declare function getResources(this: loader.LoaderContext, options: StyleResourcesLoaderOptions): Promise<StyleResource[]>;
