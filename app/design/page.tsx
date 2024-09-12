// /design/index.tsx
"use client";

import React from 'react'; // Add this line

import ScopedStyles from './page.module.css';
import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import PortfolioGallery from '../(components)/PortfolioGallery';

export default function DesignPage() {
    return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
        <PageTitle pageTitle="Design Background" />
        <section id="DesignPageContent">

            <article className="mainContentItem2 sectionTop sectionBottom">
                <div className="textContent">
                    <h2>My career in design</h2>
                    <p>Prior to starting uni in 2021, I have been involved professionally in design for screen and
                        print, as well as large and small format digital print since 2010. Experienced in both graphics
                        production for screen and print, print management and project management.</p>
                    <p>During that time I have had the privilege to work with a number of high profile clients via the
                        various posts I have held in retail focussed logistics, print, and marketing.</p>
                    <p>In summary, I am experienced in producing end-to-end solutioins for print and digital design
                        projects with experience in design and print production and management.</p>
                    <p><strong>Within print design</strong> (read more below), I can produce everything from marketing materials
                        such as leaflets and flyers, through multi-page publications, business stationery, POS, NPD, posters,
                        banners/pull-ups, to signage, exhibition/event graphics and anything in between.</p>
                    <p><strong>Within digital design</strong> (read more below), marketing emails, social media graphics,
                        banners, digital POS, websites and more. Experienced in creating digital communications
                        supporting brand promotional activities of any scale.</p>
                    <p><strong>Print management: </strong>Having managed multiple print studios with large and small format
                        print capabilities, I have the production and materials knowledge as well as a network of
                        industry contacts to make any print project of any scale come to life.</p>
                    <p><strong>Project management: </strong>Along with in depth knowledge of design and print, I have spent most
                        of my career working closely with both marketing and account management teams within both
                        logistics and creative environments, ensuring client needs are met through effective planning
                        and coordination with a strong focus on controlling risk and cost within defined tolerances.</p>
                    <p><strong>Tools of the trade: </strong>I use all the latest software and technology available to deliver
                        your creative projects efficiently and in line with contemporary practice and standards:</p>
                    <ul className={`${ScopedStyles.contentList}`}>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe InDesign</li>
                        <li>Adobe After Effects</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Wordpress</li>
                        <li>PHP/MySQL</li>
                        <li>Mailchimp</li>
                    </ul>
                </div>
            </article>

            <CallToAction heading="My Qualifications" 
                        mainText="Take a more detailed look at my qualifications." 
                        buttonText="Take a look!"
                        buttonLink="education" />

            <article className="mainContentItem2 sectionTop">
                <div className="textContent">
                    <h2>Print design</h2>
                    <h3>PERSONAL</h3>
                    <p>Whatever your personal requirements no matter how small, I can add a touch of style to your
                        personal projects. Including but not limited to:</p>
                    <ul className={`${ScopedStyles.contentList}`}>
                        <li>Posters</li>
                        <li>Stickers</li>
                        <li>Event invites (Wedding/birthday etc)</li>
                        <li>Custom T-Shirts</li>
                        <li>Photo re-touching</li>
                    </ul>
                    <h3>NEW &amp; SMALL BUSINESS</h3>
                    <p>Growing your business and attracting new customers is hugely important for smaller companies, I
                        can help you achieve your goals by designing:</p>
                    <ul className={`${ScopedStyles.contentList}`}>
                        <li>Brand identity / Logo design</li>
                        <li>Business stationery</li>
                        <li>Leaflets, flyers &amp; posters</li>
                        <li>Menus &amp; Strut cards</li>
                        <li>Pull up &amp; External banners</li>
                        <li>Window graphics</li>
                        <li>Signage</li>
                    </ul>
                    <h3>MEDIUM TO LARGE BUSINESS</h3>
                    <p>Whatever your business needs to effectively communicate its brand message and values. From
                        business cards to billboards, Ive got you covered with:</p>
                    <ul className={`${ScopedStyles.contentList}`}>
                        <li>Corporate branded stationery</li>
                        <li>Corporate literature/brochures</li>
                        <li>Promotional publications</li>
                        <li>Exhibition stands/graphics</li>
                        <li>Corporate branded stationery</li>
                        <li>Promotional campaign design</li>
                        <li>Corporate signage</li>
                    </ul>
                    <h3>LARGE RETAIL</h3>
                    <p>I have designed a full range of materials for large retail environments, including everything
                        from SEL's, barkers and blinkers up to hanging signage and large car park banners:</p>
                    <ul className={`${ScopedStyles.contentList}`}>
                        <li>Point of sale graphics</li>
                        <li>Entrance media graphics</li>
                        <li>In-store signage/installations</li>
                        <li>New product design</li>
                        <li>Promotional cycle/event graphics</li>
                    </ul>
                </div>
            </article>

            <article className="mainContentItem2 sectionBottom">
                <PortfolioGallery />
            </article>

            <CallToAction heading="My Software Skills" 
                        mainText="Take a more detailed look at my software development skills." 
                        buttonText="Take a look!"
                        buttonLink="development-skills" />

            <article className="mainContentItem2 sectionTop sectionBottom">                
                <div className="textContent">
                    <h2>Digital design</h2>
                    <h3>WEBSITES &amp; HOSTING</h3>
                    <p>Having been into web design since around 2001, I began my digital life hand coding HTML,
                        JavaScript, CSS, PHP and MySQL, testing on my own home Apache server. The web these days is a
                        lot more technically sophisticated but visually more elegant, simple, intuitive and with a vast
                        array of productivity tools to assist in delivering cross-device solutions in a timeframe much
                        accelerated from just a few short years ago.
                        As such I am able to deliver digital web and hosting solutions using the latest software and
                        online solutions/CMS including WordPress (see this site!) &amp; Dreamweaver, as well as core coding
                        skills.</p>
                    <h3>Marketing Emails</h3>
                    <p>Marketing emails are another area that has greatly matured in recent years and become a staple of
                        marketing practice; I am able to design marketing emails and construct visually using Mailchimp,
                        or by hand in HTML/CSS/Dreamweaver, before constructing within Mailchimp, adding required
                        analytics tracking code to deliver data for your marketing metrics.
                        In between your regular communication schedule, I can also plan and deliver email campaigns
                        around the retail events calendar for maximum business engagement and impact.</p>
                    <h3>Social Media Setup &amp; Graphics</h3>
                    <p>Social media is deeply ingrained into the social consciousness, having a presence within and
                        delivering professional visual communication to your audience is paramount whatever the
                        platform, whether it be Facebook, Twitter, LinkedIn, Pinterest, Instagram or anything else.
                    </p><p>I am able to set up any social media platform, furnishing with brand appropriate custom graphics
                        (headers, profile images etc), to let people know they are in the right place through
                        established brand recognition.</p>
                    <p>Beyond setup, ongoing communication is key to engaging and maintaining your subscriber/follower
                        base. I can help you let people know what's going on in your sphere through custom post graphics,
                        event page headers, meta cards and more.</p>
                    <h3>Web Banners</h3>
                    <p>Not all web graphics exist within your own web space or social media channels. I can also create
                        bespoke web banners and graphics to deploy in external locations to drive traffic back to your
                        site.</p>
                    <h3>Digital POS</h3>
                    <p>With businesses ever striving to reduce costs and carbon footprint, many are now turning from
                        traditional printed media POS to much cheaper digital POS, deployed quickly and easily to a
                        variety of digital screens/devices. Slashing the cost of deploying visual communications through
                        eliminating ongoing costs in relation to print production, logistics and installation is a
                        worthwhile investment for many if not all retail businesses.</p>
                    <p>To this end I am able to deliver cost effective and eco-friendly digital POS content for any
                        purpose, whether it is a simple advert in a digital photo frame to digital menu screens, or
                        billboard sized digital advertising screens.</p>
                    <h3>eCards</h3>
                    <p>Taking a more environmentally conscious approach to personal communications is as important as
                        any other decision in relation to reducing carbon footprint. Why spend a fortune on printed
                        media and distribution when you can use much less costly digital methods.</p>
                    <p>I can create content for delivery in HTML email, image based or PDF formats depending on your
                        project needs, whether it's a personal birthday party invite or corporate event.</p>
                </div>
            </article>  

        </section>
    </main>
    </>
    );
}