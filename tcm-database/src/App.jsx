import React, { useState, useMemo } from 'react';
import { Search, Leaf, Database, Shield, ChevronRight, Star, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { herbsData } from './data/herbsData';
import './App.css';

// 中藥材卡片組件
const HerbCard = ({ herb, herbName, onClick }) => {
  return (
    <Card className="tcm-card cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={() => onClick(herbName)}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="herb-title">{herb.chinese}</CardTitle>
            <CardDescription className="herb-english">{herb.english}</CardDescription>
          </div>
          <Badge variant="secondary" className="quality-badge">
            {herb.qualitySamples} 樣品
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">性味:</span>
            <span className="text-sm">{herb.nature} • {herb.taste}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">歸經:</span>
            <span className="text-sm">{herb.meridians}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-600">功效:</span>
            <p className="effect-text mt-1">{herb.effects}</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-500">用量: {herb.dosage}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// 中藥材詳細頁面組件
const HerbDetail = ({ herbName, herb, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button 
        onClick={onBack} 
        variant="outline" 
        className="mb-6"
      >
        ← 返回列表
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{herb.chinese}</CardTitle>
              <CardDescription className="text-lg">{herb.english}</CardDescription>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">{herb.category}</Badge>
                <Badge variant="secondary">品質樣品: {herb.qualitySamples}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">基本屬性</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">拼音:</span> {herb.pinyin}
                  </div>
                  <div>
                    <span className="font-medium">性味:</span> {herb.nature} • {herb.taste}
                  </div>
                  <div>
                    <span className="font-medium">歸經:</span> {herb.meridians}
                  </div>
                  <div>
                    <span className="font-medium">用量:</span> {herb.dosage}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">功效</h4>
                <p className="text-sm leading-relaxed">{herb.effects}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">主治</h4>
                <p className="text-sm leading-relaxed">{herb.indications}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                品質檢測資訊
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">檢測樣品數量</span>
                  <Badge variant="default">{herb.qualitySamples} 個</Badge>
                </div>
                
                {herb.qualityIssues && herb.qualityIssues.length > 0 && (
                  <div>
                    <h5 className="font-medium mb-2 text-orange-600">常見品質問題</h5>
                    <ul className="space-y-1">
                      {herb.qualityIssues.map((issue, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-800">品質保證</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    本資料庫基於實際檢測樣品資料，為您提供權威的品質鑑別指導。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// 統計卡片組件
const StatsCard = ({ icon: Icon, number, label, gradient }) => {
  return (
    <Card className={`stats-card ${gradient}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="stats-number">{number}</div>
            <div className="stats-label">{label}</div>
          </div>
          <Icon className="w-12 h-12 opacity-80" />
        </div>
      </CardContent>
    </Card>
  );
};

// 主應用組件
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHerb, setSelectedHerb] = useState(null);

  // 過濾中藥材
  const filteredHerbs = useMemo(() => {
    if (!searchTerm) return herbsData;
    
    return Object.fromEntries(
      Object.entries(herbsData).filter(([name, herb]) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        herb.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        herb.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        herb.effects.includes(searchTerm) ||
        herb.category.includes(searchTerm)
      )
    );
  }, [searchTerm]);

  // 統計資料
  const totalHerbs = Object.keys(herbsData).length;
  const totalSamples = Object.values(herbsData).reduce((sum, herb) => sum + herb.qualitySamples, 0);
  const categoriesCount = new Set(Object.values(herbsData).map(herb => herb.category)).size;

  // 如果選中了中藥材，顯示詳細頁面
  if (selectedHerb) {
    return (
      <div className="min-h-screen tcm-gradient">
        <HerbDetail 
          herbName={selectedHerb} 
          herb={herbsData[selectedHerb]} 
          onBack={() => setSelectedHerb(null)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen tcm-gradient">
      {/* 頭部區域 */}
      <header className="search-container text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-12 h-12" />
            <h1 className="text-4xl font-bold">中藥資源數據庫</h1>
          </div>
          <p className="text-xl mb-8 opacity-90">傳統中醫藥材檢索平台</p>
          <p className="text-lg mb-8 opacity-80">Professional Traditional Chinese Medicine Resource Database</p>
          
          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="搜索中藥材名稱、功效或分類..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* 統計區域 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <StatsCard 
              icon={Database} 
              number={totalHerbs} 
              label="收錄藥材" 
              gradient="bg-gradient-to-br from-blue-500 to-purple-600"
            />
            <StatsCard 
              icon={Shield} 
              number={totalSamples} 
              label="檢測樣品" 
              gradient="bg-gradient-to-br from-green-500 to-teal-600"
            />
            <StatsCard 
              icon={Star} 
              number="100%" 
              label="品質保證" 
              gradient="bg-gradient-to-br from-orange-500 to-red-600"
            />
          </div>

          {/* 搜索結果提示 */}
          {searchTerm && (
            <div className="mb-6">
              <p className="text-gray-600">
                找到 <span className="font-semibold text-blue-600">{Object.keys(filteredHerbs).length}</span> 個相關結果
              </p>
            </div>
          )}

          {/* 中藥材網格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(filteredHerbs).map(([name, herb]) => (
              <HerbCard 
                key={name} 
                herbName={name} 
                herb={herb} 
                onClick={setSelectedHerb}
              />
            ))}
          </div>

          {/* 無搜索結果 */}
          {Object.keys(filteredHerbs).length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl">未找到相關中藥材</p>
                <p className="text-sm mt-2">請嘗試其他關鍵詞或檢查拼寫</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">© 2025 中藥資源數據庫 - 傳承中醫智慧，服務現代健康</p>
          <p className="text-sm opacity-75">Traditional Chinese Medicine Database - Preserving Ancient Wisdom for Modern Health</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

