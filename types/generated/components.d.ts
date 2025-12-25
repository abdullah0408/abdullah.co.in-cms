import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFlipSentence extends Struct.ComponentSchema {
  collectionName: 'components_shared_flip_sentences';
  info: {
    displayName: 'FLIP_SENTENCE';
  };
  attributes: {
    flipSentenceText: Schema.Attribute.String;
  };
}

export interface SharedJob extends Struct.ComponentSchema {
  collectionName: 'components_shared_jobs';
  info: {
    displayName: 'JOB';
  };
  attributes: {
    company: Schema.Attribute.String;
    title: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

export interface SharedKeyword extends Struct.ComponentSchema {
  collectionName: 'components_shared_keywords';
  info: {
    displayName: 'KEYWORD';
  };
  attributes: {
    keywordText: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SOCIAL_LINK';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
    username: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.flip-sentence': SharedFlipSentence;
      'shared.job': SharedJob;
      'shared.keyword': SharedKeyword;
      'shared.social-link': SharedSocialLink;
    }
  }
}
