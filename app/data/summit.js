export function getConferences(t) {
  return [
    {
      time: '09:45',
      speaker: 'Audrey Tondre',
      company: 'Remembers',
      title: t('kitsu-summit conference remembers title'),
      description: t('kitsu-summit conference remembers description'),
      category: 'animation2d',
      categoryLabel: '2D',
      file: 'audrey.jpg'
    },
    {
      time: '12:00',
      speaker: 'Pete Draper',
      company: 'VFX Supervisor',
      title: t('kitsu-summit conference ryff title'),
      description: t('kitsu-summit conference ryff description'),
      category: 'vfx',
      categoryLabel: 'VFX',
      file: 'pete.webp'
    },
    {
      time: '12:45',
      speaker: 'Chris Unterberg',
      company: 'Tetsuo',
      description: t('kitsu-summit conference tetsuo description'),
      title: t('kitsu-summit conference tetsuo title'),
      category: 'vfx',
      categoryLabel: 'VFX',
      file: 'chris.png'
    },
    {
      time: '14:00',
      speaker: 'Flavio Perez',
      company: 'Les Fées Spéciales',
      description: t('kitsu-summit conference les-fees-spéciales description'),
      title: t('kitsu-summit conference les-fees-spéciales title'),
      category: 'animation3d',
      categoryLabel: '3D',
      file: 'flavio.jpg'
    },
    {
      time: '15:30',
      title: t('kitsu-summit conference cube creative title'),
      speaker: 'Axel Tillement',
      company: 'Cube Creative',
      description: t('kitsu-summit conference cube creative description'),
      category: 'animation3d',
      categoryLabel: '3D',
      file: 'axel.jpg'
    },
    {
      time: '17:00',
      title: t('kitsu-summit conference miyu title'),
      speaker: 'Cléa Gonnay',
      company: 'Miyu',
      description: t('kitsu-summit conference miyu description'),
      category: 'animation2d',
      categoryLabel: '2D',
      file: 'clea.jpg'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference fost title'),
      speaker: 'Céline Durieux',
      company: 'Fost',
      description: t('kitsu-summit conference fost description'),
      category: 'animation2d',
      categoryLabel: '2D',
      file: 'celine.png'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference normaal title'),
      speaker: 'Félix David',
      company: 'Normaal',
      description: t('kitsu-summit conference normaal description'),
      category: 'animation2d',
      categoryLabel: '2D',
      file: 'felix.jpg'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference autour-de-minuit title'),
      speaker: 'Mario Hawat',
      company: 'Autour De Minuit',
      description: t('kitsu-summit conference autour-de-minuit description'),
      category: 'animation3d',
      categoryLabel: '3D',
      file: 'mario.png'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference wizz title'),
      speaker: 'Guilhem Compain',
      company: 'Wizz',
      description: t('kitsu-summit conference wizz description'),
      category: 'animation2d',
      categoryLabel: '2D',
      file: 'guilhem.png'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference mastodon title'),
      speaker: 'Arthur Aloyan',
      company: 'Mastodon Production',
      description: t('kitsu-summit conference mastodon description'),
      category: 'ai',
      categoryLabel: 'AI',
      file: 'artur.png'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference bigcompany title'),
      speaker: 'Tristan Languebien',
      company: 'Big Company',
      description: t('kitsu-summit conference bigcompany description'),
      category: '2d',
      categoryLabel: '2D',
      file: 'tristan.png'
    },
    {
      time: '17:45',
      title: t('kitsu-summit conference ranch-computing title'),
      speaker: 'Anne-Laure Armand / Laurent Dijoux / Dominique Coco',
      company: 'Ranch Computing & TAT Production',
      description: t('kitsu-summit conference ranch-computing description'),
      category: 'vfx',
      categoryLabel: 'VFX',
      file: 'anne-laure.jpg'
    },
    {
      time: '18:00',
      title: t('kitsu-summit conference keynote title'),
      speaker: 'Frank Rousseau',
      company: 'CGWire CEO',
      description: t('kitsu-summit conference keynote description'),
      category: 'kitsu',
      categoryLabel: 'Kitsu',
      file: 'frank.jpg'
    },
    {
      time: '18:00',
      title: t('kitsu-summit conference roadmap title'),
      speaker: 'Gwénaëlle Dupré',
      company: 'CGWire CPO',
      description: t('kitsu-summit conference roadmap description'),
      category: 'kitsu',
      categoryLabel: 'Kitsu',
      file: 'gwen.png'
    }
  ]
}

export function getSchedule(t) {
  return [
    {
      time: '09:00',
      type: 'break',
      label: t('kitsu-summit schedule breakfast'),
      room1: [],
      room2: []
    },
    {
      time: '09:30',
      room1: [
        {
          company: 'CGWire',
          speaker: 'Frank Rousseau',
          title: t('kitsu-summit conference keynote title')
        }
      ],
      room2: []
    },
    {
      time: '10:00',
      room1: [
        {
          company: 'Autour De Minuit',
          speaker: 'Mario Hawat',
          title: t('kitsu-summit conference autour-de-minuit title')
        }
      ],
      room2: [
        {
          company: 'Wizz',
          speaker: 'Guilhem Compain',
          title: t('kitsu-summit conference wizz title')
        }
      ]
    },
    {
      time: '10:45',
      room1: [
        {
          company: 'Les Fées Spéciales',
          speaker: 'Flavio Perez',
          title: t('kitsu-summit conference les-fees-spéciales title')
        }
      ],
      room2: [
        {
          company: 'Cube Creative',
          speaker: 'Axel Tillement',
          title: t('kitsu-summit conference cube creative title')
        }
      ]
    },
    {
      time: '11:30',
      room1: [
        {
          company: 'Magic Studio',
          speaker: 'Arthur Aloyan',
          title: t('kitsu-summit conference mastodon title')
        }
      ],
      room2: [
        {
          company: 'Remembers',
          speaker: 'Audrey Tondre',
          title: t('kitsu-summit conference remembers title')
        }
      ]
    },
    {
      time: '12:15',
      room1: [
        {
          company: 'Ranch Computing & TAT Production',
          speaker: 'Anne-Laure Armand / Laurent Dijoux / Dominique Coco',
          title: t('kitsu-summit conference ranch-computing title')
        }
      ],
      room2: []
    },
    {
      time: '12:40',
      room1: [
        {
          company: 'Lenovo',
          speaker: 'Mesa Takaoka',
          title: t('kitsu-summit conference lenovo title')
        }
      ],
      room2: []
    },
    {
      time: '13:00',
      type: 'break',
      label: t('kitsu-summit schedule lunch'),
      room1: [],
      room2: []
    },
    {
      time: '14:00',
      room1: [
        {
          company: 'CGWire',
          speaker: 'Gwénaëlle Dupré',
          title: t('kitsu-summit conference roadmap title')
        }
      ],
      room2: []
    },
    {
      time: '14:30',
      room1: [
        {
          company: 'Ryff',
          speaker: 'Pete Draper',
          title: t('kitsu-summit conference ryff title')
        }
      ],
      room2: [
        {
          company: 'Miyu',
          speaker: 'Cléa Gonnay',
          title: t('kitsu-summit conference miyu title')
        }
      ]
    },
    {
      time: '15:15',
      room1: [
        {
          company: 'Tetsuo',
          speaker: 'Chris Unterberg',
          title: t('kitsu-summit conference tetsuo title')
        }
      ],
      room2: [
        {
          company: 'Fost',
          speaker: 'Céline Durieux',
          title: t('kitsu-summit conference fost title')
        }
      ]
    },
    {
      time: '16:00',
      room1: [
        {
          company: 'Normaal',
          speaker: 'Félix David',
          title: t('kitsu-summit conference normaal title')
        }
      ],
      room2: [
        {
          company: 'Big Company',
          speaker: 'Tristan Languebien',
          title: t('kitsu-summit conference bigcompany title')
        }
      ]
    },
    {
      time: '16:45',
      room1: [
        {
          company: 'CGWire',
          speaker: 'Frank Rousseau',
          title: t('kitsu-summit conference closing title')
        }
      ],
      room2: []
    },
    {
      time: '17:00',
      type: 'break',
      label: t('kitsu-summit schedule cocktail') + ' 🥳',
      room1: [],
      room2: []
    }
  ]
}
