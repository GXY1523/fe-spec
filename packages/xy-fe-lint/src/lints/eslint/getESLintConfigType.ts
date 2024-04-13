import glob from 'glob';
import { PKG } from '../../types';

/**
 * 获取 ESLint 配置类型
 * @param cwd
 * @param pkg
 * @returns gxy-eslint-config/index
 * @returns gxy-eslint-config/react
 * @returns gxy-eslint-config/typescript/index
 * @returns gxy-eslint-config/typescript/react
 */
export function getESLintConfigType(cwd: string, pkg: PKG): string {
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  const reactFiles = glob.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd });
  const vueFiles = glob.sync('./!(node_modules)/**/*.vue', { cwd });
  const dependencies = Object.keys(pkg.dependencies || {});
  const language = tsFiles.length > 0 ? 'typescript' : '';
  let dsl = '';

  // dsl判断
  if (reactFiles.length > 0 || dependencies.some((name) => /^react(-|$)/.test(name))) {
    dsl = 'react';
  } else if (vueFiles.length > 0 || dependencies.some((name) => /^vue(-|$)/.test(name))) {
    dsl = 'vue';
  } else if (dependencies.some((name) => /^rax(-|$)/.test(name))) {
    dsl = 'rax';
  }

  return 'gxy-eslint-config/' + `${language}/${dsl}`.replace(/\/$/, '/index').replace(/^\//, '');
}