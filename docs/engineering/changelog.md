---
title: CHANGELOG 规范
categories:
    - 工程规范
tags:
    - 工程规范
author:
    name: GXY
    link: https://github.com/GXY1523/fe-spec
---

# CHANGELOG 规范

## 提问

作为一个开发者，是否一定要为自己的项目维护一个更新日志（以下简称 `Changelog`）？

1. 如果是团队开发的项目，维护一个 Changelog 是必须的。对团队成员而言，Changelog 可以帮团队成员了解项目的变化动态。对用户而言，可以更清楚地了解项目的变化历史，知道软件的新功能、改进和修复
2. 如果是开发一个业务应用，那么维护一个 Changelog 不是必须的，但是很建议维护一个 Changelog。它可以作为一个记录，方便日后回顾和查找

[Git 规范](./git.md) 已经对 `Git` 提交日志的格式进行了约束，为何还要再约束 `Changelog` 的格式呢？

1. Git 提交日志只要记录代码的变更历史，而 Changelog 则更为注重向用户展示产品的迭代信息。
2. Changelog 信息更加完整，它需要更加完整的描述变更内容，包括新增更能、优化和bug修复。Git 提交日志的信息会简略一些。

## 1. 文件

- 1.1.【强制】`Changelog` 文件必须取名为 `CHANGELOG.md`

  使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。

  ```markdown
  <!-- bad -->
  changelog.md
  Changelog.md
  ChangeLog.md
  CHANGELOG.MD

  <!-- good -->
  CHANGELOG.md
  ```

- 1.2.【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 `.md` 作为后缀

  ```markdown
  <!-- bad -->
  CHANGELOG.docx
  CHANGELOG.txt

  <!-- good -->
  CHANGELOG.md
  ```

- 1.3.【强制】`Changelog` 文件必须存放在项目根目录下，和 `README.md`、`CONTRIBUTING.md` 等并列

## 2. 格式

规约推荐的标准 `Changelog` 格式如下：

```markdown
# 更新日志

## [<version>](<version-diff-url>) (<date>)

### <type>

* <desc>
* <desc>

### <type>

* <desc>
* <desc>
```

详细规则如下：

- 2.1.【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案

  ```markdown
  <!-- bad -->
  # 修改日志
  # ChangeLog

  <!-- good -->
  # 更新日志
  # Change Log
  ```

- 2.2【强制】`Changelog` 内容按版本号降序排列，最新版本放在最前面

  ```markdown
  <!-- bad -->
  ## 1.0.0
  ## 2.0.0

  <!-- good -->
  ## 2.0.0
  ## 1.0.0
  ```

- 2.3.【强制】版本号 `version` 需遵循 [SemVer 规范](https://semver.org/lang/zh-CN/)

  ```markdown
  <!-- bad -->
  ## 2.0
  ## 1.0.a
  ## 0.a.1
  ## 0.0.0.1

  <!-- good -->
  ## 2.0.0
  ## 1.0.0
  ## 1.0.0-rc.1
  ## 1.0.0-beta.2
  ## 1.0.0-beta.1
  ## 1.0.0-beta
  ## 1.0.0-alpha.beta
  ## 1.0.0-alpha.1
  ## 1.0.0-alpha
  ```

- 2.4.【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 `diff

  ```markdown
  <!-- bad -->
  ## 2.0.0

  <!-- good -->
  ## [2.0.0](https://version-diff-url)
  ```

- 2.5.【强制】更新日期 `date` 采用 `yyyy-MM-dd` 格式

  ```markdown
  <!-- bad -->
  ## [2.0.0](https://version-diff-date) (20200905)
  ## [2.0.0](https://version-diff-date) (2020-9-5)

  <!-- good -->
  ## [2.0.0](https://version-diff-date) (2020-09-05)
  ```

- 2.6.【推荐】更新类型 `type` 与 Git message header 中的 [`type`](./1.git.md#1.3.1-type) 相关联，可以不一一对应

  `type` 用以说明更新的类型，推荐值如下：

  - 新增（`Features`）：新增功能。
  - 修复（`Bug Fixes`）：修复 bug。
  - 文档（`Documentation`）：文档新增或者修改。
  - 变更（`Changed`）：对于某些已存在功能所发生的逻辑变化。
  - 优化（`Refactored`）：性能或结构上的优化，并未带来功能的逻辑变化。
  - 即将删除（`Deprecation Warnings`）：即将废弃功能。
  - 删除（`Removed`）：已删除的功能。
  - 重大变更（`Breaking Changes`）：破坏性变动。

- 2.7.【推荐】更新描述 `desc` 内容需要注意以下几点：

  1. 使用完整的句子。即在标点方面遵循一般的文档格式规约；如果使用英语，则句首大写。
  2. 时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。
  3. 句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。
  4. 注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。



## 参考资料

- [Keep a Changelog](https://keepachangelog.com/)
- [Angular Changelog](https://github.com/angular/angular.js/blob/master/CHANGELOG.md)
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md)
