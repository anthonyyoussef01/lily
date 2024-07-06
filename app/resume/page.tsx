import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardHeader, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CommandMenu} from "@/components/command-menu";
import {Metadata} from "next";
import {Section} from "@/components/ui/section";
import {DownloadIcon, ChevronLeftIcon, GlobeIcon, MailIcon, PhoneIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {RESUME_DATA} from "@/data/resume-data";
import {ProjectCard} from "@/components/project-card";
import Link from "next/link";
import {StaticImageData} from "next/image";

export const metadata: Metadata = {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
};

export default function Page() {
    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-6 md:p-16">
            <a href="/" className="print:hidden pr-1">
                <Button variant="outline" size="sm">
                    <ChevronLeftIcon className="h-4 w-4"/>
                </Button>
            </a>
            <a href="/Lily_Marino_Resume.pdf" download
               className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-orange-400 bg-white border-orange-400 hover:text-white transition-all hover:border-white hover:bg-orange-400 print:hidden">
                <DownloadIcon className="h-4 w-4 mr-2"/> Download PDF
            </a>
            <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-1.5">
                        <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
                        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                            {RESUME_DATA.about}
                        </p>
                        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                            <a
                                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                href={RESUME_DATA.locationLink}
                                target="_blank"
                            >
                                <GlobeIcon className="size-3"/>
                                {RESUME_DATA.location}
                            </a>
                        </p>
                        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                            {RESUME_DATA.contact.email ? (
                                <Button
                                    className="size-8"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                        <MailIcon className="size-4"/>
                                    </a>
                                </Button>
                            ) : null}
                            {RESUME_DATA.contact.tel ? (
                                <Button
                                    className="size-8"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                                        <PhoneIcon className="size-4"/>
                                    </a>
                                </Button>
                            ) : null}
                            {RESUME_DATA.contact.social.map((social) => (
                                <Button
                                    key={social.name}
                                    className="size-8"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a href={social.url}>
                                        <social.icon className="size-4"/>
                                    </a>
                                </Button>
                            ))}
                        </div>
                        <div
                            className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                            {RESUME_DATA.contact.email ? (
                                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                    <span className="underline">{RESUME_DATA.contact.email}</span>
                                </a>
                            ) : null}
                            {RESUME_DATA.contact.tel ? (
                                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                                </a>
                            ) : null}
                        </div>
                    </div>

                    <Avatar className="size-28">
                        <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} className="print:hidden"/>
                        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                    </Avatar>
                </div>
                <Section>
                    <h2 className="text-xl font-bold">About</h2>
                    <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                        {RESUME_DATA.summary}
                    </p>
                </Section>
                <Section>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                    {RESUME_DATA.work.map((work) => {
                        const descriptionPoints = work.description.split(';').filter(point => point.trim() !== ''); // Splitting by ';' and filtering out empty strings
                        return (
                            <Card key={work.company}>
                                <CardHeader>
                                    <div className="flex items-center justify-between gap-x-2 text-base">
                                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                            {work.link ? (
                                                <a className="hover:underline" href={work.link}>
                                                    {work.company}
                                                </a>
                                            ) : (
                                                <span>{work.company}</span>
                                            )}
                                            <span className="inline-flex gap-x-1">
                            {work.badges.map((badge) => (
                                <Badge
                                    variant="secondary"
                                    className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                                    key={badge}
                                >
                                    {badge}
                                </Badge>
                            ))}
                        </span>
                                        </h3>
                                        <div className="text-sm tabular-nums text-gray-500">
                                            {work.start} - {work.end ?? "Present"}
                                        </div>
                                    </div>
                                    <h4 className="font-mono text-sm leading-none print:text-[12px]">
                                        {work.title}
                                    </h4>
                                </CardHeader>
                                <CardContent className="mt-2 text-xs print:text-[10px]">
                                    <ul>
                                        {descriptionPoints.map((point, index) => (
                                            <li key={index}>{point.trim()}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Section>
                <Section>
                    <h2 className="text-xl font-bold">Education</h2>
                    {RESUME_DATA.education.map((education) => {
                        return (
                            <Card key={education.school}>
                                <CardHeader>
                                    <div className="flex items-center justify-between gap-x-2 text-base">
                                        <h3 className="font-semibold leading-none">
                                            {education.school}
                                        </h3>
                                        <div className="text-sm tabular-nums text-gray-500">
                                            {education.start} - {education.end}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="mt-2 print:text-[12px]">
                                    {education.degree}
                                </CardContent>
                            </Card>
                        );
                    })}
                </Section>
                <Section>
                    <h2 className="text-xl font-bold">Skills</h2>
                    <div className="flex flex-wrap gap-1 print:hidden">
                        {RESUME_DATA.skills.map((skill) => (
                            <Badge className="print:text-[10px]" key={skill}>
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    <div className="hidden print:block print:text-[10px]">
                        {RESUME_DATA.skills.join(", ")}
                    </div>
                </Section>

                <Section className="print-force-new-page scroll-mb-16">
                    <div
                        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                        {RESUME_DATA.projects.length > 0 && (
                            <Section className="print-force-new-page scroll-mb-16">
                                <h2 className="text-xl font-bold">Projects</h2>
                                <div
                                    className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                                    {RESUME_DATA.projects.map((project) => {
                                        return (
                                            <ProjectCard
                                                key={project.title}
                                                title={project.title}
                                                description={project.description}
                                                tags={project.techStack}
                                                link={project.link}
                                            />
                                        );
                                    })}
                                </div>
                            </Section>
                        )}
                    </div>
                </Section>
            </section>

            <CommandMenu
                links={[
                    {
                        url: RESUME_DATA.developerWebsiteUrl,
                        title: "Developer Website",
                    },
                    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                        url: socialMediaLink.url,
                        title: socialMediaLink.name,
                    })),
                ]}
            />
        </main>
    );
}