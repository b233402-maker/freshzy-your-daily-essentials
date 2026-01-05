import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, Clock, AlertCircle } from 'lucide-react';

const RefundPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-12 md:py-16">
        <div className="container-custom">
          <Link to="/help" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            হেল্প সেন্টারে ফিরুন
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">রিফান্ড পলিসি</h1>
          <p className="text-white/80 mt-2">সর্বশেষ আপডেট: ১ জানুয়ারি, ২০২৫</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Quick Summary */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="p-6 rounded-2xl bg-success/10 border border-success/20 text-center">
              <Check className="w-10 h-10 text-success mx-auto mb-3" />
              <h3 className="font-semibold">সম্পূর্ণ রিফান্ড</h3>
              <p className="text-sm text-muted-foreground mt-1">
                সার্ভিস শুরুর আগে ক্যান্সেল
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-warning/10 border border-warning/20 text-center">
              <AlertCircle className="w-10 h-10 text-warning mx-auto mb-3" />
              <h3 className="font-semibold">আংশিক রিফান্ড</h3>
              <p className="text-sm text-muted-foreground mt-1">
                সার্ভিসে সমস্যা হলে
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-center">
              <X className="w-10 h-10 text-destructive mx-auto mb-3" />
              <h3 className="font-semibold">রিফান্ড নেই</h3>
              <p className="text-sm text-muted-foreground mt-1">
                সার্ভিস সম্পন্ন হলে
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">সেলুন সার্ভিস রিফান্ড</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left border">পরিস্থিতি</th>
                      <th className="p-4 text-left border">রিফান্ড</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border">অ্যাপয়েন্টমেন্টের ২+ ঘন্টা আগে ক্যান্সেল</td>
                      <td className="p-4 border text-success font-medium">১০০% রিফান্ড</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">অ্যাপয়েন্টমেন্টের ১-২ ঘন্টা আগে ক্যান্সেল</td>
                      <td className="p-4 border text-warning font-medium">৭৫% রিফান্ড</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">অ্যাপয়েন্টমেন্টের ১ ঘন্টার কম সময়ে ক্যান্সেল</td>
                      <td className="p-4 border text-warning font-medium">৫০% রিফান্ড</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">নো-শো (না আসলে)</td>
                      <td className="p-4 border text-destructive font-medium">রিফান্ড নেই</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">সার্ভিসে সমস্যা হলে</td>
                      <td className="p-4 border text-success font-medium">তদন্ত সাপেক্ষে রিফান্ড</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">লন্ড্রি সার্ভিস রিফান্ড</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left border">পরিস্থিতি</th>
                      <th className="p-4 text-left border">রিফান্ড</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border">পিকআপের আগে ক্যান্সেল</td>
                      <td className="p-4 border text-success font-medium">১০০% রিফান্ড</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">পিকআপের পর, প্রসেসিংয়ের আগে ক্যান্সেল</td>
                      <td className="p-4 border text-warning font-medium">৭০% রিফান্ড</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">প্রসেসিং শুরুর পর ক্যান্সেল</td>
                      <td className="p-4 border text-destructive font-medium">রিফান্ড নেই</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">কাপড় ক্ষতিগ্রস্ত হলে</td>
                      <td className="p-4 border text-success font-medium">পূর্ণ ক্ষতিপূরণ</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">কাপড় হারিয়ে গেলে</td>
                      <td className="p-4 border text-success font-medium">মূল্যের ২x পর্যন্ত ক্ষতিপূরণ</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">ডেলিভারি বিলম্ব (২৪+ ঘন্টা)</td>
                      <td className="p-4 border text-warning font-medium">১৫% ডিসকাউন্ট</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">রিফান্ড প্রসেস</h2>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">১</div>
                  <h3 className="font-semibold mb-1">অনুরোধ করুন</h3>
                  <p className="text-sm text-muted-foreground">অ্যাপ বা হেল্পলাইনে</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">২</div>
                  <h3 className="font-semibold mb-1">যাচাই</h3>
                  <p className="text-sm text-muted-foreground">টিম রিভিউ করবে</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">৩</div>
                  <h3 className="font-semibold mb-1">অনুমোদন</h3>
                  <p className="text-sm text-muted-foreground">২৪-৪৮ ঘন্টায়</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">৪</div>
                  <h3 className="font-semibold mb-1">রিফান্ড</h3>
                  <p className="text-sm text-muted-foreground">৩-৫ কার্যদিবস</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">রিফান্ড টাইমলাইন</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">বিকাশ / নগদ / রকেট</p>
                    <p className="text-sm text-muted-foreground">২৪-৪৮ ঘন্টা</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">কার্ড পেমেন্ট</p>
                    <p className="text-sm text-muted-foreground">৫-৭ কার্যদিবস</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Freshzy ওয়ালেট ক্রেডিট</p>
                    <p className="text-sm text-muted-foreground">তাৎক্ষণিক</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">রিফান্ড অনুরোধ করতে</h2>
              <p className="text-muted-foreground mb-4">
                রিফান্ড অনুরোধ করতে নিচের যেকোনো মাধ্যমে যোগাযোগ করুন:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>📱 অ্যাপ: অর্ডার ডিটেইলস {'>'} "রিফান্ড অনুরোধ"</li>
                <li>📞 হেল্পলাইন: ১৬২৬২</li>
                <li>✉️ ইমেইল: refund@freshzy.com.bd</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPage;
