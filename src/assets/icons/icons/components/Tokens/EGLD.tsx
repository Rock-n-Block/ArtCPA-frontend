import React from 'react';

import { IconProps } from '../../icons.types';

import { BaseSVGIcon } from '../BaseSVGIcon';

export const EGLD: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="32"
    height="32"
    fill="black"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="url(#pattern2)" />
    <defs>
      <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_220_148" transform="scale(0.003125)" />
      </pattern>
      <image id="image0_220_148" width="320" height="320" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/wAARCAFAAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAJCQkJCQkQCQkQFhAQEBYeFhYWFh4mHh4eHh4mLiYmJiYmJi4uLi4uLi4uNzc3Nzc3QEBAQEBISEhISEhISEhI/9sAQwELDAwSERIfEREfSzMqM0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL/90ABAAU/9oADAMBAAIRAxEAPwD3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9D3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9H3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9L3GiiigAooooAKKKKACiiigAoo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bWHM0iGOQ9WU8/rkVi23ww0WGQPKzygdmIx+gFel0UAV7S0t7KBbe2UIi9AKsUUtACVHJDFMu2VQw96looA4LVPh9oeoEvGphc91P+Oa4C/+F+pxEmykR1HQMTn9Fr3uincD5dn8FeI4TgWzP/u1nSeHdbibZJayKfcV9Z4ppRTyRRcD5Qi8Na7P/qrSRse1aUHgfxHOcG3Kf71fTwVR0FLii4HhenfC28chtRmVV9EPP6rXoWleBtC0wh1j8yQfxMTn9MCuyoouA1I0jG1BgU6lopAJVK/0601KA294gdD2P/1qvUUAeYXHwu0eV90UkkY9AR/UGtjR/Ami6RKJ1UyyL0Zj/hiu2ooAAABgUUtFABRRRQAUUUUAFFFFABRRRQB//9f3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9D3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9H3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9L3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k=" />
    </defs>
  </BaseSVGIcon>
);