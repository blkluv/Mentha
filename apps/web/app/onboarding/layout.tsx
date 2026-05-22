import type { Metadata } from 'next';

import { ProjectProvider } from '@/context/ProjectContext';

export const metadata: Metadata = {
    title: 'Onboarding | AEOAI.digital',
    description: 'Get started with AEOAI.digital AEO Platform',
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProjectProvider>
            <div className="min-h-screen bg-mentha-beige dark:bg-mentha-dark flex flex-col">
                <header className="p-6">
                    <div className="flex items-center gap-2">
                        <span className="font-serif text-2xl text-mentha-forest dark:text-mentha-beige">
                            AEOAI<span className="text-mentha-mint">.</span>digital
                        </span>
                    </div>
                </header>
                <main className="flex-1 flex items-center justify-center p-4">{children}</main>
            </div>
        </ProjectProvider>
    );
}
