
import React, { useState } from 'react';

export const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    field: '매수 문의',
    method: '대면 미팅 (강남 오피스)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-lg w-full mx-4 p-12 bg-white rounded-3xl shadow-2xl border border-gray-100 animate-fade-in">
          <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-navy mb-4">상담 신청이 완료되었습니다</h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            한서윤 대표가 기재해주신 번호로 직접 연락드릴 예정입니다.<br />
            가치 있는 투자의 시작을 함께해주셔서 감사합니다.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-light transition-premium shadow-lg"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const inputClasses = "w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-premium placeholder:text-gray-400 text-navy";
  const labelClasses = "block text-xs font-bold text-navy/60 uppercase tracking-widest mb-2 ml-1";

  return (
    <div className="pt-40 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-40">
            <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Private Consulting</span>
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-8 leading-tight">
              당신의 자산을 위한<br />가장 완벽한 전략.
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg">
              시장의 흐름을 읽는 10년의 통찰로 한서윤 대표가 직접 당신의 자산 가치를 진단하고 최적의 솔루션을 제안합니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-gray-100 shadow-sm group-hover:shadow-md transition-premium">
                  <span className="text-gold font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-gold transition-colors">심층 니즈 파악</h3>
                  <p className="text-gray-500 text-sm">한서윤 대표가 직접 투자 목적과 예산 범위를 정밀하게 분석합니다.</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-gray-100 shadow-sm group-hover:shadow-md transition-premium">
                  <span className="text-gold font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-gold transition-colors">맞춤형 전략 수립</h3>
                  <p className="text-gray-500 text-sm">데이터 기반의 시세 분석을 통해 리스크를 최소화한 전략을 제시합니다.</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-gray-100 shadow-sm group-hover:shadow-md transition-premium">
                  <span className="text-gold font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-gold transition-colors">프라이빗 네트워킹</h3>
                  <p className="text-gray-500 text-sm">비공개 매물 매칭부터 계약 완료까지 전 과정을 책임지고 리드합니다.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-navy rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-premium">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.01703 16C7.91246 16 7.01703 16.8954 7.01703 18L7.01703 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex items-center mb-6 relative z-10">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-20 h-20 rounded-2xl border-2 border-gold/30 mr-5 object-cover shadow-lg" alt="한서윤 대표" />
                <div>
                  <h4 className="font-bold text-xl mb-1 tracking-tight">한서윤 대표</h4>
                  <p className="text-gold font-bold text-sm tracking-widest">010-9143-0800</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed relative z-10 font-light italic">
                "진정한 자산관리는 숫자를 넘어 고객의 삶을 이해하는 것에서 시작됩니다. 10년의 기록을 걸고 당신의 성공적인 투자를 약속드립니다."
              </p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg uppercase">
              Application Form
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={labelClasses}>성함</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="성함을 입력해주세요"
                    className={inputClasses}
                  />
                </div>
                <div className="group">
                  <label className={labelClasses}>연락처</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="010-0000-0000"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>상담 분야</label>
                <div className="relative">
                  <select 
                    value={formData.field}
                    onChange={(e) => setFormData({...formData, field: e.target.value})}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option>매수 문의</option>
                    <option>매도 의뢰</option>
                    <option>자산 진단</option>
                    <option>세무 및 법률</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>선호 상담 방식</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['대면 미팅 (강남 오피스)', '유선/화상 상담'].map(method => (
                    <label key={method} className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-premium group ${formData.method === method ? 'bg-navy border-navy text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-gold hover:text-navy'}`}>
                      <input 
                        type="radio" 
                        className="hidden" 
                        name="method"
                        checked={formData.method === method}
                        onChange={() => setFormData({...formData, method: method})}
                      />
                      <span className="text-sm font-bold tracking-tight">{method}</span>
                      {formData.method === method && (
                        <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full"></span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>상담 희망 내용 (Optional)</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="관심 지역, 자산 종류 등 대략적인 내용을 적어주시면 더 원활한 상담이 가능합니다."
                  className={`${inputClasses} resize-none`}
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-gold hover:bg-navy text-white font-bold py-5 rounded-2xl transition-premium shadow-xl shadow-gold/20 text-lg flex items-center justify-center group"
                >
                  <span>무료 1차 상담 신청하기</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <p className="mt-6 text-[11px] text-center text-gray-400 leading-relaxed uppercase tracking-widest">
                  Personal Information is strictly protected according to the Privacy Act.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
