
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mic, Headphones, Clock, Globe } from "lucide-react";
import heroImg from "@/assets/hero-voice-ai.jpg";
import featuresImg from "@/assets/voice-features.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 relative">
          <div className="hero-glow"></div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
                <span className="text-gradient">AI Voice Creator</span><br />
                ปลดปล่อยพลังแห่งเสียงด้วย AI
              </h1>
              <p className="text-xl mb-10 max-w-2xl text-muted-foreground">
                เปลี่ยนข้อความให้เป็นเสียงพากย์คุณภาพสูงที่สมจริงด้วยเทคโนโลยี AI สุดล้ำ
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16">
                <Button size="lg" className="text-lg px-8" onClick={() => navigate('/ai-voice-creator')}>
                  ดูรายละเอียด
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => navigate('/auth')}>
                  เริ่มต้นใช้งาน
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <img
                  src={heroImg}
                  alt="AI Voice Creator - เทคโนโลยีสร้างเสียงด้วย AI"
                  className="relative rounded-2xl shadow-2xl w-full object-cover animate-float"
                  width={1280}
                  height={720}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                <Mic size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">เสียงสมจริง</h3>
              <p className="text-muted-foreground">เสียงที่สมจริงราวกับมนุษย์ ด้วยน้ำเสียงที่เป็นธรรมชาติ</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">152 ภาษา</h3>
              <p className="text-muted-foreground">รองรับ 152 ภาษาทั่วโลกและ 539 เสียงที่ไม่ซ้ำกัน</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                <Headphones size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">คุณภาพสูง</h3>
              <p className="text-muted-foreground">เสียงคุณภาพสูงระดับ HD ไร้สัญญาณรบกวน</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">พากย์ได้ยาว</h3>
              <p className="text-muted-foreground">สร้างเสียงพากย์ได้ยาวถึง 10 นาทีต่อครั้ง</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <img
                  src={featuresImg}
                  alt="AI Voice - คลื่นเสียงและเทคโนโลยีดิจิทัล"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">เทคโนโลยีเสียง AI ขั้นสูง</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ใช้พลังของ AI ในการสร้างเสียงพากย์ที่สมจริง รองรับหลายภาษา พร้อมปรับแต่งน้ำเสียงและอารมณ์ได้ตามต้องการ
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-1 mt-1"><Mic size={16} /></div>
                  <span className="text-muted-foreground">เสียง AI คุณภาพสูง สมจริงเหมือนคนจริง</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-1 mt-1"><Globe size={16} /></div>
                  <span className="text-muted-foreground">รองรับ 152 ภาษา กว่า 539 เสียงให้เลือก</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-1 mt-1"><Headphones size={16} /></div>
                  <span className="text-muted-foreground">ปรับแต่งความเร็ว น้ำเสียง และอารมณ์ได้</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมที่จะเริ่มต้นหรือยัง?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
            เริ่มต้นใช้งาน AI Voice Creator ได้ทันทีวันนี้และค้นพบประสบการณ์ใหม่ในการสร้างเสียงพากย์
          </p>
          <Button size="lg" className="text-lg px-8" onClick={() => navigate('/ai-voice-creator')}>
            ดูรายละเอียดบริการ
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2023 AI Voice Creator. สงวนลิขสิทธิ์.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Button variant="link" onClick={() => navigate('/ai-voice-creator')} className="text-muted-foreground hover:text-primary">บริการ</Button>
              <Button variant="link" onClick={() => navigate('/ai-voice-creator')} className="text-muted-foreground hover:text-primary">ราคา</Button>
              <Button variant="link" onClick={() => navigate('/auth')} className="text-muted-foreground hover:text-primary">เข้าสู่ระบบ</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
