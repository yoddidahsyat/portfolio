import { ArrowUpRightFromSquare } from 'lucide-react';
import Image from 'next/image';
import { AndroidMockup, AndroidTabMockup } from 'react-device-mockup';

import { TProject } from '@/data/projects';

import ButtonLink from '@/components/links/ButtonLink';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <Card className='sm:h-5/6 h-full relative bg-primary-100'>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.content}</p>
        <p>Stack: {project.stacks.join(', ')}</p>
        <div className='mt-12 flex sm:flex-row flex-col gap-8 max-h-10'>
          <AndroidTabMockup
            screenWidth={370}
            hideNavBar
            hideStatusBar
            isLandscape
          >
            <Image
              src={project.images.laptop}
              alt={project.title}
              width={450}
              height={600}
              className='object-cover'
            />
          </AndroidTabMockup>
          <AndroidMockup screenWidth={145}>
            <Image
              src={project.images.mobile}
              alt={project.title}
              width={145}
              height={600}
              className='object-cover'
            />
          </AndroidMockup>
        </div>
      </CardContent>
      <CardFooter className='absolute bottom-0 flex gap-4 justify-end w-full'>
        {project.repo && (
          <ButtonLink
            variant='light'
            href={project.repo}
            target='_blank'
            rightIcon={ArrowUpRightFromSquare}
          >
            View repository
          </ButtonLink>
        )}
        {project.link && (
          <ButtonLink
            variant='dark'
            href={project.link}
            target='_blank'
            rightIcon={ArrowUpRightFromSquare}
          >
            View site
          </ButtonLink>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
