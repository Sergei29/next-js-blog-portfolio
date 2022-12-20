import React from "react"

import { navigation, socialLinks } from "@/constants"

import FooterSocialLink from "./components/FooterSocialLink"
import FooterNavLink from "./components/FooterNavLink"
import Copyright from "./components/Copyright"

const Footer = (): JSX.Element => (
  <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {navigation.map((item) => (
          <FooterNavLink key={item.name} link={item} />
        ))}
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        {socialLinks.map((item) => (
          <FooterSocialLink key={item.name} link={item} />
        ))}
      </div>
      <p className="mt-8 text-center text-base text-gray-400">
        <Copyright />, All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
