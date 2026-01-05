import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-12 md:py-16">
        <div className="container-custom">
          <Link to="/help" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            হেল্প সেন্টারে ফিরুন
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">প্রাইভেসি পলিসি</h1>
          <p className="text-white/80 mt-2">সর্বশেষ আপডেট: ১ জানুয়ারি, ২০২৫</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">১. ভূমিকা</h2>
                <p className="text-muted-foreground">
                  Freshzy ("আমরা", "আমাদের") আপনার গোপনীয়তাকে সম্মান করে। এই প্রাইভেসি পলিসি ব্যাখ্যা করে 
                  কিভাবে আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি যখন আপনি আমাদের 
                  ওয়েবসাইট এবং মোবাইল অ্যাপ্লিকেশন ব্যবহার করেন।
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">২. যে তথ্য আমরা সংগ্রহ করি</h2>
                <p className="text-muted-foreground mb-4">আমরা নিম্নলিখিত তথ্য সংগ্রহ করতে পারি:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল, ফোন নম্বর, ঠিকানা</li>
                  <li><strong>অর্ডার তথ্য:</strong> অর্ডার হিস্ট্রি, পেমেন্ট তথ্য</li>
                  <li><strong>ডিভাইস তথ্য:</strong> IP ঠিকানা, ব্রাউজার টাইপ, অপারেটিং সিস্টেম</li>
                  <li><strong>লোকেশন তথ্য:</strong> GPS ডেটা (আপনার অনুমতি সাপেক্ষে)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">৩. তথ্য ব্যবহার</h2>
                <p className="text-muted-foreground mb-4">আমরা আপনার তথ্য ব্যবহার করি:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>অর্ডার প্রসেস এবং ডেলিভারি সম্পন্ন করতে</li>
                  <li>কাস্টমার সাপোর্ট প্রদান করতে</li>
                  <li>সার্ভিস উন্নত করতে</li>
                  <li>প্রমোশনাল অফার পাঠাতে (আপনার সম্মতি সাপেক্ষে)</li>
                  <li>আইনি বাধ্যবাধকতা পালন করতে</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">৪. তথ্য শেয়ারিং</h2>
                <p className="text-muted-foreground">
                  আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না। তবে, সার্ভিস প্রদানের জন্য 
                  আমরা নিম্নলিখিত পক্ষের সাথে শেয়ার করতে পারি:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li>সার্ভিস পার্টনার (সেলুন, লন্ড্রি)</li>
                  <li>ডেলিভারি রাইডার</li>
                  <li>পেমেন্ট প্রসেসর</li>
                  <li>আইন প্রয়োগকারী সংস্থা (আইনি প্রয়োজনে)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">৫. ডেটা সুরক্ষা</h2>
                <p className="text-muted-foreground">
                  আমরা আপনার তথ্য সুরক্ষিত রাখতে শিল্প-মানের নিরাপত্তা ব্যবস্থা ব্যবহার করি, 
                  যার মধ্যে রয়েছে SSL এনক্রিপশন, সুরক্ষিত সার্ভার এবং নিয়মিত নিরাপত্তা অডিট।
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">৬. কুকিজ</h2>
                <p className="text-muted-foreground">
                  আমরা আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করি। আপনি আপনার 
                  ব্রাউজার সেটিংস থেকে কুকিজ নিষ্ক্রিয় করতে পারেন, তবে এটি কিছু ফিচারের 
                  কার্যকারিতা প্রভাবিত করতে পারে।
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">৭. আপনার অধিকার</h2>
                <p className="text-muted-foreground mb-4">আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>আপনার তথ্য অ্যাক্সেস করা</li>
                  <li>তথ্য সংশোধন করা</li>
                  <li>তথ্য মুছে ফেলার অনুরোধ করা</li>
                  <li>মার্কেটিং কমিউনিকেশন থেকে অপ্ট-আউট করা</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">৮. যোগাযোগ</h2>
                <p className="text-muted-foreground">
                  এই প্রাইভেসি পলিসি সম্পর্কে কোন প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-xl">
                  <p className="font-medium">Freshzy Bangladesh</p>
                  <p className="text-muted-foreground">ইমেইল: privacy@freshzy.com.bd</p>
                  <p className="text-muted-foreground">ফোন: ১৬২৬২</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
