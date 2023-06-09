import AlertComponent from "@/components/base/AlertComponent"
import Hr from "@/components/base/Hr"
import { H1, H2, H3, H4, H5, H6, P, A, Strong } from "@/components/base/TypographyComponent"
import { Ul, Ol, listFromArray } from "@/components/base/List"
import Main from "@/components/base/Main"
import { FaBeer } from 'react-icons/fa';
import { addUser } from "./api/db/user/userApi"

export default function Home() {
  const names = ['Arne', 'Bengt', 'Carina', 'Dan']
  addUser()
  return (
    <Main>
      <FaBeer />
      <AlertComponent color="info" title="Test" body="Info" isVisible={false} />
      <H1>We invest in the world&apos;s potential</H1>
      <H2>We invest in the world&apos;s potential</H2>
      <H3>We invest in the world&apos;s potential</H3>
      <H4>We invest in the world&apos;s potential</H4>
      <H5>We invest in the world&apos;s potential</H5>
      <H6>We invest in the world&apos;s potential</H6>
      <P lead={true}>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
      <P>Deliver great service experiences fast - without the complexity of traditional <A href="/about">ITSM solutions</A>. Accelerate critical <Strong>development work</Strong>, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
      <Hr />
      <Ul items={listFromArray(names)} />
      <Ol items={listFromArray(names)} />
    </Main>
  )
}
