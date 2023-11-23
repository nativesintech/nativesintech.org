import Head from "next/head";
import React from "react";
import { useIntl } from "react-intl";
import { Layout } from "../../components/Layout";
import { ComponentKeys } from "../../content/types";
import { assets } from "../../helpers/assets";
import { convertStrToJsx, convertUrlToLink } from "../../helpers/convertStr";

export default function TwentyTwentyThree () {
	const { formatMessage } = useIntl();
	const f = (id: ComponentKeys<"/conference/2023">) => formatMessage({ id })
	
  const convertUrlToJsx = convertStrToJsx(convertUrlToLink);

	return (
		<Layout>
			<Head>
				<title>{f("title")}</title>
			</Head>
			<section className="section">
				<h1 className="h1">{f("shortTitle")}</h1>
				<h2 className="h2">{f("sponsors")}</h2>
				<h3 className="h3">{f("partneringSponsor")}</h3>
        <a
          href="https://www.shipt.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="flex justify-center mt-6 bg-white"
            src={assets.conference["2023"].shiptLogo.src}
            alt={assets.conference["2023"].shiptLogo.altText}
          />
        </a>
			</section>
			<section className="section">
        <h2 className="h2">{f("theme")}</h2>
        <p className="p">{f("intro")}</p>
        <p className="p">{f("space")}</p>
				<h3 className="h3">{f("agenda")}</h3>
				<p className="p">{f("agendaDetails")}</p>
        <h3 className="h3">{f("registration")}</h3>
        {convertUrlToJsx(f("registrationDetails"))}
			</section>
		</Layout>
	)
}

