import { Card, CardBody, Image } from '@nextui-org/react';

const Footer = () => {
  return (
    <Card
      className='flex shadow-none border-none md:pt-5 bg-zinc-50'
      radius='none'
    >
      <CardBody className=' shadow-none border-none flex-row grid grid-cols-4 sm:gap-y-20 gap-x-8 justify-self-center'>
        <Image src='/img/rede-oceano-limpo-logo.svg' />
        <Image src='/img/aws-partner-logo.svg' alt='' />
        <Image src='/img/softtek-logo.svg' alt='' />
        <Image src='/img/pacto-global.svg' alt='' />
        <Image src='/img/select.svg' alt='' />
        <Image src='/img/catedra.svg' alt='' />
        <Image src='/img/unesco.svg' alt='' />
        <Image src='/img/o2o.svg' alt='' />
      </CardBody>
    </Card>
  );
};

export default Footer;
