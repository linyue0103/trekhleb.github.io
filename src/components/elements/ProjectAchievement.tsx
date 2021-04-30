import React from 'react';
import { BiLink } from '@react-icons/all-files/bi/BiLink';

import { Achievement } from '../../types/Achievement';
import Card from '../shared/Card';
import CardMedia from '../shared/CardMedia';
import { useFluidCover } from '../../hooks/useFluidCover';
import FluidImage from '../shared/FluidImage';
import CardContent from '../shared/CardContent';
import HyperLink from '../shared/HyperLink';
import { Link } from '../../types/Link';
import DateRange from '../shared/DateRange';

type ProjectAchievementsProps = {
  achievement: Achievement | null | undefined,
};

const ProjectAchievement = (props: ProjectAchievementsProps): React.ReactElement | null => {
  const { achievement } = props;

  const fluidImageFetched = useFluidCover({ imagePath: achievement?.image?.srcPath });

  if (!achievement) {
    return null;
  }

  const date = achievement?.date ? (
    <div className="mt-3">
      <DateRange
        startDate={achievement.date}
        className="text-xs text-gray-500"
      />
    </div>
  ) : null;

  const imageLink: Link = {
    url: fluidImageFetched?.src,
  };

  const detailsLink = achievement.link ? (
    <div className="mt-3">
      <HyperLink
        link={achievement.link}
        className="text-sm underline"
        startEnhancer={(<BiLink size={16} />)}
      >
        {achievement.link?.caption || 'Details'}
      </HyperLink>
    </div>
  ) : null;

  return (
    <Card key={achievement.title}>
      <CardMedia link={imageLink}>
        <FluidImage fluidImage={fluidImageFetched} />
      </CardMedia>
      <CardContent>
        <HyperLink link={imageLink}>
          {achievement.title}
        </HyperLink>
        {date}
        {detailsLink}
      </CardContent>
    </Card>
  );
};

export default ProjectAchievement;
