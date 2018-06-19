/// <reference types="webpack" />
import { loader } from 'webpack';
import { StyleResource } from '../';
export declare function resolveImportUrl(this: loader.LoaderContext, {file, content}: StyleResource): string;
