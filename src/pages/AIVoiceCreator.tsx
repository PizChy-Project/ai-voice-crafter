
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AIVoiceCreatorHeader from "@/components/product/AIVoiceCreatorHeader";
import AIVoiceCreatorFeatures from "@/components/product/AIVoiceCreatorFeatures";
import AIVoiceCreatorUsage from "@/components/product/AIVoiceCreatorUsage";
import AIVoiceCreatorPricing from "@/components/product/AIVoiceCreatorPricing";
import { useNavigate } from "react-router-dom";

const AIVoiceCreator = () => {
  const navigate = useNavigate();

  const handleRedirectToAuth = () => {
    navigate('/auth');
  };

  return (
    <div className="container mx-auto px-4 py-12 pt-24 max-w-7xl">
      <AIVoiceCreatorHeader />
      <AIVoiceCreatorFeatures />
      <AIVoiceCreatorUsage />
      <AIVoiceCreatorPricing />
      
      <div className="mt-16 text-center mb-20">
        <Card className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
          <CardContent className="py-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมให้โลกได้ยินเสียงของคุณหรือยัง?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              อย่าปล่อยให้ไอเดียดีๆ เงียบไป! ไม่ว่าคุณจะเป็นครีเอเตอร์ นักการศึกษา หรือนักธุรกิจ 
              AI Voice Creator พร้อมช่วยให้คุณโดดเด่นด้วยเสียงพากย์ที่สะกดทุกคน 🎧💼 
              ก้าวสู่อนาคตของการสร้างเสียงและทำให้คำพูดของคุณดังก้องตั้งแต่วันนี้!
            </p>
            <Button 
              onClick={handleRedirectToAuth} 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-white text-purple-700 hover:bg-gray-100"
            >
              🔊 ลองใช้ AI Voice Creator เลย!
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIVoiceCreator;
