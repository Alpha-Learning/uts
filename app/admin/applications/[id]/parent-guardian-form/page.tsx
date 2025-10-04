"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Input, Textarea, FormSectionHeader } from "@/app/components/forms/FormField";
import { apiService } from "@/app/utils";
import { parentGuardianQuestionnaireSchema, ParentGuardianQuestionnaireFormData } from "@/app/lib/validations/parent-guardian-questionnaire";

export default function ParentGuardianFormPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ParentGuardianQuestionnaireFormData>({
    resolver: zodResolver(parentGuardianQuestionnaireSchema),
    defaultValues: {
      fullName: "",
      childName: "",
      date: "",
      typicalWeekday: "",
      screenTimeHours: "",
      homeActivities: "",
      culturalBackground: "",
      rulesDisciplineApproach: "",
      supportWhenStruggling: "",
      strengthsInterests: "",
      challengingAreas: "",
      learningApproach: "",
      previousEducationalExperience: "",
      covidLearningExperience: "",
      supportiveLearningEnvironment: "",
      responseToFrustration: "",
      peerInteraction: "",
      emotionalBehavioralConcerns: "",
      seekingHelp: "",
      educationalHopesGoals: "",
      creativityMovementEmotionalRole: "",
      parentingStyle: "",
      technologyConcerns: "",
      applicationNumber: "",
      loggedToSystemDate: "",
      loggedBy: "",
    },
  });

  // Load existing data
  useEffect(() => {
    loadFormData();
  }, [params.id]);

  const loadFormData = async () => {
    try {
      setLoading(true);
      const res = await apiService.get(`/api/admin/parent-guardian-form?applicationId=${params.id}`);
      if (res.success && res.data) {
        const data = res.data;
        reset({
          fullName: data.fullName || "",
          childName: data.childName || "",
          date: data.date ? new Date(data.date).toISOString().split('T')[0] : "",
          typicalWeekday: data.typicalWeekday || "",
          screenTimeHours: data.screenTimeHours || "",
          homeActivities: data.homeActivities || "",
          culturalBackground: data.culturalBackground || "",
          rulesDisciplineApproach: data.rulesDisciplineApproach || "",
          supportWhenStruggling: data.supportWhenStruggling || "",
          strengthsInterests: data.strengthsInterests || "",
          challengingAreas: data.challengingAreas || "",
          learningApproach: data.learningApproach || "",
          previousEducationalExperience: data.previousEducationalExperience || "",
          covidLearningExperience: data.covidLearningExperience || "",
          supportiveLearningEnvironment: data.supportiveLearningEnvironment || "",
          responseToFrustration: data.responseToFrustration || "",
          peerInteraction: data.peerInteraction || "",
          emotionalBehavioralConcerns: data.emotionalBehavioralConcerns || "",
          seekingHelp: data.seekingHelp || "",
          educationalHopesGoals: data.educationalHopesGoals || "",
          creativityMovementEmotionalRole: data.creativityMovementEmotionalRole || "",
          parentingStyle: data.parentingStyle || "",
          technologyConcerns: data.technologyConcerns || "",
          applicationNumber: data.applicationNumber || "",
          loggedToSystemDate: data.loggedToSystemDate || "",
          loggedBy: data.loggedBy || "",
        });
      }
    } catch (error: any) {
      console.error("Error loading form data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: ParentGuardianQuestionnaireFormData) => {
    try {
      setSaving(true);
      setMessage(null);
      
      const res = await apiService.post("/api/admin/parent-guardian-form", {
        applicationId: params.id,
        ...data,
      });

      if (res.success) {
        setMessage({ type: 'success', text: 'Parent/Guardian questionnaire submitted successfully!' });
        // Redirect to stage listing page after successful submission
        setTimeout(() => {
          router.push(`/admin/applications/${params.id}`);
        }, 1500);
      } else {
        setMessage({ type: 'error', text: res.message || 'Failed to submit questionnaire' });
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to submit form' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-black/5 p-6">
        <div className="mb-4">
          <div className="text-xl font-bold text-slate-900">Parent/Guardian Questionnaire</div>
          <div className="text-sm text-slate-600">Application ID: {params.id}</div>
          <div className="text-xs text-slate-500">Version v1.0 | Reviewed AUG 2025</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT SIDE */}
            <div className="space-y-8">
      

              {/* General Information */}
              <section>
                <FormSectionHeader title="General Information" bgClassName="bg-teal-700" />
                <div className="mt-3 grid grid-cols-1 gap-4">
                  <FormField label="Full Name" htmlFor="fullName">
                    <Input 
                      id="fullName"
                      {...register("fullName")}
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </FormField>
                  <FormField label="Child's Name" htmlFor="childName">
                    <Input 
                      id="childName"
                      {...register("childName")}
                      className={errors.childName ? "border-red-500" : ""}
                    />
                    {errors.childName && (
                      <p className="text-red-500 text-sm mt-1">{errors.childName.message}</p>
                    )}
                  </FormField>
                  <FormField label="Date" htmlFor="date">
                    <Input 
                      id="date"
                      type="date"
                      {...register("date")}
                      className={errors.date ? "border-red-500" : ""}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                  </FormField>
                </div>
              </section>

              {/* Family Environment & Routine */}
              <section>
                <FormSectionHeader title="Family Environment & Routine" bgClassName="bg-teal-700" />
                <div className="mt-3 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      1. Describe a typical weekday for your child (wake time, school, meals, play, bedtime):
                    </label>
                    <Textarea 
                      rows={6}
                      {...register("typicalWeekday")}
                      placeholder="Describe your child's typical weekday routine..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      2. How many hours per day does your child engage with screens (TV, tablet, phone)?
                    </label>
                    <Textarea 
                      rows={4}
                      {...register("screenTimeHours")}
                      placeholder="Describe screen time usage..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      3. What activities does your child most enjoy at home?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("homeActivities")}
                      placeholder="List activities your child enjoys at home..."
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      4. What is your family's cultural background and how does it influence learning?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("culturalBackground")}
                      placeholder="Describe your cultural background and its influence on learning..."
                    />
                  </div>
                </div>
              </section>
                      {/* Rules and Discipline */}
                      <section>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      5. What's your typical approach to rules, discipline, and independence at home?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("rulesDisciplineApproach")}
                      placeholder="Describe your approach to rules and discipline..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      6. How do you usually support your child when they're struggling or make a mistake?
                    </label>
                    <Textarea 
                      rows={6}
                      {...register("supportWhenStruggling")}
                      placeholder="Describe how you support your child during difficulties..."
                    />
                  </div>
                </div>
              </section>
              <section>
                <FormSectionHeader title="Emotional and Social Awareness" bgClassName="bg-teal-700" />
                <div className="mt-3 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      1. How does your child typically respond to frustration or difficulty?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("responseToFrustration")}
                      placeholder="Describe your child's response to frustration..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      2. How does your child interact with peers?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("peerInteraction")}
                      placeholder="Describe peer interactions..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      3. Are there any emotional or behavioural concerns you'd like us to be aware of?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("emotionalBehavioralConcerns")}
                      placeholder="Share any emotional or behavioral concerns..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      4. How does your child seek help when needed?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("seekingHelp")}
                      placeholder="Describe how your child seeks help..."
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8 lg:pl-4">
              {/* Cultural Background */}
         

      

              {/* Learning and Development */}
              <section>
                <FormSectionHeader title="Learning and Development" bgClassName="bg-teal-700" />
                <div className="mt-3 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      1. What are your child's observed strengths and interests?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("strengthsInterests")}
                      placeholder="Describe your child's strengths and interests..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      2. Are there any areas you feel your child finds challenging?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("challengingAreas")}
                      placeholder="Describe challenging areas..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      3. How would you describe your child's approach to learning new tasks?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("learningApproach")}
                      placeholder="Describe your child's learning approach..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      4. What previous educational experiences has your child had?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("previousEducationalExperience")}
                      placeholder="Describe previous educational experiences..."
                    />
                  </div>
                </div>
              </section>

              {/* COVID Learning Experience */}
              <section>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      5. What was your child's learning experience during Covid?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("covidLearningExperience")}
                      placeholder="Describe your child's COVID learning experience..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      6. What does a supportive learning environment look like to you at home?
                    </label>
                    <Textarea 
                      rows={5}
                      {...register("supportiveLearningEnvironment")}
                      placeholder="Describe your ideal supportive learning environment..."
                    />
                  </div>
                </div>
              </section>
              <section>
                <FormSectionHeader title="Educational Philosophy" bgClassName="bg-teal-700" />
                <div className="mt-3 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      1. What are your hopes and goals for your child's education?
                    </label>
                    <Textarea 
                      rows={6}
                      {...register("educationalHopesGoals")}
                      placeholder="Share your educational hopes and goals..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      2. What role do you believe creativity, movement, and emotional development should play?
                    </label>
                    <Textarea 
                      rows={6}
                      {...register("creativityMovementEmotionalRole")}
                      placeholder="Describe the role of creativity, movement, and emotional development..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      3. How would you describe your parenting style in supporting growth?
                    </label>
                    <Textarea 
                      rows={6}
                      {...register("parentingStyle")}
                      placeholder="Describe your parenting style..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      4. What concerns do you have about technology in education?
                    </label>
                    <Textarea 
                      rows={6}
                      {...register("technologyConcerns")}
                      placeholder="Share your concerns about technology in education..."
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Second Row - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* Emotional and Social Awareness */}
        
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8 lg:pl-4">
              {/* Educational Philosophy */}
         
            </div>
          </div>

          {/* System Logging - Full Width */}
          <div className="mt-8 ">
                    {/* Office Use Only */}
                    <section className="mb-4" >
                <FormSectionHeader title="Office Use Only" bgClassName="bg-teal-700 " />
                <div className="mt-3">
                  <FormField label="Application Number" htmlFor="applicationNumber">
                    <Input 
                      id="applicationNumber"
                      {...register("applicationNumber")}
                      className={errors.applicationNumber ? "border-red-500" : ""}
                    />
                    {errors.applicationNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.applicationNumber.message}</p>
                    )}
                  </FormField>
                </div>
              </section>
            <section>
              <FormSectionHeader title="System Logging" bgClassName="bg-teal-700" />
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Logged to System Date" htmlFor="loggedToSystemDate">
                  <Input 
                    id="loggedToSystemDate"
                    type="date"
                    {...register("loggedToSystemDate")}
                    className={errors.loggedToSystemDate ? "border-red-500" : ""}
                  />
                  {errors.loggedToSystemDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.loggedToSystemDate.message}</p>
                  )}
                </FormField>
                <FormField label="Logged by" htmlFor="loggedBy">
                  <Input 
                    id="loggedBy"
                    {...register("loggedBy")}
                    placeholder="Enter name"
                    className={errors.loggedBy ? "border-red-500" : ""}
                  />
                  {errors.loggedBy && (
                    <p className="text-red-500 text-sm mt-1">{errors.loggedBy.message}</p>
                  )}
                </FormField>
              </div>
              <div className="mt-4 text-right text-sm text-slate-600">
                <p>Owner: SY Holdings WLL</p>
                <p>Prepared by: Meta Learning Systems Implementation Unit</p>
                <p>Confidentiality Level: Internal Operational Use</p>
                {/* <p>Page 4 of 5</p> */}
              </div>
            </section>
            
          </div>

          {message && (
            <div className={`p-3 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message.text}
            </div>
          )}

          <div className="flex items-center justify-end gap-3">
            <button 
              type="submit"
              disabled={saving}
              className="[clip-path:polygon(0%_0%,95%_0%,100%_28%,100%_100%,6%_100%,0%_65%)] cursor-pointer py-3 flex justify-between items-center bg-gradient-to-r from-[#8EC0C2] to-[#142954] text-white rounded-lg px-4 hover:brightness-[1.05] active:brightness-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Submitting...' : 'Submit Form'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
