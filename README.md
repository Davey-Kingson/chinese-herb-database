# 中藥資源數據庫

一個專業的傳統中醫藥材檢索平台，包含27種中藥材的詳細信息、圖片檢視、性狀鑑定等功能。

## ✨ 功能特色

### 🔐 身份驗證系統
- 圖片驗證碼和數學驗證兩種選擇
- 優化的驗證碼布局，避免誤操作
- 深色按鍵設計，用戶體驗友好

### 📸 圖片檢視功能
- 23種中藥材的完整圖片庫
- 資料夾風格的圖片展示界面
- 直接的"查看"和"下載"功能
- 取消確認彈窗，操作更流暢

### 📱 響應式設計
- 完美支持手機和桌面設備
- 字體不重疊，觸控友好
- 滑動展示功能，不固定布局

### 🔬 專業性狀鑑定
- 基於香港浸會大學中醫藥數據庫的權威資料
- 詳細的藥材來源、產地、性狀特徵
- 專業的鑑別要點和品質標準
- 完整的性味功效信息

### 📊 詳細檢測信息
- 農殘檢測：樣本數目和檢測方法依據
- 重金屬檢測：權威機構檢測報告
- 化學指標：理化指標及有效成分
- DNA鑑定：分子鑑定結果

## 🗂️ 包含的中藥材

### 根及根莖類
- 川貝母 (Fritillaria Cirrhosa)
- 玉竹 (Solomon's Seal Rhizome)
- 柴胡 (Chinese Thorowax Root)
- 葛根 (Kudzu Root)
- 骨碎補 (Drynaria Rhizome)
- 天冬 (Asparagus Root)
- 西洋參 (American Ginseng)
- 升麻 (Cimicifuga Rhizome)
- 製何首烏 (Processed Polygonum Root)

### 果實及種子類
- 酸棗仁 (Jujube Seed)
- 砂仁 (Villous Amomum Fruit)
- 決明子 (Cassia Seed)
- 柏子仁 (Platycladus Seed)

### 皮類
- 白鮮皮 (Dictamnus Root Bark)
- 五加皮 (Acanthopanax Bark)
- 地骨皮 (Lycium Bark)

### 其他類別
- 白及 (Bletilla Tuber)
- 鉤藤 (Gambir Plant)
- 肉蓯蓉 (Cistanche)
- 金銀花 (Honeysuckle Flower)
- 淫羊藿 (Epimedium Herb)
- 沉香 (Aquilaria Wood)
- 大青葉 (Isatis Leaf)
- 蒼朮 (Atractylodes Rhizome)
- 金錢草 (Lysimachia Herb)
- 製附子(黑順片) (Processed Aconite - Black)
- 製附子(白附片) (Processed Aconite - White)

## 🚀 技術棧

- **前端框架**: React 18
- **構建工具**: Vite
- **UI庫**: Tailwind CSS + shadcn/ui
- **圖標**: Lucide React
- **字體**: 仿宋體 (中文) + Times New Roman (英文)

## 📦 快速開始

### 安裝依賴
```bash
npm install
# 或
pnpm install
```

### 啟動開發服務器
```bash
npm run dev
# 或
pnpm run dev
```

### 構建生產版本
```bash
npm run build
# 或
pnpm run build
```

## 🌐 部署

詳細的部署指南請參考 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

支持部署到：
- Vercel (推薦)
- Netlify
- GitHub Pages
- Firebase Hosting

## 📁 項目結構

```
chinese-herbs-database/
├── public/
│   ├── images/herbs/          # 中藥材圖片 (TC0101-TC2222, T5529-T5551)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/               # UI組件
│   │   ├── AuthModal.jsx     # 身份驗證模態框
│   │   ├── HerbDetailPage.jsx # 藥材詳細頁面
│   │   └── ImageGallery.jsx  # 圖片檢視組件
│   ├── App.jsx               # 主應用
│   ├── App.css              # 樣式文件
│   └── main.jsx             # 入口文件
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 設計特色

### 復古優雅風格
- 奶油質地背景
- 深色色調配色
- 傳統中文字體
- 專業的視覺設計

### 用戶體驗優化
- 簡潔直觀的界面
- 流暢的交互動畫
- 無障礙設計支持
- 多設備兼容

## 📊 數據來源

- **性狀鑑定**: 香港浸會大學中醫藥學院中藥材圖像數據庫
- **檢測標準**: 《中國藥典》2020年版
- **圖片資料**: 專業中藥材實物拍攝

## 🔒 安全特性

- 圖片驗證碼保護
- 數學驗證備選方案
- 安全的文件下載
- 防止惡意訪問

## 📱 移動端優化

- 響應式網格布局
- 觸控友好的按鍵尺寸
- 滑動操作支持
- 字體自動調整

## 🛠️ 自定義配置

### 添加新的中藥材
1. 在 `public/images/herbs/` 添加圖片
2. 在 `HerbDetailPage.jsx` 中添加圖片配置
3. 在 `App.jsx` 中添加藥材信息
4. 更新性狀鑑定數據

### 修改樣式
- 主要樣式在 `App.css`
- Tailwind 配置在 `tailwind.config.js`
- 組件樣式使用 Tailwind 類名

## 📄 許可證

本項目僅供學習和研究使用。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改進項目。

## 📞 聯繫

如有問題或建議，請通過 GitHub Issues 聯繫。

