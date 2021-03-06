/* @flow */

export type ComponentRule = string | RegExp
export type ComponentConfig = {
  include?: ComponentRule | Array<ComponentRule>,
  exclude?: ComponentRule | Array<ComponentRule>,
}

export type Component<T1, T2> = {
  $type: T1,
  $apiVersion: number,
  callback: T2,
  defaultConfig: Object,
}

export type File = {
  source: string,
  imports: Set<string>,
  filePath: string,
  contents: string,
}

export type LoaderCallback = ((filePath: string, fileContents: string, sourceMap: ?Object, config: Object, pundle: Object) => { contents: string, sourceMap: ?Object })
export type Loader = Component<'loader', LoaderCallback>

export type PluginCallback = ((filePath: string, fileContents: string, sourceMap: ?Object, config: Object, pundle: Object) => void)
export type Plugin = Component<'plugin', PluginCallback>

export type ResolverCallback = ((request: string, fromFile: string, cached: boolean, config: Object, pundle: Object) => ?string)
export type Resolver = Component<'resolver', ResolverCallback>

export type ReporterCallback = ((error: Error, config: Object, pundle: Object) => void)
export type Reporter = Component<'reporter', ReporterCallback>

export type GeneratorCallback = ((generated: Array<File>, config: Object, pundle: Object) => { contents: string, sourceMap: string })
export type Generator = Component<'generator', GeneratorCallback>

export type TransformerCallback = ((filePath: string, fileContents: string, sourceMap: ?Object, config: Object, pundle: Object) => { contents: string, sourceMap: ?Object })
export type Transformer = Component<'transformer', TransformerCallback>

export type PostTransformerCallback = ((filePath: string, fileContents: string, sourceMap: ?Object, config: Object, pundle: Object) => { contents: string, sourceMap: ?Object })
export type PostTransformer = Component<'post-transformer', PostTransformerCallback>
