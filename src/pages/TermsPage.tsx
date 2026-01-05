import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-12 md:py-16">
        <div className="container-custom">
          <Link to="/help" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            হেল্প সেন্টারে ফিরুন
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">টার্মস অফ সার্ভিস</h1>
          <p className="text-white/80 mt-2">সর্বশেষ আপডেট: ১ জানুয়ারি, ২০২৫</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">১. সেবার শর্তাবলী</h2>
              <p className="text-muted-foreground">
                Freshzy প্ল্যাটফর্ম ব্যবহার করে আপনি এই শর্তাবলী মেনে নিচ্ছেন। এই শর্তাবলী আপনার এবং 
                Freshzy Bangladesh-এর মধ্যে একটি আইনি চুক্তি গঠন করে।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">২. সেবার বিবরণ</h2>
              <p className="text-muted-foreground mb-4">
                Freshzy একটি অনলাইন প্ল্যাটফর্ম যা গ্রাহকদের সেলুন এবং লন্ড্রি সার্ভিস প্রোভাইডারদের 
                সাথে সংযুক্ত করে। আমরা:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>সেলুন অ্যাপয়েন্টমেন্ট বুকিং সুবিধা প্রদান করি</li>
                <li>লন্ড্রি পিকআপ এবং ডেলিভারি সেবা প্রদান করি</li>
                <li>পেমেন্ট প্রসেসিং সুবিধা প্রদান করি</li>
                <li>রিয়েল-টাইম অর্ডার ট্র্যাকিং সুবিধা প্রদান করি</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৩. ব্যবহারকারীর দায়িত্ব</h2>
              <p className="text-muted-foreground mb-4">ব্যবহারকারী হিসেবে আপনি:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>সঠিক এবং আপডেটেড তথ্য প্রদান করবেন</li>
                <li>অ্যাকাউন্ট তথ্য গোপন রাখবেন</li>
                <li>প্ল্যাটফর্ম অপব্যবহার করবেন না</li>
                <li>অবৈধ কার্যকলাপে জড়িত হবেন না</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৪. অর্ডার এবং পেমেন্ট</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>সব মূল্য বাংলাদেশি টাকায় (BDT) প্রদর্শিত</li>
                <li>পেমেন্ট অর্ডার কনফার্মেশনের সময় বা ডেলিভারিতে নেওয়া হবে</li>
                <li>আমরা বিকাশ, নগদ, রকেট, কার্ড এবং ক্যাশ অন ডেলিভারি সাপোর্ট করি</li>
                <li>সব লেনদেন নিরাপদ এবং এনক্রিপ্টেড</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৫. ক্যান্সেলেশন পলিসি</h2>
              <p className="text-muted-foreground mb-4">
                <strong>সেলুন সার্ভিস:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>অ্যাপয়েন্টমেন্টের ১ ঘন্টা আগে ক্যান্সেল করলে সম্পূর্ণ রিফান্ড</li>
                <li>১ ঘন্টার কম সময়ে ক্যান্সেল করলে ৫০% চার্জ প্রযোজ্য</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                <strong>লন্ড্রি সার্ভিস:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>পিকআপের আগে ক্যান্সেল করলে সম্পূর্ণ রিফান্ড</li>
                <li>পিকআপের পর ক্যান্সেল করলে রিফান্ড প্রযোজ্য নয়</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৬. দায়বদ্ধতা সীমাবদ্ধতা</h2>
              <p className="text-muted-foreground">
                Freshzy একটি মধ্যস্থতাকারী প্ল্যাটফর্ম। সার্ভিসের মান সম্পর্কিত সমস্যার জন্য 
                সংশ্লিষ্ট পার্টনার দায়ী থাকবে। তবে, আমরা সব অভিযোগ তদন্ত করি এবং প্রয়োজনে 
                পার্টনারদের বিরুদ্ধে ব্যবস্থা নিই।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৭. মেধা সম্পত্তি</h2>
              <p className="text-muted-foreground">
                Freshzy-র সব কন্টেন্ট, লোগো, ট্রেডমার্ক এবং সফটওয়্যার আমাদের মেধা সম্পত্তি। 
                লিখিত অনুমতি ছাড়া এগুলো ব্যবহার করা যাবে না।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৮. অ্যাকাউন্ট বাতিল</h2>
              <p className="text-muted-foreground">
                শর্তাবলী লঙ্ঘন করলে আমরা বিনা নোটিশে আপনার অ্যাকাউন্ট স্থগিত বা বাতিল করতে পারি।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">৯. পরিবর্তন</h2>
              <p className="text-muted-foreground">
                আমরা যেকোনো সময় এই শর্তাবলী আপডেট করতে পারি। গুরুত্বপূর্ণ পরিবর্তন হলে 
                আপনাকে জানানো হবে।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">১০. প্রযোজ্য আইন</h2>
              <p className="text-muted-foreground">
                এই শর্তাবলী বাংলাদেশের আইন অনুযায়ী পরিচালিত হবে। যেকোনো বিরোধ ঢাকার 
                আদালতে নিষ্পত্তি হবে।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">১১. যোগাযোগ</h2>
              <p className="text-muted-foreground">
                এই শর্তাবলী সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-xl">
                <p className="font-medium">Freshzy Bangladesh</p>
                <p className="text-muted-foreground">ইমেইল: legal@freshzy.com.bd</p>
                <p className="text-muted-foreground">ফোন: ১৬২৬২</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
