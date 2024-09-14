// /design/index.tsx
"use client";

import React from 'react';
import ScopedStyles from './page.module.css';
import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import ContentList from '../(components)/ContentList';
import ContentP from '../(components)/ContentP';
import ContentH from '../(components)/ContentH';
import PortfolioGallery from '../(components)/PortfolioGallery';

export default function DesignPage() {
    return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
        <PageTitle pageTitle="Design Background" />
        <section id="DesignPageContent">

            <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
                <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
                    <ContentH level={2} text="My career in design" />
                    <ContentP text="Prior to starting uni in 2021, I have been involved professionally in design for screen and
                        print, as well as large and small format digital print since 2010. Experienced in both graphics
                        production for screen and print, print management and project management." />
                    <ContentP text="During that time I have had the privilege to work with a number of high profile clients via the
                        various posts I have held in retail focussed logistics, print, and marketing." />
                    <ContentP text="In summary, I am experienced in producing end-to-end solutioins for print and digital design
                        projects with experience in design and print production and management." />
                    <ContentP text="<strong>Within print design</strong> (read more below), I can produce everything from marketing materials
                        such as leaflets and flyers, through multi-page publications, business stationery, POS, NPD, posters,
                        banners/pull-ups, to signage, exhibition/event graphics and anything in between." />
                    <ContentP text="<strong>Within digital design</strong> (read more below), marketing emails, social media graphics,
                        banners, digital POS, websites and more. Experienced in creating digital communications
                        supporting brand promotional activities of any scale." />
                    <ContentP text="<strong>Print management: </strong>Having managed multiple print studios with large and small format
                        print capabilities, I have the production and materials knowledge as well as a network of
                        industry contacts to make any print project of any scale come to life." />
                    <ContentP text="<strong>Project management: </strong>Along with in depth knowledge of design and print, I have spent most
                        of my career working closely with both marketing and account management teams within both
                        logistics and creative environments, ensuring client needs are met through effective planning
                        and coordination with a strong focus on controlling risk and cost within defined tolerances." />
                    <ContentP text="<strong>Tools of the trade: </strong>I use all the latest software and technology available to deliver
                        your creative projects efficiently and in line with contemporary practice and standards:" />
                    <ContentList itemsList={["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effects", "HTML", "CSS", "JavaScript", "Wordpress", "PHP/MySQL", "Mailchimp"]} />   
                    
                </div>
            </article>

            <CallToAction heading="My Qualifications" 
                        mainText="Take a more detailed look at my qualifications." 
                        buttonText="Take a look!"
                        buttonLink="education" />

            <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
                <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
                    <ContentH level={2} text="Print design" />
                    <ContentH level={3} text="Personal" />
                    <ContentP text="Whatever your personal requirements no matter how small, I can add a touch of style to your
                        personal projects. Including but not limited to:" />
                    <ContentList itemsList={["Posters", "Stickers", "Event invites (Wedding/birthday etc)", "Custom T-Shirts", "Photo re-touching"]} />
                    
                    <ContentH level={3} text="New &amp; small business" />
                    <ContentP text="Growing your business and attracting new customers is hugely important for smaller companies, I
                        can help you achieve your goals by designing:" />
                    <ContentList itemsList={["Business cards", "Flyers", "Posters", "Banners", "Signage", "Window graphics"]} />
                    
                    <ContentH level={3} text="Medium to large business" />
                    <ContentP text="Whatever your business needs to effectively communicate its brand message and values. From
                        business cards to billboards, Ive got you covered with:" />
                    <ContentList itemsList={["Business cards", "Flyers", "Posters", "Banners", "Signage", "Window graphics"]} />
                    
                    <ContentH level={3} text="Large retail" />
                    <ContentP text="I have designed a full range of materials for large retail environments, including everything
                        from SEL's, barkers and blinkers up to hanging signage and large car park banners:" />
                    <ContentList itemsList={["SEL's", "Barkers", "Blinkers", "Hanging signage", "Car park banners"]} />
                </div>
            </article>

            <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
                <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
                    <PortfolioGallery />
                </div>
            </article>

            <CallToAction heading="My Software Skills" 
                        mainText="Take a more detailed look at my software development skills." 
                        buttonText="Take a look!"
                        buttonLink="development-skills" />

            <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
                <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
                    <ContentH level={2} text="Digital design" />
                    <ContentH level={3} text="Websites &amp; hosting" />
                    <ContentP text="Having been into web design since around 2001, I began my digital life hand coding HTML,
                        JavaScript, CSS, PHP and MySQL, testing on my own home Apache server. The web these days is a
                        lot more technically sophisticated but visually more elegant, simple, intuitive and with a vast
                        array of productivity tools to assist in delivering cross-device solutions in a timeframe much
                        accelerated from just a few short years ago. As such I am able to deliver digital web and hosting solutions using the latest software and
                        online solutions/CMS including WordPress (see this site!) &amp; Dreamweaver, as well as core coding
                        skills." />

                    <ContentH level={3} text="Marketing Emails" />
                    <ContentP text="Marketing emails are another area that has greatly matured in recent years and become a staple of
                        marketing practice; I am able to design marketing emails and construct visually using Mailchimp,
                        or by hand in HTML/CSS/Dreamweaver, before constructing within Mailchimp, adding required
                        analytics tracking code to deliver data for your marketing metrics.
                        In between your regular communication schedule, I can also plan and deliver email campaigns
                        around the retail events calendar for maximum business engagement and impact." />

                    <ContentH level={3} text="Social Media Setup &amp; Graphics" />
                    <ContentP text="Social media is deeply ingrained into the social consciousness, having a presence within and
                        delivering professional visual communication to your audience is paramount whatever the
                        platform, whether it be Facebook, Twitter, LinkedIn, Pinterest, Instagram or anything else." />
                    <ContentP text="I am able to set up any social media platform, furnishing with brand appropriate custom graphics
                        (headers, profile images etc), to let people know they are in the right place through
                        established brand recognition." />
                    <ContentP text="Beyond setup, ongoing communication is key to engaging and maintaining your subscriber/follower
                        base. I can help you let people know what's going on in your sphere through custom post graphics,
                        event page headers, meta cards and more." />

                    <ContentH level={3} text="Web Banners" />
                    <ContentP text="Not all web graphics exist within your own web space or social media channels. I can also create
                        bespoke web banners and graphics to deploy in external locations to drive traffic back to your
                        site." />

                    <ContentH level={3} text="Digital POS" />
                    <ContentP text="With businesses ever striving to reduce costs and carbon footprint, many are now turning from
                        traditional printed media POS to much cheaper digital POS, deployed quickly and easily to a
                        variety of digital screens/devices. Slashing the cost of deploying visual communications through
                        eliminating ongoing costs in relation to print production, logistics and installation is a
                        worthwhile investment for many if not all retail businesses." />

                    <ContentP text="To this end I am able to deliver cost effective and eco-friendly digital POS content for any
                        purpose, whether it is a simple advert in a digital photo frame to digital menu screens, or
                        billboard sized digital advertising screens." />

                    <ContentH level={3} text="eCards" />
                    <ContentP text="Taking a more environmentally conscious approach to personal communications is as important as
                        any other decision in relation to reducing carbon footprint. Why spend a fortune on printed
                        media and distribution when you can use much less costly digital methods." />

                    <ContentP text="I can create content for delivery in HTML email, image based or PDF formats depending on your
                        project needs, whether it's a personal birthday party invite or corporate event." />
                </div>
            </article>  

        </section>
    </main>
    </>
    );
}