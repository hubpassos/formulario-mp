// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  contentSources: [
    {
      name: 'pages',
      type: 'git',
      contentDir: 'src/pages',
      models: [
        {
          name: 'page',
          type: 'page',
          urlPath: '/{slug}',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'markdown' }
          ]
        }
      ]
    }
  ]
});
