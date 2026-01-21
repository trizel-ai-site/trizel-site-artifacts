# 全球观测与生产指数

**公共组织：** trizel-ai-site  
**公共存储库：** trizel-site-artifacts  
**基础分支：** main  
**工作分支：** feature/goi-v1

---

## 目的

全球观测与生产指数（GOI）是一个科学注册表，为 TRIZEL 生态系统提供静态、可验证的元数据。

此索引编目：
- **观测：** 数据源、存档和监测输出
- **生产：** 科学输出和分析结果
- **存储库：** 生态系统结构和组件清单
- **快照：** 冻结的参考包及完整性验证

## 索引部分

- **[观测](pages/observations/index.zh.md)** — 观测数据源和元数据注册表
- **[生产](pages/production/index.zh.md)** — 科学生产输出分类账
- **[存储库](pages/repositories/index.zh.md)** — 生态系统清单和结构
- **[快照](pages/snapshots/index.zh.md)** — 已发布快照注册表

## 语言选择

- [English (EN)](index.en.md)
- [Français (FR)](index.fr.md)
- [Deutsch (DE)](index.de.md)
- [Русский (RU)](index.ru.md)
- **中文 (ZH)** — 当前
- [العربية (AR)](index.ar.md)

## 如何验证

所有 GOI 数据都是静态的且可验证：

1. **静态数据源：** `/goi/data/global-index.json`
2. **提交历史：** 所有更新都通过此存储库中的 Git 提交进行跟踪
3. **模式验证：** 所有数据都符合 `/goi/schemas/` 中发布的 JSON 模式
4. **无运行时执行：** 无 JavaScript，无 API，无动态数据获取

## 数据真实来源

GOI 将 `/goi/data/global-index.json` 视为唯一的真实来源。此文件包含：
- 模式版本
- 生成时间戳
- 多语言标题
- 来源注册表
- 观测分类账
- 生产分类账
- 快照注册表

**当前状态：** 静态占位符结构 — 仅通过提交的 JSON 更新填充数据。

## 技术分类

- **层：** 第2层（公共展示/工件）
- **类型：** 静态参考索引
- **权限：** 无 — 仅显示和参考
- **执行：** 零 — 所有内容都是预提交的静态文件
- **集成：** 无 — 无外部调用，无运行时数据

---

**GOI v1.0.0** — 参考级科学注册表 — 静态 — 可验证 — 来源可追踪
