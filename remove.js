const fs = require('fs');
const data = {
  error: null,
  user_accounts: [
    {
      account_id: 4843,
      account_name: 'APDB SALE & DELIVER ',
      websites: [],
    },
    {
      account_id: 5085,
      account_name: 'Shopify Store leizileimall.myshopify.com',
      websites: [],
    },
    {
      account_id: 4845,
      account_name: 'Maa Monosha ',
      websites: [],
    },
    {
      account_id: 4846,
      account_name: 'Reputation Marketingspecialist',
      websites: [],
    },
    {
      account_id: 4847,
      account_name: 'Amind Align Counselling',
      websites: [
        {
          account_name: 'Amind Align Counselling',
          website_id: 4273,
          website_name: 'amindalign.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 836,
      account_name: 'Summit Gear',
      websites: [
        {
          account_name: 'Summit Gear',
          website_id: 1089,
          website_name: 'summitgear.com.au',
          skus: 15899,
        },
        {
          account_name: 'Summit Gear',
          website_id: 5439,
          website_name: 'www.whippa.com.au',
          skus: 196,
        },
      ],
    },
    {
      account_id: 4386,
      account_name: 'Go Vita Roselands',
      websites: [
        {
          account_name: 'Go Vita Roselands',
          website_id: 3880,
          website_name: 'www.govitaroselands.com.au',
          skus: 3820,
        },
      ],
    },
    {
      account_id: 3914,
      account_name: 'Arbor Brunswick',
      websites: [
        {
          account_name: 'Arbor Brunswick',
          website_id: 3504,
          website_name: 'arborbrunswick.com.au',
          skus: 799,
        },
      ],
    },
    {
      account_id: 3662,
      account_name: 'Grace Ventures Pty Ltd',
      websites: [
        {
          account_name: 'Grace Ventures Pty Ltd',
          website_id: 2918,
          website_name: 'uk.luxskin.co',
          skus: 90,
        },
        {
          account_name: 'Grace Ventures Pty Ltd',
          website_id: 2925,
          website_name: 'au.luxskin.co',
          skus: 95,
        },
        {
          account_name: 'Grace Ventures Pty Ltd',
          website_id: 3566,
          website_name: 'eu.luxskin.co',
          skus: 45,
        },
        {
          account_name: 'Grace Ventures Pty Ltd',
          website_id: 2915,
          website_name: 'luxskin.co',
          skus: 101,
        },
        {
          account_name: 'Grace Ventures Pty Ltd',
          website_id: 4018,
          website_name: 'ca.luxskin.co',
          skus: 99,
        },
        {
          account_name: 'Grace Ventures Pty Ltd',
          website_id: 7220,
          website_name: 'ae.luxskin.co',
          skus: 85,
        },
      ],
    },
    {
      account_id: 2854,
      account_name: 'Cheapskates',
      websites: [
        {
          account_name: 'Cheapskates',
          website_id: 2661,
          website_name: 'cheapskates.co.nz',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4416,
      account_name: 'Shopify Store pilgrimclothing.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pilgrimclothing.myshopify.com',
          website_id: 6459,
          website_name: 'www.pilgrimclothing.com.au',
          skus: 1578,
        },
      ],
    },
    {
      account_id: 3833,
      account_name: 'Manchester Collection',
      websites: [
        {
          account_name: 'Manchester Collection',
          website_id: 3470,
          website_name: 'www.manchestercollection.com.au',
          skus: 2371,
        },
      ],
    },
    {
      account_id: 111,
      account_name: 'Ryda',
      websites: [
        {
          account_name: 'Ryda',
          website_id: 362,
          website_name: 'www.ryda.com.au',
          skus: 13006,
        },
      ],
    },
    {
      account_id: 895,
      account_name: 'iharttoys',
      websites: [
        {
          account_name: 'iharttoys',
          website_id: 1133,
          website_name: 'www.iharttoys.com',
          skus: 393,
        },
      ],
    },
    {
      account_id: 1029,
      account_name: 'Different Drop',
      websites: [
        {
          account_name: 'Different Drop',
          website_id: 1239,
          website_name: 'www.differentdrop.com',
          skus: 2865,
        },
      ],
    },
    {
      account_id: 4804,
      account_name: 'Enapelly',
      websites: [
        {
          account_name: 'Enapelly',
          website_id: 4234,
          website_name: 'www.enapelly.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 3635,
      account_name: 'FKN Gym Wear',
      websites: [
        {
          account_name: 'FKN Gym Wear',
          website_id: 3300,
          website_name: 'fkngymwear.com',
          skus: 1768,
        },
      ],
    },
    {
      account_id: 1435,
      account_name: 'Bricks To The World',
      websites: [
        {
          account_name: 'Bricks To The World',
          website_id: 1498,
          website_name: 'bttw.com.au',
          skus: 2235,
        },
      ],
    },
    {
      account_id: 1524,
      account_name: 'Hobbies N Games',
      websites: [
        {
          account_name: 'Hobbies N Games',
          website_id: 1537,
          website_name: 'hobbiesngames.com.au',
          skus: 1425,
        },
      ],
    },
    {
      account_id: 1381,
      account_name: 'Keyboard Corner',
      websites: [
        {
          account_name: 'Keyboard Corner',
          website_id: 1468,
          website_name: 'www.keyboardcorner.com.au',
          skus: 7933,
        },
      ],
    },
    {
      account_id: 4048,
      account_name: 'Deval Boutique',
      websites: [
        {
          account_name: 'Deval Boutique',
          website_id: 3598,
          website_name: 'devalboutique.nz',
          skus: 6506,
        },
      ],
    },
    {
      account_id: 2225,
      account_name: 'https://www.greenlivingaustralia.com.au',
      websites: [
        {
          account_name: 'https://www.greenlivingaustralia.com.au',
          website_id: 2052,
          website_name: 'www.greenlivingaustralia.com.au',
          skus: 1039,
        },
      ],
    },
    {
      account_id: 2210,
      account_name: 'Noosa Juniors',
      websites: [
        {
          account_name: 'Noosa Juniors',
          website_id: 2037,
          website_name: 'noosajuniors.com.au',
          skus: 133,
        },
      ],
    },
    {
      account_id: 2144,
      account_name: 'https://www.doyoueven.com',
      websites: [
        {
          account_name: 'https://www.doyoueven.com',
          website_id: 1971,
          website_name: 'www.doyoueven.com',
          skus: 460,
        },
      ],
    },
    {
      account_id: 5086,
      account_name: 'Big Commerce Store 4dvc8k0v6r',
      websites: [],
    },
    {
      account_id: 2790,
      account_name: 'https://ransonhouse.com.au',
      websites: [],
    },
    {
      account_id: 5092,
      account_name: 'Big Commerce Store talaaaexze',
      websites: [],
    },
    {
      account_id: 3034,
      account_name: 'https://therockinn.com',
      websites: [
        {
          account_name: 'https://therockinn.com',
          website_id: 2841,
          website_name: 'therockinn.com',
          skus: 2564,
        },
      ],
    },
    {
      account_id: 3080,
      account_name: 'https://www.gametraderschermside.com.au',
      websites: [
        {
          account_name: 'https://www.gametraderschermside.com.au',
          website_id: 2886,
          website_name: 'www.gametraderschermside.com.au',
          skus: 3077,
        },
      ],
    },
    {
      account_id: 3248,
      account_name: 'https://priceritemart.com.au',
      websites: [
        {
          account_name: 'https://priceritemart.com.au',
          website_id: 3054,
          website_name: 'priceritemart.com.au',
          skus: 15631,
        },
      ],
    },
    {
      account_id: 4129,
      account_name: "Cook's Plumbing Supplies",
      websites: [
        {
          account_name: "Cook's Plumbing Supplies",
          website_id: 3655,
          website_name: 'www.cooksplumbing.com.au',
          skus: 3034,
        },
      ],
    },
    {
      account_id: 4146,
      account_name: 'www.truebluetoys.com.au',
      websites: [],
    },
    {
      account_id: 4165,
      account_name: 'Big Commerce Store 9udp8cbs0q',
      websites: [
        {
          account_name: 'Big Commerce Store 9udp8cbs0q',
          website_id: 3688,
          website_name: 'qjj.com.au',
          skus: 127,
        },
      ],
    },
    {
      account_id: 4180,
      account_name: 'Big Commerce Store fa36f',
      websites: [],
    },
    {
      account_id: 4205,
      account_name: 'Big Commerce Store 5pnlq',
      websites: [],
    },
    {
      account_id: 4289,
      account_name: 'Big Commerce Store uiuxxkosim',
      websites: [
        {
          account_name: 'Big Commerce Store uiuxxkosim',
          website_id: 3795,
          website_name: 'bigwormgraphix.com',
          skus: 376,
        },
      ],
    },
    {
      account_id: 4264,
      account_name: 'Life Style Store',
      websites: [],
    },
    {
      account_id: 4299,
      account_name: 'Pretty Sweet Supplies',
      websites: [
        {
          account_name: 'Pretty Sweet Supplies',
          website_id: 3803,
          website_name: 'www.prettysweetsupplies.com.au',
          skus: 4331,
        },
      ],
    },
    {
      account_id: 4571,
      account_name: 'Expedition134',
      websites: [
        {
          account_name: 'Expedition134',
          website_id: 4042,
          website_name: 'expedition134.com',
          skus: 28,
        },
      ],
    },
    {
      account_id: 5087,
      account_name: 'Wells Fargo Center E-Comm Retail Store',
      websites: [],
    },
    {
      account_id: 5089,
      account_name: 'Noone Carrier',
      websites: [],
    },
    {
      account_id: 5093,
      account_name: 'The Organic Habitat',
      websites: [],
    },
    {
      account_id: 5090,
      account_name: 'Big Commerce Store mzridzi69i',
      websites: [],
    },
    {
      account_id: 4734,
      account_name: 'SnapFeat',
      websites: [],
    },
    {
      account_id: 4735,
      account_name: 'Kerma Design',
      websites: [
        {
          account_name: 'Kerma Design',
          website_id: 4181,
          website_name: 'www.kerma.hu',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4737,
      account_name: 'mobi trend',
      websites: [
        {
          account_name: 'mobi trend',
          website_id: 4183,
          website_name: 'www.mobi-trend.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4739,
      account_name: 'TeeBoo',
      websites: [
        {
          account_name: 'TeeBoo',
          website_id: 4185,
          website_name: 'crocspalace.shop',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4741,
      account_name: 'ecom',
      websites: [
        {
          account_name: 'ecom',
          website_id: 4187,
          website_name: 'www.jumia.ma',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4742,
      account_name: 'Ezytrail ',
      websites: [
        {
          account_name: 'Ezytrail ',
          website_id: 4188,
          website_name: 'www.ezytrailcampertrailers.com.au',
          skus: 16,
        },
      ],
    },
    {
      account_id: 4743,
      account_name: 'Kick Push Pty Ltd',
      websites: [
        {
          account_name: 'Kick Push Pty Ltd',
          website_id: 4189,
          website_name: 'www.kickpush.com.au',
          skus: 13962,
        },
      ],
    },
    {
      account_id: 4749,
      account_name: 'SerendipiaAgency',
      websites: [
        {
          account_name: 'SerendipiaAgency',
          website_id: 4194,
          website_name: 'holaprincesa.it',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4746,
      account_name: 'Knitwear Collections NZ',
      websites: [
        {
          account_name: 'Knitwear Collections NZ',
          website_id: 4190,
          website_name: 'knitwearcollections.co.nz',
          skus: 1005,
        },
      ],
    },
    {
      account_id: 4748,
      account_name: 'Thrive Digital Pty Ltd',
      websites: [
        {
          account_name: 'Thrive Digital Pty Ltd',
          website_id: 4193,
          website_name: 'artloversaustralia.com.au',
          skus: 77637,
        },
      ],
    },
    {
      account_id: 4751,
      account_name: 'TBD',
      websites: [
        {
          account_name: 'TBD',
          website_id: 4195,
          website_name: 'shop.godatafeed.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4752,
      account_name: 'BELK Tile',
      websites: [
        {
          account_name: 'BELK Tile',
          website_id: 4198,
          website_name: 'www.belktile.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4753,
      account_name: 'Pieed',
      websites: [
        {
          account_name: 'Pieed',
          website_id: 4199,
          website_name: 'pieed.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4757,
      account_name: 'Bio Fireplace Group',
      websites: [
        {
          account_name: 'Bio Fireplace Group',
          website_id: 4201,
          website_name: 'www.bioethanol-fireplace.co.uk',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4758,
      account_name: 'Student',
      websites: [
        {
          account_name: 'Student',
          website_id: 4202,
          website_name: 'health.usf.edu',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4759,
      account_name: 'Kennedy Wild Birds Food UK LTD',
      websites: [],
    },
    {
      account_id: 4768,
      account_name: 'KGN Impact',
      websites: [
        {
          account_name: 'KGN Impact',
          website_id: 4206,
          website_name: 'in.urbanic.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 1746,
      account_name: 'Ocean Paradise',
      websites: [
        {
          account_name: 'Ocean Paradise',
          website_id: 1647,
          website_name: 'www.oceanparadise.com.sg',
          skus: 195,
        },
      ],
    },
    {
      account_id: 4769,
      account_name: 'Surf ecom',
      websites: [
        {
          account_name: 'Surf ecom',
          website_id: 4208,
          website_name: 'hoodifize.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4772,
      account_name: 'ERGOLIV',
      websites: [
        {
          account_name: 'ERGOLIV',
          website_id: 4210,
          website_name: 'ergoliv.hu',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4775,
      account_name: 'Dmm',
      websites: [
        {
          account_name: 'Dmm',
          website_id: 4212,
          website_name: 'www.theholdup.co.nz',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4740,
      account_name: 'moonmarble',
      websites: [
        {
          account_name: 'moonmarble',
          website_id: 4186,
          website_name: 'www.moonmarble.nl',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4777,
      account_name: 'Brushes For Nails',
      websites: [
        {
          account_name: 'Brushes For Nails',
          website_id: 4214,
          website_name: 'brushesfornails.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4783,
      account_name: 'Be Group',
      websites: [
        {
          account_name: 'Be Group',
          website_id: 4217,
          website_name: 'www.ludere.com.au',
          skus: 14,
        },
      ],
    },
    {
      account_id: 4785,
      account_name: 'Raining Resin',
      websites: [
        {
          account_name: 'Raining Resin',
          website_id: 4218,
          website_name: 'www.rainingresin.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4787,
      account_name: 'Farhan Hussain',
      websites: [
        {
          account_name: 'Farhan Hussain',
          website_id: 4220,
          website_name: 'phyba.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4791,
      account_name: 'Sydney Cleaning Supplies',
      websites: [
        {
          account_name: 'Sydney Cleaning Supplies',
          website_id: 4222,
          website_name: 'sydneycleaningsupplies.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4733,
      account_name: 'Shopify Store purist-collective.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store purist-collective.myshopify.com',
          website_id: 4178,
          website_name: 'www.puristcollective.com',
          skus: 57,
        },
      ],
    },
    {
      account_id: 4794,
      account_name: 'Elephant in the Boardroom',
      websites: [
        {
          account_name: 'Elephant in the Boardroom',
          website_id: 4225,
          website_name: 'www.elephantintheboardroom.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 3152,
      account_name: 'AZScanners',
      websites: [
        {
          account_name: 'AZScanners',
          website_id: 3620,
          website_name: 'www.AZscanners.com.au',
          skus: 274,
        },
      ],
    },
    {
      account_id: 4795,
      account_name: 'Mat Shop',
      websites: [
        {
          account_name: 'Mat Shop',
          website_id: 2985,
          website_name: 'www.matshop.com.au',
          skus: 256,
        },
      ],
    },
    {
      account_id: 4796,
      account_name: 'PrinterStop.com',
      websites: [
        {
          account_name: 'PrinterStop.com',
          website_id: 4226,
          website_name: 'printerstop.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4800,
      account_name: 'Pure',
      websites: [
        {
          account_name: 'Pure',
          website_id: 4228,
          website_name: 'puremotelrotorua.co.nz',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4803,
      account_name: 'PaknSave',
      websites: [
        {
          account_name: 'PaknSave',
          website_id: 4232,
          website_name: 'www.paaknsave.co.nz',
          skus: 0,
        },
      ],
    },
    {
      account_id: 2835,
      account_name: 'Frontline Safety Group',
      websites: [
        {
          account_name: 'Frontline Safety Group',
          website_id: 2984,
          website_name: 'www.wileyxaustralia.com.au',
          skus: 285,
        },
        {
          account_name: 'Frontline Safety Group',
          website_id: 2642,
          website_name: 'frontlinesafety.com.au',
          skus: 1712,
        },
      ],
    },
    {
      account_id: 4808,
      account_name: 'HOME PLUS DEALS  ',
      websites: [
        {
          account_name: 'HOME PLUS DEALS  ',
          website_id: 4235,
          website_name: 'homeplusdeals.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4811,
      account_name: 'Ronny Hossain',
      websites: [
        {
          account_name: 'Ronny Hossain',
          website_id: 4236,
          website_name: 'ronnyhossain.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 5091,
      account_name: 'Clutch Modern',
      websites: [],
    },
    {
      account_id: 4813,
      account_name: 'Augmetry Technologies',
      websites: [
        {
          account_name: 'Augmetry Technologies',
          website_id: 4237,
          website_name: 'augmetry.com',
          skus: 0,
        },
        {
          account_name: 'Augmetry Technologies',
          website_id: 4238,
          website_name: 'vertigodistributors.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4815,
      account_name: 'www.teknikmotorsport.com',
      websites: [
        {
          account_name: 'www.teknikmotorsport.com',
          website_id: 4239,
          website_name: 'www.teknikmotorsport.com',
          skus: 10933,
        },
      ],
    },
    {
      account_id: 4819,
      account_name: 'Traffic Radius',
      websites: [
        {
          account_name: 'Traffic Radius',
          website_id: 4241,
          website_name: 'www.elwood101.com.au',
          skus: 8929,
        },
      ],
    },
    {
      account_id: 4823,
      account_name: 'Social Motive',
      websites: [
        {
          account_name: 'Social Motive',
          website_id: 4244,
          website_name: 'costumecompany.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4824,
      account_name: 'MyCraze',
      websites: [
        {
          account_name: 'MyCraze',
          website_id: 4245,
          website_name: 'www.mycraze.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4825,
      account_name: 'Sebastianincinco',
      websites: [
        {
          account_name: 'Sebastianincinco',
          website_id: 4246,
          website_name: 'Sebastianincinco.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4826,
      account_name: 'Arrow Truck Parts',
      websites: [
        {
          account_name: 'Arrow Truck Parts',
          website_id: 4248,
          website_name: 'www.arrowtruckparts.net',
          skus: 1156,
        },
      ],
    },
    {
      account_id: 4828,
      account_name: 'During Days',
      websites: [],
    },
    {
      account_id: 4830,
      account_name: 'ÒM',
      websites: [],
    },
    {
      account_id: 4832,
      account_name: 'Lynix2go',
      websites: [
        {
          account_name: 'Lynix2go',
          website_id: 4252,
          website_name: 'lynix2go.myshopify.com/collections/iphone-case',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4834,
      account_name: 'GGL',
      websites: [
        {
          account_name: 'GGL',
          website_id: 4254,
          website_name: 'www.williamscorporation.co.nz',
          skus: 0,
        },
        {
          account_name: 'GGL',
          website_id: 4255,
          website_name: 'ecorituals.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 1403,
      account_name: 'Elle & Elka',
      websites: [
        {
          account_name: 'Elle & Elka',
          website_id: 1486,
          website_name: 'elleandelka.com.au',
          skus: 601,
        },
      ],
    },
    {
      account_id: 4838,
      account_name: 'Lankan Fashion',
      websites: [
        {
          account_name: 'Lankan Fashion',
          website_id: 4259,
          website_name: 'thegratefulpet.sg',
          skus: 0,
        },
      ],
    },
    {
      account_id: 3837,
      account_name: 'RMA Electronics',
      websites: [
        {
          account_name: 'RMA Electronics',
          website_id: 3483,
          website_name: 'www.rmaelectronics.com',
          skus: 1832,
        },
      ],
    },
    {
      account_id: 4839,
      account_name: 'Green Acres Mowers',
      websites: [
        {
          account_name: 'Green Acres Mowers',
          website_id: 4260,
          website_name: 'www.greenacresmowers.com.au',
          skus: 7962,
        },
      ],
    },
    {
      account_id: 4848,
      account_name: 'Online seller ',
      websites: [],
    },
    {
      account_id: 4849,
      account_name: 'FUNDAY Natural Sweets',
      websites: [
        {
          account_name: 'FUNDAY Natural Sweets',
          website_id: 4278,
          website_name: 'www.fundaysweets.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4851,
      account_name: 'Aussie Sapphire',
      websites: [],
    },
    {
      account_id: 4852,
      account_name: 'test',
      websites: [],
    },
    {
      account_id: 4853,
      account_name: 'Digital Oasis Australia Pty Ltd',
      websites: [
        {
          account_name: 'Digital Oasis Australia Pty Ltd',
          website_id: 4342,
          website_name: 'ironedge.com.au',
          skus: 521,
        },
      ],
    },
    {
      account_id: 4854,
      account_name: 'Belgrin',
      websites: [],
    },
    {
      account_id: 4856,
      account_name: 'Bhatti',
      websites: [],
    },
    {
      account_id: 4858,
      account_name: 'Digital marketing ',
      websites: [],
    },
    {
      account_id: 4860,
      account_name: 'Developer',
      websites: [],
    },
    {
      account_id: 4861,
      account_name: 'eralis',
      websites: [],
    },
    {
      account_id: 4863,
      account_name: 'bes energy box',
      websites: [],
    },
    {
      account_id: 4864,
      account_name: 'Global Investment Opportunities',
      websites: [],
    },
    {
      account_id: 4866,
      account_name: 'Niche & Leads',
      websites: [],
    },
    {
      account_id: 4868,
      account_name: 'www.toolsinabox.com.au',
      websites: [
        {
          account_name: 'www.toolsinabox.com.au',
          website_id: 4300,
          website_name: 'www.toolsinabox.com.au',
          skus: 311,
        },
      ],
    },
    {
      account_id: 4870,
      account_name: 'T.Ess Productions Pty Ltd',
      websites: [],
    },
    {
      account_id: 4873,
      account_name: 'Hype Digital',
      websites: [],
    },
    {
      account_id: 4875,
      account_name: '23 Digital',
      websites: [],
    },
    {
      account_id: 4877,
      account_name: 'sale product',
      websites: [],
    },
    {
      account_id: 4878,
      account_name: 'Tedrcplanes.com',
      websites: [
        {
          account_name: 'Tedrcplanes.com',
          website_id: 4316,
          website_name: 'TedRCPlanes.Com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4880,
      account_name: '01870876299',
      websites: [],
    },
    {
      account_id: 4881,
      account_name: 'Make Rich Man',
      websites: [],
    },
    {
      account_id: 4882,
      account_name: 'YouTube ads',
      websites: [],
    },
    {
      account_id: 4883,
      account_name: 'JJ TRAVELS',
      websites: [],
    },
    {
      account_id: 4884,
      account_name: 'Dhaka Fashion',
      websites: [],
    },
    {
      account_id: 4885,
      account_name: 'Homey',
      websites: [],
    },
    {
      account_id: 4887,
      account_name: 'Marseprofessionalservice',
      websites: [],
    },
    {
      account_id: 4888,
      account_name: 'caas',
      websites: [],
    },
    {
      account_id: 4890,
      account_name: 'Dorikolsw',
      websites: [],
    },
    {
      account_id: 4891,
      account_name: 'Adairs',
      websites: [],
    },
    {
      account_id: 4892,
      account_name: 'Doriker',
      websites: [],
    },
    {
      account_id: 4893,
      account_name: 'AJE',
      websites: [],
    },
    {
      account_id: 4896,
      account_name: 'cinematic angle',
      websites: [],
    },
    {
      account_id: 4897,
      account_name: 'Guiding Horses Crafts',
      websites: [
        {
          account_name: 'Guiding Horses Crafts',
          website_id: 4347,
          website_name: 'www.besthandmade.co.uk/store/guiding-horses-crafts',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4898,
      account_name: 'owner',
      websites: [],
    },
    {
      account_id: 4901,
      account_name: 'EL ESTE TAQUERIA',
      websites: [],
    },
    {
      account_id: 4902,
      account_name: 'An Agency',
      websites: [
        {
          account_name: 'An Agency',
          website_id: 4353,
          website_name: 'www.playfulpets.com.au',
          skus: 2278,
        },
      ],
    },
    {
      account_id: 4904,
      account_name: 'retye',
      websites: [],
    },
    {
      account_id: 4905,
      account_name: 'Soc',
      websites: [],
    },
    {
      account_id: 4906,
      account_name: 'Ceou',
      websites: [
        {
          account_name: 'Ceou',
          website_id: 4366,
          website_name: 'www.armotoselectricas.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4907,
      account_name: 'DoubleGrowthCommunityLLC',
      websites: [],
    },
    {
      account_id: 4909,
      account_name: 'ebika',
      websites: [],
    },
    {
      account_id: 4910,
      account_name: 'Alchemical',
      websites: [
        {
          account_name: 'Alchemical',
          website_id: 4374,
          website_name: 'www.alchemical.com.au',
          skus: 504,
        },
      ],
    },
    {
      account_id: 4913,
      account_name: 'Vijaybusiness',
      websites: [],
    },
    {
      account_id: 4915,
      account_name: 'Omni Digital Pte Ltd',
      websites: [],
    },
    {
      account_id: 4917,
      account_name: 'muzzaonline',
      websites: [
        {
          account_name: 'muzzaonline',
          website_id: 4382,
          website_name: 'www.muzzaonline.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4919,
      account_name: 'RQ Media',
      websites: [],
    },
    {
      account_id: 4924,
      account_name: 'TMX company',
      websites: [
        {
          account_name: 'TMX company',
          website_id: 4396,
          website_name: 'design-trend.com',
          skus: 0,
        },
        {
          account_name: 'TMX company',
          website_id: 4397,
          website_name: 'betwiched.com',
          skus: 987,
        },
      ],
    },
    {
      account_id: 4923,
      account_name: 'Newman Art Designs',
      websites: [],
    },
    {
      account_id: 4925,
      account_name: 'Castejon',
      websites: [],
    },
    {
      account_id: 4927,
      account_name: 'lct',
      websites: [],
    },
    {
      account_id: 4928,
      account_name: 'Castejón Joyeros S.L.',
      websites: [],
    },
    {
      account_id: 4930,
      account_name: 'Total Tools',
      websites: [
        {
          account_name: 'Total Tools',
          website_id: 4310,
          website_name: 'totaltools.com.au',
          skus: 33213,
        },
      ],
    },
    {
      account_id: 1275,
      account_name: 'Barcodes',
      websites: [
        {
          account_name: 'Barcodes',
          website_id: 1417,
          website_name: 'www.barcodes.com.au',
          skus: 374,
        },
      ],
    },
    {
      account_id: 4934,
      account_name: 'Resolution Digital',
      websites: [],
    },
    {
      account_id: 4935,
      account_name: 'RDX Sports',
      websites: [
        {
          account_name: 'RDX Sports',
          website_id: 4422,
          website_name: 'rdxsports.co.uk',
          skus: 2191,
        },
      ],
    },
    {
      account_id: 4936,
      account_name: 'Neuw Denim',
      websites: [
        {
          account_name: 'Neuw Denim',
          website_id: 4424,
          website_name: 'www.neuwdenim.com',
          skus: 2242,
        },
      ],
    },
    {
      account_id: 4937,
      account_name: 'Jfdsygj',
      websites: [],
    },
    {
      account_id: 4938,
      account_name: 'Axxe',
      websites: [],
    },
    {
      account_id: 3231,
      account_name: 'Netsertive',
      websites: [
        {
          account_name: 'Netsertive',
          website_id: 3044,
          website_name: 'tommybahamafurniture.com',
          skus: 2753,
        },
        {
          account_name: 'Netsertive',
          website_id: 3354,
          website_name: 'lexingtonfurniture.com',
          skus: 2745,
        },
      ],
    },
    {
      account_id: 4939,
      account_name: 'Designerex',
      websites: [],
    },
    {
      account_id: 4941,
      account_name: 'Big Commerce Store ko4kbqjr2t',
      websites: [
        {
          account_name: 'Big Commerce Store ko4kbqjr2t',
          website_id: 4436,
          website_name: 'learning-studylink.com',
          skus: 2095,
        },
      ],
    },
    {
      account_id: 4943,
      account_name: 'SpikeWheels',
      websites: [],
    },
    {
      account_id: 4944,
      account_name: 'Goldstar painting and maintenance services',
      websites: [],
    },
    {
      account_id: 4945,
      account_name: 'Kerin Michelle Think Dream Succeed',
      websites: [],
    },
    {
      account_id: 4946,
      account_name: 'Big Commerce Store fkmjoahy1l',
      websites: [
        {
          account_name: 'Big Commerce Store fkmjoahy1l',
          website_id: 4449,
          website_name: 'zfashionplus.com',
          skus: 33205,
        },
      ],
    },
    {
      account_id: 2561,
      account_name: 'https://www.thefable.com.au',
      websites: [
        {
          account_name: 'https://www.thefable.com.au',
          website_id: 2379,
          website_name: 'www.thefable.com.au',
          skus: 106,
        },
      ],
    },
    {
      account_id: 4950,
      account_name: 'RENDRO LLC',
      websites: [],
    },
    {
      account_id: 4952,
      account_name: 'Chandler',
      websites: [],
    },
    {
      account_id: 4953,
      account_name: 'kwpx',
      websites: [
        {
          account_name: 'kwpx',
          website_id: 4463,
          website_name: 'zamels.com.au',
          skus: 15673,
        },
      ],
    },
    {
      account_id: 4955,
      account_name: 'Bright Life',
      websites: [],
    },
    {
      account_id: 4957,
      account_name: 'Rubys Salon Supplies',
      websites: [],
    },
    {
      account_id: 4958,
      account_name: 'Big Commerce Store p01xzgivq5',
      websites: [
        {
          account_name: 'Big Commerce Store p01xzgivq5',
          website_id: 4471,
          website_name: 'confluencehairandscalpsalon.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4963,
      account_name:
        'Shopify Store feedops-app-test-kevin-nov-2023.myshopify.com',
      websites: [],
    },
    {
      account_id: 4975,
      account_name: 'Big Commerce Store kaxlmzv',
      websites: [],
    },
    {
      account_id: 4968,
      account_name: 'Big Commerce Store 88a63',
      websites: [],
    },
    {
      account_id: 4970,
      account_name: 'Shopify Store c10fd6.myshopify.com',
      websites: [],
    },
    {
      account_id: 4972,
      account_name: 'Big Commerce Store 65027',
      websites: [
        {
          account_name: 'Big Commerce Store 65027',
          website_id: 4488,
          website_name: 'websiteadvantage.mybigcommerce.com',
          skus: 87,
        },
      ],
    },
    {
      account_id: 4973,
      account_name: 'Shopify Store 7af7c2.myshopify.com',
      websites: [],
    },
    {
      account_id: 4974,
      account_name: 'Big Commerce Store e394f',
      websites: [
        {
          account_name: 'Big Commerce Store e394f',
          website_id: 4490,
          website_name: 'www.waterpumpsnow.com',
          skus: 81916,
        },
      ],
    },
    {
      account_id: 4976,
      account_name: 'Big Commerce Store ve5kqou2xh',
      websites: [
        {
          account_name: 'Big Commerce Store ve5kqou2xh',
          website_id: 4493,
          website_name: 'priscohotspring.com',
          skus: 248,
        },
      ],
    },
    {
      account_id: 4978,
      account_name: 'Big Commerce Store jdhatsjy2',
      websites: [
        {
          account_name: 'Big Commerce Store jdhatsjy2',
          website_id: 4496,
          website_name: 'allthingspossible2.com',
          skus: 56,
        },
      ],
    },
    {
      account_id: 4979,
      account_name: 'Big Commerce Store mr4l2ohqw2',
      websites: [
        {
          account_name: 'Big Commerce Store mr4l2ohqw2',
          website_id: 4497,
          website_name: 'gmsmedical1.com',
          skus: 275,
        },
      ],
    },
    {
      account_id: 4980,
      account_name: 'Big Commerce Store giksv61n3y',
      websites: [
        {
          account_name: 'Big Commerce Store giksv61n3y',
          website_id: 4498,
          website_name: 'pippenhillrooms.com',
          skus: 2787,
        },
      ],
    },
    {
      account_id: 4982,
      account_name: 'Big Commerce Store pvbru9jpie',
      websites: [
        {
          account_name: 'Big Commerce Store pvbru9jpie',
          website_id: 4500,
          website_name: 'thestationerystore.com.au',
          skus: 10308,
        },
      ],
    },
    {
      account_id: 4990,
      account_name: 'Big Commerce Store umv94ms',
      websites: [
        {
          account_name: 'Big Commerce Store umv94ms',
          website_id: 4510,
          website_name: 'www.gogogear.com.au',
          skus: 3353,
        },
      ],
    },
    {
      account_id: 4991,
      account_name: 'Shopify Store 7a340d-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 4145,
      account_name: 'www.bearingsexpress.com.au',
      websites: [
        {
          account_name: 'www.bearingsexpress.com.au',
          website_id: 3672,
          website_name: 'www.bearingsexpress.com.au',
          skus: 2215,
        },
      ],
    },
    {
      account_id: 4933,
      account_name: 'Bossco 4x4 Accessories',
      websites: [],
    },
    {
      account_id: 4995,
      account_name: 'Shopify Store franks-gmail.myshopify.com',
      websites: [],
    },
    {
      account_id: 5001,
      account_name: 'Meeky Store ',
      websites: [],
    },
    {
      account_id: 4997,
      account_name: 'Big Commerce Store kxsfrhpooo',
      websites: [
        {
          account_name: 'Big Commerce Store kxsfrhpooo',
          website_id: 4519,
          website_name: 'dynamiccreative.mybigcommerce.com',
          skus: 57,
        },
      ],
    },
    {
      account_id: 5003,
      account_name: 'Shopify Store forrspec.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store forrspec.myshopify.com',
          website_id: 6801,
          website_name: 'forrspec.myshopify.com',
          skus: 10,
        },
      ],
    },
    {
      account_id: 5006,
      account_name: 'Big Commerce Store bkxch',
      websites: [
        {
          account_name: 'Big Commerce Store bkxch',
          website_id: 4533,
          website_name: 'treklinemotorsports.com',
          skus: 2979,
        },
      ],
    },
    {
      account_id: 5007,
      account_name: 'Shopify Store dcd487-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5008,
      account_name: 'Luxendra Global Groups Ltd',
      websites: [],
    },
    {
      account_id: 5009,
      account_name: 'Shopify Store 3bfb0b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5015,
      account_name: 'Big Commerce Store b3tm1sdhap',
      websites: [
        {
          account_name: 'Big Commerce Store b3tm1sdhap',
          website_id: 4553,
          website_name: 'magicmagus.com',
          skus: 4965,
        },
      ],
    },
    {
      account_id: 5016,
      account_name: 'Shopify Store halal-chinese-food-nyc.myshopify.com',
      websites: [],
    },
    {
      account_id: 4872,
      account_name: 'Big Commerce Store pbm1b2ubzb',
      websites: [
        {
          account_name: 'Big Commerce Store pbm1b2ubzb',
          website_id: 4305,
          website_name: 'multilink.us',
          skus: 2754,
        },
      ],
    },
    {
      account_id: 5020,
      account_name: 'Big Commerce Store aqbjcucys4',
      websites: [],
    },
    {
      account_id: 5023,
      account_name: 'Big Commerce Store qmagntafvz',
      websites: [
        {
          account_name: 'Big Commerce Store qmagntafvz',
          website_id: 4565,
          website_name: 'mangobikes.com',
          skus: 1638,
        },
      ],
    },
    {
      account_id: 5025,
      account_name: 'Big Commerce Store 9dk28p8567',
      websites: [
        {
          account_name: 'Big Commerce Store 9dk28p8567',
          website_id: 4567,
          website_name: 'www.audioadvisor.com',
          skus: 11008,
        },
      ],
    },
    {
      account_id: 5026,
      account_name: 'Big Commerce Store whhi6',
      websites: [
        {
          account_name: 'Big Commerce Store whhi6',
          website_id: 4568,
          website_name: 'ridewatersports.com',
          skus: 672,
        },
      ],
    },
    {
      account_id: 5027,
      account_name: 'Shopify Store 877c94.myshopify.com',
      websites: [],
    },
    {
      account_id: 5029,
      account_name: 'Big Commerce Store d4zo6j804l',
      websites: [
        {
          account_name: 'Big Commerce Store d4zo6j804l',
          website_id: 4577,
          website_name: 'eazyro.com',
          skus: 101179,
        },
      ],
    },
    {
      account_id: 4932,
      account_name: 'FeedOps',
      websites: [
        {
          account_name: 'FeedOps',
          website_id: 5291,
          website_name: 'www.norfa.lt',
          skus: 0,
        },
        {
          account_name: 'FeedOps',
          website_id: 6896,
          website_name: 'abdulxtest1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4727,
      account_name: 'Big Commerce Store i4k8omwtuz',
      websites: [
        {
          account_name: 'Big Commerce Store i4k8omwtuz',
          website_id: 4544,
          website_name: 'naturistarex.com',
          skus: 330,
        },
      ],
    },
    {
      account_id: 4871,
      account_name: 'Absafe',
      websites: [
        {
          account_name: 'Absafe',
          website_id: 4304,
          website_name: 'shop.absafe.com.au',
          skus: 2095,
        },
      ],
    },
    {
      account_id: 5033,
      account_name: 'Shopify Store 33a7cf-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5036,
      account_name: 'Shopify Store dynamiccreative-test-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5038,
      account_name:
        'Shopify Store feedops-app-test-december-2023-fg.myshopify.com',
      websites: [],
    },
    {
      account_id: 4747,
      account_name: 'Renovation Kingdom',
      websites: [],
    },
    {
      account_id: 5040,
      account_name: 'Shopify Store 3f1cdb-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5042,
      account_name: 'Big Commerce Store 5ch41jdped',
      websites: [],
    },
    {
      account_id: 5043,
      account_name: 'Big Commerce Store b7dzclybua',
      websites: [
        {
          account_name: 'Big Commerce Store b7dzclybua',
          website_id: 4596,
          website_name: 'worldofwinchester.com',
          skus: 213,
        },
      ],
    },
    {
      account_id: 5045,
      account_name: 'Shopify Store fg-test-dec-22.myshopify.com',
      websites: [],
    },
    {
      account_id: 5046,
      account_name: 'Shopify Store fg-dec22.myshopify.com',
      websites: [],
    },
    {
      account_id: 4998,
      account_name: 'Big Commerce Store 7wxiy3caoe',
      websites: [
        {
          account_name: 'Big Commerce Store 7wxiy3caoe',
          website_id: 6921,
          website_name: 'feedops.mybigcommerce.com',
          skus: 69,
        },
      ],
    },
    {
      account_id: 5049,
      account_name: 'Big Commerce Store 3nbb2i3t1a',
      websites: [],
    },
    {
      account_id: 787,
      account_name: 'OneTeaspoon',
      websites: [
        {
          account_name: 'OneTeaspoon',
          website_id: 4631,
          website_name: 'oneteaspoonsale.com',
          skus: 6350,
        },
      ],
    },
    {
      account_id: 5055,
      account_name: 'Big Commerce Store hzisl408la',
      websites: [],
    },
    {
      account_id: 5059,
      account_name: 'Big Commerce Store tylmm9djvv',
      websites: [],
    },
    {
      account_id: 5014,
      account_name: 'Big Commerce Store Clipacore Store',
      websites: [
        {
          account_name: 'Big Commerce Store Clipacore Store',
          website_id: 4551,
          website_name: 'clipacorestore.com',
          skus: 123,
        },
      ],
    },
    {
      account_id: 5066,
      account_name: 'Big Commerce Store 8910virhrq',
      websites: [
        {
          account_name: 'Big Commerce Store 8910virhrq',
          website_id: 4636,
          website_name: 'unisandirect.com',
          skus: 2675,
        },
      ],
    },
    {
      account_id: 1761,
      account_name: 'MiniJumbuk',
      websites: [],
    },
    {
      account_id: 5073,
      account_name: 'Pro Cycle Gear',
      websites: [
        {
          account_name: 'Pro Cycle Gear',
          website_id: 4621,
          website_name: 'procyclegear.com',
          skus: 6102,
        },
      ],
    },
    {
      account_id: 5077,
      account_name: 'Big Commerce Store 8pqeoh0sdo',
      websites: [
        {
          account_name: 'Big Commerce Store 8pqeoh0sdo',
          website_id: 4627,
          website_name: '5ssupplies.com',
          skus: 7148,
        },
      ],
    },
    {
      account_id: 5079,
      account_name: 'Shopify Store kopara2trade.myshopify.com',
      websites: [],
    },
    {
      account_id: 5080,
      account_name: 'Big Commerce Store b2qhfi1omb',
      websites: [
        {
          account_name: 'Big Commerce Store b2qhfi1omb',
          website_id: 4633,
          website_name: 'bountywiz.com',
          skus: 2439,
        },
      ],
    },
    {
      account_id: 5082,
      account_name: 'Big Commerce Store c2a28',
      websites: [],
    },
    {
      account_id: 5084,
      account_name: 'Shopify Store a8a1af-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5094,
      account_name: 'Shopify Store app-security.myshopify.com',
      websites: [],
    },
    {
      account_id: 5095,
      account_name: 'Big Commerce Store lulkgjvhki',
      websites: [],
    },
    {
      account_id: 5096,
      account_name: 'Digital',
      websites: [],
    },
    {
      account_id: 5097,
      account_name: 'Big Commerce Store r3zfgp7e3p',
      websites: [],
    },
    {
      account_id: 5098,
      account_name: 'Best Discount Buys',
      websites: [],
    },
    {
      account_id: 5099,
      account_name: 'Shopify Store tim-jan-24.myshopify.com',
      websites: [],
    },
    {
      account_id: 5100,
      account_name: 'Big Commerce Store u7fqxqzssn',
      websites: [],
    },
    {
      account_id: 5101,
      account_name: 'miamdyaia',
      websites: [],
    },
    {
      account_id: 5102,
      account_name: 'Big Commerce Store r7wuzdofl8',
      websites: [],
    },
    {
      account_id: 5103,
      account_name: 'ismailmia',
      websites: [],
    },
    {
      account_id: 5104,
      account_name: 'Big Commerce Store ykrogmzckl',
      websites: [],
    },
    {
      account_id: 5105,
      account_name: 'Big Commerce Store gx8lwn1olx',
      websites: [],
    },
    {
      account_id: 5106,
      account_name: 'Dagimtarik',
      websites: [],
    },
    {
      account_id: 5107,
      account_name: 'Islamrame',
      websites: [],
    },
    {
      account_id: 5109,
      account_name: 'Camelkata',
      websites: [],
    },
    {
      account_id: 5110,
      account_name: 'Big Commerce Store lsx3ritsj7',
      websites: [],
    },
    {
      account_id: 5111,
      account_name: 'Eliyasmia',
      websites: [],
    },
    {
      account_id: 5112,
      account_name: 'Big Commerce Store dyn9riajaw',
      websites: [],
    },
    {
      account_id: 5113,
      account_name: 'lewisinglie',
      websites: [],
    },
    {
      account_id: 5114,
      account_name: 'Big Commerce Store oqbkczbcix',
      websites: [],
    },
    {
      account_id: 5115,
      account_name: 'Yasminem',
      websites: [],
    },
    {
      account_id: 5116,
      account_name: 'Big Commerce Store cy4lua1xoh',
      websites: [],
    },
    {
      account_id: 5117,
      account_name: 'We-R-Toys',
      websites: [],
    },
    {
      account_id: 5118,
      account_name: 'Big Commerce Store jvw972ez8c',
      websites: [
        {
          account_name: 'Big Commerce Store jvw972ez8c',
          website_id: 4657,
          website_name: 'mdanisali.mybigcommerce.com',
          skus: 26678,
        },
      ],
    },
    {
      account_id: 5119,
      account_name: 'Mdanisali',
      websites: [],
    },
    {
      account_id: 5120,
      account_name: 'Big Commerce Store fn6fczwhvu',
      websites: [
        {
          account_name: 'Big Commerce Store fn6fczwhvu',
          website_id: 4658,
          website_name: 'emilyvela.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5121,
      account_name: 'Emilyvela',
      websites: [],
    },
    {
      account_id: 5122,
      account_name: 'Big Commerce Store z4afotydcr',
      websites: [
        {
          account_name: 'Big Commerce Store z4afotydcr',
          website_id: 4659,
          website_name: 'kelseyweave.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5123,
      account_name: 'Kelseyweave',
      websites: [],
    },
    {
      account_id: 5124,
      account_name: 'Big Commerce Store 5hj2xvvnt9',
      websites: [],
    },
    {
      account_id: 5125,
      account_name: 'Bath1',
      websites: [],
    },
    {
      account_id: 5126,
      account_name: 'Big Commerce Store nuizsgwrav',
      websites: [
        {
          account_name: 'Big Commerce Store nuizsgwrav',
          website_id: 4670,
          website_name: 'www.halfpricebanners.com',
          skus: 1781,
        },
      ],
    },
    {
      account_id: 5088,
      account_name: 'Noone',
      websites: [
        {
          account_name: 'Noone',
          website_id: 4640,
          website_name: 'noonecarrier.com',
          skus: 11,
        },
      ],
    },
    {
      account_id: 5128,
      account_name: 'Big Commerce Store edlot5el87',
      websites: [
        {
          account_name: 'Big Commerce Store edlot5el87',
          website_id: 4664,
          website_name: 'kaitlinball.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5129,
      account_name: 'Kaitlinball',
      websites: [],
    },
    {
      account_id: 5130,
      account_name: 'Big Commerce Store fvrpux17kl',
      websites: [
        {
          account_name: 'Big Commerce Store fvrpux17kl',
          website_id: 4665,
          website_name: 'ggagakala.mybigcommerce.com',
          skus: 24102,
        },
      ],
    },
    {
      account_id: 5131,
      account_name: 'Kevin B. Hale',
      websites: [],
    },
    {
      account_id: 5132,
      account_name: 'Big Commerce Store iyuqb3lkjb',
      websites: [
        {
          account_name: 'Big Commerce Store iyuqb3lkjb',
          website_id: 4666,
          website_name: 'casenewma.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5133,
      account_name: 'Casenewma',
      websites: [],
    },
    {
      account_id: 5134,
      account_name: 'Big Commerce Store 1ozv4x',
      websites: [
        {
          account_name: 'Big Commerce Store 1ozv4x',
          website_id: 4667,
          website_name: 'www.treadmillpartszone.com',
          skus: 10715,
        },
      ],
    },
    {
      account_id: 5135,
      account_name: 'Exercise Equipment Service,Inc dba Treadmillpartszone.com',
      websites: [],
    },
    {
      account_id: 5136,
      account_name: 'Big Commerce Store itub39juo5',
      websites: [
        {
          account_name: 'Big Commerce Store itub39juo5',
          website_id: 4668,
          website_name: 'salimata.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5137,
      account_name: 'Salimata',
      websites: [],
    },
    {
      account_id: 5138,
      account_name: 'Big Commerce Store trkbcqlsgr',
      websites: [
        {
          account_name: 'Big Commerce Store trkbcqlsgr',
          website_id: 4669,
          website_name: 'nazdarbigo.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5139,
      account_name: 'Nazdarbigo',
      websites: [],
    },
    {
      account_id: 5140,
      account_name: 'Big Commerce Store jiyl5sxwg6',
      websites: [
        {
          account_name: 'Big Commerce Store jiyl5sxwg6',
          website_id: 4671,
          website_name: 'monisansa.mybigcommerce.com',
          skus: 7900,
        },
      ],
    },
    {
      account_id: 5141,
      account_name: 'Albert C. Mayer',
      websites: [],
    },
    {
      account_id: 5142,
      account_name: 'Big Commerce Store lmxjhahhcz',
      websites: [
        {
          account_name: 'Big Commerce Store lmxjhahhcz',
          website_id: 4672,
          website_name: 'laserleaf.com.au',
          skus: 191,
        },
      ],
    },
    {
      account_id: 5143,
      account_name: 'Laser Leaf',
      websites: [],
    },
    {
      account_id: 5144,
      account_name: 'Big Commerce Store pwvvct01ql',
      websites: [
        {
          account_name: 'Big Commerce Store pwvvct01ql',
          website_id: 4673,
          website_name: 'dnarakaka.mybigcommerce.com',
          skus: 16866,
        },
      ],
    },
    {
      account_id: 5145,
      account_name: 'D. McClendon',
      websites: [],
    },
    {
      account_id: 5146,
      account_name: 'Big Commerce Store 30br9uokch',
      websites: [
        {
          account_name: 'Big Commerce Store 30br9uokch',
          website_id: 4674,
          website_name: 'surryasur.mybigcommerce.com',
          skus: 24102,
        },
      ],
    },
    {
      account_id: 5147,
      account_name: 'C. Blandon',
      websites: [],
    },
    {
      account_id: 5148,
      account_name: 'Big Commerce Store s3oauzuywq',
      websites: [
        {
          account_name: 'Big Commerce Store s3oauzuywq',
          website_id: 4675,
          website_name: 'alishiafo.mybigcommerce.com',
          skus: 21112,
        },
      ],
    },
    {
      account_id: 5149,
      account_name: 'Alishiafo',
      websites: [],
    },
    {
      account_id: 5150,
      account_name: 'Shopify Store c3c464.myshopify.com',
      websites: [],
    },
    {
      account_id: 5151,
      account_name: 'ROCHES PARIS',
      websites: [],
    },
    {
      account_id: 5152,
      account_name: 'Big Commerce Store pabdmnrlho',
      websites: [
        {
          account_name: 'Big Commerce Store pabdmnrlho',
          website_id: 4677,
          website_name: 'vikramnee.mybigcommerce.com',
          skus: 20593,
        },
      ],
    },
    {
      account_id: 5153,
      account_name: 'Vikramnee',
      websites: [],
    },
    {
      account_id: 5154,
      account_name: 'Big Commerce Store qk76bznl27',
      websites: [
        {
          account_name: 'Big Commerce Store qk76bznl27',
          website_id: 4678,
          website_name: 'kumarpira.mybigcommerce.com',
          skus: 19911,
        },
      ],
    },
    {
      account_id: 5155,
      account_name: 'Kumarpira',
      websites: [],
    },
    {
      account_id: 5156,
      account_name: 'Big Commerce Store x5wofztsav',
      websites: [
        {
          account_name: 'Big Commerce Store x5wofztsav',
          website_id: 4679,
          website_name: 'abinktmun.mybigcommerce.com',
          skus: 14677,
        },
      ],
    },
    {
      account_id: 5157,
      account_name: 'Abinktmun',
      websites: [],
    },
    {
      account_id: 5158,
      account_name: 'Big Commerce Store hhyloulawv',
      websites: [
        {
          account_name: 'Big Commerce Store hhyloulawv',
          website_id: 4680,
          website_name: 'lonelychy.mybigcommerce.com',
          skus: 20543,
        },
      ],
    },
    {
      account_id: 5159,
      account_name: 'J. Hanson',
      websites: [],
    },
    {
      account_id: 5160,
      account_name: 'Big Commerce Store 2vihhm94jy',
      websites: [],
    },
    {
      account_id: 5161,
      account_name: 'James M. Ledet',
      websites: [],
    },
    {
      account_id: 5162,
      account_name: 'Big Commerce Store cgmkp3fxnr',
      websites: [
        {
          account_name: 'Big Commerce Store cgmkp3fxnr',
          website_id: 4682,
          website_name: 'hareshran.mybigcommerce.com',
          skus: 21112,
        },
      ],
    },
    {
      account_id: 5163,
      account_name: 'Peter J. Hatcher',
      websites: [],
    },
    {
      account_id: 5164,
      account_name: 'Big Commerce Store otp4rjqsbz',
      websites: [],
    },
    {
      account_id: 5165,
      account_name: 'CUPRA Collection',
      websites: [],
    },
    {
      account_id: 5166,
      account_name: 'Big Commerce Store iwkhziciwz',
      websites: [],
    },
    {
      account_id: 5167,
      account_name: 'Ramvikasy',
      websites: [],
    },
    {
      account_id: 5169,
      account_name: 'Khatoonkh',
      websites: [],
    },
    {
      account_id: 5170,
      account_name: 'Big Commerce Store aw9udpyo3t',
      websites: [
        {
          account_name: 'Big Commerce Store aw9udpyo3t',
          website_id: 4688,
          website_name: 'ravenosbo.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5171,
      account_name: 'Ravenosbo',
      websites: [],
    },
    {
      account_id: 5172,
      account_name: 'Big Commerce Store cgus8mxyam',
      websites: [
        {
          account_name: 'Big Commerce Store cgus8mxyam',
          website_id: 4689,
          website_name: 'rolandwilk.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5173,
      account_name: 'Rolandwilk',
      websites: [],
    },
    {
      account_id: 5174,
      account_name: 'Big Commerce Store io7gney5q4',
      websites: [
        {
          account_name: 'Big Commerce Store io7gney5q4',
          website_id: 4690,
          website_name: 'tracereynol.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5175,
      account_name: 'Tracereynol',
      websites: [],
    },
    {
      account_id: 5176,
      account_name: 'Big Commerce Store 29sqwuhkdt',
      websites: [
        {
          account_name: 'Big Commerce Store 29sqwuhkdt',
          website_id: 4691,
          website_name: 'aryannakra.mybigcommerce.com',
          skus: 5879,
        },
      ],
    },
    {
      account_id: 5177,
      account_name: 'Aryannakra',
      websites: [],
    },
    {
      account_id: 5178,
      account_name: 'Big Commerce Store jvegokyscx',
      websites: [
        {
          account_name: 'Big Commerce Store jvegokyscx',
          website_id: 4692,
          website_name: 'neanderth.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5179,
      account_name: 'Neanderth',
      websites: [],
    },
    {
      account_id: 5180,
      account_name: 'Big Commerce Store oc7ygle7is',
      websites: [
        {
          account_name: 'Big Commerce Store oc7ygle7is',
          website_id: 4693,
          website_name: 'asmetasm.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5181,
      account_name: 'Asmetasm',
      websites: [],
    },
    {
      account_id: 5182,
      account_name: 'Big Commerce Store kdjpr3ely1',
      websites: [
        {
          account_name: 'Big Commerce Store kdjpr3ely1',
          website_id: 4694,
          website_name: 'shafiqul.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5183,
      account_name: 'Shafiqul',
      websites: [],
    },
    {
      account_id: 5184,
      account_name: 'Big Commerce Store qsopoiz7ys',
      websites: [
        {
          account_name: 'Big Commerce Store qsopoiz7ys',
          website_id: 4695,
          website_name: 'soasetye.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5185,
      account_name: 'soasetye',
      websites: [],
    },
    {
      account_id: 5186,
      account_name: 'Big Commerce Store 19yvw2kd6k',
      websites: [
        {
          account_name: 'Big Commerce Store 19yvw2kd6k',
          website_id: 4696,
          website_name: 'rabikytyy.mybigcommerce.com',
          skus: 17280,
        },
      ],
    },
    {
      account_id: 5187,
      account_name: 'Juan K. Rivers',
      websites: [],
    },
    {
      account_id: 5188,
      account_name: 'Big Commerce Store 5vbt7mkejw',
      websites: [
        {
          account_name: 'Big Commerce Store 5vbt7mkejw',
          website_id: 4697,
          website_name: 'rrollcake.mybigcommerce.com',
          skus: 20380,
        },
      ],
    },
    {
      account_id: 5189,
      account_name: 'Robert M. Jackson',
      websites: [],
    },
    {
      account_id: 5190,
      account_name: 'Big Commerce Store lt0ipp5eta',
      websites: [
        {
          account_name: 'Big Commerce Store lt0ipp5eta',
          website_id: 4698,
          website_name: 'deltapetco.com',
          skus: 104,
        },
      ],
    },
    {
      account_id: 5191,
      account_name: 'Delta Pet Co.',
      websites: [],
    },
    {
      account_id: 5192,
      account_name: 'Big Commerce Store taohmhsfvo',
      websites: [
        {
          account_name: 'Big Commerce Store taohmhsfvo',
          website_id: 4702,
          website_name: 'mbeuio.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5193,
      account_name: 'mbeuio',
      websites: [],
    },
    {
      account_id: 5194,
      account_name: 'Big Commerce Store osay2ljhkc',
      websites: [
        {
          account_name: 'Big Commerce Store osay2ljhkc',
          website_id: 4704,
          website_name: 'khandelwa.mybigcommerce.com',
          skus: 26678,
        },
      ],
    },
    {
      account_id: 5195,
      account_name: 'Big Commerce Store rl4od1kmqg',
      websites: [
        {
          account_name: 'Big Commerce Store rl4od1kmqg',
          website_id: 4705,
          website_name: 'sojipoiy.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5196,
      account_name: 'Khandelwa',
      websites: [],
    },
    {
      account_id: 5197,
      account_name: 'sojipoiy',
      websites: [],
    },
    {
      account_id: 5198,
      account_name: 'Big Commerce Store yyorkb5zvw',
      websites: [
        {
          account_name: 'Big Commerce Store yyorkb5zvw',
          website_id: 4706,
          website_name: 'skatarina.mybigcommerce.com',
          skus: 16866,
        },
      ],
    },
    {
      account_id: 5199,
      account_name: 'Joel C. Fenner',
      websites: [],
    },
    {
      account_id: 5200,
      account_name: 'Big Commerce Store tarabi4o3j',
      websites: [
        {
          account_name: 'Big Commerce Store tarabi4o3j',
          website_id: 4707,
          website_name: 'nlilakara.mybigcommerce.com',
          skus: 17840,
        },
      ],
    },
    {
      account_id: 5201,
      account_name: 'Jesus D. Schermerhorn',
      websites: [],
    },
    {
      account_id: 5202,
      account_name: 'Big Commerce Store ypxweozf5v',
      websites: [],
    },
    {
      account_id: 5203,
      account_name: 'Nottage Joinery Ltd',
      websites: [],
    },
    {
      account_id: 5204,
      account_name: 'Big Commerce Store holtklayfv',
      websites: [
        {
          account_name: 'Big Commerce Store holtklayfv',
          website_id: 4710,
          website_name: 'www.packaging-expressinc.com',
          skus: 4148,
        },
      ],
    },
    {
      account_id: 5205,
      account_name: 'Packaging-Express',
      websites: [],
    },
    {
      account_id: 5206,
      account_name: 'Big Commerce Store i88ifvxjfo',
      websites: [
        {
          account_name: 'Big Commerce Store i88ifvxjfo',
          website_id: 4711,
          website_name: 'anishanis.mybigcommerce.com',
          skus: 20543,
        },
      ],
    },
    {
      account_id: 5207,
      account_name: 'Earle T. Sawyer',
      websites: [],
    },
    {
      account_id: 5208,
      account_name: 'Big Commerce Store jvjygksjax',
      websites: [
        {
          account_name: 'Big Commerce Store jvjygksjax',
          website_id: 4712,
          website_name: 'ngdhgdbjjfvn1.mybigcommerce.com',
          skus: 21062,
        },
      ],
    },
    {
      account_id: 5209,
      account_name: 'Ngdhgdbjj',
      websites: [],
    },
    {
      account_id: 5210,
      account_name: 'Big Commerce Store jne1oe2zkv',
      websites: [
        {
          account_name: 'Big Commerce Store jne1oe2zkv',
          website_id: 4713,
          website_name: 'ritikraju.mybigcommerce.com',
          skus: 24102,
        },
      ],
    },
    {
      account_id: 5211,
      account_name: 'Ritikraju',
      websites: [],
    },
    {
      account_id: 5212,
      account_name: 'Big Commerce Store wumlk9bszx',
      websites: [
        {
          account_name: 'Big Commerce Store wumlk9bszx',
          website_id: 4714,
          website_name: 'bishubhum.mybigcommerce.com',
          skus: 22765,
        },
      ],
    },
    {
      account_id: 5213,
      account_name: 'Bishubhum',
      websites: [],
    },
    {
      account_id: 5214,
      account_name: 'Big Commerce Store 5qmvhcbjdy',
      websites: [
        {
          account_name: 'Big Commerce Store 5qmvhcbjdy',
          website_id: 4715,
          website_name: 'hossainas.mybigcommerce.com',
          skus: 21112,
        },
      ],
    },
    {
      account_id: 5215,
      account_name: 'Hossainas',
      websites: [],
    },
    {
      account_id: 5216,
      account_name: 'Big Commerce Store z771oekww5',
      websites: [
        {
          account_name: 'Big Commerce Store z771oekww5',
          website_id: 4716,
          website_name: 'chinnapay.mybigcommerce.com',
          skus: 16866,
        },
      ],
    },
    {
      account_id: 5217,
      account_name: 'Chinnapay',
      websites: [],
    },
    {
      account_id: 5218,
      account_name: 'Big Commerce Store mwzotjcshf',
      websites: [
        {
          account_name: 'Big Commerce Store mwzotjcshf',
          website_id: 4717,
          website_name: 'emanuelay.mybigcommerce.com',
          skus: 6613,
        },
      ],
    },
    {
      account_id: 5219,
      account_name: 'Emanuelay',
      websites: [],
    },
    {
      account_id: 5220,
      account_name: 'Big Commerce Store kilrsvgvvk',
      websites: [
        {
          account_name: 'Big Commerce Store kilrsvgvvk',
          website_id: 4719,
          website_name: 'ryanbelt.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5221,
      account_name: 'Ryanbelt',
      websites: [],
    },
    {
      account_id: 5222,
      account_name: 'Big Commerce Store tfgq5xnm5e',
      websites: [
        {
          account_name: 'Big Commerce Store tfgq5xnm5e',
          website_id: 4720,
          website_name: 'briandia.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5223,
      account_name: 'briandia',
      websites: [],
    },
    {
      account_id: 5224,
      account_name: 'Big Commerce Store vdyfgfeydy',
      websites: [
        {
          account_name: 'Big Commerce Store vdyfgfeydy',
          website_id: 4721,
          website_name: 'nabazbar.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5225,
      account_name: 'nabazbar',
      websites: [],
    },
    {
      account_id: 5226,
      account_name: 'Shopify Store m-honline.myshopify.com',
      websites: [],
    },
    {
      account_id: 5227,
      account_name: 'M&H Fashion',
      websites: [],
    },
    {
      account_id: 5228,
      account_name: 'Big Commerce Store u06mjw',
      websites: [],
    },
    {
      account_id: 5229,
      account_name: 'Pool and Spa Supply Store',
      websites: [],
    },
    {
      account_id: 5230,
      account_name: 'Big Commerce Store v2bpcdgmrb',
      websites: [
        {
          account_name: 'Big Commerce Store v2bpcdgmrb',
          website_id: 4724,
          website_name: 'kabitamod.mybigcommerce.com',
          skus: 3050,
        },
      ],
    },
    {
      account_id: 5231,
      account_name: 'Kabitamod',
      websites: [],
    },
    {
      account_id: 5232,
      account_name: 'Big Commerce Store 8431orewka',
      websites: [],
    },
    {
      account_id: 5233,
      account_name: 'One Source Pool',
      websites: [],
    },
    {
      account_id: 5234,
      account_name: 'Big Commerce Store fr7iwzhwk9',
      websites: [
        {
          account_name: 'Big Commerce Store fr7iwzhwk9',
          website_id: 4726,
          website_name: 'koushikda.mybigcommerce.com',
          skus: 3847,
        },
      ],
    },
    {
      account_id: 5235,
      account_name: 'Koushikda',
      websites: [],
    },
    {
      account_id: 5236,
      account_name: 'Big Commerce Store hpnnb1q8jh',
      websites: [
        {
          account_name: 'Big Commerce Store hpnnb1q8jh',
          website_id: 4727,
          website_name: 'aosindrag.mybigcommerce.com',
          skus: 2190,
        },
      ],
    },
    {
      account_id: 5237,
      account_name: 'Aosindrag',
      websites: [],
    },
    {
      account_id: 5238,
      account_name: 'Big Commerce Store uxtqaebcwj',
      websites: [
        {
          account_name: 'Big Commerce Store uxtqaebcwj',
          website_id: 4728,
          website_name: 'mashahara.mybigcommerce.com',
          skus: 2200,
        },
      ],
    },
    {
      account_id: 5239,
      account_name: 'Mashahara',
      websites: [],
    },
    {
      account_id: 5240,
      account_name: 'Big Commerce Store vsfamjp0ha',
      websites: [
        {
          account_name: 'Big Commerce Store vsfamjp0ha',
          website_id: 4729,
          website_name: 'afzalbaig.mybigcommerce.com',
          skus: 3359,
        },
      ],
    },
    {
      account_id: 5241,
      account_name: 'Afzalbaig',
      websites: [],
    },
    {
      account_id: 5242,
      account_name: 'Big Commerce Store q1qersf4rj',
      websites: [
        {
          account_name: 'Big Commerce Store q1qersf4rj',
          website_id: 4730,
          website_name: 'huntercisne.mybigcommerce.com',
          skus: 27471,
        },
      ],
    },
    {
      account_id: 5243,
      account_name: 'huntercisne',
      websites: [],
    },
    {
      account_id: 5244,
      account_name: 'Shopify Store 551b3e-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5245,
      account_name: 'Shopify Store surfdevils.myshopify.com',
      websites: [],
    },
    {
      account_id: 5246,
      account_name: 'Surfdevils,sl',
      websites: [],
    },
    {
      account_id: 5247,
      account_name: 'Big Commerce Store zbepadkaxz',
      websites: [
        {
          account_name: 'Big Commerce Store zbepadkaxz',
          website_id: 4733,
          website_name: 'hmistoreonline.com',
          skus: 486,
        },
      ],
    },
    {
      account_id: 5248,
      account_name: 'H&MI LLC',
      websites: [],
    },
    {
      account_id: 5249,
      account_name: 'Big Commerce Store xdbfif9kf0',
      websites: [
        {
          account_name: 'Big Commerce Store xdbfif9kf0',
          website_id: 4735,
          website_name: 'azhar-ansari.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 5250,
      account_name: 'Azhar Ansari اظہر انصاری',
      websites: [],
    },
    {
      account_id: 5251,
      account_name: 'Big Commerce Store iwdoqzeyjn',
      websites: [
        {
          account_name: 'Big Commerce Store iwdoqzeyjn',
          website_id: 4736,
          website_name: 'melissash.mybigcommerce.com',
          skus: 16866,
        },
      ],
    },
    {
      account_id: 5252,
      account_name: 'Melissash',
      websites: [],
    },
    {
      account_id: 5253,
      account_name: 'Shopify Store dcc045-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5254,
      account_name: 'Shopify Store c63188-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5255,
      account_name: 'Shopify Store 074fc8-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5256,
      account_name: 'Shopify Store df5e23-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5257,
      account_name: 'scaveat',
      websites: [],
    },
    {
      account_id: 5258,
      account_name: 'Shopify Store 4bdef0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5259,
      account_name: 'Eynna Hair',
      websites: [],
    },
    {
      account_id: 5260,
      account_name: 'Big Commerce Store gpxs7lyjyk',
      websites: [
        {
          account_name: 'Big Commerce Store gpxs7lyjyk',
          website_id: 4742,
          website_name: 'vakcharla.mybigcommerce.com',
          skus: 16866,
        },
      ],
    },
    {
      account_id: 5261,
      account_name: 'Vakcharla',
      websites: [],
    },
    {
      account_id: 5262,
      account_name: 'Big Commerce Store 3h2fab9myx',
      websites: [
        {
          account_name: 'Big Commerce Store 3h2fab9myx',
          website_id: 4743,
          website_name: 'nuramhoma.mybigcommerce.com',
          skus: 22815,
        },
      ],
    },
    {
      account_id: 5263,
      account_name: 'Nuramhoma',
      websites: [],
    },
    {
      account_id: 5264,
      account_name: 'Big Commerce Store ung1x71we5',
      websites: [
        {
          account_name: 'Big Commerce Store ung1x71we5',
          website_id: 4744,
          website_name: 'durgatask.mybigcommerce.com',
          skus: 24102,
        },
      ],
    },
    {
      account_id: 5265,
      account_name: 'Durgatask',
      websites: [],
    },
    {
      account_id: 5266,
      account_name: 'Shopify Store chronofinder-ltd.myshopify.com',
      websites: [],
    },
    {
      account_id: 5267,
      account_name: 'Shopify Store fb6031-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5268,
      account_name: 'Big Commerce Store 3snfr1xgyr',
      websites: [
        {
          account_name: 'Big Commerce Store 3snfr1xgyr',
          website_id: 4748,
          website_name: 'jayprakas.mybigcommerce.com',
          skus: 21112,
        },
      ],
    },
    {
      account_id: 5269,
      account_name: 'Jayprakas',
      websites: [],
    },
    {
      account_id: 5270,
      account_name: 'Big Commerce Store hbybodvmr8',
      websites: [
        {
          account_name: 'Big Commerce Store hbybodvmr8',
          website_id: 4749,
          website_name: 'veerlamal.mybigcommerce.com',
          skus: 20593,
        },
      ],
    },
    {
      account_id: 5271,
      account_name: 'Veerlamal',
      websites: [],
    },
    {
      account_id: 5272,
      account_name: 'Big Commerce Store dzcggltnw5',
      websites: [
        {
          account_name: 'Big Commerce Store dzcggltnw5',
          website_id: 4750,
          website_name: 'mengalhan.mybigcommerce.com',
          skus: 20851,
        },
      ],
    },
    {
      account_id: 5273,
      account_name: 'Mengalhan',
      websites: [],
    },
    {
      account_id: 5274,
      account_name: 'Big Commerce Store 6a2b4svss1',
      websites: [
        {
          account_name: 'Big Commerce Store 6a2b4svss1',
          website_id: 6474,
          website_name: 'melbourneofficesupplies.com.au',
          skus: 47151,
        },
      ],
    },
    {
      account_id: 5275,
      account_name: 'Melbourne Office Supplies',
      websites: [],
    },
    {
      account_id: 5276,
      account_name: 'Shopify Store clothing-company-sydney.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store clothing-company-sydney.myshopify.com',
          website_id: 6418,
          website_name: 'clothingcompanysydney.com',
          skus: 126941,
        },
      ],
    },
    {
      account_id: 5277,
      account_name: 'Big Commerce Store sac2ehldje',
      websites: [
        {
          account_name: 'Big Commerce Store sac2ehldje',
          website_id: 4753,
          website_name: 'magsce.mybigcommerce.com',
          skus: 79,
        },
      ],
    },
    {
      account_id: 5278,
      account_name: 'magsce',
      websites: [],
    },
    {
      account_id: 5279,
      account_name: 'Big Commerce Store 7zind1quv3',
      websites: [
        {
          account_name: 'Big Commerce Store 7zind1quv3',
          website_id: 4754,
          website_name: 'primework.com.au',
          skus: 47193,
        },
      ],
    },
    {
      account_id: 5280,
      account_name: 'Shopify Store fonzieabbott.myshopify.com',
      websites: [],
    },
    {
      account_id: 5281,
      account_name: 'Contrarian Path',
      websites: [],
    },
    {
      account_id: 5282,
      account_name: 'Shopify Store cf4fe0-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5283,
      account_name: 'Baskbay Sa',
      websites: [],
    },
    {
      account_id: 5284,
      account_name: 'Shopify Store c0773e-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5285,
      account_name: 'Frannie Dress Boutique',
      websites: [],
    },
    {
      account_id: 5286,
      account_name: 'Shopify Store b2563b-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5287,
      account_name: 'Shopify Store 5cb0b6-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5288,
      account_name: 'Shopify Store ballistic-sport-test.myshopify.com',
      websites: [],
    },
    {
      account_id: 5289,
      account_name: 'test-ballistic',
      websites: [],
    },
    {
      account_id: 5290,
      account_name: 'Shopify Store 8c6d86-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5291,
      account_name: 'Ss49',
      websites: [],
    },
    {
      account_id: 5292,
      account_name: 'Shopify Store 9bab5b-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5293,
      account_name: 'Big Commerce Store iuzfwwqjey',
      websites: [
        {
          account_name: 'Big Commerce Store iuzfwwqjey',
          website_id: 4764,
          website_name: 'gugulothc.mybigcommerce.com',
          skus: 21112,
        },
      ],
    },
    {
      account_id: 5294,
      account_name: 'Gugulothc',
      websites: [],
    },
    {
      account_id: 5295,
      account_name: 'Big Commerce Store oyzn3f8ikt',
      websites: [
        {
          account_name: 'Big Commerce Store oyzn3f8ikt',
          website_id: 4766,
          website_name: 'klnakatar.mybigcommerce.com',
          skus: 20593,
        },
      ],
    },
    {
      account_id: 5296,
      account_name: 'Klnakatar',
      websites: [],
    },
    {
      account_id: 5297,
      account_name: 'Shopify Store ozchemistonline.myshopify.com',
      websites: [],
    },
    {
      account_id: 5298,
      account_name: 'Big Commerce Store oaztsndymf',
      websites: [
        {
          account_name: 'Big Commerce Store oaztsndymf',
          website_id: 4768,
          website_name: 'kanhayaku.mybigcommerce.com',
          skus: 20851,
        },
      ],
    },
    {
      account_id: 5299,
      account_name: 'Kanhayaku',
      websites: [],
    },
    {
      account_id: 5301,
      account_name: 'Shopify Store cf7ed5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5302,
      account_name: 'keylandia',
      websites: [],
    },
    {
      account_id: 5303,
      account_name: 'Shopify Store a70184-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5304,
      account_name: 'Shopify Store a40384-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5305,
      account_name: 'Weed Wonderlust',
      websites: [],
    },
    {
      account_id: 5306,
      account_name: 'Shopify Store barcode-store-5821.myshopify.com',
      websites: [],
    },
    {
      account_id: 5307,
      account_name: 'Shopify Store b43357-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5308,
      account_name: 'Shopify Store c206f5-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5309,
      account_name: 'Shopify Store 37f54f-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5310,
      account_name: 'Shopify Store tshop-3166.myshopify.com',
      websites: [],
    },
    {
      account_id: 5311,
      account_name: 'Shopify Store ihackers-ihackers.myshopify.com',
      websites: [],
    },
    {
      account_id: 5312,
      account_name: 'Shopify Store 8e53eb.myshopify.com',
      websites: [],
    },
    {
      account_id: 5313,
      account_name: 'Shopify Store 2a2291-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5314,
      account_name: 'Boomerang Enterprises',
      websites: [],
    },
    {
      account_id: 5315,
      account_name: 'Shopify Store 52c2a9-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5316,
      account_name: 'Shopify Store 58ae0f-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5317,
      account_name: 'Shopify Store 0be395-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5318,
      account_name: 'Big Commerce Store kyfzvvyw83',
      websites: [
        {
          account_name: 'Big Commerce Store kyfzvvyw83',
          website_id: 4787,
          website_name: 'gandhikum.mybigcommerce.com',
          skus: 19700,
        },
      ],
    },
    {
      account_id: 5319,
      account_name: 'Gandhikum',
      websites: [],
    },
    {
      account_id: 5320,
      account_name: 'Big Commerce Store sjoocxo7yr',
      websites: [],
    },
    {
      account_id: 5321,
      account_name: 'Shopify Store ballistic-sport.myshopify.com',
      websites: [],
    },
    {
      account_id: 5322,
      account_name: 'Shopify Store amorcustomgifts.myshopify.com',
      websites: [],
    },
    {
      account_id: 5323,
      account_name: 'Amor Custom Gifts',
      websites: [],
    },
    {
      account_id: 5324,
      account_name: 'Big Commerce Store blizclgnnk',
      websites: [
        {
          account_name: 'Big Commerce Store blizclgnnk',
          website_id: 4792,
          website_name: 'pintubhar.mybigcommerce.com',
          skus: 2190,
        },
      ],
    },
    {
      account_id: 5325,
      account_name: 'Pintubhar',
      websites: [],
    },
    {
      account_id: 5326,
      account_name: 'Big Commerce Store 4r7do1cfje',
      websites: [
        {
          account_name: 'Big Commerce Store 4r7do1cfje',
          website_id: 4793,
          website_name: 'rawatakas.mybigcommerce.com',
          skus: 3847,
        },
      ],
    },
    {
      account_id: 5327,
      account_name: 'Rawatakas',
      websites: [],
    },
    {
      account_id: 5328,
      account_name: 'Shopify Store 187b9c-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5329,
      account_name: 'Big Commerce Store vodew8uc43',
      websites: [],
    },
    {
      account_id: 5330,
      account_name: 'Big Commerce Store 2mck9oahdj',
      websites: [],
    },
    {
      account_id: 5331,
      account_name: 'Compra e Dorme, Lda',
      websites: [],
    },
    {
      account_id: 5332,
      account_name: 'Shopify Store f90ce1.myshopify.com',
      websites: [],
    },
    {
      account_id: 5333,
      account_name: 'Netmotive',
      websites: [],
    },
    {
      account_id: 5334,
      account_name: 'Big Commerce Store lyqtwoskzl',
      websites: [
        {
          account_name: 'Big Commerce Store lyqtwoskzl',
          website_id: 4798,
          website_name: 'vewvbwev.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 5335,
      account_name: 'Big Commerce Store w9xr1xcvlf',
      websites: [
        {
          account_name: 'Big Commerce Store w9xr1xcvlf',
          website_id: 4799,
          website_name: 'ad-portafolio.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 5336,
      account_name: 'AD Inmobiliaria',
      websites: [],
    },
    {
      account_id: 5337,
      account_name: 'Shopify Store c37eaa.myshopify.com',
      websites: [],
    },
    {
      account_id: 5338,
      account_name: 'Cine Sound Home',
      websites: [],
    },
    {
      account_id: 5339,
      account_name: 'Big Commerce Store cnts7le9et',
      websites: [
        {
          account_name: 'Big Commerce Store cnts7le9et',
          website_id: 4801,
          website_name: 'raihinmal.mybigcommerce.com',
          skus: 2200,
        },
      ],
    },
    {
      account_id: 5340,
      account_name: 'Raihinmal',
      websites: [],
    },
    {
      account_id: 5341,
      account_name: 'Big Commerce Store hmwajaescf',
      websites: [
        {
          account_name: 'Big Commerce Store hmwajaescf',
          website_id: 4802,
          website_name: 'rajkawasa.mybigcommerce.com',
          skus: 3359,
        },
      ],
    },
    {
      account_id: 5342,
      account_name: 'Rajkawasa',
      websites: [],
    },
    {
      account_id: 5343,
      account_name: 'Shopify Store 1ce0e3-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5344,
      account_name: 'Big Commerce Store hnlwpdpgzx',
      websites: [
        {
          account_name: 'Big Commerce Store hnlwpdpgzx',
          website_id: 4805,
          website_name: 'multicolor.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5345,
      account_name: 'Multicolor',
      websites: [],
    },
    {
      account_id: 5346,
      account_name: 'Big Commerce Store bpk05qdgxf',
      websites: [
        {
          account_name: 'Big Commerce Store bpk05qdgxf',
          website_id: 4807,
          website_name: 'kalentrava.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5347,
      account_name: 'Kalentrava',
      websites: [],
    },
    {
      account_id: 5348,
      account_name: 'Shopify Store mkkoindia.myshopify.com',
      websites: [],
    },
    {
      account_id: 5349,
      account_name: 'MKKO India',
      websites: [],
    },
    {
      account_id: 5350,
      account_name: 'Shopify Store 29fbf9.myshopify.com',
      websites: [],
    },
    {
      account_id: 5351,
      account_name: 'Shopify Store 9d1cfc-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5352,
      account_name: 'Sewlas',
      websites: [],
    },
    {
      account_id: 5353,
      account_name: 'Shopify Store d93451.myshopify.com',
      websites: [],
    },
    {
      account_id: 5354,
      account_name: 'DJW Enterprses',
      websites: [],
    },
    {
      account_id: 5355,
      account_name: 'Big Commerce Store aioezn',
      websites: [
        {
          account_name: 'Big Commerce Store aioezn',
          website_id: 4813,
          website_name: 'yournaturestore.com',
          skus: 353,
        },
      ],
    },
    {
      account_id: 5356,
      account_name: 'biogro products llc',
      websites: [],
    },
    {
      account_id: 5397,
      account_name: 'Shopify Store 6323f0-7a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5358,
      account_name: 'S T E L L I N O ',
      websites: [],
    },
    {
      account_id: 5359,
      account_name: 'Big Commerce Store u6lfqv5iy2',
      websites: [
        {
          account_name: 'Big Commerce Store u6lfqv5iy2',
          website_id: 4815,
          website_name: 'mohamedsile.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5360,
      account_name: 'Mohamedsile',
      websites: [],
    },
    {
      account_id: 5361,
      account_name: 'Big Commerce Store drup2kolss',
      websites: [
        {
          account_name: 'Big Commerce Store drup2kolss',
          website_id: 4816,
          website_name: 'kurdaxosh.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5362,
      account_name: 'Kurdaxosh',
      websites: [],
    },
    {
      account_id: 5363,
      account_name: 'Big Commerce Store d7pyopbbud',
      websites: [
        {
          account_name: 'Big Commerce Store d7pyopbbud',
          website_id: 4817,
          website_name: 'kayaross.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5364,
      account_name: 'Kayaross',
      websites: [],
    },
    {
      account_id: 5365,
      account_name: 'ecstasy.homes',
      websites: [],
    },
    {
      account_id: 5366,
      account_name: 'Big Commerce Store 0ubn4phqwd',
      websites: [
        {
          account_name: 'Big Commerce Store 0ubn4phqwd',
          website_id: 4818,
          website_name: 'ariarivers.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5367,
      account_name: 'Ariarivers',
      websites: [],
    },
    {
      account_id: 5368,
      account_name: 'Shopify Store 03bd6e-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5369,
      account_name: 'Shimmer Shop SD ',
      websites: [],
    },
    {
      account_id: 5371,
      account_name: 'Big Commerce Store j181dw5tkb',
      websites: [
        {
          account_name: 'Big Commerce Store j181dw5tkb',
          website_id: 4823,
          website_name: 'deonhender.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5372,
      account_name: 'Deonhender',
      websites: [],
    },
    {
      account_id: 5373,
      account_name: 'Shopify Store 038b2c-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5374,
      account_name: 'Éclaté',
      websites: [],
    },
    {
      account_id: 5375,
      account_name: 'Big Commerce Store weg6zokf7t',
      websites: [
        {
          account_name: 'Big Commerce Store weg6zokf7t',
          website_id: 4825,
          website_name: 'joelbrown.mybigcommerce.com',
          skus: 16839,
        },
      ],
    },
    {
      account_id: 5376,
      account_name: 'Joelbrown',
      websites: [],
    },
    {
      account_id: 5377,
      account_name: 'Shopify Store 9dab82-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 9dab82-2.myshopify.com',
          website_id: 4826,
          website_name: 'futurefitnessfood.it',
          skus: 598,
        },
      ],
    },
    {
      account_id: 5378,
      account_name: 'Future Fitness Food s.r.l',
      websites: [],
    },
    {
      account_id: 5379,
      account_name: 'Big Commerce Store mo37taf85r',
      websites: [],
    },
    {
      account_id: 5380,
      account_name: 'DealsTunnel',
      websites: [],
    },
    {
      account_id: 5381,
      account_name: 'Shopify Store maxxteknik.myshopify.com',
      websites: [],
    },
    {
      account_id: 5382,
      account_name: 'Shopify Store 2ca6fb-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5383,
      account_name: 'Shopify Store 42758b-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5384,
      account_name: 'Shopify Store 03bd64.myshopify.com',
      websites: [],
    },
    {
      account_id: 5385,
      account_name: 'Perfume villa',
      websites: [],
    },
    {
      account_id: 5398,
      account_name: 'Movado',
      websites: [],
    },
    {
      account_id: 5357,
      account_name: 'Stellino AU',
      websites: [],
    },
    {
      account_id: 5387,
      account_name: 'Big Commerce Store imovgikbis',
      websites: [
        {
          account_name: 'Big Commerce Store imovgikbis',
          website_id: 4837,
          website_name: 'alliegarris.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5388,
      account_name: 'Alliegarris',
      websites: [],
    },
    {
      account_id: 5389,
      account_name: 'Big Commerce Store k46ahkhe05',
      websites: [
        {
          account_name: 'Big Commerce Store k46ahkhe05',
          website_id: 4838,
          website_name: 'brianabar.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5390,
      account_name: 'Brianabar',
      websites: [],
    },
    {
      account_id: 5391,
      account_name: 'Shopify Store 9f3e6c.myshopify.com',
      websites: [],
    },
    {
      account_id: 5392,
      account_name: 'Walpo Jamaica Tours',
      websites: [],
    },
    {
      account_id: 5393,
      account_name: 'Shopify Store ad9edb.myshopify.com',
      websites: [],
    },
    {
      account_id: 5394,
      account_name: 'Big Commerce Store rlct8cmtkd',
      websites: [],
    },
    {
      account_id: 5395,
      account_name: 'Automotive Service & Petroleum Equipment',
      websites: [],
    },
    {
      account_id: 5396,
      account_name: 'Shopify Store e54e8d-eb.myshopify.com',
      websites: [],
    },
    {
      account_id: 5399,
      account_name: 'Shopify Store c81be6-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5400,
      account_name: 'Shopify Store rose-beauty-product.myshopify.com',
      websites: [],
    },
    {
      account_id: 5401,
      account_name: 'rose beauty products',
      websites: [],
    },
    {
      account_id: 5402,
      account_name: 'Shopify Store b2e3c7-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5403,
      account_name: 'Leads Load',
      websites: [],
    },
    {
      account_id: 5404,
      account_name: 'Shopify Store 540901-90.myshopify.com',
      websites: [],
    },
    {
      account_id: 5405,
      account_name: 'Shopify Store a55b6d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5406,
      account_name: 'Internet odd and ends Store',
      websites: [],
    },
    {
      account_id: 5407,
      account_name: 'Shopify Store c1b9a3-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5408,
      account_name: 'electronix.ie',
      websites: [],
    },
    {
      account_id: 5409,
      account_name: 'Shopify Store e762b7-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5410,
      account_name: 'arotech',
      websites: [],
    },
    {
      account_id: 5411,
      account_name: 'Shopify Store dd2e47-cc.myshopify.com',
      websites: [],
    },
    {
      account_id: 5412,
      account_name: 'AGM TRADERS ',
      websites: [],
    },
    {
      account_id: 5413,
      account_name: 'Big Commerce Store jojxlhwe8p',
      websites: [
        {
          account_name: 'Big Commerce Store jojxlhwe8p',
          website_id: 4853,
          website_name: 'hopelind.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5414,
      account_name: 'Hopelind',
      websites: [],
    },
    {
      account_id: 5415,
      account_name: 'Big Commerce Store zj7xxxjhho',
      websites: [
        {
          account_name: 'Big Commerce Store zj7xxxjhho',
          website_id: 4854,
          website_name: 'karterlam.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5416,
      account_name: 'Karterlam',
      websites: [],
    },
    {
      account_id: 5417,
      account_name: 'Shopify Store 3afd6a-3b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5418,
      account_name: 'Pilgrim Clothing',
      websites: [],
    },
    {
      account_id: 5420,
      account_name: 'UberChoice LTD',
      websites: [],
    },
    {
      account_id: 5421,
      account_name: 'Shopify Store arkive-atelier.myshopify.com',
      websites: [],
    },
    {
      account_id: 5422,
      account_name: 'Shopify Store test-multireed-language.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store test-multireed-language.myshopify.com',
          website_id: 4858,
          website_name: 'test-multireed-language.myshopify.com',
          skus: 5,
        },
      ],
    },
    {
      account_id: 5423,
      account_name: 'riya jain',
      websites: [],
    },
    {
      account_id: 5425,
      account_name: 'Shopify Store d94302.myshopify.com',
      websites: [],
    },
    {
      account_id: 5426,
      account_name: 'mangoneon',
      websites: [],
    },
    {
      account_id: 5427,
      account_name: 'Shopify Store eeab4f-80.myshopify.com',
      websites: [],
    },
    {
      account_id: 5428,
      account_name: 'Shopify Store c4885a-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5429,
      account_name: 'llavea',
      websites: [],
    },
    {
      account_id: 5430,
      account_name: 'Big Commerce Store xalpbddnes',
      websites: [
        {
          account_name: 'Big Commerce Store xalpbddnes',
          website_id: 4867,
          website_name: 'eyasinroha.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5431,
      account_name: 'Eyasinroha',
      websites: [],
    },
    {
      account_id: 5432,
      account_name: 'Big Commerce Store yprev3easc',
      websites: [
        {
          account_name: 'Big Commerce Store yprev3easc',
          website_id: 4868,
          website_name: 'santihurs.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5433,
      account_name: 'Santihurs',
      websites: [],
    },
    {
      account_id: 5434,
      account_name: 'Big Commerce Store qbp3pczjz6',
      websites: [
        {
          account_name: 'Big Commerce Store qbp3pczjz6',
          website_id: 4869,
          website_name: 'shimuluio.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5435,
      account_name: 'Shimuluio',
      websites: [],
    },
    {
      account_id: 5436,
      account_name: 'Big Commerce Store zamwgrczbe',
      websites: [
        {
          account_name: 'Big Commerce Store zamwgrczbe',
          website_id: 4870,
          website_name: 'oyshituyr.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5437,
      account_name: 'Oyshituyr',
      websites: [],
    },
    {
      account_id: 5438,
      account_name: 'Shopify Store 3f8ed9-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5439,
      account_name: 'Shopify Store 5c50cb-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5440,
      account_name: 'Shopify Store bb48fb-95.myshopify.com',
      websites: [],
    },
    {
      account_id: 5441,
      account_name: 'Espaço Mulher ',
      websites: [],
    },
    {
      account_id: 5442,
      account_name: 'Big Commerce Store 17gicadb8v',
      websites: [
        {
          account_name: 'Big Commerce Store 17gicadb8v',
          website_id: 4874,
          website_name: 'kennedywildbirdfood.co.uk',
          skus: 811,
        },
      ],
    },
    {
      account_id: 5443,
      account_name: 'Shopify Store 45404b-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5444,
      account_name: 'Big Commerce Store opxeix8nwo',
      websites: [
        {
          account_name: 'Big Commerce Store opxeix8nwo',
          website_id: 4877,
          website_name: 'jamesellington684.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 5445,
      account_name: 'jamesellington',
      websites: [],
    },
    {
      account_id: 5446,
      account_name: 'Shopify Store b3514d-6.myshopify.com',
      websites: [],
    },
    {
      account_id: 5447,
      account_name: 'Nuskinera',
      websites: [],
    },
    {
      account_id: 5448,
      account_name: 'Shopify Store 824833-16.myshopify.com',
      websites: [],
    },
    {
      account_id: 5449,
      account_name: 'Shopify Store 453693-1e.myshopify.com',
      websites: [],
    },
    {
      account_id: 5450,
      account_name: 'Shopify Store 6e0316-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5451,
      account_name: 'linilee',
      websites: [],
    },
    {
      account_id: 5452,
      account_name: 'Shopify Store isevi-8091.myshopify.com',
      websites: [],
    },
    {
      account_id: 5453,
      account_name: 'Isevi',
      websites: [],
    },
    {
      account_id: 5454,
      account_name: 'Shopify Store 7b6fa8-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 603,
      account_name: 'House Of Adorn',
      websites: [
        {
          account_name: 'House Of Adorn',
          website_id: 896,
          website_name: 'www.houseofadorn.com',
          skus: 6485,
        },
      ],
    },
    {
      account_id: 5458,
      account_name: 'Shopify Store woodsonpanels.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store woodsonpanels.myshopify.com',
          website_id: 4887,
          website_name: 'woodsonpanels.com',
          skus: 12,
        },
      ],
    },
    {
      account_id: 5459,
      account_name: 'Woodson & Bros LLC',
      websites: [],
    },
    {
      account_id: 5460,
      account_name: 'Shopify Store reprimo-brand.myshopify.com',
      websites: [],
    },
    {
      account_id: 5461,
      account_name: 'Reprimo',
      websites: [],
    },
    {
      account_id: 7781,
      account_name: 'Logic Auto',
      websites: [],
    },
    {
      account_id: 5462,
      account_name: 'Shopify Store agam-collection-store.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store agam-collection-store.myshopify.com',
          website_id: 4889,
          website_name: 'agam-collection-store.myshopify.com',
          skus: 4,
        },
      ],
    },
    {
      account_id: 5463,
      account_name: 'Shopify Store airtag-dog-collar-1420.myshopify.com',
      websites: [],
    },
    {
      account_id: 5464,
      account_name: 'Cozy Finish',
      websites: [],
    },
    {
      account_id: 5465,
      account_name: 'Shopify Store toronto-apparel-5199.myshopify.com',
      websites: [],
    },
    {
      account_id: 5466,
      account_name: 'Toronto Apparel',
      websites: [],
    },
    {
      account_id: 5467,
      account_name: 'Shopify Store adyanaisa-786.myshopify.com',
      websites: [],
    },
    {
      account_id: 5468,
      account_name: 'Shopify Store fe6bec.myshopify.com',
      websites: [],
    },
    {
      account_id: 5469,
      account_name: 'Big Commerce Store ods7on1uof',
      websites: [],
    },
    {
      account_id: 5470,
      account_name: 'DGS',
      websites: [],
    },
    {
      account_id: 5471,
      account_name: 'Big Commerce Store aglm5wd2uj',
      websites: [],
    },
    {
      account_id: 5472,
      account_name: 'Shinderat',
      websites: [],
    },
    {
      account_id: 5473,
      account_name: 'Shopify Store b66d20-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5474,
      account_name: 'Shopify Store 8222f6-e8.myshopify.com',
      websites: [],
    },
    {
      account_id: 5475,
      account_name: 'Shopify Store 74359d-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5476,
      account_name: 'Shopify Store 8ball-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5477,
      account_name: '8Ball Marketing Ltd',
      websites: [],
    },
    {
      account_id: 5478,
      account_name: 'Shopify Store fdfb0f-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5479,
      account_name: 'pizzapeelmasters.com',
      websites: [],
    },
    {
      account_id: 5480,
      account_name: 'Shopify Store 5bc15f-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5481,
      account_name: 'Shopify Store smart-mart-shopping.myshopify.com',
      websites: [],
    },
    {
      account_id: 5482,
      account_name: 'Harmony Goodies',
      websites: [],
    },
    {
      account_id: 5483,
      account_name: 'Big Commerce Store etxbxwijc2',
      websites: [],
    },
    {
      account_id: 5484,
      account_name: 'Artem Vivendi, LLC.',
      websites: [],
    },
    {
      account_id: 5485,
      account_name: 'Shopify Store 8c9340-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5486,
      account_name: 'Bansiwala aneesha creation ',
      websites: [],
    },
    {
      account_id: 5487,
      account_name: 'Shopify Store 2e634e-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5488,
      account_name: 'Shopify Store 495db4-ee.myshopify.com',
      websites: [],
    },
    {
      account_id: 5489,
      account_name: 'Shopify Store 351bd7-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5490,
      account_name: 'Wolfmonster store',
      websites: [],
    },
    {
      account_id: 5491,
      account_name: 'Shopify Store a73762-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5492,
      account_name: 'Shopify Store f803aa.myshopify.com',
      websites: [],
    },
    {
      account_id: 5493,
      account_name: 'ShopMyNet ',
      websites: [],
    },
    {
      account_id: 5495,
      account_name: 'MAKONATI LTD',
      websites: [],
    },
    {
      account_id: 5496,
      account_name: 'Shopify Store 23a105-59.myshopify.com',
      websites: [],
    },
    {
      account_id: 5497,
      account_name: 'Shopify Store d56c50-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5498,
      account_name: 'Young General Collection',
      websites: [],
    },
    {
      account_id: 5455,
      account_name: 'Big Commerce Store g1hx0nv6jd',
      websites: [
        {
          account_name: 'Big Commerce Store g1hx0nv6jd',
          website_id: 4886,
          website_name: 'www.planetfriendlypackaging.com.au',
          skus: 625,
        },
      ],
    },
    {
      account_id: 4670,
      account_name: 'Tynte Flowers',
      websites: [
        {
          account_name: 'Tynte Flowers',
          website_id: 102,
          website_name: 'tynte.com',
          skus: 160,
        },
        {
          account_name: 'Tynte Flowers',
          website_id: 4196,
          website_name: 'www.rvsupercentre.co.nz',
          skus: 2086,
        },
        {
          account_name: 'Tynte Flowers',
          website_id: 4205,
          website_name: 'personalisedgifts.com.au',
          skus: 302,
        },
      ],
    },
    {
      account_id: 5499,
      account_name: 'Shopify Store 12ad56-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5500,
      account_name: 'Big Commerce Store ffviyadgmi',
      websites: [
        {
          account_name: 'Big Commerce Store ffviyadgmi',
          website_id: 4917,
          website_name: 'reservewarehouse.com',
          skus: 286,
        },
      ],
    },
    {
      account_id: 5501,
      account_name: 'Reserve Warehouse',
      websites: [],
    },
    {
      account_id: 5502,
      account_name: 'EI EDITION AP ANTHONY PASSOS',
      websites: [],
    },
    {
      account_id: 5503,
      account_name: 'Shopify Store buyathome24.myshopify.com',
      websites: [],
    },
    {
      account_id: 5504,
      account_name: 'BUYATHOME24 GbR',
      websites: [
        {
          account_name: 'BUYATHOME24 GbR',
          website_id: 5722,
          website_name: 'buyathome24.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 5506,
      account_name: 'Shopify Store 072346-40.myshopify.com',
      websites: [],
    },
    {
      account_id: 5507,
      account_name: 'Shopify Store dddd6f-9b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5510,
      account_name: 'Planet Friendly Packaging Pty Ltd',
      websites: [],
    },
    {
      account_id: 5508,
      account_name: 'Big Commerce Store wtq8da18',
      websites: [
        {
          account_name: 'Big Commerce Store wtq8da18',
          website_id: 4925,
          website_name: 'creatingdays.com.au',
          skus: 171,
        },
      ],
    },
    {
      account_id: 5509,
      account_name: 'Creating Monkies',
      websites: [],
    },
    {
      account_id: 5511,
      account_name: 'Shopify Store 36c16e-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5512,
      account_name: 'Shopify Store ab5596-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5513,
      account_name: 'Shopify Store 2e4eb1-8a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5514,
      account_name: 'Reps store',
      websites: [],
    },
    {
      account_id: 5515,
      account_name: 'Shopify Store electrominorlda.myshopify.com',
      websites: [],
    },
    {
      account_id: 5516,
      account_name: 'Electrominor',
      websites: [],
    },
    {
      account_id: 5517,
      account_name: 'Shopify Store indy-com-ar.myshopify.com',
      websites: [],
    },
    {
      account_id: 5518,
      account_name: 'Indy',
      websites: [],
    },
    {
      account_id: 5519,
      account_name: 'Shopify Store 4f193b-e4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5520,
      account_name: 'Shopify Store 8d54e7-06.myshopify.com',
      websites: [],
    },
    {
      account_id: 5521,
      account_name: 'Yollerro',
      websites: [],
    },
    {
      account_id: 5494,
      account_name: 'Shopify Store db8790.myshopify.com',
      websites: [],
    },
    {
      account_id: 5522,
      account_name: 'Shopify Store 6bca96-11.myshopify.com',
      websites: [],
    },
    {
      account_id: 5524,
      account_name: 'Shopify Store 2abb8e-18.myshopify.com',
      websites: [],
    },
    {
      account_id: 5525,
      account_name: 'Shopify Store 33f608-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5526,
      account_name: 'Shopify Store bclub.myshopify.com',
      websites: [],
    },
    {
      account_id: 5527,
      account_name: 'BWET Swimwear',
      websites: [],
    },
    {
      account_id: 5528,
      account_name: 'Big Digial Media',
      websites: [
        {
          account_name: 'Big Digial Media',
          website_id: 4951,
          website_name: 'www.lashbylash.com.au',
          skus: 456,
        },
      ],
    },
    {
      account_id: 5533,
      account_name: 'Shopify Store 07ae84-5e.myshopify.com',
      websites: [],
    },
    {
      account_id: 5534,
      account_name: 'Shopify Store 871c8a-bf.myshopify.com',
      websites: [],
    },
    {
      account_id: 5535,
      account_name: "BEAL-FRANKY'S",
      websites: [],
    },
    {
      account_id: 5536,
      account_name: 'Shopify Store 7c4661-19.myshopify.com',
      websites: [],
    },
    {
      account_id: 5537,
      account_name: 'Ebony Beauty',
      websites: [],
    },
    {
      account_id: 5538,
      account_name: 'Shopify Store e99532-5a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5539,
      account_name: 'Shopify Store co-de.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store co-de.myshopify.com',
          website_id: 4957,
          website_name: 'code-concept.cz',
          skus: 412,
        },
      ],
    },
    {
      account_id: 5540,
      account_name: 'CODE Concept',
      websites: [],
    },
    {
      account_id: 5541,
      account_name: 'Big Commerce Store t3opw7vfux',
      websites: [],
    },
    {
      account_id: 5542,
      account_name: 'Ready For Matchday',
      websites: [],
    },
    {
      account_id: 5543,
      account_name: 'Shopify Store 4600d6-0d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5544,
      account_name: 'Rexford',
      websites: [],
    },
    {
      account_id: 5545,
      account_name: 'Big Commerce Store ahikubyaji',
      websites: [
        {
          account_name: 'Big Commerce Store ahikubyaji',
          website_id: 4961,
          website_name: 'mdbabuislam.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5546,
      account_name: 'Mdbabuislam',
      websites: [],
    },
    {
      account_id: 5547,
      account_name: 'Big Commerce Store y0hnhufpts',
      websites: [
        {
          account_name: 'Big Commerce Store y0hnhufpts',
          website_id: 4962,
          website_name: 'mdrabbanim.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5548,
      account_name: 'Mdrabbanim',
      websites: [],
    },
    {
      account_id: 5549,
      account_name: 'Shopify Store 562a8a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5550,
      account_name: 'Shopify Store 50fdf9-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5551,
      account_name: 'Sunedhi',
      websites: [],
    },
    {
      account_id: 5552,
      account_name: 'Shopify Store 904c72-b2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5553,
      account_name: 'Shopify Store a6d21a-1a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5554,
      account_name: 'Shopify Store e3372c.myshopify.com',
      websites: [],
    },
    {
      account_id: 5555,
      account_name: 'Anything Evrything',
      websites: [],
    },
    {
      account_id: 5556,
      account_name: 'Shopify Store hlv2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5557,
      account_name: 'Shopify Store e91e88.myshopify.com',
      websites: [],
    },
    {
      account_id: 5558,
      account_name: 'Chique Design',
      websites: [],
    },
    {
      account_id: 5561,
      account_name: 'Shopify Store 316552-22.myshopify.com',
      websites: [],
    },
    {
      account_id: 5562,
      account_name: 'Shopify Store fccde0-10.myshopify.com',
      websites: [],
    },
    {
      account_id: 5563,
      account_name: 'hatimounabi',
      websites: [],
    },
    {
      account_id: 5564,
      account_name: 'Shopify Store 9a8598.myshopify.com',
      websites: [],
    },
    {
      account_id: 5566,
      account_name: 'Shopify Store fa3f24-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5567,
      account_name: 'Shopify Store e22582-dd.myshopify.com',
      websites: [],
    },
    {
      account_id: 5568,
      account_name: 'kdal',
      websites: [],
    },
    {
      account_id: 5569,
      account_name: 'Shopify Store abdelrahmanqasim3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5570,
      account_name: 'Shopify Store 58e147.myshopify.com',
      websites: [],
    },
    {
      account_id: 5571,
      account_name: 'Shopify Store ea2bda.myshopify.com',
      websites: [],
    },
    {
      account_id: 5572,
      account_name: 'Shopify Store cea13a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5573,
      account_name: 'Shopify Store fcc9e9-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5574,
      account_name: 'Shopify Store df0c7b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5575,
      account_name: 'Shopify Store 78a06a-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5576,
      account_name: 'Shopify Store 87522e-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5577,
      account_name: 'Shopify Store bf86b0-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5578,
      account_name: 'Shopify Store cest-la-vie-online.myshopify.com',
      websites: [],
    },
    {
      account_id: 5579,
      account_name: 'Shopify Store 326df8-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5580,
      account_name: 'GSG GmbH',
      websites: [],
    },
    {
      account_id: 5581,
      account_name: 'Shopify Store 01876e-59.myshopify.com',
      websites: [],
    },
    {
      account_id: 5582,
      account_name: 'Shopify Store e67805-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5583,
      account_name: 'Big Commerce Store liorcnmqoq',
      websites: [
        {
          account_name: 'Big Commerce Store liorcnmqoq',
          website_id: 4990,
          website_name: 'jharnac.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5584,
      account_name: 'Jharnac',
      websites: [],
    },
    {
      account_id: 5585,
      account_name: 'Shopify Store poppy-shop-1479.myshopify.com',
      websites: [],
    },
    {
      account_id: 5586,
      account_name: 'Shopolla',
      websites: [],
    },
    {
      account_id: 5587,
      account_name: 'Shopify Store 6bc561-8c.myshopify.com',
      websites: [],
    },
    {
      account_id: 5588,
      account_name: 'Aurora Jewels',
      websites: [],
    },
    {
      account_id: 5589,
      account_name: 'Shopify Store 0b09a3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5590,
      account_name: 'Aurora Dawn Timepieces LLC',
      websites: [],
    },
    {
      account_id: 5591,
      account_name: 'Shopify Store b993ff-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5592,
      account_name: 'Shopify Store c3c872-a2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5593,
      account_name: 'Big Commerce Store 6r5e5txk',
      websites: [],
    },
    {
      account_id: 5595,
      account_name: 'Shopify Store 3cd094.myshopify.com',
      websites: [],
    },
    {
      account_id: 5596,
      account_name: 'AVAHIGHSTORE ',
      websites: [],
    },
    {
      account_id: 5597,
      account_name: 'Shopify Store 78a996-6b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5598,
      account_name: 'Mint Mart ',
      websites: [],
    },
    {
      account_id: 5599,
      account_name: 'Shopify Store c7f21b-31.myshopify.com',
      websites: [],
    },
    {
      account_id: 5600,
      account_name: 'Big Commerce Store x5fcjjxn2c',
      websites: [
        {
          account_name: 'Big Commerce Store x5fcjjxn2c',
          website_id: 5002,
          website_name: 'ozzyminimart.com',
          skus: 13104,
        },
      ],
    },
    {
      account_id: 5601,
      account_name: 'ozzyminimart',
      websites: [],
    },
    {
      account_id: 5602,
      account_name: 'Shopify Store hepsibah-6075.myshopify.com',
      websites: [],
    },
    {
      account_id: 5603,
      account_name: 'Shopify Store f19d55-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5604,
      account_name: 'Shopify Store 9bb570-15.myshopify.com',
      websites: [],
    },
    {
      account_id: 5605,
      account_name: 'Shopify Store 0fa9e5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5606,
      account_name: 'Shopify Store a979dd-1d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5607,
      account_name: 'NALA',
      websites: [],
    },
    {
      account_id: 5608,
      account_name: 'Shopify Store 7e427b-d8.myshopify.com',
      websites: [],
    },
    {
      account_id: 5609,
      account_name: 'Blur Store',
      websites: [],
    },
    {
      account_id: 5610,
      account_name: 'Shopify Store shore-goggles.myshopify.com',
      websites: [],
    },
    {
      account_id: 5611,
      account_name: 'Shore Goggles',
      websites: [],
    },
    {
      account_id: 5612,
      account_name: 'Big Commerce Store jgwcfozgxt',
      websites: [
        {
          account_name: 'Big Commerce Store jgwcfozgxt',
          website_id: 5010,
          website_name: 'khansufal.mybigcommerce.com',
          skus: 1990,
        },
      ],
    },
    {
      account_id: 5613,
      account_name: 'Khansufal',
      websites: [],
    },
    {
      account_id: 5614,
      account_name: 'Shopify Store ambtngold.myshopify.com',
      websites: [],
    },
    {
      account_id: 5615,
      account_name: 'Audrey Nicole Diamonds',
      websites: [],
    },
    {
      account_id: 5616,
      account_name: 'Big Commerce Store nv9axxbgof',
      websites: [
        {
          account_name: 'Big Commerce Store nv9axxbgof',
          website_id: 5012,
          website_name: 'arindambiswas.mybigcommerce.com',
          skus: 1999,
        },
      ],
    },
    {
      account_id: 5617,
      account_name: 'Arindambiswas',
      websites: [],
    },
    {
      account_id: 5618,
      account_name: 'Shopify Store 93b487-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5619,
      account_name: 'dsi discounts ',
      websites: [],
    },
    {
      account_id: 5620,
      account_name: 'Gadgets R US Store',
      websites: [
        {
          account_name: 'Gadgets R US Store',
          website_id: 5015,
          website_name: 'gadgetsrus.store',
          skus: 159,
        },
      ],
    },
    {
      account_id: 5621,
      account_name: 'Shopify Store 93dc5d-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5622,
      account_name: 'Bump baby and beyond',
      websites: [],
    },
    {
      account_id: 5623,
      account_name: 'Shopify Store ff89d7-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5624,
      account_name: 'Shopify Store 089c6b-03.myshopify.com',
      websites: [],
    },
    {
      account_id: 5625,
      account_name: 'Shopify Store 471738-ee.myshopify.com',
      websites: [],
    },
    {
      account_id: 5626,
      account_name: 'Shopify Store 6ded2f-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5627,
      account_name: 'Aztlans Cosmetics',
      websites: [],
    },
    {
      account_id: 5628,
      account_name: 'Shopify Store 01a128-a0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5629,
      account_name: 'Guangzhou Xinyue Yougou ',
      websites: [],
    },
    {
      account_id: 5630,
      account_name: 'Shopify Store swagstreet-wear.myshopify.com',
      websites: [],
    },
    {
      account_id: 5631,
      account_name: 'Swagstreet wear',
      websites: [],
    },
    {
      account_id: 5632,
      account_name: 'Shopify Store 5a1213-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5633,
      account_name: 'Shopify Store da700e-1a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5634,
      account_name: 'Stuffed Animal Kingdom',
      websites: [],
    },
    {
      account_id: 5635,
      account_name: 'Big Commerce Store f1zwvsfeoz',
      websites: [
        {
          account_name: 'Big Commerce Store f1zwvsfeoz',
          website_id: 5027,
          website_name: 'pedales.mybigcommerce.com',
          skus: 47,
        },
      ],
    },
    {
      account_id: 5636,
      account_name: 'front end ',
      websites: [],
    },
    {
      account_id: 5637,
      account_name: 'Shopify Store e020bc-d4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5638,
      account_name: 'Shopify Store 11441d-bd.myshopify.com',
      websites: [],
    },
    {
      account_id: 5639,
      account_name: 'Shopify Store 58e364-37.myshopify.com',
      websites: [],
    },
    {
      account_id: 5640,
      account_name: 'Shopify Store d0f5af-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5641,
      account_name: "Roy's Home",
      websites: [],
    },
    {
      account_id: 5642,
      account_name: 'Big Commerce Store oumwaeoxoq',
      websites: [],
    },
    {
      account_id: 5643,
      account_name: 'Donovan Randolph Inc',
      websites: [],
    },
    {
      account_id: 5644,
      account_name: 'Shopify Store b036bf-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5645,
      account_name: 'Man Cavern',
      websites: [],
    },
    {
      account_id: 5646,
      account_name: 'Shopify Store 99f6ef-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 99f6ef-2.myshopify.com',
          website_id: 5034,
          website_name: 'athletixx.shop',
          skus: 1280,
        },
      ],
    },
    {
      account_id: 5559,
      account_name: 'Big Commerce Store tyhcl8725j',
      websites: [
        {
          account_name: 'Big Commerce Store tyhcl8725j',
          website_id: 4971,
          website_name: 'activedogs.com',
          skus: 6020,
        },
      ],
    },
    {
      account_id: 5647,
      account_name: 'Shopify Store 45d340-12.myshopify.com',
      websites: [],
    },
    {
      account_id: 5648,
      account_name: 'LaceLure',
      websites: [],
    },
    {
      account_id: 5649,
      account_name: 'Shopify Store f0fcb9-08.myshopify.com',
      websites: [],
    },
    {
      account_id: 5650,
      account_name: 'Shopify Store 584323-1d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5651,
      account_name: 'Shopify Store artketia-bell.myshopify.com',
      websites: [],
    },
    {
      account_id: 5652,
      account_name: 'Belle Kloset',
      websites: [],
    },
    {
      account_id: 4947,
      account_name: "Sportsman's Warehouse",
      websites: [
        {
          account_name: "Sportsman's Warehouse",
          website_id: 4450,
          website_name: 'sw.com.au',
          skus: 2118,
        },
      ],
    },
    {
      account_id: 5653,
      account_name: 'Big Commerce Store zndb018ouv',
      websites: [],
    },
    {
      account_id: 5654,
      account_name: 'Thekyaniteshop',
      websites: [],
    },
    {
      account_id: 5655,
      account_name: 'Shopify Store cooperativestudio.myshopify.com',
      websites: [],
    },
    {
      account_id: 5656,
      account_name: 'Shopify Store molodo-beauty.myshopify.com',
      websites: [],
    },
    {
      account_id: 5657,
      account_name: 'Shopify Store directpackaging.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store directpackaging.myshopify.com',
          website_id: 5042,
          website_name: 'www.dpack.co.uk',
          skus: 249,
        },
      ],
    },
    {
      account_id: 5658,
      account_name: 'Direct Packaging Solutions LTD',
      websites: [],
    },
    {
      account_id: 5659,
      account_name: 'Shopify Store rabbitrich.myshopify.com',
      websites: [],
    },
    {
      account_id: 5660,
      account_name: 'Shopify Store 5655cd-83.myshopify.com',
      websites: [],
    },
    {
      account_id: 5661,
      account_name: 'Big Commerce Store mskziy3ktm',
      websites: [],
    },
    {
      account_id: 5662,
      account_name: 'Grinlongarden',
      websites: [],
    },
    {
      account_id: 5663,
      account_name: 'Rabbit',
      websites: [],
    },
    {
      account_id: 5665,
      account_name: 'Kimberley Country Department Store',
      websites: [],
    },
    {
      account_id: 5666,
      account_name: 'Shopify Store 4ac844-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5667,
      account_name: 'Pure Serenity DBA',
      websites: [],
    },
    {
      account_id: 5668,
      account_name: 'Shopify Store a04385-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5669,
      account_name: 'Neptune Collection',
      websites: [],
    },
    {
      account_id: 5670,
      account_name: 'Shopify Store hanabish4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5671,
      account_name: 'hanabish4',
      websites: [],
    },
    {
      account_id: 5672,
      account_name: 'Shopify Store freezenova.myshopify.com',
      websites: [],
    },
    {
      account_id: 5673,
      account_name: 'Shopify Store store2ap.myshopify.com',
      websites: [],
    },
    {
      account_id: 5674,
      account_name: 'Big Commerce Store qvm20',
      websites: [
        {
          account_name: 'Big Commerce Store qvm20',
          website_id: 5053,
          website_name: 'drainageproducts.us',
          skus: 5611,
        },
      ],
    },
    {
      account_id: 5675,
      account_name: 'DSI',
      websites: [],
    },
    {
      account_id: 5676,
      account_name: 'Shopify Store fd8091-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5677,
      account_name: 'Shopify Store olive-grove-coffee.myshopify.com',
      websites: [],
    },
    {
      account_id: 5678,
      account_name: 'Olive Grove Coffee Co',
      websites: [],
    },
    {
      account_id: 5679,
      account_name: 'Shopify Store 04d314-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5680,
      account_name: 'Big Commerce Store b7yzllubsu',
      websites: [
        {
          account_name: 'Big Commerce Store b7yzllubsu',
          website_id: 5057,
          website_name: 'shopwesterntubpoolspa.com',
          skus: 2821,
        },
      ],
    },
    {
      account_id: 5681,
      account_name: 'westerntub and pool',
      websites: [],
    },
    {
      account_id: 5682,
      account_name: 'Shopify Store 58be44-00.myshopify.com',
      websites: [],
    },
    {
      account_id: 5683,
      account_name: 'Usbs',
      websites: [],
    },
    {
      account_id: 5684,
      account_name: 'Shopify Store 2f0549-af.myshopify.com',
      websites: [],
    },
    {
      account_id: 5685,
      account_name: 'Shopify Store c3402a-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5686,
      account_name: 'Shopifam',
      websites: [],
    },
    {
      account_id: 5687,
      account_name: 'Shopify Store mantidy-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mantidy-2.myshopify.com',
          website_id: 5061,
          website_name: 'mantidy.co.uk',
          skus: 442,
        },
      ],
    },
    {
      account_id: 5688,
      account_name: 'Yoot Limited',
      websites: [],
    },
    {
      account_id: 5689,
      account_name: 'Big Commerce Store iot4muoy',
      websites: [],
    },
    {
      account_id: 5690,
      account_name: 'Litpol LTD',
      websites: [],
    },
    {
      account_id: 5691,
      account_name: 'Shopify Store ae4fad.myshopify.com',
      websites: [],
    },
    {
      account_id: 5692,
      account_name: 'Modus Furniture International',
      websites: [],
    },
    {
      account_id: 5693,
      account_name: 'Shopify Store f9f374-d5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5694,
      account_name: 'FNB',
      websites: [],
    },
    {
      account_id: 5695,
      account_name: 'Shopify Store 5449ee-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 5449ee-2.myshopify.com',
          website_id: 5065,
          website_name: 'bizzyvends.ch',
          skus: 2,
        },
      ],
    },
    {
      account_id: 5696,
      account_name: 'Shopify Store 122603-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5697,
      account_name: 'Savy Swipe',
      websites: [],
    },
    {
      account_id: 5698,
      account_name: 'Shopify Store f3651a-c5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5699,
      account_name: 'Rainy Rhodes Boutique',
      websites: [],
    },
    {
      account_id: 5700,
      account_name: 'Shopify Store 1558b1-d8.myshopify.com',
      websites: [],
    },
    {
      account_id: 5701,
      account_name: 'Big Commerce Store s503qbeu7d',
      websites: [
        {
          account_name: 'Big Commerce Store s503qbeu7d',
          website_id: 5069,
          website_name: 'www.feather-skin.com',
          skus: 7537,
        },
      ],
    },
    {
      account_id: 5702,
      account_name: 'Feather Skin',
      websites: [],
    },
    {
      account_id: 5703,
      account_name: 'Shopify Store 4e2c0e-e0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5704,
      account_name: 'Shopify Store 8777b7-8c.myshopify.com',
      websites: [],
    },
    {
      account_id: 5705,
      account_name: 'Bizzyvends ',
      websites: [],
    },
    {
      account_id: 5706,
      account_name: 'Shopify Store 9efdc8-f9.myshopify.com',
      websites: [],
    },
    {
      account_id: 5707,
      account_name: 'Shopify Store ritwikas.myshopify.com',
      websites: [],
    },
    {
      account_id: 5708,
      account_name: 'Shopify Store 52e389-b0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5709,
      account_name: 'Shopify Store b3a867-d8.myshopify.com',
      websites: [],
    },
    {
      account_id: 5710,
      account_name: 'ModaCasa Essentials',
      websites: [],
    },
    {
      account_id: 5711,
      account_name: 'Big Commerce Store noacblxvkd',
      websites: [],
    },
    {
      account_id: 5712,
      account_name: 'Lipohealing, llc',
      websites: [],
    },
    {
      account_id: 5713,
      account_name: 'Shopify Store 189d04-af.myshopify.com',
      websites: [],
    },
    {
      account_id: 5714,
      account_name: "MJ's Fashion and Beauty ",
      websites: [],
    },
    {
      account_id: 5715,
      account_name: 'Shopify Store 64bcef-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5716,
      account_name: 'Shopify Store officialjerseysshop.myshopify.com',
      websites: [],
    },
    {
      account_id: 5717,
      account_name: 'Shopify Store 4c0d7d-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5718,
      account_name: 'Big Commerce Store 71kr5fhb2y',
      websites: [],
    },
    {
      account_id: 5719,
      account_name: 'Wolf Automation',
      websites: [],
    },
    {
      account_id: 5720,
      account_name: 'Shopify Store 8a3689-fb.myshopify.com',
      websites: [],
    },
    {
      account_id: 5721,
      account_name: 'Shopify Store a34460-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5722,
      account_name: 'Shopify Store 74037f-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5723,
      account_name: 'Shopify Store 3ecd15-dd.myshopify.com',
      websites: [],
    },
    {
      account_id: 5724,
      account_name: 'Shopify Store 72783a-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5725,
      account_name: 'Shopify Store hangerinkstore.myshopify.com',
      websites: [],
    },
    {
      account_id: 5726,
      account_name: 'Shopify Store 5fc401-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5728,
      account_name: 'Drielle Calçados',
      websites: [],
    },
    {
      account_id: 5729,
      account_name: 'Shopify Store efe656-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5730,
      account_name: 'gainsville',
      websites: [],
    },
    {
      account_id: 5739,
      account_name: 'Shopify Store 81de68-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5740,
      account_name: 'Shopify Store 952f3c-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5741,
      account_name: 'Epp.Solar',
      websites: [],
    },
    {
      account_id: 5742,
      account_name: 'Shopify Store 4e739c-a7.myshopify.com',
      websites: [],
    },
    {
      account_id: 5743,
      account_name: 'Colostrum New Zealand',
      websites: [],
    },
    {
      account_id: 5744,
      account_name: 'Shopify Store 84f093.myshopify.com',
      websites: [],
    },
    {
      account_id: 5745,
      account_name: 'Big Commerce Store 3je23h',
      websites: [
        {
          account_name: 'Big Commerce Store 3je23h',
          website_id: 5104,
          website_name: 'www.juststraps2go.com.au',
          skus: 283,
        },
      ],
    },
    {
      account_id: 5746,
      account_name: 'Atlas Wholesale',
      websites: [],
    },
    {
      account_id: 5747,
      account_name: 'Shopify Store 06ea5b-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5748,
      account_name: 'Shopify Store perhapshandmade-8483.myshopify.com',
      websites: [],
    },
    {
      account_id: 5749,
      account_name: 'Perovskia Rose',
      websites: [],
    },
    {
      account_id: 5750,
      account_name: 'Big Commerce Store ufsjscfryl',
      websites: [
        {
          account_name: 'Big Commerce Store ufsjscfryl',
          website_id: 5108,
          website_name: 'paradise-for-your-pet-r9.mybigcommerce.com',
          skus: 84,
        },
      ],
    },
    {
      account_id: 5751,
      account_name: 'paradise for your pet and more',
      websites: [],
    },
    {
      account_id: 5752,
      account_name: 'Shopify Store ea62ca-69.myshopify.com',
      websites: [],
    },
    {
      account_id: 5753,
      account_name: 't-shirt-empire.store',
      websites: [],
    },
    {
      account_id: 5754,
      account_name: 'Shopify Store 5c8200-71.myshopify.com',
      websites: [],
    },
    {
      account_id: 5755,
      account_name: 'My Hearth N Homes',
      websites: [],
    },
    {
      account_id: 5756,
      account_name: 'Shopify Store 967419-9a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5757,
      account_name: 'Shopify Store d401e5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5758,
      account_name: 'Street Rider Apparel',
      websites: [],
    },
    {
      account_id: 4788,
      account_name: 'SOL Group Australia',
      websites: [
        {
          account_name: 'SOL Group Australia',
          website_id: 2644,
          website_name: 'www.giftsaustralia.com.au',
          skus: 1686,
        },
        {
          account_name: 'SOL Group Australia',
          website_id: 3530,
          website_name: 'shop.maggiebeer.com.au',
          skus: 130,
        },
        {
          account_name: 'SOL Group Australia',
          website_id: 2393,
          website_name: 'www.thehamperemporium.com.au',
          skus: 206,
        },
      ],
    },
    {
      account_id: 5731,
      account_name: 'Big Commerce Store 14ga4kb1kv',
      websites: [],
    },
    {
      account_id: 5732,
      account_name: 'Sharmanee',
      websites: [],
    },
    {
      account_id: 5733,
      account_name: 'Shopify Store 72d3e9-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5734,
      account_name: 'Revobits B.V.',
      websites: [],
    },
    {
      account_id: 5735,
      account_name: 'Phoenix Innovate',
      websites: [],
    },
    {
      account_id: 5736,
      account_name: 'Shopify Store d18a6a-ea.myshopify.com',
      websites: [],
    },
    {
      account_id: 5737,
      account_name: 'Elevated Aura Beauty',
      websites: [],
    },
    {
      account_id: 5738,
      account_name: 'Shopify Store 0fe68b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5759,
      account_name: 'Shopify Store 5e69dc.myshopify.com',
      websites: [],
    },
    {
      account_id: 5760,
      account_name: 'Waldkluft',
      websites: [],
    },
    {
      account_id: 5761,
      account_name: 'Shopify Store a19a6e-78.myshopify.com',
      websites: [],
    },
    {
      account_id: 5762,
      account_name: 'abdelhaqhyar',
      websites: [],
    },
    {
      account_id: 5763,
      account_name: 'Shopify Store 9aba34-06.myshopify.com',
      websites: [],
    },
    {
      account_id: 5764,
      account_name: 'ximiso',
      websites: [],
    },
    {
      account_id: 5765,
      account_name: 'Konverto Store',
      websites: [],
    },
    {
      account_id: 5766,
      account_name: 'Shopify Store e6d656-cc.myshopify.com',
      websites: [],
    },
    {
      account_id: 5767,
      account_name: 'Shopify Store bf7b31-5b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5768,
      account_name: 'Big Commerce Store 571px4',
      websites: [
        {
          account_name: 'Big Commerce Store 571px4',
          website_id: 5124,
          website_name: 'www.walldecorplusmore.com',
          skus: 31786,
        },
      ],
    },
    {
      account_id: 5769,
      account_name: 'Wall Decor Plus More',
      websites: [],
    },
    {
      account_id: 5770,
      account_name: 'sarmi',
      websites: [],
    },
    {
      account_id: 5771,
      account_name: 'Shopify Store 7be2fb-e3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5772,
      account_name: 'Shopify Store 1e835c-10.myshopify.com',
      websites: [],
    },
    {
      account_id: 5773,
      account_name: 'Herppncompany ',
      websites: [],
    },
    {
      account_id: 5774,
      account_name: 'Shopify Store testaguacateboutique.myshopify.com',
      websites: [],
    },
    {
      account_id: 5775,
      account_name: 'Shopify Store 9957d2-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5776,
      account_name: 'Shopify Store 1adf67-3f.myshopify.com',
      websites: [],
    },
    {
      account_id: 5777,
      account_name: 'NeedsHuub',
      websites: [],
    },
    {
      account_id: 5778,
      account_name: 'Shopify Store b219c0-ea.myshopify.com',
      websites: [],
    },
    {
      account_id: 5779,
      account_name: 'KITACCES',
      websites: [],
    },
    {
      account_id: 5780,
      account_name: 'Shopify Store 8f361a-41.myshopify.com',
      websites: [],
    },
    {
      account_id: 5781,
      account_name: 'Sardar cosmetics',
      websites: [],
    },
    {
      account_id: 5782,
      account_name: 'Shopify Store b1a4f6-e0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5783,
      account_name: 'Smilemakermarket l.com',
      websites: [],
    },
    {
      account_id: 5784,
      account_name: 'Big Commerce Store k6ihw4dtqp',
      websites: [],
    },
    {
      account_id: 5785,
      account_name: 'Ray Insights',
      websites: [],
    },
    {
      account_id: 5786,
      account_name: 'Shopify Store 70dee0-0d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5787,
      account_name: 'Shopify Store 3a359c-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5788,
      account_name: 'Adorn Aura',
      websites: [],
    },
    {
      account_id: 5789,
      account_name: 'Herppn ',
      websites: [],
    },
    {
      account_id: 5790,
      account_name: 'Shopify Store 8fc76a-c5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5791,
      account_name: 'TTOWNLEYS ',
      websites: [],
    },
    {
      account_id: 5792,
      account_name: 'Big Commerce Store mruknktb',
      websites: [
        {
          account_name: 'Big Commerce Store mruknktb',
          website_id: 5138,
          website_name: 'www.dogwise.com',
          skus: 1814,
        },
      ],
    },
    {
      account_id: 5793,
      account_name: 'Dogwise',
      websites: [],
    },
    {
      account_id: 5794,
      account_name: 'Shopify Store christiangiftsforyou-com.myshopify.com',
      websites: [],
    },
    {
      account_id: 5795,
      account_name: 'Christiangiftsforyou.com',
      websites: [],
    },
    {
      account_id: 5796,
      account_name: 'Big Commerce Store tififeyt0v',
      websites: [
        {
          account_name: 'Big Commerce Store tififeyt0v',
          website_id: 5140,
          website_name: 'murillomunitions.com',
          skus: 53,
        },
      ],
    },
    {
      account_id: 5797,
      account_name: 'Murillo Munitions LLC',
      websites: [],
    },
    {
      account_id: 5798,
      account_name: 'Shopify Store d488b1-44.myshopify.com',
      websites: [],
    },
    {
      account_id: 5799,
      account_name: "May M'lee",
      websites: [],
    },
    {
      account_id: 5800,
      account_name: 'Shopify Store beddinginnonline.myshopify.com',
      websites: [],
    },
    {
      account_id: 5801,
      account_name: 'Linkhunk technology',
      websites: [],
    },
    {
      account_id: 5802,
      account_name: 'Shopify Store 975c55-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5803,
      account_name: 'Shopify Store 865d89-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5804,
      account_name: 'Deepy Central ',
      websites: [],
    },
    {
      account_id: 5805,
      account_name: 'Big Commerce Store qhm1v3f3fb',
      websites: [
        {
          account_name: 'Big Commerce Store qhm1v3f3fb',
          website_id: 5154,
          website_name: 'store-114.com',
          skus: 23806,
        },
      ],
    },
    {
      account_id: 5806,
      account_name: 'store114 ltd',
      websites: [],
    },
    {
      account_id: 5807,
      account_name: 'Shopify Store 41ea74-6c.myshopify.com',
      websites: [],
    },
    {
      account_id: 5808,
      account_name: 'Big Commerce Store 2s9fqombsr',
      websites: [],
    },
    {
      account_id: 5809,
      account_name: 'esupply',
      websites: [],
    },
    {
      account_id: 5810,
      account_name: 'HomeFix Interior',
      websites: [],
    },
    {
      account_id: 5727,
      account_name: 'Gimmie',
      websites: [
        {
          account_name: 'Gimmie',
          website_id: 5090,
          website_name: 'gimmie.com.au',
          skus: 5705,
        },
      ],
    },
    {
      account_id: 5811,
      account_name: 'Shopify Store ef405e-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5812,
      account_name: 'Shopify Store cad559-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5813,
      account_name: 'Big Commerce Store ygr02dfm0s',
      websites: [
        {
          account_name: 'Big Commerce Store ygr02dfm0s',
          website_id: 5151,
          website_name: 'bossichri.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5814,
      account_name: 'Bossichri',
      websites: [],
    },
    {
      account_id: 5815,
      account_name: 'Shopify Store upendra-tailor-fashion.myshopify.com',
      websites: [],
    },
    {
      account_id: 5816,
      account_name: 'UPENDRA TAILOR AND FASHION',
      websites: [],
    },
    {
      account_id: 5817,
      account_name: 'Shopify Store mirumiru-7234.myshopify.com',
      websites: [],
    },
    {
      account_id: 5818,
      account_name: 'MIRUMIRU ONLINE SRL',
      websites: [],
    },
    {
      account_id: 5819,
      account_name: 'Shopify Store ec4f81-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5820,
      account_name: 'Shopify Store b44864-ba.myshopify.com',
      websites: [],
    },
    {
      account_id: 5821,
      account_name: 'Shopify Store d14273-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5822,
      account_name: 'DS-MARKET',
      websites: [],
    },
    {
      account_id: 5823,
      account_name: 'Shopify Store starlinetents-com.myshopify.com',
      websites: [],
    },
    {
      account_id: 5825,
      account_name: 'express canopy',
      websites: [],
    },
    {
      account_id: 5826,
      account_name: 'Shopify Store yahtechstore.myshopify.com',
      websites: [],
    },
    {
      account_id: 5824,
      account_name: 'Shopify Store express-canopy.myshopify.com',
      websites: [],
    },
    {
      account_id: 5827,
      account_name: 'Shopify Store da2888-b3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5828,
      account_name: 'Shopify Store 370654-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5829,
      account_name: 'Pakje Troost',
      websites: [],
    },
    {
      account_id: 5830,
      account_name: 'Shopify Store 4b67d3-d3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5831,
      account_name: 'takeitshop',
      websites: [],
    },
    {
      account_id: 5832,
      account_name: 'Shopify Store fe4893-3d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5833,
      account_name: 'PETASHOP-BOUTIQUE',
      websites: [],
    },
    {
      account_id: 5834,
      account_name: 'Shopify Store 9f944a-5b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5835,
      account_name: 'Lashed by Cole',
      websites: [],
    },
    {
      account_id: 5836,
      account_name: 'Shopify Store murchent.myshopify.com',
      websites: [],
    },
    {
      account_id: 5837,
      account_name: 'M',
      websites: [],
    },
    {
      account_id: 5838,
      account_name: 'Shopify Store 8d3505-e3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5839,
      account_name: 'Shopify Store bc39b8-a0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5840,
      account_name: 'cheapmarket sale',
      websites: [],
    },
    {
      account_id: 5841,
      account_name: 'Shopify Store 12dccf-e1.myshopify.com',
      websites: [],
    },
    {
      account_id: 5842,
      account_name: 'shopify seller',
      websites: [],
    },
    {
      account_id: 5843,
      account_name: 'Shopify Store farmersstop.myshopify.com',
      websites: [],
    },
    {
      account_id: 5844,
      account_name: 'Farmers Stop',
      websites: [],
    },
    {
      account_id: 5845,
      account_name: 'Shopify Store 56f1f9-da.myshopify.com',
      websites: [],
    },
    {
      account_id: 5846,
      account_name: 'Shopify Store 4bc794-a0.myshopify.com',
      websites: [],
    },
    {
      account_id: 5847,
      account_name: 'Shopify Store 111c4a-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5848,
      account_name: 'Suzannah store shop ',
      websites: [],
    },
    {
      account_id: 5849,
      account_name: 'Shopify Store daverrifashions.myshopify.com',
      websites: [],
    },
    {
      account_id: 5850,
      account_name: 'Daverri Fashions',
      websites: [],
    },
    {
      account_id: 5851,
      account_name: 'Shopify Store malee-creations.myshopify.com',
      websites: [],
    },
    {
      account_id: 5852,
      account_name: 'Childrens store',
      websites: [],
    },
    {
      account_id: 5853,
      account_name: 'Shopify Store mangomates-2460.myshopify.com',
      websites: [],
    },
    {
      account_id: 5854,
      account_name: 'MangoMates UG (haftungsbeschränk)',
      websites: [],
    },
    {
      account_id: 5855,
      account_name: 'Shopify Store 3fe19f.myshopify.com',
      websites: [],
    },
    {
      account_id: 5856,
      account_name: 'Big Commerce Store 7ymyve2w4t',
      websites: [
        {
          account_name: 'Big Commerce Store 7ymyve2w4t',
          website_id: 5181,
          website_name: 'trytheink.com',
          skus: 1185,
        },
      ],
    },
    {
      account_id: 5857,
      account_name: 'Try the Ink, LLC',
      websites: [],
    },
    {
      account_id: 5858,
      account_name: 'Shopify Store a7bfd3-f8.myshopify.com',
      websites: [],
    },
    {
      account_id: 5859,
      account_name: 'Big Commerce Store qplugchue3',
      websites: [
        {
          account_name: 'Big Commerce Store qplugchue3',
          website_id: 5183,
          website_name: 'homme-classe.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 5860,
      account_name: 'Shopify Store 25716d-49.myshopify.com',
      websites: [],
    },
    {
      account_id: 5861,
      account_name: 'Shopify Store 77efc3-71.myshopify.com',
      websites: [],
    },
    {
      account_id: 5862,
      account_name: 'Etc. Goods',
      websites: [],
    },
    {
      account_id: 5863,
      account_name: 'Shopify Store fashion-brand-cc.myshopify.com',
      websites: [],
    },
    {
      account_id: 5864,
      account_name: 'Shopify Store 02aa82-1a.myshopify.com',
      websites: [],
    },
    {
      account_id: 5865,
      account_name: 'matthews variety and wholesale',
      websites: [],
    },
    {
      account_id: 5866,
      account_name: 'Shopify Store a98348-8d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5867,
      account_name: 'Shopify Store pegasus-infinite.myshopify.com',
      websites: [],
    },
    {
      account_id: 5868,
      account_name: 'Mars Venus Flytraps',
      websites: [],
    },
    {
      account_id: 5869,
      account_name: 'Shopify Store stumbul.myshopify.com',
      websites: [],
    },
    {
      account_id: 5870,
      account_name: 'Stumbl',
      websites: [],
    },
    {
      account_id: 5871,
      account_name: 'Shopify Store kingcave-com-au.myshopify.com',
      websites: [],
    },
    {
      account_id: 5872,
      account_name: 'KING CAVE',
      websites: [],
    },
    {
      account_id: 5874,
      account_name: 'Big Commerce Store fwo3mfl1sh',
      websites: [],
    },
    {
      account_id: 5875,
      account_name: 'pcp motorsports',
      websites: [],
    },
    {
      account_id: 5876,
      account_name: 'Shopify Store dreamsruleeverythingaroundme.myshopify.com',
      websites: [],
    },
    {
      account_id: 5877,
      account_name: 'Owner',
      websites: [],
    },
    {
      account_id: 5878,
      account_name: 'Shopify Store b3898c-18.myshopify.com',
      websites: [],
    },
    {
      account_id: 5879,
      account_name: 'Shopify Store 334f20-e9.myshopify.com',
      websites: [],
    },
    {
      account_id: 5880,
      account_name: 'Company',
      websites: [],
    },
    {
      account_id: 5881,
      account_name: 'Shopify Store 14b6b0-0d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5882,
      account_name: 'Shopify Store 004526-da.myshopify.com',
      websites: [],
    },
    {
      account_id: 5883,
      account_name: 'ENCORE TRADING LIMITED',
      websites: [],
    },
    {
      account_id: 5884,
      account_name: 'E-Shopping PK',
      websites: [],
    },
    {
      account_id: 5885,
      account_name: 'Shopify Store 252f0c-15.myshopify.com',
      websites: [],
    },
    {
      account_id: 5886,
      account_name: 'Big Commerce Store 8npwm6ltcj',
      websites: [],
    },
    {
      account_id: 5887,
      account_name: 'Shopify Store 86d2fc-d8.myshopify.com',
      websites: [],
    },
    {
      account_id: 5888,
      account_name: 'Shopify Store 31bfea-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 5889,
      account_name: 'berbhub',
      websites: [],
    },
    {
      account_id: 5890,
      account_name: 'Legacy Icons',
      websites: [],
    },
    {
      account_id: 5891,
      account_name: 'Shopify Store d7ffab-33.myshopify.com',
      websites: [],
    },
    {
      account_id: 5892,
      account_name: 'Shopify Store probase-sports-nutrition.myshopify.com',
      websites: [],
    },
    {
      account_id: 5893,
      account_name: 'Malaga Imports LLC',
      websites: [],
    },
    {
      account_id: 5894,
      account_name: 'Shopify Store ea0273.myshopify.com',
      websites: [],
    },
    {
      account_id: 5895,
      account_name: 'JAKOB',
      websites: [],
    },
    {
      account_id: 5896,
      account_name: 'Shopify Store 00dcf5-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5897,
      account_name: 'Shopify Store 714fa8-c1.myshopify.com',
      websites: [],
    },
    {
      account_id: 5898,
      account_name: 'Big Commerce Store qc3zw2vkfv',
      websites: [],
    },
    {
      account_id: 5899,
      account_name: 'Peak Pro Supply',
      websites: [],
    },
    {
      account_id: 5931,
      account_name: 'Design Imagery Engraving',
      websites: [],
    },
    {
      account_id: 5900,
      account_name: 'Shopify Store my-shop-sylhet.myshopify.com',
      websites: [],
    },
    {
      account_id: 5901,
      account_name: 'Shopify Store shahzebsaeed.myshopify.com',
      websites: [],
    },
    {
      account_id: 5902,
      account_name: 'Shahzeb Saeed',
      websites: [],
    },
    {
      account_id: 5903,
      account_name: 'Shopify Store e437c9-5c.myshopify.com',
      websites: [],
    },
    {
      account_id: 5904,
      account_name: 'Shopify Store cfc8fa.myshopify.com',
      websites: [],
    },
    {
      account_id: 5905,
      account_name: 'Kyodo',
      websites: [],
    },
    {
      account_id: 5906,
      account_name: 'Big Commerce Store diamzzuj5o',
      websites: [
        {
          account_name: 'Big Commerce Store diamzzuj5o',
          website_id: 5223,
          website_name: 'beatronixx7.mybigcommerce.com',
          skus: 936,
        },
      ],
    },
    {
      account_id: 5907,
      account_name: 'Beatronix',
      websites: [],
    },
    {
      account_id: 5908,
      account_name: 'Shopify Store classic-teen-clothing.myshopify.com',
      websites: [],
    },
    {
      account_id: 5909,
      account_name: 'Classic Teen Clothing',
      websites: [],
    },
    {
      account_id: 5910,
      account_name: 'Shopify Store b78d6e-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5911,
      account_name: 'African pride',
      websites: [],
    },
    {
      account_id: 5912,
      account_name: 'Shopify Store 93a0bc-77.myshopify.com',
      websites: [],
    },
    {
      account_id: 6840,
      account_name: 'Randyfores',
      websites: [],
    },
    {
      account_id: 5913,
      account_name: 'Shopify Store 0b963b-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5914,
      account_name: 'Shopify Store 93f67a-9e.myshopify.com',
      websites: [],
    },
    {
      account_id: 5915,
      account_name: 'Shopify Store 88af0a-57.myshopify.com',
      websites: [],
    },
    {
      account_id: 5916,
      account_name: 'Stelth apparels and accessories',
      websites: [],
    },
    {
      account_id: 5917,
      account_name: 'Shopify Store bb1877-d5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5300,
      account_name: 'Thryv Australia',
      websites: [
        {
          account_name: 'Thryv Australia',
          website_id: 4770,
          website_name: 'www.wholesalesuperstore.com.au',
          skus: 442,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 5102,
          website_name: 'www.mchitch.com.au',
          skus: 40,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 5692,
          website_name: 'www.austrackcampers.com.au',
          skus: 71,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 5764,
          website_name: 'www.rugaddiction.com.au',
          skus: 4021,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 5759,
          website_name: 'construct-ramsay-insulation.myshopify.com',
          skus: 38,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 5777,
          website_name: 'galleriapodiatry.com.au',
          skus: 547,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 6042,
          website_name: 'www.watertanksonline.com.au',
          skus: 2119,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 6145,
          website_name: 'ocean2earth.com.au',
          skus: 3,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 6235,
          website_name: 'www.electric-bicycles.com.au',
          skus: 857,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 6370,
          website_name: 'www.heavygroup.store',
          skus: 62,
        },
        {
          account_name: 'Thryv Australia',
          website_id: 6478,
          website_name: 'jetbox.com',
          skus: 122,
        },
      ],
    },
    {
      account_id: 7755,
      account_name: 'DecjubaNZ',
      websites: [],
    },
    {
      account_id: 5918,
      account_name: 'Shopify Store orthocrin.myshopify.com',
      websites: [],
    },
    {
      account_id: 5919,
      account_name: 'Big Commerce Store 5xueoiybnx',
      websites: [
        {
          account_name: 'Big Commerce Store 5xueoiybnx',
          website_id: 5232,
          website_name: 'loretobar.mybigcommerce.com',
          skus: 6881,
        },
      ],
    },
    {
      account_id: 5920,
      account_name: 'Loretobar',
      websites: [],
    },
    {
      account_id: 5921,
      account_name: 'Shopify Store 5c0dfd-3b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5922,
      account_name: 'Shopify Store d83777.myshopify.com',
      websites: [],
    },
    {
      account_id: 5923,
      account_name: 'Shopify Store 33b437-cb.myshopify.com',
      websites: [],
    },
    {
      account_id: 5924,
      account_name: 'Shopify Store 4c1e56-81.myshopify.com',
      websites: [],
    },
    {
      account_id: 5925,
      account_name: 'Big Commerce Store gytesrnbgu',
      websites: [],
    },
    {
      account_id: 5926,
      account_name: 'Depot HomeTax',
      websites: [],
    },
    {
      account_id: 5927,
      account_name: 'Shopify Store d7f37e-a3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5928,
      account_name: 'Shopify Store athletix-ae.myshopify.com',
      websites: [],
    },
    {
      account_id: 5929,
      account_name: 'Athletix',
      websites: [],
    },
    {
      account_id: 5930,
      account_name: 'Big Commerce Store qkcbjh4x',
      websites: [
        {
          account_name: 'Big Commerce Store qkcbjh4x',
          website_id: 5240,
          website_name: 'shop.designimageryengraving.com',
          skus: 14,
        },
      ],
    },
    {
      account_id: 5932,
      account_name: 'Shopify Store d053d5-95.myshopify.com',
      websites: [],
    },
    {
      account_id: 5933,
      account_name: 'Shopify Store c0f2e7-e2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5934,
      account_name: 'Everythingfastion88',
      websites: [],
    },
    {
      account_id: 5935,
      account_name: 'Shopify Store 7dc4a4-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5936,
      account_name: 'Madame B Collections',
      websites: [],
    },
    {
      account_id: 5937,
      account_name: 'Shopify Store c5bac2-0f.myshopify.com',
      websites: [],
    },
    {
      account_id: 5938,
      account_name: 'dollarr outlet',
      websites: [],
    },
    {
      account_id: 5939,
      account_name: 'Shopify Store f0201e-00.myshopify.com',
      websites: [],
    },
    {
      account_id: 5940,
      account_name: 'Pocketshop',
      websites: [],
    },
    {
      account_id: 5941,
      account_name: 'Shopify Store e6377b-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5942,
      account_name: 'Azzarome',
      websites: [],
    },
    {
      account_id: 5943,
      account_name: 'Shopify Store 885a28-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5944,
      account_name: 'Tucker® USA',
      websites: [],
    },
    {
      account_id: 5945,
      account_name: 'Shopify Store 857421.myshopify.com',
      websites: [],
    },
    {
      account_id: 5946,
      account_name: 'Shopify Store natuvisan.myshopify.com',
      websites: [],
    },
    {
      account_id: 5947,
      account_name: 'Natuvisan Gesundheitsprodukte',
      websites: [],
    },
    {
      account_id: 5948,
      account_name: 'Shopify Store 0dd760-f6.myshopify.com',
      websites: [],
    },
    {
      account_id: 5949,
      account_name: 'Muhammad Hidayat',
      websites: [],
    },
    {
      account_id: 5950,
      account_name: 'Shopify Store 7073dd-97.myshopify.com',
      websites: [],
    },
    {
      account_id: 5951,
      account_name: 'ASHAF STORE ',
      websites: [],
    },
    {
      account_id: 5952,
      account_name: 'Shopify Store infos-7186.myshopify.com',
      websites: [],
    },
    {
      account_id: 5953,
      account_name: 'Shopify Store optimum-sports.myshopify.com',
      websites: [],
    },
    {
      account_id: 5954,
      account_name: 'optimumsport',
      websites: [],
    },
    {
      account_id: 5955,
      account_name:
        'Shopify Store hardware-tool-factory-direct-store.myshopify.com',
      websites: [],
    },
    {
      account_id: 5956,
      account_name: 'Shopify Store dbde3d-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5957,
      account_name: 'Shopify Store 792f4f-19.myshopify.com',
      websites: [],
    },
    {
      account_id: 5958,
      account_name: 'Sparklehaven Boutique',
      websites: [],
    },
    {
      account_id: 5959,
      account_name: 'Shopify Store e5a4a2-9b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5960,
      account_name: 'Peace Online Store',
      websites: [],
    },
    {
      account_id: 5961,
      account_name: 'Shopify Store 2a81a3.myshopify.com',
      websites: [],
    },
    {
      account_id: 5962,
      account_name: 'ottuhr',
      websites: [],
    },
    {
      account_id: 5963,
      account_name: 'Shopify Store 463a57-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5964,
      account_name: 'Shopify Store 4fcb3e-a2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5965,
      account_name: 'Shopify Store b1e302-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b1e302-2.myshopify.com',
          website_id: 6760,
          website_name: 'almaceneshj.com',
          skus: 477,
        },
      ],
    },
    {
      account_id: 5968,
      account_name: 'Shopify Store mycuratedbrands.myshopify.com',
      websites: [],
    },
    {
      account_id: 5969,
      account_name: 'curated brands',
      websites: [],
    },
    {
      account_id: 5970,
      account_name: 'Shopify Store 1681ba-85.myshopify.com',
      websites: [],
    },
    {
      account_id: 5971,
      account_name: 'Shopify Store brilliant-sydney.myshopify.com',
      websites: [],
    },
    {
      account_id: 5972,
      account_name: 'Brilliant Home Living Pty Ltd',
      websites: [],
    },
    {
      account_id: 5973,
      account_name: 'Big Commerce Store 9h3b9ujbzj',
      websites: [
        {
          account_name: 'Big Commerce Store 9h3b9ujbzj',
          website_id: 5268,
          website_name: 'everythingtights.com',
          skus: 476,
        },
      ],
    },
    {
      account_id: 5974,
      account_name: 'everythingtights.com',
      websites: [],
    },
    {
      account_id: 5975,
      account_name: 'Shopify Store fh-theme-demo.myshopify.com',
      websites: [],
    },
    {
      account_id: 5976,
      account_name: 'Shopify Store ayush-care.myshopify.com',
      websites: [],
    },
    {
      account_id: 5977,
      account_name: 'AYUSH CARE',
      websites: [],
    },
    {
      account_id: 5978,
      account_name: 'Big Commerce Store 4mg16ped09',
      websites: [
        {
          account_name: 'Big Commerce Store 4mg16ped09',
          website_id: 5271,
          website_name: 'actesso.co.uk',
          skus: 241,
        },
      ],
    },
    {
      account_id: 5980,
      account_name: 'Shopify Store 29118d.myshopify.com',
      websites: [],
    },
    {
      account_id: 5981,
      account_name: 'Shopify Store 281dd7-4f.myshopify.com',
      websites: [],
    },
    {
      account_id: 5982,
      account_name: 'Shopify Store stixxie-by-lajana.myshopify.com',
      websites: [],
    },
    {
      account_id: 5983,
      account_name: 'stiXXie by lajana Jana Leske',
      websites: [],
    },
    {
      account_id: 5984,
      account_name: 'Shopify Store animaliapet-3715.myshopify.com',
      websites: [],
    },
    {
      account_id: 5985,
      account_name: 'Animaliapet.it',
      websites: [],
    },
    {
      account_id: 5986,
      account_name: 'Big Commerce Store 13noi903y6',
      websites: [],
    },
    {
      account_id: 5987,
      account_name: 'Kenchii ',
      websites: [],
    },
    {
      account_id: 5988,
      account_name: 'Shopify Store 9af7bf-83.myshopify.com',
      websites: [],
    },
    {
      account_id: 5989,
      account_name: 'Shopify Store 2e6515-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5990,
      account_name: 'Shopify Store 0f1a0b.myshopify.com',
      websites: [],
    },
    {
      account_id: 5991,
      account_name: 'JK Informatica',
      websites: [],
    },
    {
      account_id: 5992,
      account_name: 'Coco e Bambu',
      websites: [],
    },
    {
      account_id: 5993,
      account_name: 'Shopify Store 325f54-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 5994,
      account_name: 'Shopify Store 485f01.myshopify.com',
      websites: [],
    },
    {
      account_id: 5995,
      account_name: 'Maisonmodern.in',
      websites: [],
    },
    {
      account_id: 5996,
      account_name: 'Big Commerce Store gkvlthgvph',
      websites: [
        {
          account_name: 'Big Commerce Store gkvlthgvph',
          website_id: 5282,
          website_name: 'garden-glory.com',
          skus: 142,
        },
      ],
    },
    {
      account_id: 5997,
      account_name: 'Garden-Glory',
      websites: [],
    },
    {
      account_id: 5998,
      account_name: 'Shopify Store 47ff53.myshopify.com',
      websites: [],
    },
    {
      account_id: 5999,
      account_name: 'Fassionexpress',
      websites: [],
    },
    {
      account_id: 6000,
      account_name: 'Shopify Store martha-medeiros-loja.myshopify.com',
      websites: [],
    },
    {
      account_id: 6001,
      account_name: 'Shopify Store ae7fc9-4d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6002,
      account_name: 'ivybcustom',
      websites: [],
    },
    {
      account_id: 6003,
      account_name: 'Shopify Store d485a8-07.myshopify.com',
      websites: [],
    },
    {
      account_id: 6004,
      account_name: 'Shopify Store 4ee7b2-68.myshopify.com',
      websites: [],
    },
    {
      account_id: 6005,
      account_name: 'Davide Miguel Cerqueira Duarte',
      websites: [],
    },
    {
      account_id: 6006,
      account_name: 'Big Commerce Store uoonf0',
      websites: [
        {
          account_name: 'Big Commerce Store uoonf0',
          website_id: 5289,
          website_name: 'officestock.co.za',
          skus: 596,
        },
      ],
    },
    {
      account_id: 6007,
      account_name: 'Office Stock',
      websites: [],
    },
    {
      account_id: 6008,
      account_name: 'Shopify Store 371110-1b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6009,
      account_name: 'Bullé Bébé',
      websites: [],
    },
    {
      account_id: 6010,
      account_name: 'Martha Medeiros',
      websites: [],
    },
    {
      account_id: 6011,
      account_name: 'Big Commerce Store ab0p5fcfhw',
      websites: [],
    },
    {
      account_id: 6012,
      account_name: 'Mikifurlow',
      websites: [],
    },
    {
      account_id: 6013,
      account_name: 'Big Commerce Store gitarybduo',
      websites: [],
    },
    {
      account_id: 6014,
      account_name: 'Perlarampy',
      websites: [],
    },
    {
      account_id: 6015,
      account_name: 'Big Commerce Store pkla4xn3',
      websites: [],
    },
    {
      account_id: 6016,
      account_name: 'Big Commerce Store zvn0eefftd',
      websites: [
        {
          account_name: 'Big Commerce Store zvn0eefftd',
          website_id: 5295,
          website_name: 'rositanota.mybigcommerce.com',
          skus: 15,
        },
      ],
    },
    {
      account_id: 6017,
      account_name: 'Rositanota',
      websites: [],
    },
    {
      account_id: 6018,
      account_name: 'Shopify Store 46729a-f0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6019,
      account_name: 'Current Riders',
      websites: [],
    },
    {
      account_id: 6020,
      account_name: 'Shopify Store 35613c-7b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6021,
      account_name: 'Big Commerce Store 0d4sikzuox',
      websites: [],
    },
    {
      account_id: 6022,
      account_name: 'Shopify Store bmgsince2010.myshopify.com',
      websites: [],
    },
    {
      account_id: 6023,
      account_name: 'BMGSINCE2010',
      websites: [],
    },
    {
      account_id: 6024,
      account_name: 'Shopify Store 5bd006-ab.myshopify.com',
      websites: [],
    },
    {
      account_id: 6025,
      account_name: 'TMG BRASIL',
      websites: [],
    },
    {
      account_id: 6026,
      account_name: 'Shopify Store 5309f0-08.myshopify.com',
      websites: [],
    },
    {
      account_id: 6027,
      account_name: 'Shopify Store d6695e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6028,
      account_name: 'pickit',
      websites: [],
    },
    {
      account_id: 6029,
      account_name: 'Shopify Store 36fe73-fe.myshopify.com',
      websites: [],
    },
    {
      account_id: 6030,
      account_name: 'Shopify Store 1da413-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6031,
      account_name: 'Influx Pi',
      websites: [],
    },
    {
      account_id: 6032,
      account_name: 'womenesse',
      websites: [],
    },
    {
      account_id: 6035,
      account_name: 'Shopify Store 5ffd63-03.myshopify.com',
      websites: [],
    },
    {
      account_id: 6036,
      account_name: 'Shopify Store 016ad4-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6037,
      account_name: 'Shopify Store originalwishingtree.myshopify.com',
      websites: [],
    },
    {
      account_id: 6038,
      account_name: 'The Original Wishing Tree',
      websites: [],
    },
    {
      account_id: 6039,
      account_name: 'Shopify Store habitatron.myshopify.com',
      websites: [],
    },
    {
      account_id: 6040,
      account_name: 'Shopify Store 03aab7-a5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6041,
      account_name: 'Shopify Store starlightgarden.myshopify.com',
      websites: [],
    },
    {
      account_id: 6042,
      account_name: 'StarlightGarden',
      websites: [],
    },
    {
      account_id: 6043,
      account_name: 'Shopify Store 709635-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 5979,
      account_name: 'Actesso Medical Supports Limited',
      websites: [],
    },
    {
      account_id: 6044,
      account_name: 'Shopify Store 791592-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6045,
      account_name: 'indirimsepeti',
      websites: [],
    },
    {
      account_id: 6047,
      account_name: 'Cocoa Yacht Club',
      websites: [],
    },
    {
      account_id: 6048,
      account_name: 'Shopify Store 08bcef.myshopify.com',
      websites: [],
    },
    {
      account_id: 6049,
      account_name: 'Shopify Store eafdc0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6050,
      account_name: 'Lidec worldwide',
      websites: [],
    },
    {
      account_id: 6051,
      account_name: 'Shopify Store 4f4be8-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6052,
      account_name: 'Shopify Store f65f9c-b1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6053,
      account_name: "Chainring Mike's",
      websites: [],
    },
    {
      account_id: 6055,
      account_name: 'Shopify Store 58f379-eb.myshopify.com',
      websites: [],
    },
    {
      account_id: 6056,
      account_name: 'Shopify Store d0e302-e8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6057,
      account_name: 'Shopify Store 10d078-f7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6058,
      account_name: 'Glow',
      websites: [],
    },
    {
      account_id: 6059,
      account_name: 'Big Commerce Store ddx9vonkih',
      websites: [
        {
          account_name: 'Big Commerce Store ddx9vonkih',
          website_id: 5327,
          website_name: 'alamocandysa.com',
          skus: 113,
        },
      ],
    },
    {
      account_id: 6060,
      account_name: 'Alamo Candy SA',
      websites: [],
    },
    {
      account_id: 6061,
      account_name: 'Shopify Store 16057e-e5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6062,
      account_name: 'Narumoh',
      websites: [],
    },
    {
      account_id: 6063,
      account_name: 'Shopify Store 76f2d8-88.myshopify.com',
      websites: [],
    },
    {
      account_id: 6064,
      account_name: 'Best Deals',
      websites: [],
    },
    {
      account_id: 6065,
      account_name: 'Big Commerce Store 6udajv7imr',
      websites: [],
    },
    {
      account_id: 6066,
      account_name: 'Big Commerce Store m4km54f209',
      websites: [],
    },
    {
      account_id: 6067,
      account_name: 'Underground Dynamics',
      websites: [],
    },
    {
      account_id: 6068,
      account_name: 'Big Commerce Store p46pcfqlup',
      websites: [
        {
          account_name: 'Big Commerce Store p46pcfqlup',
          website_id: 5365,
          website_name: 'taranumkh.mybigcommerce.com',
          skus: 10,
        },
      ],
    },
    {
      account_id: 6069,
      account_name: 'Taranumkh',
      websites: [],
    },
    {
      account_id: 6070,
      account_name: 'Shopify Store c99def-46.myshopify.com',
      websites: [],
    },
    {
      account_id: 6071,
      account_name: 'Jemina the cat',
      websites: [],
    },
    {
      account_id: 6073,
      account_name: 'Shopify Store b3e4c7-e8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6074,
      account_name: 'Shopify Store f61ced-31.myshopify.com',
      websites: [],
    },
    {
      account_id: 6075,
      account_name: 'Shopify Store 154448-8d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6076,
      account_name: 'Prints by ins',
      websites: [],
    },
    {
      account_id: 6077,
      account_name: 'angelos-webwinkel',
      websites: [],
    },
    {
      account_id: 6078,
      account_name: 'Big Commerce Store pzcpowdfiu',
      websites: [],
    },
    {
      account_id: 6079,
      account_name: 'Luminae Design',
      websites: [],
    },
    {
      account_id: 6080,
      account_name: 'Shopify Store 0444ad-c3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6081,
      account_name: 'Big Commerce Store jvzgq00uxx',
      websites: [],
    },
    {
      account_id: 6082,
      account_name: 'Airacom Limited',
      websites: [],
    },
    {
      account_id: 6083,
      account_name: 'Shopify Store fa0e87-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6084,
      account_name: 'Shopify Store l4gde.myshopify.com',
      websites: [],
    },
    {
      account_id: 6085,
      account_name: 'CreativeTube UG',
      websites: [],
    },
    {
      account_id: 6086,
      account_name: 'Shopify Store 894f04-51.myshopify.com',
      websites: [],
    },
    {
      account_id: 6087,
      account_name: 'Shopify Store 1f5673-30.myshopify.com',
      websites: [],
    },
    {
      account_id: 6088,
      account_name: 'Shopify Store dc0c9a-e4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6089,
      account_name: 'DigiGenius Gaming & Tech',
      websites: [],
    },
    {
      account_id: 6054,
      account_name: 'Big Commerce Store 6wrwfqf5e6',
      websites: [],
    },
    {
      account_id: 6090,
      account_name: 'Big Commerce Store n44hyzyeyh',
      websites: [
        {
          account_name: 'Big Commerce Store n44hyzyeyh',
          website_id: 5347,
          website_name: 'kaiserinc.info',
          skus: 3,
        },
      ],
    },
    {
      account_id: 6091,
      account_name: 'Big Commerce Store ybtr6uwnxf',
      websites: [],
    },
    {
      account_id: 6092,
      account_name: 'HDIUK Limited',
      websites: [],
    },
    {
      account_id: 6093,
      account_name: 'Big Commerce Store 8f5neb8y0q',
      websites: [
        {
          account_name: 'Big Commerce Store 8f5neb8y0q',
          website_id: 5624,
          website_name: 'karmasilver.com',
          skus: 9259,
        },
      ],
    },
    {
      account_id: 6094,
      account_name: 'Shopify Store chapn.myshopify.com',
      websites: [],
    },
    {
      account_id: 6095,
      account_name: 'Shopify Store 54479b-7c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6096,
      account_name: 'Shopify Store de4099-82.myshopify.com',
      websites: [],
    },
    {
      account_id: 6097,
      account_name: 'Big Commerce Store prtidrdund',
      websites: [
        {
          account_name: 'Big Commerce Store prtidrdund',
          website_id: 6160,
          website_name: 'www.mavoli.com',
          skus: 18776,
        },
      ],
    },
    {
      account_id: 6098,
      account_name: 'mavoli',
      websites: [],
    },
    {
      account_id: 6099,
      account_name: 'Shopify Store saluhall-se.myshopify.com',
      websites: [],
    },
    {
      account_id: 6100,
      account_name: 'Saluhall.se',
      websites: [],
    },
    {
      account_id: 6101,
      account_name: 'Big Commerce Store qt1c6pqa7l',
      websites: [],
    },
    {
      account_id: 6102,
      account_name: 'linda parts',
      websites: [],
    },
    {
      account_id: 6103,
      account_name: 'KAISER INTERNATIONAL INC',
      websites: [],
    },
    {
      account_id: 6104,
      account_name: 'Big Commerce Store zdxtw4w',
      websites: [
        {
          account_name: 'Big Commerce Store zdxtw4w',
          website_id: 5356,
          website_name: 'store.russianlife.com',
          skus: 94,
        },
      ],
    },
    {
      account_id: 6105,
      account_name: 'Russian Life',
      websites: [],
    },
    {
      account_id: 6106,
      account_name: 'Shopify Store d046f7-88.myshopify.com',
      websites: [],
    },
    {
      account_id: 6107,
      account_name: 'Shopify Store 8eccc6-a2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6108,
      account_name: 'Shopify Store 340e98-20.myshopify.com',
      websites: [],
    },
    {
      account_id: 6109,
      account_name: 'WorldOfTabletop',
      websites: [],
    },
    {
      account_id: 6110,
      account_name: 'Abdul Kadiri ',
      websites: [],
    },
    {
      account_id: 6111,
      account_name: 'Shopify Store assure-dna-testing.myshopify.com',
      websites: [],
    },
    {
      account_id: 6112,
      account_name: 'Assure DNA',
      websites: [],
    },
    {
      account_id: 6113,
      account_name: 'Somesha',
      websites: [
        {
          account_name: 'Somesha',
          website_id: 5362,
          website_name: 'taranumkh.mybigcommerce.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6114,
      account_name: 'Shopify Store 50bc31-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6115,
      account_name: 'Shopify Store 8342dd-bc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6116,
      account_name: 'Shopify Store 521357-d0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6117,
      account_name: 'hotisbike',
      websites: [],
    },
    {
      account_id: 6118,
      account_name: 'Big Commerce Store fnodn0k0fb',
      websites: [
        {
          account_name: 'Big Commerce Store fnodn0k0fb',
          website_id: 5367,
          website_name: 'priscilajar.mybigcommerce.com',
          skus: 20593,
        },
      ],
    },
    {
      account_id: 6119,
      account_name: 'priscilajar',
      websites: [],
    },
    {
      account_id: 6120,
      account_name: 'Big Commerce Store kaalhdslpt',
      websites: [],
    },
    {
      account_id: 6121,
      account_name: 'MasterClass Seats',
      websites: [],
    },
    {
      account_id: 6122,
      account_name: 'Big Commerce Store 7y5vsxas9c',
      websites: [
        {
          account_name: 'Big Commerce Store 7y5vsxas9c',
          website_id: 5369,
          website_name: 'wickedcookies.co.uk',
          skus: 198,
        },
      ],
    },
    {
      account_id: 6123,
      account_name: 'Wicked Cookies Ltd',
      websites: [],
    },
    {
      account_id: 6124,
      account_name: 'Big Commerce Store kpufdltuci',
      websites: [],
    },
    {
      account_id: 6125,
      account_name: 'E-Wire LLC',
      websites: [],
    },
    {
      account_id: 6126,
      account_name: 'Shopify Store 40419d-c9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6127,
      account_name: 'Shopify Store gesundheitsuhren.myshopify.com',
      websites: [],
    },
    {
      account_id: 6128,
      account_name: 'Kardena Imad Irsali',
      websites: [],
    },
    {
      account_id: 6129,
      account_name: 'Shopify Store 649036-65.myshopify.com',
      websites: [],
    },
    {
      account_id: 6130,
      account_name: 'Shopify Store energiezentrale-gmbh.myshopify.com',
      websites: [],
    },
    {
      account_id: 6131,
      account_name: 'Energiezentrale GmbH',
      websites: [],
    },
    {
      account_id: 5127,
      account_name: 'Half Price Banners',
      websites: [],
    },
    {
      account_id: 6132,
      account_name: 'Marketing & oglasevanje Marko Sekulic sp',
      websites: [],
    },
    {
      account_id: 6133,
      account_name: 'Shopify Store fb48f5-23.myshopify.com',
      websites: [],
    },
    {
      account_id: 6134,
      account_name: 'edition studio',
      websites: [],
    },
    {
      account_id: 6135,
      account_name: 'adwnet',
      websites: [],
    },
    {
      account_id: 6136,
      account_name: 'Big Commerce Store su9ellhl39',
      websites: [
        {
          account_name: 'Big Commerce Store su9ellhl39',
          website_id: 5381,
          website_name: 'air-timer.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 6137,
      account_name: 'Alphatec Business ltd',
      websites: [],
    },
    {
      account_id: 6138,
      account_name: 'Shopify Store aae399-07.myshopify.com',
      websites: [],
    },
    {
      account_id: 6139,
      account_name: 'onlinegoldrushstore',
      websites: [],
    },
    {
      account_id: 6140,
      account_name: 'Big Commerce Store 2whvrvkj5h',
      websites: [],
    },
    {
      account_id: 6141,
      account_name: 'Blossombra',
      websites: [],
    },
    {
      account_id: 6142,
      account_name: 'Shopify Store 209f73-b7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6143,
      account_name: 'Shopify',
      websites: [],
    },
    {
      account_id: 6144,
      account_name: 'Shopify Store 7e1329-ca.myshopify.com',
      websites: [],
    },
    {
      account_id: 6145,
      account_name: 'Discounts Deals Online',
      websites: [],
    },
    {
      account_id: 6146,
      account_name: 'Shopify Store f2bba7-5c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6147,
      account_name: 'Shopify Store 4fe045.myshopify.com',
      websites: [],
    },
    {
      account_id: 6148,
      account_name: 'Big Commerce Store 23ae9',
      websites: [
        {
          account_name: 'Big Commerce Store 23ae9',
          website_id: 5388,
          website_name: 'www.botanicamasalla.com',
          skus: 2467,
        },
      ],
    },
    {
      account_id: 6149,
      account_name: 'botanica mas alla',
      websites: [],
    },
    {
      account_id: 6150,
      account_name: 'Shopify Store 903d0e-a4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6151,
      account_name: 'QM Accessories',
      websites: [],
    },
    {
      account_id: 6152,
      account_name: 'Big Commerce Store kvqqidh6j0',
      websites: [
        {
          account_name: 'Big Commerce Store kvqqidh6j0',
          website_id: 5391,
          website_name: 'suthernpicker.com',
          skus: 2127,
        },
      ],
    },
    {
      account_id: 6153,
      account_name: 'Suthern Picker',
      websites: [],
    },
    {
      account_id: 6154,
      account_name: 'Shopify Store indsturgis.myshopify.com',
      websites: [],
    },
    {
      account_id: 6155,
      account_name: 'Shopify Store 978773-c6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6156,
      account_name: 'Shopify Store 7ca204-00.myshopify.com',
      websites: [],
    },
    {
      account_id: 6157,
      account_name: 'BOLDVIEW APPAREL',
      websites: [],
    },
    {
      account_id: 6158,
      account_name: 'Big Commerce Store 2tmvnvuxzp',
      websites: [],
    },
    {
      account_id: 6159,
      account_name: 'Shopify Store 02f727-5a.myshopify.com',
      websites: [],
    },
    {
      account_id: 6160,
      account_name: 'Safari Sunbeam',
      websites: [],
    },
    {
      account_id: 6161,
      account_name: 'Shopify Store 301414-5c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6162,
      account_name: 'Shopify Store 554232-b0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6163,
      account_name: 'Shopify Store 653491-13.myshopify.com',
      websites: [],
    },
    {
      account_id: 6164,
      account_name: 'Shopify Store f524b9-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6165,
      account_name: 'Shopify Store 714f18-85.myshopify.com',
      websites: [],
    },
    {
      account_id: 6166,
      account_name: 'https://womensfit.shop/account',
      websites: [],
    },
    {
      account_id: 6167,
      account_name: 'Shopify Store a61571.myshopify.com',
      websites: [],
    },
    {
      account_id: 6168,
      account_name: 'Shopify Store isola-bella-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6169,
      account_name: 'Shopify Store 6172d3-b8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6170,
      account_name: 'Shopify Store orioudh-com.myshopify.com',
      websites: [],
    },
    {
      account_id: 6171,
      account_name: 'Orioudh',
      websites: [],
    },
    {
      account_id: 6172,
      account_name: 'Shopify Store arabian-perfumes-6642.myshopify.com',
      websites: [],
    },
    {
      account_id: 6173,
      account_name: 'Isola Bella Kids Clothing',
      websites: [],
    },
    {
      account_id: 6174,
      account_name: 'Shopify Store 1c001f-5e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6175,
      account_name: 'KUDOS',
      websites: [],
    },
    {
      account_id: 6176,
      account_name: 'Big Commerce Store 4hggpnzouu',
      websites: [],
    },
    {
      account_id: 6177,
      account_name: 'Ralfixings Ltd',
      websites: [],
    },
    {
      account_id: 6178,
      account_name: 'Shopify Store 3f34d5-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6180,
      account_name: 'Shopify Store 9fa828-0b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6181,
      account_name: 'Bella Road',
      websites: [],
    },
    {
      account_id: 6182,
      account_name: 'Optimumsport',
      websites: [],
    },
    {
      account_id: 6183,
      account_name: 'Shopify Store 6535fb-c9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6185,
      account_name: 'inspiredbyanimeus',
      websites: [],
    },
    {
      account_id: 6186,
      account_name: 'Shopify Store 93d1e8-62.myshopify.com',
      websites: [],
    },
    {
      account_id: 6187,
      account_name: 'Northern Emporium ',
      websites: [],
    },
    {
      account_id: 6188,
      account_name: 'Big Commerce Store eatmjadoyt',
      websites: [],
    },
    {
      account_id: 6189,
      account_name: 'Greenenercorp',
      websites: [],
    },
    {
      account_id: 6190,
      account_name: 'Big Commerce Store lnaoqcsls2',
      websites: [],
    },
    {
      account_id: 6191,
      account_name: 'Garhome LTD',
      websites: [],
    },
    {
      account_id: 6192,
      account_name: 'Shopify Store rose-gold-co-shop.myshopify.com',
      websites: [],
    },
    {
      account_id: 6193,
      account_name: 'Shopify Store c48864.myshopify.com',
      websites: [],
    },
    {
      account_id: 6194,
      account_name: 'Shopify Store 53b1c6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6195,
      account_name: 'Shopify Store e9bafd-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6196,
      account_name: 'Shopify Store c33afc-1b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6197,
      account_name: 'Shopify Store 5e5d78-4f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6198,
      account_name: 'Sean Austin',
      websites: [],
    },
    {
      account_id: 6199,
      account_name: 'R MOULIDARAN',
      websites: [],
    },
    {
      account_id: 6200,
      account_name: 'Shopify Store 0c1c3f-16.myshopify.com',
      websites: [],
    },
    {
      account_id: 6201,
      account_name: 'Decoris',
      websites: [],
    },
    {
      account_id: 6202,
      account_name: 'Shopify Store bison-coolers.myshopify.com',
      websites: [],
    },
    {
      account_id: 6203,
      account_name: 'Shopify Store 3512eb-44.myshopify.com',
      websites: [],
    },
    {
      account_id: 6204,
      account_name: 'Elysium Logistics LLC',
      websites: [],
    },
    {
      account_id: 6205,
      account_name: 'Shopify Store e459ae-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6206,
      account_name: 'Shopify Store 077508-d7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6207,
      account_name: 'Big Commerce Store zj3gvq95ll',
      websites: [],
    },
    {
      account_id: 6208,
      account_name: 'foxtech',
      websites: [],
    },
    {
      account_id: 6209,
      account_name: 'Shopify Store 3c7f6f-09.myshopify.com',
      websites: [],
    },
    {
      account_id: 6210,
      account_name: 'Shopify Store kovitkatu.myshopify.com',
      websites: [],
    },
    {
      account_id: 6211,
      account_name: 'Global Outlet',
      websites: [],
    },
    {
      account_id: 6212,
      account_name: 'Shopify Store 5040e5-fb.myshopify.com',
      websites: [],
    },
    {
      account_id: 6213,
      account_name: 'Shopify Store 2e4e17-dc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6214,
      account_name: 'Bison Coolers ',
      websites: [],
    },
    {
      account_id: 6215,
      account_name: 'Shopify Store sand-sea-salt.myshopify.com',
      websites: [],
    },
    {
      account_id: 6216,
      account_name: 'Sand and Seasalt',
      websites: [],
    },
    {
      account_id: 6217,
      account_name: 'Big Commerce Store kry2grgj11',
      websites: [],
    },
    {
      account_id: 6218,
      account_name: 'MITB',
      websites: [],
    },
    {
      account_id: 6219,
      account_name: 'Shopify Store 95894b-47.myshopify.com',
      websites: [],
    },
    {
      account_id: 6220,
      account_name: 'Brood N Burrow LLC',
      websites: [],
    },
    {
      account_id: 6221,
      account_name: 'Shopify Store 32656e-0f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6222,
      account_name: 'All Provisions ',
      websites: [],
    },
    {
      account_id: 6223,
      account_name: 'Shopify Store 5139a1-85.myshopify.com',
      websites: [],
    },
    {
      account_id: 6224,
      account_name: 'Shopify Store fbe7e1-2f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6225,
      account_name: 'Shopify Store 385108-26.myshopify.com',
      websites: [],
    },
    {
      account_id: 6226,
      account_name: 'Shopify Store 9da667-cf.myshopify.com',
      websites: [],
    },
    {
      account_id: 6227,
      account_name: 'Shopify Store f11f78.myshopify.com',
      websites: [],
    },
    {
      account_id: 6228,
      account_name: 'biobodyboost',
      websites: [],
    },
    {
      account_id: 6229,
      account_name: 'Shopify Store 38889b-78.myshopify.com',
      websites: [],
    },
    {
      account_id: 6230,
      account_name: 'Shopify Store mapourjourney.myshopify.com',
      websites: [],
    },
    {
      account_id: 6231,
      account_name: 'Shopify Store b62dea.myshopify.com',
      websites: [],
    },
    {
      account_id: 6232,
      account_name: 'Shopify Store e634a2-66.myshopify.com',
      websites: [],
    },
    {
      account_id: 6233,
      account_name: 'Shopify Store a36876-26.myshopify.com',
      websites: [],
    },
    {
      account_id: 6234,
      account_name: 'haser',
      websites: [],
    },
    {
      account_id: 6235,
      account_name: 'Rosa Lopez',
      websites: [],
    },
    {
      account_id: 6236,
      account_name: 'Shopify Store 1e7a8f-4f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6237,
      account_name: 'Suritees',
      websites: [],
    },
    {
      account_id: 6238,
      account_name: 'Shopify Store basic-state.myshopify.com',
      websites: [],
    },
    {
      account_id: 6243,
      account_name: 'Shopify Store 4b7921-7f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6240,
      account_name: 'The 405 Collective',
      websites: [],
    },
    {
      account_id: 6241,
      account_name: 'Shopify Store fa7c7b-ac.myshopify.com',
      websites: [],
    },
    {
      account_id: 6242,
      account_name: 'Shopify Store 9ee308-4b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6239,
      account_name: 'Shopify Store a2bede-f8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6244,
      account_name: 'Shopify Store 503cb3-d6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6245,
      account_name: 'Shopify Store 2ed781-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6246,
      account_name: 'Shopify Store 173e5a-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6247,
      account_name: 'Shopify Store csmark2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store csmark2.myshopify.com',
          website_id: 6719,
          website_name: 'csmark2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6248,
      account_name: 'Shopify Store b3fd02-8d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6250,
      account_name: 'Shopify Store waterfilter.myshopify.com',
      websites: [],
    },
    {
      account_id: 6251,
      account_name: 'Shopify Store 7bac8e-1f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6252,
      account_name: 'Love Laine. Studio',
      websites: [],
    },
    {
      account_id: 6254,
      account_name: 'Shopify Store toepfer-timber-company.myshopify.com',
      websites: [],
    },
    {
      account_id: 6257,
      account_name: 'Shopify Store 32633c-64.myshopify.com',
      websites: [],
    },
    {
      account_id: 6258,
      account_name: 'Shopify Store f54bf3-bc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6259,
      account_name: 'Shopify Store 51bc29-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6260,
      account_name: 'Shopify Store 40174e-6e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6261,
      account_name: 'Shopify Store c410f2-59.myshopify.com',
      websites: [],
    },
    {
      account_id: 6262,
      account_name: 'Heaven On Earth ',
      websites: [],
    },
    {
      account_id: 6265,
      account_name: 'Shopify Store f709e1-91.myshopify.com',
      websites: [],
    },
    {
      account_id: 6266,
      account_name: 'Within A Frame Productions',
      websites: [],
    },
    {
      account_id: 6267,
      account_name: 'femme harbor',
      websites: [],
    },
    {
      account_id: 6268,
      account_name: 'Marketify',
      websites: [],
    },
    {
      account_id: 6269,
      account_name: 'Shopify Store b80009-f3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6270,
      account_name: 'Soulful Expressions',
      websites: [],
    },
    {
      account_id: 6271,
      account_name: 'Shopify Store air-plant-decor.myshopify.com',
      websites: [],
    },
    {
      account_id: 6272,
      account_name: 'Azaan & Nabira Ansari اذان اور نبیرہ انصاری',
      websites: [
        {
          account_name: 'Azaan & Nabira Ansari اذان اور نبیرہ انصاری',
          website_id: 5501,
          website_name: 'azharansari786.blogspot.com',
          skus: 0,
        },
        {
          account_name: 'Azaan & Nabira Ansari اذان اور نبیرہ انصاری',
          website_id: 5502,
          website_name: 'youtube.com/@azharansari3018',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6273,
      account_name: 'Shopify Store 94d451-3b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6274,
      account_name: 'VN Infinite Quality',
      websites: [],
    },
    {
      account_id: 6276,
      account_name: 'Shopify Store 3f7301-a9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6277,
      account_name: 'https://thepuzzlersparadise.com/',
      websites: [],
    },
    {
      account_id: 6278,
      account_name: 'Shopify Store revive-women.myshopify.com',
      websites: [],
    },
    {
      account_id: 6279,
      account_name: 'Shopify Store homelabstorenz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store homelabstorenz.myshopify.com',
          website_id: 6403,
          website_name: 'homelabstore.co.nz',
          skus: 1183,
        },
      ],
    },
    {
      account_id: 6280,
      account_name: 'Shopify Store 7df0e6-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6281,
      account_name: '2ndshotmvp',
      websites: [],
    },
    {
      account_id: 6282,
      account_name: 'Shopify Store house-aashirya.myshopify.com',
      websites: [],
    },
    {
      account_id: 6283,
      account_name: 'Shopify Store e4b165-e6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6284,
      account_name: 'Homstecks',
      websites: [],
    },
    {
      account_id: 6285,
      account_name: 'Big Commerce Store kdpthztlbe',
      websites: [
        {
          account_name: 'Big Commerce Store kdpthztlbe',
          website_id: 5515,
          website_name: 'maximilian.mybigcommerce.com',
          skus: 16866,
        },
      ],
    },
    {
      account_id: 6286,
      account_name: 'Maximilian',
      websites: [],
    },
    {
      account_id: 6275,
      account_name: 'Shopify Store 4829ed-8e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6287,
      account_name: 'Shopify Store misteriozna.myshopify.com',
      websites: [],
    },
    {
      account_id: 6288,
      account_name: 'Misteriozna Beauty',
      websites: [],
    },
    {
      account_id: 3623,
      account_name: 'OOm',
      websites: [
        {
          account_name: 'OOm',
          website_id: 3408,
          website_name: 'petitefleursg.com',
          skus: 328,
        },
        {
          account_name: 'OOm',
          website_id: 4480,
          website_name: 'www.soulandtables.com.sg',
          skus: 1660,
        },
      ],
    },
    {
      account_id: 6289,
      account_name: 'Shopify Store oxygen-materials-group.myshopify.com',
      websites: [],
    },
    {
      account_id: 6290,
      account_name: 'Wholesale Watercoolers',
      websites: [],
    },
    {
      account_id: 6291,
      account_name: 'Shopify Store autumn-leann-designs.myshopify.com',
      websites: [],
    },
    {
      account_id: 6292,
      account_name: 'Shopify Store d7c236-9e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6293,
      account_name: 'Shopify Store 60ddd6-b0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6294,
      account_name: 'Matcha Life',
      websites: [],
    },
    {
      account_id: 6295,
      account_name: 'Shopify Store aa9fae-db.myshopify.com',
      websites: [],
    },
    {
      account_id: 6296,
      account_name: 'DMJ Home Fragrance',
      websites: [],
    },
    {
      account_id: 6297,
      account_name: 'Shopify Store 0a3214-34.myshopify.com',
      websites: [],
    },
    {
      account_id: 6298,
      account_name: 'Shopify Store jbavarian-covers.myshopify.com',
      websites: [],
    },
    {
      account_id: 6299,
      account_name: 'jbavarian.com',
      websites: [],
    },
    {
      account_id: 6300,
      account_name: 'Shopify Store 209ed8-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6301,
      account_name: 'Shopify Store eacfe4-a8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6302,
      account_name: 'Shopify Store bb69cc-4d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6303,
      account_name: 'Shopify Store cuttysark.myshopify.com',
      websites: [],
    },
    {
      account_id: 6304,
      account_name: 'Revive Wear',
      websites: [],
    },
    {
      account_id: 6305,
      account_name: 'Shopify Store feedops-tim-april-2023.myshopify.com',
      websites: [],
    },
    {
      account_id: 6072,
      account_name: 'f39eec-96.myshopify.com',
      websites: [],
    },
    {
      account_id: 6306,
      account_name: 'Shopify Store mixerskirt.myshopify.com',
      websites: [],
    },
    {
      account_id: 6307,
      account_name: 'Shopify Store 04e1f4-36.myshopify.com',
      websites: [],
    },
    {
      account_id: 6308,
      account_name: 'Tecno Ofertas',
      websites: [],
    },
    {
      account_id: 6309,
      account_name: 'Shopify Store 30a41a-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6310,
      account_name: 'Big Commerce Store kwd4k3ql78',
      websites: [
        {
          account_name: 'Big Commerce Store kwd4k3ql78',
          website_id: 5536,
          website_name: 'red-chilli-exhaust.mybigcommerce.com',
          skus: 4,
        },
      ],
    },
    {
      account_id: 6311,
      account_name: 'Red Chilli Exhaust',
      websites: [],
    },
    {
      account_id: 6312,
      account_name: 'Big Commerce Store ecvwun71',
      websites: [
        {
          account_name: 'Big Commerce Store ecvwun71',
          website_id: 5537,
          website_name: 'flaxart.com',
          skus: 17258,
        },
      ],
    },
    {
      account_id: 6313,
      account_name: 'FLAX art and design',
      websites: [],
    },
    {
      account_id: 6315,
      account_name: 'Shopify Store bfb86a-a8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6316,
      account_name: 'Shopify Store 450234-11.myshopify.com',
      websites: [],
    },
    {
      account_id: 6317,
      account_name: 'VisionCourse Media',
      websites: [],
    },
    {
      account_id: 6318,
      account_name: 'Shopify Store 0b3516-f1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6319,
      account_name: 'Trendy Chasers',
      websites: [],
    },
    {
      account_id: 6320,
      account_name: 'Shopify Store 45f66a.myshopify.com',
      websites: [],
    },
    {
      account_id: 6321,
      account_name: 'GLAM shopping',
      websites: [],
    },
    {
      account_id: 6322,
      account_name: 'Shopify Store little-gusto.myshopify.com',
      websites: [],
    },
    {
      account_id: 6323,
      account_name: 'Shopify Store juli-gal.myshopify.com',
      websites: [],
    },
    {
      account_id: 6324,
      account_name: 'Alpi 12 Ltd',
      websites: [],
    },
    {
      account_id: 6325,
      account_name: 'Shopify Store 4388d7-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6326,
      account_name: 'Shopify Store c07f09-b3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6327,
      account_name: 'Shopify Store 342f92.myshopify.com',
      websites: [],
    },
    {
      account_id: 6328,
      account_name: 'Big Commerce Store 6ecsgdft1u',
      websites: [],
    },
    {
      account_id: 6329,
      account_name: 'Swann Communications',
      websites: [],
    },
    {
      account_id: 6330,
      account_name: 'Shopify Store bb9bdb-a2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6331,
      account_name: 'tech magnett',
      websites: [],
    },
    {
      account_id: 6332,
      account_name: 'Shopify Store 626d3f-45.myshopify.com',
      websites: [],
    },
    {
      account_id: 6333,
      account_name: 'éh',
      websites: [],
    },
    {
      account_id: 6334,
      account_name: 'CiES, Inc.',
      websites: [],
    },
    {
      account_id: 6335,
      account_name: 'fredconstantinescu606',
      websites: [
        {
          account_name: 'fredconstantinescu606',
          website_id: 5569,
          website_name: 'try.info',
          skus: 0,
        },
        {
          account_name: 'fredconstantinescu606',
          website_id: 5570,
          website_name: 'vbnvcb.online',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6337,
      account_name: 'Big Commerce Store lvgqxsvcnh',
      websites: [
        {
          account_name: 'Big Commerce Store lvgqxsvcnh',
          website_id: 5576,
          website_name: 'www.fiorenzashop.com',
          skus: 626,
        },
      ],
    },
    {
      account_id: 6338,
      account_name: 'fiorenzashop',
      websites: [],
    },
    {
      account_id: 6340,
      account_name: 'Cherry Sensi',
      websites: [],
    },
    {
      account_id: 6341,
      account_name: 'lachellelpzetzer2793@gmail.com',
      websites: [],
    },
    {
      account_id: 6342,
      account_name: 'Big Commerce Store x6c60xhqn5',
      websites: [
        {
          account_name: 'Big Commerce Store x6c60xhqn5',
          website_id: 5583,
          website_name: 'partyday.com.mx',
          skus: 433,
        },
      ],
    },
    {
      account_id: 6343,
      account_name: 'Party Day',
      websites: [],
    },
    {
      account_id: 6344,
      account_name: 'ellynlppe',
      websites: [
        {
          account_name: 'ellynlppe',
          website_id: 5591,
          website_name: 'storeleads.app',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6339,
      account_name: 'Cherrysensi.net',
      websites: [],
    },
    {
      account_id: 6345,
      account_name: 'meridithlp',
      websites: [
        {
          account_name: 'meridithlp',
          website_id: 5610,
          website_name: 'storeads1.app',
          skus: 0,
        },
        {
          account_name: 'meridithlp',
          website_id: 5609,
          website_name: 'storeads.app',
          skus: 0,
        },
        {
          account_name: 'meridithlp',
          website_id: 5611,
          website_name: 'storeads2.app',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6346,
      account_name: 'bvcv',
      websites: [
        {
          account_name: 'bvcv',
          website_id: 5622,
          website_name: 'storeads.app',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6347,
      account_name: 'Big Commerce Store c3wyt792ty',
      websites: [
        {
          account_name: 'Big Commerce Store c3wyt792ty',
          website_id: 5623,
          website_name: 'www.cryptocomputing.ca',
          skus: 100755,
        },
      ],
    },
    {
      account_id: 6348,
      account_name: 'Jasminder Bangar',
      websites: [],
    },
    {
      account_id: 6349,
      account_name: 'GJUSA',
      websites: [],
    },
    {
      account_id: 6351,
      account_name: 'Wintecs Window Cleaning Supplies',
      websites: [],
    },
    {
      account_id: 6350,
      account_name: 'Big Commerce Store 5lfyao9c',
      websites: [],
    },
    {
      account_id: 6352,
      account_name: 'Shopify Store 13e179.myshopify.com',
      websites: [],
    },
    {
      account_id: 6353,
      account_name: 'Force 10 Brakes',
      websites: [],
    },
    {
      account_id: 6354,
      account_name: 'Shopify Store fbc52e-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6355,
      account_name: 'Shopify Store 9221df-07.myshopify.com',
      websites: [],
    },
    {
      account_id: 6356,
      account_name: 'Cutie Essential',
      websites: [],
    },
    {
      account_id: 6336,
      account_name: 'BZW BRAND LLC',
      websites: [],
    },
    {
      account_id: 6357,
      account_name: 'BZW Brands',
      websites: [],
    },
    {
      account_id: 6358,
      account_name: 'Shopify Store black-lab-coffee-co.myshopify.com',
      websites: [],
    },
    {
      account_id: 6359,
      account_name: 'Shopify Store 2574f2-db.myshopify.com',
      websites: [],
    },
    {
      account_id: 6360,
      account_name: 'Shopify Store best-saleshop.myshopify.com',
      websites: [],
    },
    {
      account_id: 6361,
      account_name: 'nn',
      websites: [],
    },
    {
      account_id: 6362,
      account_name: 'Shopify Store d8af40-83.myshopify.com',
      websites: [],
    },
    {
      account_id: 6363,
      account_name: 'Shopify Store 41975d-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6364,
      account_name: 'Shopify Store f46252-a8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6365,
      account_name: 'Shopify Store 35059d-51.myshopify.com',
      websites: [],
    },
    {
      account_id: 6366,
      account_name: 'Baddezt Streetwear',
      websites: [],
    },
    {
      account_id: 6367,
      account_name: 'BZW BRANDS LLC.',
      websites: [],
    },
    {
      account_id: 6368,
      account_name: 'Shopify Store 3427b6-e0-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6369,
      account_name: 'Frapp',
      websites: [],
    },
    {
      account_id: 6370,
      account_name: 'Shopify Store sweetdealspdx.myshopify.com',
      websites: [],
    },
    {
      account_id: 6371,
      account_name: 'hopcaffe',
      websites: [
        {
          account_name: 'hopcaffe',
          website_id: 5660,
          website_name: 'floral5.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6372,
      account_name: 'Promeo',
      websites: [
        {
          account_name: 'Promeo',
          website_id: 5666,
          website_name: 'pond5.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6373,
      account_name: 'xxxx',
      websites: [],
    },
    {
      account_id: 6374,
      account_name: 'Big Commerce Store y82jh6y6w',
      websites: [
        {
          account_name: 'Big Commerce Store y82jh6y6w',
          website_id: 5667,
          website_name: 'museumreplicas.com',
          skus: 7061,
        },
      ],
    },
    {
      account_id: 6375,
      account_name: 'Atlanta Cutlery Corp.',
      websites: [],
    },
    {
      account_id: 6376,
      account_name: 'Shopify Store 88f495-f4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6377,
      account_name: 'SWEET DEALS PDX LLC',
      websites: [],
    },
    {
      account_id: 6378,
      account_name: 'inspiredbyanimeUS',
      websites: [],
    },
    {
      account_id: 6379,
      account_name: 'Shopify Store 24b981-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6380,
      account_name: 'Smart Pulse Safety',
      websites: [],
    },
    {
      account_id: 6381,
      account_name: 'Big Commerce Store bjnf7sshk1',
      websites: [],
    },
    {
      account_id: 6382,
      account_name: 'GOODS4IU',
      websites: [],
    },
    {
      account_id: 6383,
      account_name: 'Shopify Store b04c39-ff.myshopify.com',
      websites: [],
    },
    {
      account_id: 6384,
      account_name: 'Shopify Store ferryb-loom.myshopify.com',
      websites: [],
    },
    {
      account_id: 6385,
      account_name: 'Shopify Store 5d46f6-f9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6386,
      account_name: 'www.bonbolo.com',
      websites: [],
    },
    {
      account_id: 6387,
      account_name: 'Shopify Store 68f3a1-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6388,
      account_name: 'Frenkiezdogshop',
      websites: [],
    },
    {
      account_id: 6390,
      account_name: 'Shopify Store bettersmartwatch-com.myshopify.com',
      websites: [],
    },
    {
      account_id: 6391,
      account_name: 'Shopify Store eco-fox-ltd.myshopify.com',
      websites: [],
    },
    {
      account_id: 6392,
      account_name: 'Eco Fox Ltd',
      websites: [],
    },
    {
      account_id: 6393,
      account_name: 'Home Lab Store',
      websites: [],
    },
    {
      account_id: 6394,
      account_name: 'Shopify Store 498a8c-50.myshopify.com',
      websites: [],
    },
    {
      account_id: 6395,
      account_name: 'Lacitta SIA',
      websites: [],
    },
    {
      account_id: 6389,
      account_name: 'f39eec-96.myshopify.com',
      websites: [],
    },
    {
      account_id: 5075,
      account_name: 'LocaliQ US',
      websites: [
        {
          account_name: 'LocaliQ US',
          website_id: 4622,
          website_name: 'www.tgchemical.com',
          skus: 22896,
        },
        {
          account_name: 'LocaliQ US',
          website_id: 4820,
          website_name: 'www.freshwaveworks.com',
          skus: 109,
        },
        {
          account_name: 'LocaliQ US',
          website_id: 5212,
          website_name: 'www.scotchporter.com',
          skus: 58,
        },
      ],
    },
    {
      account_id: 6396,
      account_name: 'Shopify Store catherines-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6397,
      account_name: "Catherine's Boutique",
      websites: [],
    },
    {
      account_id: 6398,
      account_name: 'Shopify Store ffce01-e4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6400,
      account_name: 'Heathrow Scientific',
      websites: [],
    },
    {
      account_id: 6401,
      account_name: 'Big Commerce Store 3pte0u8smt',
      websites: [],
    },
    {
      account_id: 6399,
      account_name: 'Heathrow Scientific',
      websites: [
        {
          account_name: 'Heathrow Scientific',
          website_id: 5693,
          website_name: 'www.heathrowscientific.com',
          skus: 2583,
        },
      ],
    },
    {
      account_id: 6402,
      account_name: 'Big Commerce Store 45bvnuz3',
      websites: [],
    },
    {
      account_id: 6403,
      account_name: 'Sound of Mountain Music',
      websites: [],
    },
    {
      account_id: 6404,
      account_name: 'Shopify Store hairhouse-au.myshopify.com',
      websites: [],
    },
    {
      account_id: 6405,
      account_name: 'Magnolia Manor Mercantile',
      websites: [],
    },
    {
      account_id: 6407,
      account_name: 'HairHouse AU',
      websites: [],
    },
    {
      account_id: 6408,
      account_name: 'Shopify Store 5d8d5e-79.myshopify.com',
      websites: [],
    },
    {
      account_id: 6409,
      account_name: 'Shopify Store ea3dd5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6410,
      account_name: 'NursingScholar',
      websites: [],
    },
    {
      account_id: 6411,
      account_name: 'Shopify Store 8d2b9e-59.myshopify.com',
      websites: [],
    },
    {
      account_id: 6412,
      account_name: 'MythixTech',
      websites: [],
    },
    {
      account_id: 6413,
      account_name: 'Shopify Store dc1072-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6414,
      account_name: 'Little Lala Boutique',
      websites: [],
    },
    {
      account_id: 6415,
      account_name: 'Shopify Store 4a99ed.myshopify.com',
      websites: [],
    },
    {
      account_id: 6416,
      account_name: 'Shopify Store f39eec-96.myshopify.com',
      websites: [],
    },
    {
      account_id: 6417,
      account_name: 'Printifam',
      websites: [],
    },
    {
      account_id: 6425,
      account_name: "Isabelle's Lighting",
      websites: [],
    },
    {
      account_id: 6419,
      account_name: 'Woolstack Limited',
      websites: [],
    },
    {
      account_id: 6418,
      account_name: 'Woolstack',
      websites: [],
    },
    {
      account_id: 6420,
      account_name: 'Shopify Store lilac-blonde.myshopify.com',
      websites: [],
    },
    {
      account_id: 6421,
      account_name: 'Lilac Blonde',
      websites: [],
    },
    {
      account_id: 6422,
      account_name: 'Big Commerce Store 1pxjsuzfj0',
      websites: [],
    },
    {
      account_id: 6424,
      account_name: 'Big Commerce Store r6m0gsfal',
      websites: [],
    },
    {
      account_id: 6433,
      account_name: 'Volax Store',
      websites: [
        {
          account_name: 'Volax Store',
          website_id: 5728,
          website_name: 'volaxstore.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6428,
      account_name: 'coanoa',
      websites: [],
    },
    {
      account_id: 6046,
      account_name: 'Shopify Store cocoayachtclubinc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6429,
      account_name: 'Big Commerce Store ufooq11454',
      websites: [],
    },
    {
      account_id: 6430,
      account_name: 'Si Yue Music',
      websites: [],
    },
    {
      account_id: 6431,
      account_name: 'Shopify Store essentialstore-4414.myshopify.com',
      websites: [],
    },
    {
      account_id: 6432,
      account_name: 'Big Commerce Store ktdamhfv2f',
      websites: [],
    },
    {
      account_id: 6434,
      account_name: 'Shopify Store bossco-auto-4x4-accessories.myshopify.com',
      websites: [],
    },
    {
      account_id: 4633,
      account_name: 'Folders NZ',
      websites: [
        {
          account_name: 'Folders NZ',
          website_id: 2842,
          website_name: 'folders.co.nz',
          skus: 19492,
        },
      ],
    },
    {
      account_id: 6435,
      account_name: 'Arkive Atelier',
      websites: [],
    },
    {
      account_id: 6436,
      account_name: 'Big Commerce Store z6nmn8wpxn',
      websites: [
        {
          account_name: 'Big Commerce Store z6nmn8wpxn',
          website_id: 5730,
          website_name: 'petremedyusa.com',
          skus: 12,
        },
      ],
    },
    {
      account_id: 6437,
      account_name: 'Petremedyusa',
      websites: [],
    },
    {
      account_id: 6438,
      account_name: 'Shopify Store cb57f7-34.myshopify.com',
      websites: [],
    },
    {
      account_id: 6439,
      account_name: 'Shopify Store 904cae-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6440,
      account_name: "URAGANO SHOP DI GIOVANNI D'AMATO",
      websites: [],
    },
    {
      account_id: 6441,
      account_name: 'Shopify Store e64a90-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6442,
      account_name: 'Tangled Tulip Designs',
      websites: [],
    },
    {
      account_id: 6443,
      account_name: 'Jazib',
      websites: [],
    },
    {
      account_id: 6444,
      account_name: 'Big Commerce Store oqdard82v2',
      websites: [
        {
          account_name: 'Big Commerce Store oqdard82v2',
          website_id: 5736,
          website_name: 'uk.benroeu.com',
          skus: 215,
        },
      ],
    },
    {
      account_id: 6445,
      account_name: 'Big Commerce Store 7edce',
      websites: [],
    },
    {
      account_id: 6446,
      account_name: 'Fallindesign',
      websites: [],
    },
    {
      account_id: 6447,
      account_name: 'Big Commerce Store gr83s',
      websites: [
        {
          account_name: 'Big Commerce Store gr83s',
          website_id: 5767,
          website_name: 'rancholiquoronline.com',
          skus: 2739,
        },
      ],
    },
    {
      account_id: 6448,
      account_name: 'Rancho Liquor & Fine Cigar Shop',
      websites: [],
    },
    {
      account_id: 6449,
      account_name: 'Big Commerce Store lat6w9203f',
      websites: [],
    },
    {
      account_id: 6450,
      account_name: 'Wellworking',
      websites: [],
    },
    {
      account_id: 6451,
      account_name: 'Shopify Store lemonsodala.myshopify.com',
      websites: [],
    },
    {
      account_id: 6452,
      account_name: 'Lemonsoda',
      websites: [],
    },
    {
      account_id: 6453,
      account_name: 'Shopify Store 32e48b-e3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6454,
      account_name: 'Big Commerce Store qrdehhbrrk',
      websites: [
        {
          account_name: 'Big Commerce Store qrdehhbrrk',
          website_id: 5743,
          website_name: 'dthrhrhy.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 6455,
      account_name: 'dthrthy',
      websites: [],
    },
    {
      account_id: 6456,
      account_name: 'Shopify Store c102b0-4c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6457,
      account_name: 'Shopify Store 568394-e6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6458,
      account_name: '2Stoned Shop',
      websites: [],
    },
    {
      account_id: 6459,
      account_name: 'Shopify Store 1b0464-75.myshopify.com',
      websites: [],
    },
    {
      account_id: 6426,
      account_name: 'HerbalConnection',
      websites: [
        {
          account_name: 'HerbalConnection',
          website_id: 5715,
          website_name: 'herbalconnection.com.au',
          skus: 667,
        },
      ],
    },
    {
      account_id: 6460,
      account_name: 'Big Commerce Store 7fw0y7rz7v',
      websites: [],
    },
    {
      account_id: 6461,
      account_name: 'Zing Paws',
      websites: [],
    },
    {
      account_id: 6462,
      account_name: 'Shopify Store andrew-f300.myshopify.com',
      websites: [],
    },
    {
      account_id: 6463,
      account_name: 'Shopify Store pinkanddolls.myshopify.com',
      websites: [],
    },
    {
      account_id: 6464,
      account_name: 'Pink and Dolls FZ-LLC',
      websites: [],
    },
    {
      account_id: 6465,
      account_name: 'Big Commerce Store 3wk2r',
      websites: [
        {
          account_name: 'Big Commerce Store 3wk2r',
          website_id: 5752,
          website_name: 'koloa.com',
          skus: 17186,
        },
      ],
    },
    {
      account_id: 6466,
      account_name: 'koloa surf company',
      websites: [],
    },
    {
      account_id: 6493,
      account_name: 'Kith',
      websites: [],
    },
    {
      account_id: 6468,
      account_name: 'White Moss',
      websites: [],
    },
    {
      account_id: 6469,
      account_name: 'Big Commerce Store 0is2ubqbfq',
      websites: [],
    },
    {
      account_id: 6470,
      account_name: 'Rainbow Panda',
      websites: [],
    },
    {
      account_id: 6471,
      account_name: 'Shopify Store 64033d-39.myshopify.com',
      websites: [],
    },
    {
      account_id: 6472,
      account_name: 'Shopify Store soap-by-elena.myshopify.com',
      websites: [],
    },
    {
      account_id: 6473,
      account_name: 'Elena Bath and Body',
      websites: [],
    },
    {
      account_id: 6474,
      account_name: 'Basic State',
      websites: [],
    },
    {
      account_id: 6494,
      account_name: 'Shopify Store 6775bc-64.myshopify.com',
      websites: [],
    },
    {
      account_id: 6423,
      account_name: '  xiang yang rui qu shang mao you xian gong si',
      websites: [],
    },
    {
      account_id: 6475,
      account_name: 'Shopify Store 0c8bf5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6476,
      account_name: '11Electronics',
      websites: [],
    },
    {
      account_id: 6477,
      account_name: 'Shopify Store 8fbb08-1d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6478,
      account_name: 'Big Commerce Store oiurs5iiir',
      websites: [],
    },
    {
      account_id: 6479,
      account_name: 'ASC Direct',
      websites: [],
    },
    {
      account_id: 6480,
      account_name: 'Shopify Store cliqueworldwide.myshopify.com',
      websites: [],
    },
    {
      account_id: 6481,
      account_name: 'clique worldwide',
      websites: [],
    },
    {
      account_id: 6482,
      account_name: 'Shopify Store fa9501-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6483,
      account_name: 'Gymlifezone',
      websites: [],
    },
    {
      account_id: 6484,
      account_name: 'Shopify Store 0bc3c6-ef.myshopify.com',
      websites: [],
    },
    {
      account_id: 6485,
      account_name: 'Rancho Liquor Online',
      websites: [],
    },
    {
      account_id: 6467,
      account_name: 'Shopify Store d560ce-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6033,
      account_name: 'Shopify Store lp-datafeedsandbox.myshopify.com',
      websites: [],
    },
    {
      account_id: 6486,
      account_name: 'Shopify Store e9e346-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6487,
      account_name: 'Team Seizers',
      websites: [],
    },
    {
      account_id: 6488,
      account_name: 'Shopify Store struthaircare.myshopify.com',
      websites: [],
    },
    {
      account_id: 6489,
      account_name: 'Strut Hair Care',
      websites: [],
    },
    {
      account_id: 6490,
      account_name: 'Rayan Enter',
      websites: [],
    },
    {
      account_id: 6491,
      account_name: 'Shopify Store 910fdd-21.myshopify.com',
      websites: [],
    },
    {
      account_id: 6492,
      account_name: 'Big Commerce Store n5wc2xvpu5',
      websites: [
        {
          account_name: 'Big Commerce Store n5wc2xvpu5',
          website_id: 5772,
          website_name: 'kith.mybigcommerce.com',
          skus: 483,
        },
      ],
    },
    {
      account_id: 6495,
      account_name: 'Almir Gjemaili',
      websites: [],
    },
    {
      account_id: 6496,
      account_name: 'Big Commerce Store edcm4o0pix',
      websites: [],
    },
    {
      account_id: 6497,
      account_name: 'Big Commerce Store b65k0otjaz',
      websites: [],
    },
    {
      account_id: 6498,
      account_name: 'Quintkeallin',
      websites: [],
    },
    {
      account_id: 6499,
      account_name: 'Shopify Store capella-tarsi.myshopify.com',
      websites: [],
    },
    {
      account_id: 6523,
      account_name: 'Shopify Store 7516f7-27.myshopify.com',
      websites: [],
    },
    {
      account_id: 6501,
      account_name: 'Shopify Store e826b9-29.myshopify.com',
      websites: [],
    },
    {
      account_id: 6502,
      account_name: 'Shopify Store 9f7d97-a9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6503,
      account_name: 'Shopify Store bdab10-e3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6510,
      account_name: 'Big Commerce Store chdhveqefx',
      websites: [],
    },
    {
      account_id: 6511,
      account_name: 'Shopify Store 809547-ea.myshopify.com',
      websites: [],
    },
    {
      account_id: 6512,
      account_name: 'Big Commerce Store ei3jy2b030',
      websites: [],
    },
    {
      account_id: 6513,
      account_name: 'yourlaptopexperts',
      websites: [],
    },
    {
      account_id: 6514,
      account_name: 'Shopify Store dbdec5-e1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6515,
      account_name: 'Shopify Store 16f8fc-2e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6516,
      account_name: 'Shopify Store blue-sky-fashions.myshopify.com',
      websites: [],
    },
    {
      account_id: 6517,
      account_name: 'Blue Sky Lingerie',
      websites: [],
    },
    {
      account_id: 6505,
      account_name: 'Shopify Store 080b98-bd.myshopify.com',
      websites: [],
    },
    {
      account_id: 6506,
      account_name: 'Shopify Store 26680c-95.myshopify.com',
      websites: [],
    },
    {
      account_id: 6507,
      account_name: 'Shopify Store 29756c-83.myshopify.com',
      websites: [],
    },
    {
      account_id: 6508,
      account_name: 'Shopify Store d46fdc-cf.myshopify.com',
      websites: [],
    },
    {
      account_id: 6509,
      account_name: 'Compacto Fit',
      websites: [],
    },
    {
      account_id: 6518,
      account_name: 'Shopify Store it-geni.myshopify.com',
      websites: [],
    },
    {
      account_id: 6519,
      account_name: 'Shopify Store loco-skates.myshopify.com',
      websites: [],
    },
    {
      account_id: 6520,
      account_name: 'Shopify Store mind-body-foods.myshopify.com',
      websites: [],
    },
    {
      account_id: 6521,
      account_name: 'Shopify Store a1bbf1-53.myshopify.com',
      websites: [],
    },
    {
      account_id: 6522,
      account_name: 'Shopify Store 829ad6-cd.myshopify.com',
      websites: [],
    },
    {
      account_id: 6524,
      account_name: 'Shopify Store 1156eb-40.myshopify.com',
      websites: [],
    },
    {
      account_id: 6525,
      account_name: 'Big Commerce Store xwx16vh8tc',
      websites: [],
    },
    {
      account_id: 6526,
      account_name: 'Fleet Network',
      websites: [],
    },
    {
      account_id: 6527,
      account_name: 'Shopify Store missjeninc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6528,
      account_name: 'Shopify Store e2b9ef-54.myshopify.com',
      websites: [],
    },
    {
      account_id: 6529,
      account_name: 'Aloha Shirts Club',
      websites: [],
    },
    {
      account_id: 6530,
      account_name: 'Shopify Store aab614-4b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6531,
      account_name: 'Shopify Store the-label-life-india.myshopify.com',
      websites: [],
    },
    {
      account_id: 6532,
      account_name: 'Shopify Store 912d87-ad.myshopify.com',
      websites: [],
    },
    {
      account_id: 6533,
      account_name: 'Shopify Store e26578-3e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6534,
      account_name: 'AQUAnow ',
      websites: [],
    },
    {
      account_id: 6535,
      account_name: 'Shopify Store b71491-3e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6536,
      account_name: 'Alex',
      websites: [],
    },
    {
      account_id: 3022,
      account_name: 'https://www.wittner.com.au',
      websites: [
        {
          account_name: 'https://www.wittner.com.au',
          website_id: 2829,
          website_name: 'www.wittner.com.au',
          skus: 4689,
        },
      ],
    },
    {
      account_id: 6537,
      account_name: 'Big Commerce Store tstqmvaj7a',
      websites: [],
    },
    {
      account_id: 6538,
      account_name: 'itarian',
      websites: [],
    },
    {
      account_id: 6539,
      account_name: 'Shopify Store lumos-helmet-us.myshopify.com',
      websites: [],
    },
    {
      account_id: 6540,
      account_name: 'Benro UK',
      websites: [],
    },
    {
      account_id: 6541,
      account_name: 'House of Knives',
      websites: [],
    },
    {
      account_id: 6542,
      account_name: 'Lumos',
      websites: [],
    },
    {
      account_id: 6543,
      account_name: 'Big Commerce Store aupfheytgm',
      websites: [
        {
          account_name: 'Big Commerce Store aupfheytgm',
          website_id: 5811,
          website_name: 'ivy.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 6544,
      account_name: 'Shopify Store c7eb3e-cc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6545,
      account_name: 'Shopify Store vanballoons.myshopify.com',
      websites: [],
    },
    {
      account_id: 6546,
      account_name: 'Shopify Store d5c0ff-8b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6547,
      account_name: 'Shopify Store 1126b2-70.myshopify.com',
      websites: [],
    },
    {
      account_id: 6548,
      account_name: 'GoodnessBox',
      websites: [],
    },
    {
      account_id: 6549,
      account_name: 'Shopify Store 4458c8-57.myshopify.com',
      websites: [],
    },
    {
      account_id: 6550,
      account_name: 'Shopify Store b73ae7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6551,
      account_name: 'Ordae Clothing LLC ',
      websites: [],
    },
    {
      account_id: 6552,
      account_name: 'Shopify Store 1aaead-86.myshopify.com',
      websites: [],
    },
    {
      account_id: 6553,
      account_name: 'Shopify Store vidarr-inc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6504,
      account_name: 'Alley Group',
      websites: [
        {
          account_name: 'Alley Group',
          website_id: 5753,
          website_name: 'www.hipkids.com.au',
          skus: 1758,
        },
      ],
    },
    {
      account_id: 6554,
      account_name: 'Shopify Store mywayneshome.myshopify.com',
      websites: [],
    },
    {
      account_id: 6555,
      account_name: 'Shopify Store d2a527-49.myshopify.com',
      websites: [],
    },
    {
      account_id: 6585,
      account_name: 'Discount Moto Gear',
      websites: [],
    },
    {
      account_id: 6586,
      account_name: 'Shopify Store fb4898-bd.myshopify.com',
      websites: [],
    },
    {
      account_id: 6587,
      account_name: 'Big Commerce Store 8zrnbwpp5o',
      websites: [],
    },
    {
      account_id: 6588,
      account_name: 'Shopify Store drtowel.myshopify.com',
      websites: [],
    },
    {
      account_id: 6589,
      account_name: 'Shopify Store af9c5a-6a.myshopify.com',
      websites: [],
    },
    {
      account_id: 6556,
      account_name: 'Shopify Store e85dd9-3f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6557,
      account_name: 'Shopify Store 3061c5-d1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6590,
      account_name: 'Shopify Store 1f3f8d-2b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6559,
      account_name: 'KOUADIO KONAN JOEL',
      websites: [],
    },
    {
      account_id: 6560,
      account_name: 'Shopify Store 848749-21.myshopify.com',
      websites: [],
    },
    {
      account_id: 6558,
      account_name: 'Shopify Store 83fb53-bc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6561,
      account_name: 'Shopify Store 669eee-83.myshopify.com',
      websites: [],
    },
    {
      account_id: 6562,
      account_name: 'Shopify Store silverliningherbs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store silverliningherbs.myshopify.com',
          website_id: 6800,
          website_name: 'www.silverliningherbs.com',
          skus: 263,
        },
      ],
    },
    {
      account_id: 6564,
      account_name: 'Shopify Store quynhbn-staging.myshopify.com',
      websites: [],
    },
    {
      account_id: 6565,
      account_name: 'Shopify Store art-ev.myshopify.com',
      websites: [],
    },
    {
      account_id: 6566,
      account_name: 'Shopify Store 53a4b0-f6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6567,
      account_name: 'Shopify Store tsbw-au.myshopify.com',
      websites: [],
    },
    {
      account_id: 6568,
      account_name: 'The Surfboard Warehouse ',
      websites: [],
    },
    {
      account_id: 6569,
      account_name: 'Shopify Store dd8fd2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6570,
      account_name: 'deverduurzamingshop.nl',
      websites: [],
    },
    {
      account_id: 6571,
      account_name: 'Big Commerce Store vxgg2nq1ts',
      websites: [
        {
          account_name: 'Big Commerce Store vxgg2nq1ts',
          website_id: 5837,
          website_name: 'multiprofiel.nl',
          skus: 48955,
        },
      ],
    },
    {
      account_id: 6572,
      account_name: 'Multi Profiel',
      websites: [],
    },
    {
      account_id: 6573,
      account_name: 'PureVitality ',
      websites: [],
    },
    {
      account_id: 6574,
      account_name: 'Big Commerce Store 4h95y4cofi',
      websites: [
        {
          account_name: 'Big Commerce Store 4h95y4cofi',
          website_id: 5839,
          website_name: 'www.berriesunlimited.com',
          skus: 354,
        },
      ],
    },
    {
      account_id: 6575,
      account_name: 'BerriesUnlimited',
      websites: [],
    },
    {
      account_id: 6576,
      account_name: 'Shopify Store 994997-77.myshopify.com',
      websites: [],
    },
    {
      account_id: 6577,
      account_name: 'Shopify Store 075d28-57.myshopify.com',
      websites: [],
    },
    {
      account_id: 6578,
      account_name: 'Shopify Store 49f823-e0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6579,
      account_name: 'WiZ Programs',
      websites: [],
    },
    {
      account_id: 6580,
      account_name: 'Shopify Store 6b2873-7e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6581,
      account_name: 'Fotkomforten',
      websites: [],
    },
    {
      account_id: 6582,
      account_name: 'Shopify Store c5e51d-f7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6583,
      account_name: 'Skinners Technologies s.r.o.',
      websites: [],
    },
    {
      account_id: 6591,
      account_name: 'SIA LACITTA',
      websites: [],
    },
    {
      account_id: 6592,
      account_name: 'Shopify Store 37805c-01.myshopify.com',
      websites: [],
    },
    {
      account_id: 6593,
      account_name: 'Shopify Store d95eb6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6594,
      account_name: 'Shopify Store dfdf53-03.myshopify.com',
      websites: [],
    },
    {
      account_id: 6595,
      account_name: 'Shopify Store 52c4eb-6b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6596,
      account_name: 'Shopify Store talkncoffee.myshopify.com',
      websites: [],
    },
    {
      account_id: 6597,
      account_name: 'Shopify Store 7f9ac3-7d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6598,
      account_name: 'Shopify Store cc04e7-c9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6599,
      account_name: 'Tote Ladies Gently',
      websites: [],
    },
    {
      account_id: 6600,
      account_name: 'Shopify Store 4e8d79-90.myshopify.com',
      websites: [],
    },
    {
      account_id: 6601,
      account_name: 'Shopify Store the-pet-fort-llc.myshopify.com',
      websites: [],
    },
    {
      account_id: 4865,
      account_name: 'New Era Marketers',
      websites: [
        {
          account_name: 'New Era Marketers',
          website_id: 4297,
          website_name: 'www.nzmuscle.co.nz',
          skus: 2656,
        },
      ],
    },
    {
      account_id: 6602,
      account_name: 'Shopify Store ff6a34-06.myshopify.com',
      websites: [],
    },
    {
      account_id: 6584,
      account_name: 'Big Commerce Store 4n3dh09e13',
      websites: [
        {
          account_name: 'Big Commerce Store 4n3dh09e13',
          website_id: 5846,
          website_name: 'discountmotogear.com',
          skus: 54431,
        },
      ],
    },
    {
      account_id: 6604,
      account_name: 'Shopify Store f53eaa-54.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store f53eaa-54.myshopify.com',
          website_id: 6850,
          website_name: 'www.jetcast.au',
          skus: 140,
        },
      ],
    },
    {
      account_id: 6605,
      account_name: 'Jetfisher Pty Ltd',
      websites: [],
    },
    {
      account_id: 6606,
      account_name: 'Shopify Store 87040f-bc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6607,
      account_name: 'Shopify Store 3eb08e-26.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3eb08e-26.myshopify.com',
          website_id: 6399,
          website_name: 'kreeplord.com',
          skus: 1026,
        },
      ],
    },
    {
      account_id: 6608,
      account_name: 'Kreeplord',
      websites: [],
    },
    {
      account_id: 6609,
      account_name:
        'Shopify Store americare-medical-supplies-services-inc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6610,
      account_name: 'Americare Medical Supplies & Services Incorporated',
      websites: [],
    },
    {
      account_id: 6611,
      account_name: 'Shopify Store hello-994-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6612,
      account_name: 'giftbox co.',
      websites: [],
    },
    {
      account_id: 6613,
      account_name: 'Big Commerce Store tpy3bzq6vl',
      websites: [],
    },
    {
      account_id: 6614,
      account_name: 'Bookcakene',
      websites: [],
    },
    {
      account_id: 6615,
      account_name: 'Big Commerce Store hwsgtcscaq',
      websites: [
        {
          account_name: 'Big Commerce Store hwsgtcscaq',
          website_id: 5869,
          website_name:
            'vittorio-petrone-di-petrone-mariavittori-store-1.mybigcommerce.com',
          skus: 51165,
        },
      ],
    },
    {
      account_id: 6616,
      account_name: 'Petroneonline',
      websites: [],
    },
    {
      account_id: 6034,
      account_name: 'Logical Position',
      websites: [
        {
          account_name: 'Logical Position',
          website_id: 5323,
          website_name: 'lp-client-integrations-sandbox.mybigcommerce.com',
          skus: 69,
        },
      ],
    },
    {
      account_id: 6617,
      account_name: 'Logical Position',
      websites: [],
    },
    {
      account_id: 6618,
      account_name: 'Shopify Store 62faae-49.myshopify.com',
      websites: [],
    },
    {
      account_id: 6619,
      account_name: 'Sophishop',
      websites: [],
    },
    {
      account_id: 6620,
      account_name: 'Shopify Store 2ca0fd-ed.myshopify.com',
      websites: [],
    },
    {
      account_id: 6625,
      account_name: 'Big Commerce Store xigboccgbw',
      websites: [],
    },
    {
      account_id: 6622,
      account_name: 'Big Commerce Store h5czi9ecvj',
      websites: [
        {
          account_name: 'Big Commerce Store h5czi9ecvj',
          website_id: 5873,
          website_name: 'penguinuniform.com',
          skus: 640,
        },
      ],
    },
    {
      account_id: 6623,
      account_name: 'Penguin Uniform Ltd',
      websites: [],
    },
    {
      account_id: 6624,
      account_name: 'Shopify Store nookie-label.myshopify.com',
      websites: [],
    },
    {
      account_id: 6626,
      account_name: 'Alpiniz',
      websites: [],
    },
    {
      account_id: 6627,
      account_name: 'Shopify Store felin-cha.myshopify.com',
      websites: [],
    },
    {
      account_id: 6628,
      account_name: 'Shopify Store 17a446-a3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6629,
      account_name: 'Shopify Store 89dbec-00.myshopify.com',
      websites: [],
    },
    {
      account_id: 6630,
      account_name: 'WonderStore',
      websites: [],
    },
    {
      account_id: 6621,
      account_name: 'digitalcamerawarehouse.com.au',
      websites: [
        {
          account_name: 'digitalcamerawarehouse.com.au',
          website_id: 3751,
          website_name: 'www.digitalcamerawarehouse.com.au',
          skus: 9028,
        },
      ],
    },
    {
      account_id: 6631,
      account_name: 'Shopify Store dba928-73.myshopify.com',
      websites: [],
    },
    {
      account_id: 6632,
      account_name: 'Shopify Store 552aeb-42.myshopify.com',
      websites: [],
    },
    {
      account_id: 6633,
      account_name: 'Big Commerce Store zuxwyntd7m',
      websites: [],
    },
    {
      account_id: 6634,
      account_name: 'Dermavana',
      websites: [],
    },
    {
      account_id: 6635,
      account_name: 'Shopify Store 09f664-b3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6636,
      account_name: 'Big Commerce Store uw0rrksy3n',
      websites: [],
    },
    {
      account_id: 6637,
      account_name: 'Gulf Coastal Zen',
      websites: [],
    },
    {
      account_id: 6638,
      account_name: 'Shopify Store 6f8b82-9e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6639,
      account_name: 'Shopify Store 36c3ae-b6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6603,
      account_name: 'Alpine Shop',
      websites: [
        {
          account_name: 'Alpine Shop',
          website_id: 5862,
          website_name: 'alpineshopvt.com',
          skus: 38305,
        },
      ],
    },
    {
      account_id: 6640,
      account_name: 'Shopify Store d294e1-8a.myshopify.com',
      websites: [],
    },
    {
      account_id: 6641,
      account_name: 'Toyrol UK Ltd',
      websites: [],
    },
    {
      account_id: 6642,
      account_name: 'Shopify Store 81cd75-26.myshopify.com',
      websites: [],
    },
    {
      account_id: 6643,
      account_name: 'Shopify Store 4fefcf-31.myshopify.com',
      websites: [],
    },
    {
      account_id: 6844,
      account_name: 'Olowookere',
      websites: [],
    },
    {
      account_id: 6644,
      account_name: 'Shopify Store 82c4d2-15.myshopify.com',
      websites: [],
    },
    {
      account_id: 6645,
      account_name: 'Shopify Store 62f270-45.myshopify.com',
      websites: [],
    },
    {
      account_id: 6646,
      account_name: 'Shopify Store f84b4e-14.myshopify.com',
      websites: [],
    },
    {
      account_id: 6647,
      account_name: 'Shopify Store 522192-9f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6648,
      account_name: 'Lukas Mila',
      websites: [],
    },
    {
      account_id: 6649,
      account_name: 'Shopify Store a4182e-6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6650,
      account_name: 'Shopify Store d5e4c8-16.myshopify.com',
      websites: [],
    },
    {
      account_id: 6651,
      account_name: 'Prart',
      websites: [],
    },
    {
      account_id: 6652,
      account_name: 'Shopify Store dfb77b-f0.myshopify.com',
      websites: [],
    },
    {
      account_id: 7875,
      account_name: 'Panda Wagon',
      websites: [],
    },
    {
      account_id: 6653,
      account_name: 'Shopify Store 305c9b-57.myshopify.com',
      websites: [],
    },
    {
      account_id: 6654,
      account_name: 'Big Commerce Store kcojzywnzf',
      websites: [],
    },
    {
      account_id: 6655,
      account_name: 'Hartquistcle',
      websites: [],
    },
    {
      account_id: 6656,
      account_name: 'Shopify Store praisebanners.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store praisebanners.myshopify.com',
          website_id: 6465,
          website_name: 'praisebanners.com',
          skus: 68766,
        },
      ],
    },
    {
      account_id: 6657,
      account_name: 'J. Nissi Corp d/b/a PraiseBanners.com',
      websites: [],
    },
    {
      account_id: 6658,
      account_name: 'Shopify Store palikosfitness-8313.myshopify.com',
      websites: [],
    },
    {
      account_id: 6659,
      account_name: 'Shopify Store 93c6f2-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6660,
      account_name: 'rebsnailroom',
      websites: [],
    },
    {
      account_id: 6661,
      account_name: 'Shopify Store 6e114c-30.myshopify.com',
      websites: [],
    },
    {
      account_id: 6662,
      account_name: 'Dropifyr',
      websites: [],
    },
    {
      account_id: 5966,
      account_name: 'Big Commerce Store 1nktaieb4v',
      websites: [
        {
          account_name: 'Big Commerce Store 1nktaieb4v',
          website_id: 5264,
          website_name: 'www.bluewaterphotostore.com',
          skus: 9336,
        },
      ],
    },
    {
      account_id: 6663,
      account_name: 'Big Commerce Store wermwrpvmh',
      websites: [],
    },
    {
      account_id: 6664,
      account_name: 'Arebelawhit',
      websites: [],
    },
    {
      account_id: 6665,
      account_name: 'ELEMENTS LIGHTING',
      websites: [],
    },
    {
      account_id: 6666,
      account_name: 'Bluewater Photo',
      websites: [],
    },
    {
      account_id: 6667,
      account_name: 'Shopify Store 4c9885-a7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6668,
      account_name: 'Shopify Store d2982a-8c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6669,
      account_name: 'Shopify Store 97af03-37.myshopify.com',
      websites: [],
    },
    {
      account_id: 6670,
      account_name: 'Hushy Wear',
      websites: [],
    },
    {
      account_id: 6671,
      account_name: 'Shopify Store 15a551-c3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6672,
      account_name: 'Shopify Store transgenderwear.myshopify.com',
      websites: [],
    },
    {
      account_id: 6673,
      account_name: 'Doctor Towels',
      websites: [],
    },
    {
      account_id: 6674,
      account_name: 'Shopify Store 2f79a7-0a.myshopify.com',
      websites: [],
    },
    {
      account_id: 6675,
      account_name: 'Big Commerce Store 720fd',
      websites: [
        {
          account_name: 'Big Commerce Store 720fd',
          website_id: 5921,
          website_name: 'www.frazierjones.wine',
          skus: 1820,
        },
      ],
    },
    {
      account_id: 6676,
      account_name: "Frazier's Wine Merchants Ltd",
      websites: [],
    },
    {
      account_id: 6677,
      account_name: 'Shopify Store 310884-c5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6678,
      account_name: 'Shopify Store d8679e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6679,
      account_name: 'Duurzame Dealtjes ',
      websites: [],
    },
    {
      account_id: 6680,
      account_name: 'TRENDINGLAZA',
      websites: [],
    },
    {
      account_id: 6681,
      account_name: 'Shopify Store 72941c-d3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6682,
      account_name: 'Well-thy',
      websites: [],
    },
    {
      account_id: 6683,
      account_name: 'Shopify Store d95133-9d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store d95133-9d.myshopify.com',
          website_id: 6842,
          website_name: 'timme.cz',
          skus: 1040,
        },
      ],
    },
    {
      account_id: 6684,
      account_name: 'Shopify Store 64b42a-4e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6685,
      account_name: 'IRAZEN',
      websites: [],
    },
    {
      account_id: 6686,
      account_name: 'Shopify Store 0aef47-10.myshopify.com',
      websites: [],
    },
    {
      account_id: 6687,
      account_name: 'Shopify Store e8d168-01.myshopify.com',
      websites: [],
    },
    {
      account_id: 6688,
      account_name: 'Shopify Store 165ee8-e4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6689,
      account_name: 'Gaboushop ',
      websites: [],
    },
    {
      account_id: 6690,
      account_name: 'Shopify Store 0d67ef-63.myshopify.com',
      websites: [],
    },
    {
      account_id: 6691,
      account_name: 'Shopify Store f18e73-d1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6692,
      account_name: 'Shopify Store e7aa6d-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6693,
      account_name: 'VSTAR London',
      websites: [],
    },
    {
      account_id: 6694,
      account_name: 'Shopify Store 7ecb95-50.myshopify.com',
      websites: [],
    },
    {
      account_id: 6695,
      account_name: 'Shopify Store f548c6-fe.myshopify.com',
      websites: [],
    },
    {
      account_id: 6696,
      account_name: 'Shopify Store 74d868-0b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6697,
      account_name: 'Shopify Store 5ee20c-36.myshopify.com',
      websites: [],
    },
    {
      account_id: 6698,
      account_name: 'Shopify Store d4c35a-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6699,
      account_name: 'Best Price Cosmetics',
      websites: [],
    },
    {
      account_id: 6701,
      account_name: 'Feenchlet',
      websites: [],
    },
    {
      account_id: 6702,
      account_name: 'Shopify Store bc0f0b-68.myshopify.com',
      websites: [],
    },
    {
      account_id: 6703,
      account_name: 'Shopify Store 331395-89.myshopify.com',
      websites: [],
    },
    {
      account_id: 6704,
      account_name: 'Big Commerce Store aaqfu0sjuq',
      websites: [
        {
          account_name: 'Big Commerce Store aaqfu0sjuq',
          website_id: 5943,
          website_name: 'www.powersportlegends.com',
          skus: 5544,
        },
      ],
    },
    {
      account_id: 6705,
      account_name: 'Powersport Legends',
      websites: [],
    },
    {
      account_id: 6706,
      account_name: 'Big Commerce Store ociadhblfb',
      websites: [],
    },
    {
      account_id: 6707,
      account_name: 'Shopify Store 95d6f5-b2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6708,
      account_name: 'antre du gob',
      websites: [],
    },
    {
      account_id: 6709,
      account_name: 'Shopify Store sleep-mart-staging.myshopify.com',
      websites: [],
    },
    {
      account_id: 6710,
      account_name: 'SleepMart ',
      websites: [],
    },
    {
      account_id: 6711,
      account_name: 'Big Commerce Store wx8ugsosfi',
      websites: [
        {
          account_name: 'Big Commerce Store wx8ugsosfi',
          website_id: 5947,
          website_name: 'tank-superstore.com',
          skus: 3824,
        },
      ],
    },
    {
      account_id: 6712,
      account_name: 'One Clarion, Inc',
      websites: [],
    },
    {
      account_id: 6713,
      account_name: 'Shopify Store 1d437a-75.myshopify.com',
      websites: [],
    },
    {
      account_id: 6714,
      account_name: 'Shopify Store 6c07a5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6715,
      account_name: '559378-0223',
      websites: [],
    },
    {
      account_id: 6716,
      account_name: 'Big Commerce Store fbpw73vpbq',
      websites: [],
    },
    {
      account_id: 6717,
      account_name: 'Kickz Culture',
      websites: [],
    },
    {
      account_id: 6718,
      account_name: 'Shopify Store 443e78-84.myshopify.com',
      websites: [],
    },
    {
      account_id: 6719,
      account_name: 'Shopify Store ferttiin.myshopify.com',
      websites: [],
    },
    {
      account_id: 6720,
      account_name: 'Fertti.com',
      websites: [],
    },
    {
      account_id: 6721,
      account_name: 'Shopify Store 899e09-d6.myshopify.com',
      websites: [],
    },
    {
      account_id: 6722,
      account_name: 'Shopify Store the-signature-collection-co.myshopify.com',
      websites: [],
    },
    {
      account_id: 6723,
      account_name: 'Shopify Store 7d5b4b-47.myshopify.com',
      websites: [],
    },
    {
      account_id: 6724,
      account_name: 'Nutriwaves',
      websites: [],
    },
    {
      account_id: 6725,
      account_name: 'Shopify Store 8be207-d1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6726,
      account_name: 'Acasadilluu',
      websites: [],
    },
    {
      account_id: 6727,
      account_name: 'Get Signatured',
      websites: [],
    },
    {
      account_id: 6728,
      account_name: 'Acasadilu',
      websites: [
        {
          account_name: 'Acasadilu',
          website_id: 5962,
          website_name: 'acasadilu.com.br',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4679,
      account_name: 'Healthy Mummy',
      websites: [
        {
          account_name: 'Healthy Mummy',
          website_id: 4133,
          website_name: 'secure.healthymummy.com',
          skus: 380,
        },
      ],
    },
    {
      account_id: 6729,
      account_name: 'Shopify Store marlas-fashions.myshopify.com',
      websites: [],
    },
    {
      account_id: 6730,
      account_name: 'Marlasfashions.com',
      websites: [],
    },
    {
      account_id: 6731,
      account_name: 'Shopify Store 0c7f73-d9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6732,
      account_name: 'Shopify Store sad-dog-club.myshopify.com',
      websites: [],
    },
    {
      account_id: 6733,
      account_name: 'Shopify Store 54bd24-4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6734,
      account_name: 'Shopify Store 7a352b-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6735,
      account_name: 'DPM Snacks',
      websites: [],
    },
    {
      account_id: 6736,
      account_name: 'Ferxoxo',
      websites: [],
    },
    {
      account_id: 6737,
      account_name: 'Shopify Store 9a8d1e-74.myshopify.com',
      websites: [],
    },
    {
      account_id: 6738,
      account_name: 'Shopify Store 6fec30-44.myshopify.com',
      websites: [],
    },
    {
      account_id: 6739,
      account_name: 'Shopify Store 4f1766-d4.myshopify.com',
      websites: [],
    },
    {
      account_id: 6740,
      account_name: 'Elegant Aura Decor',
      websites: [],
    },
    {
      account_id: 6741,
      account_name: 'BeyondVista',
      websites: [],
    },
    {
      account_id: 6742,
      account_name: 'Shopify Store d31ceb.myshopify.com',
      websites: [],
    },
    {
      account_id: 6743,
      account_name: 'quikstix',
      websites: [],
    },
    {
      account_id: 6744,
      account_name: 'Big Commerce Store mdlmxtwv57',
      websites: [],
    },
    {
      account_id: 6745,
      account_name: 'Bossard Americas',
      websites: [],
    },
    {
      account_id: 6747,
      account_name: 'Hangar Outdoor',
      websites: [],
    },
    {
      account_id: 6748,
      account_name: 'Shopify Store 671b8f-ea.myshopify.com',
      websites: [],
    },
    {
      account_id: 6749,
      account_name: "Rodent Custom's",
      websites: [],
    },
    {
      account_id: 6750,
      account_name: 'Shopify Store 2c47ad-8c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6751,
      account_name: 'Shopify Store e55855-a8.myshopify.com',
      websites: [],
    },
    {
      account_id: 6752,
      account_name: 'Shopify Store 4ee6b1-03.myshopify.com',
      websites: [],
    },
    {
      account_id: 6753,
      account_name: 'Shopify Store 3c95eb-45.myshopify.com',
      websites: [],
    },
    {
      account_id: 6754,
      account_name: 'Shopify Store b8a73b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6755,
      account_name: 'Big Commerce Store baxfbssg3z',
      websites: [],
    },
    {
      account_id: 6756,
      account_name: 'zgallerie',
      websites: [],
    },
    {
      account_id: 6757,
      account_name: 'Shopify Store julius-k-9.myshopify.com',
      websites: [],
    },
    {
      account_id: 6758,
      account_name: 'Julius-K9 USA',
      websites: [],
    },
    {
      account_id: 6759,
      account_name: 'Shopify Store ranitahats.myshopify.com',
      websites: [],
    },
    {
      account_id: 6760,
      account_name: 'Shopify Store fifthandfash-3.myshopify.com',
      websites: [],
    },
    {
      account_id: 6761,
      account_name: 'Big Commerce Store vj1x2fqj2l',
      websites: [],
    },
    {
      account_id: 6762,
      account_name: 'TEGS Tools & Machinery',
      websites: [],
    },
    {
      account_id: 6763,
      account_name: 'Shopify Store kickassusa.myshopify.com',
      websites: [],
    },
    {
      account_id: 6764,
      account_name: 'KickAss Products USA',
      websites: [],
    },
    {
      account_id: 6765,
      account_name: 'Shopify Store ki-decoration.myshopify.com',
      websites: [],
    },
    {
      account_id: 6766,
      account_name: 'KI DECORATION',
      websites: [],
    },
    {
      account_id: 6767,
      account_name: 'Shopify Store cc4956-06.myshopify.com',
      websites: [],
    },
    {
      account_id: 6768,
      account_name: 'Shopify Store burgerffc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6769,
      account_name: 'paul',
      websites: [],
    },
    {
      account_id: 6770,
      account_name: 'Shopify Store eac8db-ef.myshopify.com',
      websites: [],
    },
    {
      account_id: 6771,
      account_name: 'Stunna’s shop',
      websites: [],
    },
    {
      account_id: 6772,
      account_name: 'Shopify Store seamsemmart.myshopify.com',
      websites: [],
    },
    {
      account_id: 6773,
      account_name: 'seamsemmart, LLC',
      websites: [],
    },
    {
      account_id: 6774,
      account_name: 'Shopify Store tms-the-mom-store.myshopify.com',
      websites: [],
    },
    {
      account_id: 6775,
      account_name: 'Shopify Store 0f1aaf-21.myshopify.com',
      websites: [],
    },
    {
      account_id: 6778,
      account_name: 'Shopify Store e895ee-95.myshopify.com',
      websites: [],
    },
    {
      account_id: 6779,
      account_name: 'ElectroHub',
      websites: [],
    },
    {
      account_id: 6780,
      account_name: 'Big Commerce Store nuvsf3nhg2',
      websites: [],
    },
    {
      account_id: 6781,
      account_name: 'Shopify Store cc1c61-55.myshopify.com',
      websites: [],
    },
    {
      account_id: 6700,
      account_name: 'Shopify Store shepolish.myshopify.com',
      websites: [],
    },
    {
      account_id: 4789,
      account_name: 'www.australiandirect.com.au',
      websites: [],
    },
    {
      account_id: 6782,
      account_name: 'Shopify Store lunahome-ro.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store lunahome-ro.myshopify.com',
          website_id: 6701,
          website_name: 'lunahome.ro',
          skus: 10520,
        },
      ],
    },
    {
      account_id: 6783,
      account_name: 'LUNA HOME ',
      websites: [],
    },
    {
      account_id: 6784,
      account_name: 'Shopify Store f1b536-71.myshopify.com',
      websites: [],
    },
    {
      account_id: 6785,
      account_name: 'Shopify Store a3e900-67.myshopify.com',
      websites: [],
    },
    {
      account_id: 6786,
      account_name: 'Home Culture ',
      websites: [],
    },
    {
      account_id: 6787,
      account_name: 'Shopify Store 6b67bf-ec.myshopify.com',
      websites: [],
    },
    {
      account_id: 6788,
      account_name: 'Shopify Store 9986c1-7d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6789,
      account_name: 'Shopify Store 8c02d5-4f.myshopify.com',
      websites: [],
    },
    {
      account_id: 6790,
      account_name: 'Ultra Maga',
      websites: [],
    },
    {
      account_id: 6791,
      account_name: 'Shopify Store f6c5fa-8e.myshopify.com',
      websites: [],
    },
    {
      account_id: 6792,
      account_name: 'ctrifforair',
      websites: [],
    },
    {
      account_id: 6793,
      account_name: 'Big Commerce Store x49po',
      websites: [],
    },
    {
      account_id: 6794,
      account_name: 'Fizdi',
      websites: [],
    },
    {
      account_id: 6795,
      account_name: 'Shopify Store 05ed71-8b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6796,
      account_name: 'Shopify Store sr-store-test-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6797,
      account_name: 'Shopify Store bennimarceau.myshopify.com',
      websites: [],
    },
    {
      account_id: 6798,
      account_name: 'Bennimarceau.com',
      websites: [],
    },
    {
      account_id: 6799,
      account_name: 'Big Commerce Store tkwzri8hwz',
      websites: [
        {
          account_name: 'Big Commerce Store tkwzri8hwz',
          website_id: 6014,
          website_name: 'pinobsessed.com',
          skus: 87,
        },
      ],
    },
    {
      account_id: 6800,
      account_name: 'Pin Obsessed',
      websites: [],
    },
    {
      account_id: 6801,
      account_name: 'Big Commerce Store jbodzmzzpu',
      websites: [],
    },
    {
      account_id: 6802,
      account_name: 'Scrubs by Jeness',
      websites: [],
    },
    {
      account_id: 6803,
      account_name: 'Shopify Store c4fe2b-2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6805,
      account_name: 'Big Commerce Store 6ciqma9a9h',
      websites: [],
    },
    {
      account_id: 7741,
      account_name: 'Big Commerce Store 9iwegl9cdz',
      websites: [
        {
          account_name: 'Big Commerce Store 9iwegl9cdz',
          website_id: 6884,
          website_name: 'store-9iwegl9cdz.mybigcommerce.com',
          skus: 8,
        },
      ],
    },
    {
      account_id: 6806,
      account_name: 'Alpine ',
      websites: [],
    },
    {
      account_id: 6807,
      account_name: 'Shopify Store broxtuninginc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6808,
      account_name: 'Brox Tuning Inc',
      websites: [],
    },
    {
      account_id: 6809,
      account_name: 'Shopify Store 729d67-3a.myshopify.com',
      websites: [],
    },
    {
      account_id: 6810,
      account_name: 'elite shop',
      websites: [],
    },
    {
      account_id: 6813,
      account_name: 'DOWNLITE',
      websites: [],
    },
    {
      account_id: 6814,
      account_name: 'Trulap ',
      websites: [],
    },
    {
      account_id: 6815,
      account_name: 'Shopify Store code-black-coffee-au.myshopify.com',
      websites: [],
    },
    {
      account_id: 6817,
      account_name: 'Digidirect',
      websites: [],
    },
    {
      account_id: 6818,
      account_name: 'Shopify Store e4540e-92.myshopify.com',
      websites: [],
    },
    {
      account_id: 6819,
      account_name: 'Aniceto',
      websites: [],
    },
    {
      account_id: 6820,
      account_name: 'Shopify Store 16af8e-16.myshopify.com',
      websites: [],
    },
    {
      account_id: 6821,
      account_name: 'Sí Fashions',
      websites: [],
    },
    {
      account_id: 6822,
      account_name: 'Museum Replicas Limited',
      websites: [],
    },
    {
      account_id: 6823,
      account_name: 'Big Commerce Store fy9rv139a5',
      websites: [],
    },
    {
      account_id: 6824,
      account_name: 'Shopify Store try-me-first-perfume.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store try-me-first-perfume.myshopify.com',
          website_id: 6031,
          website_name: 'trymefirst.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6825,
      account_name: 'Trymefirst',
      websites: [],
    },
    {
      account_id: 6826,
      account_name: 'Shopify Store c8c09d-90.myshopify.com',
      websites: [],
    },
    {
      account_id: 6406,
      account_name: 'Hairhouse',
      websites: [
        {
          account_name: 'Hairhouse',
          website_id: 5699,
          website_name: 'www.hairhouse.com.au',
          skus: 7408,
        },
      ],
    },
    {
      account_id: 6827,
      account_name: 'Big Commerce Store s5mrwb8xfp',
      websites: [
        {
          account_name: 'Big Commerce Store s5mrwb8xfp',
          website_id: 6035,
          website_name: 'lilhammel.mybigcommerce.com',
          skus: 66313,
        },
      ],
    },
    {
      account_id: 6828,
      account_name: 'Lilhammel',
      websites: [],
    },
    {
      account_id: 6829,
      account_name: 'Shopify Store retourify.myshopify.com',
      websites: [],
    },
    {
      account_id: 6830,
      account_name: 'Retourify e. K.',
      websites: [],
    },
    {
      account_id: 6831,
      account_name: 'Big Commerce Store orshudmmko',
      websites: [
        {
          account_name: 'Big Commerce Store orshudmmko',
          website_id: 6037,
          website_name: 'benin-royal-voyages.mybigcommerce.com',
          skus: 2,
        },
      ],
    },
    {
      account_id: 6832,
      account_name: 'BENIN ROYAL VOYAGES',
      websites: [],
    },
    {
      account_id: 6833,
      account_name: 'Big Commerce Store osuivm6qru',
      websites: [
        {
          account_name: 'Big Commerce Store osuivm6qru',
          website_id: 6039,
          website_name: 'happneydia.mybigcommerce.com',
          skus: 45834,
        },
      ],
    },
    {
      account_id: 6834,
      account_name: 'Happneydia',
      websites: [],
    },
    {
      account_id: 6835,
      account_name: 'Big Commerce Store la7jeyu9xy',
      websites: [],
    },
    {
      account_id: 6836,
      account_name: 'Silver Bridge Coffee Company',
      websites: [],
    },
    {
      account_id: 6837,
      account_name: 'Bosscoauto',
      websites: [],
    },
    {
      account_id: 6838,
      account_name: 'One Clarion, Inc.',
      websites: [],
    },
    {
      account_id: 6839,
      account_name: 'Big Commerce Store npipus93dh',
      websites: [
        {
          account_name: 'Big Commerce Store npipus93dh',
          website_id: 6044,
          website_name: 'randyfores.mybigcommerce.com',
          skus: 66313,
        },
      ],
    },
    {
      account_id: 6841,
      account_name: 'Shopify Store destira-leotards.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store destira-leotards.myshopify.com',
          website_id: 6464,
          website_name: 'destira.com',
          skus: 2104,
        },
      ],
    },
    {
      account_id: 6842,
      account_name: 'Destira Leotards',
      websites: [],
    },
    {
      account_id: 6843,
      account_name: 'Big Commerce Store 7lom96ctww',
      websites: [
        {
          account_name: 'Big Commerce Store 7lom96ctww',
          website_id: 6047,
          website_name: 'olowookere.mybigcommerce.com',
          skus: 66313,
        },
      ],
    },
    {
      account_id: 6845,
      account_name: 'Big Commerce Store 15h88fcyw7',
      websites: [
        {
          account_name: 'Big Commerce Store 15h88fcyw7',
          website_id: 6048,
          website_name: 'fishtanksdirect.com',
          skus: 9231,
        },
      ],
    },
    {
      account_id: 6846,
      account_name: 'Fish Tanks Direct',
      websites: [],
    },
    {
      account_id: 6812,
      account_name: 'Big Commerce Store j8lceuq',
      websites: [
        {
          account_name: 'Big Commerce Store j8lceuq',
          website_id: 6026,
          website_name: 'www.downlitebedding.com',
          skus: 176,
        },
      ],
    },
    {
      account_id: 6847,
      account_name: 'Big Commerce Store llrbcjg7pa',
      websites: [
        {
          account_name: 'Big Commerce Store llrbcjg7pa',
          website_id: 6049,
          website_name: 'stultzemily.mybigcommerce.com',
          skus: 49560,
        },
      ],
    },
    {
      account_id: 6848,
      account_name: 'Stultzemily',
      websites: [],
    },
    {
      account_id: 6849,
      account_name: 'Shopify Store 3f48b7-a2.myshopify.com',
      websites: [],
    },
    {
      account_id: 6850,
      account_name: 'UKsBestDesigns',
      websites: [],
    },
    {
      account_id: 6851,
      account_name: 'Big Commerce Store jxrf2ibk7h',
      websites: [
        {
          account_name: 'Big Commerce Store jxrf2ibk7h',
          website_id: 6051,
          website_name: 'topken.co.uk',
          skus: 47292,
        },
      ],
    },
    {
      account_id: 6852,
      account_name: 'Topken',
      websites: [],
    },
    {
      account_id: 6853,
      account_name: 'Shopify Store rundna-au.myshopify.com',
      websites: [],
    },
    {
      account_id: 6854,
      account_name: 'Big Commerce Store klg8zkzzcw',
      websites: [
        {
          account_name: 'Big Commerce Store klg8zkzzcw',
          website_id: 6053,
          website_name: 'kaoritry.mybigcommerce.com',
          skus: 49560,
        },
      ],
    },
    {
      account_id: 6855,
      account_name: 'Kaoritry',
      websites: [],
    },
    {
      account_id: 6856,
      account_name: 'Shopify Store grooveman-music.myshopify.com',
      websites: [],
    },
    {
      account_id: 6857,
      account_name: 'GROOVEMAN MUSIC',
      websites: [],
    },
    {
      account_id: 6858,
      account_name: 'Sad Dog Club',
      websites: [],
    },
    {
      account_id: 6860,
      account_name: 'Ideal Workwear',
      websites: [],
    },
    {
      account_id: 6861,
      account_name: 'Big Commerce Store lordvassbw',
      websites: [
        {
          account_name: 'Big Commerce Store lordvassbw',
          website_id: 6057,
          website_name: 'bossard-inc-sandbox-store.mybigcommerce.com',
          skus: 383,
        },
      ],
    },
    {
      account_id: 6862,
      account_name: 'Total Tools Importing Pvt Ltd',
      websites: [],
    },
    {
      account_id: 6863,
      account_name: 'Shopify Store jazib-sep5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6864,
      account_name: 'Big Commerce Store ogga2as7h',
      websites: [],
    },
    {
      account_id: 6865,
      account_name: 'OutdoorGear UK Ltd',
      websites: [],
    },
    {
      account_id: 6866,
      account_name: 'Big Commerce Store 7pmswgq0ww',
      websites: [
        {
          account_name: 'Big Commerce Store 7pmswgq0ww',
          website_id: 6063,
          website_name: 'mayur-jadav.mybigcommerce.com',
          skus: 69,
        },
      ],
    },
    {
      account_id: 6867,
      account_name: 'Big Commerce Store 5qwj1u62bw',
      websites: [],
    },
    {
      account_id: 6868,
      account_name: 'Spatula City Records ',
      websites: [],
    },
    {
      account_id: 6869,
      account_name: 'Big Commerce Store 1b7bc',
      websites: [],
    },
    {
      account_id: 6870,
      account_name: 'Kopf Percussion',
      websites: [],
    },
    {
      account_id: 6871,
      account_name: 'Big Commerce Store ncqox1gga0',
      websites: [],
    },
    {
      account_id: 6872,
      account_name: 'Ideal Workwear ',
      websites: [],
    },
    {
      account_id: 6873,
      account_name: 'Big Commerce Store kovn1tcbnp',
      websites: [],
    },
    {
      account_id: 6874,
      account_name: 'The Best Puzzles and Gifts',
      websites: [],
    },
    {
      account_id: 6875,
      account_name: 'Shopify Store d4d201-ac.myshopify.com',
      websites: [],
    },
    {
      account_id: 6876,
      account_name: 'Bargain Harolds',
      websites: [],
    },
    {
      account_id: 6877,
      account_name: 'Shopify Store 6b3351-36.myshopify.com',
      websites: [],
    },
    {
      account_id: 6878,
      account_name: 'Tappy',
      websites: [],
    },
    {
      account_id: 6879,
      account_name: 'Big Commerce Store 2e9j1bvyip',
      websites: [
        {
          account_name: 'Big Commerce Store 2e9j1bvyip',
          website_id: 6080,
          website_name: 'www.cartridgeworld.co.uk',
          skus: 8547,
        },
      ],
    },
    {
      account_id: 6880,
      account_name: 'Cartridge World',
      websites: [],
    },
    {
      account_id: 6881,
      account_name: 'Big Commerce Store 3k1bxwjbw6',
      websites: [
        {
          account_name: 'Big Commerce Store 3k1bxwjbw6',
          website_id: 6936,
          website_name: 'thegelbottle.com',
          skus: 1817,
        },
      ],
    },
    {
      account_id: 6882,
      account_name: 'The GelBottle INC',
      websites: [],
    },
    {
      account_id: 6883,
      account_name: 'Big Commerce Store t01pd8s60e',
      websites: [],
    },
    {
      account_id: 6884,
      account_name: 'Auburn Aquarium and Terrarium',
      websites: [],
    },
    {
      account_id: 6885,
      account_name: 'Shopify Store 110fe6-76.myshopify.com',
      websites: [],
    },
    {
      account_id: 6811,
      account_name: 'Shopify Store 0bee3b-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0bee3b-3.myshopify.com',
          website_id: 6452,
          website_name: 'trulap.com',
          skus: 22,
        },
      ],
    },
    {
      account_id: 6886,
      account_name: 'Big Commerce Store 1gv4ry9',
      websites: [],
    },
    {
      account_id: 6887,
      account_name: 'Wue Ltd',
      websites: [],
    },
    {
      account_id: 6888,
      account_name: 'Big Commerce Store zdn2lztchv',
      websites: [],
    },
    {
      account_id: 6889,
      account_name: 'Big Commerce Store bcvsup4cew',
      websites: [
        {
          account_name: 'Big Commerce Store bcvsup4cew',
          website_id: 6087,
          website_name: 'pastorhaas.mybigcommerce.com',
          skus: 89218,
        },
      ],
    },
    {
      account_id: 6890,
      account_name: 'Pastorhaas',
      websites: [],
    },
    {
      account_id: 6891,
      account_name: 'Big Commerce Store h6b0wjznmn',
      websites: [
        {
          account_name: 'Big Commerce Store h6b0wjznmn',
          website_id: 6088,
          website_name: 'juleanhern.mybigcommerce.com',
          skus: 95858,
        },
      ],
    },
    {
      account_id: 6892,
      account_name: 'Juleanhern',
      websites: [],
    },
    {
      account_id: 6893,
      account_name: 'Shopify Store 9f4812-82.myshopify.com',
      websites: [],
    },
    {
      account_id: 6894,
      account_name: 'Shopify Store torch-centre.myshopify.com',
      websites: [],
    },
    {
      account_id: 6895,
      account_name: 'Torch Centre',
      websites: [],
    },
    {
      account_id: 6897,
      account_name: 'Trotters',
      websites: [],
    },
    {
      account_id: 5560,
      account_name: 'ActiveDogs.com',
      websites: [],
    },
    {
      account_id: 6896,
      account_name: 'Shopify Store trotters-childrenswear-dev.myshopify.com',
      websites: [],
    },
    {
      account_id: 6898,
      account_name: 'Big Commerce Store pf7re1klnb',
      websites: [],
    },
    {
      account_id: 6899,
      account_name: 'Julbo',
      websites: [],
    },
    {
      account_id: 6900,
      account_name: 'Big Commerce Store 42296',
      websites: [
        {
          account_name: 'Big Commerce Store 42296',
          website_id: 6095,
          website_name: 'www.swingsetstuff.com',
          skus: 586,
        },
      ],
    },
    {
      account_id: 6901,
      account_name: 'Swing Set Stuff Inc.',
      websites: [],
    },
    {
      account_id: 6563,
      account_name: 'White&Co.',
      websites: [
        {
          account_name: 'White&Co.',
          website_id: 5831,
          website_name: 'whiteandco.com.au',
          skus: 3848,
        },
        {
          account_name: 'White&Co.',
          website_id: 5872,
          website_name: 'whiteandco.co.nz',
          skus: 3848,
        },
      ],
    },
    {
      account_id: 6902,
      account_name: 'Big Commerce Store 2w3d34av6x',
      websites: [],
    },
    {
      account_id: 6903,
      account_name: 'Shopify Store c57f3c.myshopify.com',
      websites: [],
    },
    {
      account_id: 6904,
      account_name: 'Simon Alexander Johannes Korherr',
      websites: [],
    },
    {
      account_id: 6905,
      account_name: 'goforzero',
      websites: [],
    },
    {
      account_id: 6906,
      account_name: 'Big Commerce Store yq7tbvlc4r',
      websites: [
        {
          account_name: 'Big Commerce Store yq7tbvlc4r',
          website_id: 6101,
          website_name: 'athletes-paradise.mybigcommerce.com',
          skus: 2163,
        },
      ],
    },
    {
      account_id: 6907,
      account_name: "Athlete's Paradise",
      websites: [],
    },
    {
      account_id: 6909,
      account_name: 'Home Run Digital',
      websites: [],
    },
    {
      account_id: 6908,
      account_name: 'Lounges Plus',
      websites: [
        {
          account_name: 'Lounges Plus',
          website_id: 2698,
          website_name: 'www.loungesplus.com.au',
          skus: 5769,
        },
      ],
    },
    {
      account_id: 7788,
      account_name: 'Lasoo',
      websites: [
        {
          account_name: 'Lasoo',
          website_id: 6938,
          website_name: 'www.lasoo.com.au',
          skus: 301922,
        },
      ],
    },
    {
      account_id: 6911,
      account_name: 'goforzero.com.au',
      websites: [],
    },
    {
      account_id: 6912,
      account_name: 'Go For Zero',
      websites: [],
    },
    {
      account_id: 6913,
      account_name: 'Big Commerce Store osizsh0ycx',
      websites: [
        {
          account_name: 'Big Commerce Store osizsh0ycx',
          website_id: 6106,
          website_name: 'seonline.store',
          skus: 877,
        },
      ],
    },
    {
      account_id: 6914,
      account_name: 'SE Online',
      websites: [],
    },
    {
      account_id: 6915,
      account_name: 'Shopify Store snusforyou.myshopify.com',
      websites: [],
    },
    {
      account_id: 6916,
      account_name: 'Big Commerce Store 2mwguc677p',
      websites: [
        {
          account_name: 'Big Commerce Store 2mwguc677p',
          website_id: 6109,
          website_name: 'tapshop.co.uk',
          skus: 977,
        },
      ],
    },
    {
      account_id: 6917,
      account_name: 'TapShop.co.uk',
      websites: [],
    },
    {
      account_id: 6918,
      account_name: 'Big Commerce Store kjfss1p5yj',
      websites: [],
    },
    {
      account_id: 6919,
      account_name: 'jaznex prod srl',
      websites: [],
    },
    {
      account_id: 6920,
      account_name: 'Big Commerce Store yhdp96gt9k',
      websites: [],
    },
    {
      account_id: 6921,
      account_name: 'Solamp, Inc',
      websites: [],
    },
    {
      account_id: 6922,
      account_name: 'Shopify Store londonberry-test.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store londonberry-test.myshopify.com',
          website_id: 6755,
          website_name: 'londonberry-test.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6923,
      account_name: 'jazib',
      websites: [],
    },
    {
      account_id: 6924,
      account_name: 'Shopify Store demo-project1.myshopify.com',
      websites: [],
    },
    {
      account_id: 6925,
      account_name: 'Shopify Store naturallyformums.myshopify.com',
      websites: [],
    },
    {
      account_id: 6816,
      account_name: 'Accent Lifestyle Pty Ltd',
      websites: [],
    },
    {
      account_id: 5873,
      account_name: 'Nude Lucy',
      websites: [
        {
          account_name: 'Nude Lucy',
          website_id: 5453,
          website_name: 'nudelucy.com.au',
          skus: 2617,
        },
        {
          account_name: 'Nude Lucy',
          website_id: 5828,
          website_name: 'nudelucy.com',
          skus: 4990,
        },
        {
          account_name: 'Nude Lucy',
          website_id: 6040,
          website_name: 'www.nudelucy.co.nz',
          skus: 4719,
        },
      ],
    },
    {
      account_id: 6927,
      account_name: 'Big Commerce Store wfyukpmrvd',
      websites: [
        {
          account_name: 'Big Commerce Store wfyukpmrvd',
          website_id: 6118,
          website_name: 'ramretailgroup.com',
          skus: 286,
        },
      ],
    },
    {
      account_id: 6928,
      account_name: 'Ram Online Limited',
      websites: [],
    },
    {
      account_id: 6929,
      account_name: 'Shopify Store 1151e7-9b.myshopify.com',
      websites: [],
    },
    {
      account_id: 6930,
      account_name: 'Big Commerce Store jiul8g',
      websites: [],
    },
    {
      account_id: 6931,
      account_name: '35 Gibbons Rd Taylorsville, ga 30178 United States',
      websites: [],
    },
    {
      account_id: 6932,
      account_name: 'Rma',
      websites: [],
    },
    {
      account_id: 6933,
      account_name: 'Top Bunk',
      websites: [],
    },
    {
      account_id: 6934,
      account_name: 'The Pet Butcher',
      websites: [
        {
          account_name: 'The Pet Butcher',
          website_id: 6128,
          website_name: 'petbutcher.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6935,
      account_name: 'Big Commerce Store rnmf5r1skr',
      websites: [
        {
          account_name: 'Big Commerce Store rnmf5r1skr',
          website_id: 6129,
          website_name: 'metrommp.com',
          skus: 5574,
        },
      ],
    },
    {
      account_id: 6936,
      account_name: 'Metro Moulded Parts',
      websites: [],
    },
    {
      account_id: 6937,
      account_name: 'Big Commerce Store cnswx38820',
      websites: [
        {
          account_name: 'Big Commerce Store cnswx38820',
          website_id: 6130,
          website_name: 'innovativehobbysupply.com',
          skus: 608,
        },
      ],
    },
    {
      account_id: 6938,
      account_name: 'Shopify Store 4b6272-50.myshopify.com',
      websites: [],
    },
    {
      account_id: 6939,
      account_name: 'hoolike',
      websites: [],
    },
    {
      account_id: 6940,
      account_name: 'Shopify Store the-pet-butcher.myshopify.com',
      websites: [],
    },
    {
      account_id: 4189,
      account_name: 'Sussan Group',
      websites: [
        {
          account_name: 'Sussan Group',
          website_id: 331,
          website_name: 'www.sportsgirl.com.au',
          skus: 5411,
        },
        {
          account_name: 'Sussan Group',
          website_id: 1586,
          website_name: 'www.sussan.com.au',
          skus: 5264,
        },
      ],
    },
    {
      account_id: 6941,
      account_name: 'Big Commerce Store zbaesdaekt',
      websites: [],
    },
    {
      account_id: 6942,
      account_name: 'PC Marine Group Limited',
      websites: [],
    },
    {
      account_id: 6944,
      account_name: 'American Pickleball League',
      websites: [],
    },
    {
      account_id: 6945,
      account_name: 'Shopify Store vaigustando.myshopify.com',
      websites: [],
    },
    {
      account_id: 6946,
      account_name: 'Vaigustando srl',
      websites: [],
    },
    {
      account_id: 6948,
      account_name: "Sully's Ride Shop LLC",
      websites: [],
    },
    {
      account_id: 6949,
      account_name: 'Big Commerce Store o4sgyv53g9',
      websites: [],
    },
    {
      account_id: 6950,
      account_name: 'AGF Manufacturing Inc.',
      websites: [],
    },
    {
      account_id: 6951,
      account_name: 'Shopify Store w11syb-uq.myshopify.com',
      websites: [],
    },
    {
      account_id: 6952,
      account_name: 'Big Commerce Store 13938',
      websites: [],
    },
    {
      account_id: 6953,
      account_name: 'vipcycle',
      websites: [],
    },
    {
      account_id: 6954,
      account_name: 'Shopify Store ioho-ro.myshopify.com',
      websites: [],
    },
    {
      account_id: 6956,
      account_name: 'Southern Parts Warehouse',
      websites: [],
    },
    {
      account_id: 6958,
      account_name: 'BRIM Tractor',
      websites: [],
    },
    {
      account_id: 6959,
      account_name: 'Big Commerce Store x9adifgboz',
      websites: [],
    },
    {
      account_id: 6960,
      account_name: 'SDZ Supply Co LLC',
      websites: [],
    },
    {
      account_id: 6961,
      account_name: 'Shopify Store runnerssunglasses.myshopify.com',
      websites: [],
    },
    {
      account_id: 6962,
      account_name: 'Runners',
      websites: [],
    },
    {
      account_id: 6963,
      account_name: 'Shopify Store 690fad-96.myshopify.com',
      websites: [],
    },
    {
      account_id: 6964,
      account_name: 'Shopify Store 2d5256-ed.myshopify.com',
      websites: [],
    },
    {
      account_id: 6966,
      account_name: 'boca med tech ',
      websites: [],
    },
    {
      account_id: 6746,
      account_name: 'Shopify Store 437a50-a0.myshopify.com',
      websites: [],
    },
    {
      account_id: 6967,
      account_name: 'Shopify Store gadgetspiremartshop.myshopify.com',
      websites: [],
    },
    {
      account_id: 6968,
      account_name: 'S',
      websites: [],
    },
    {
      account_id: 6969,
      account_name: 'Shopify Store euro-glass-store.myshopify.com',
      websites: [],
    },
    {
      account_id: 6970,
      account_name: 'Euroglass',
      websites: [],
    },
    {
      account_id: 6971,
      account_name: 'Big Commerce Store 29ulaodpku',
      websites: [
        {
          account_name: 'Big Commerce Store 29ulaodpku',
          website_id: 6166,
          website_name: 'mfunin.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 6972,
      account_name: 'MADICINE INFORMATION',
      websites: [],
    },
    {
      account_id: 6973,
      account_name: 'Shopify Store 0d76fc-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0d76fc-3.myshopify.com',
          website_id: 6350,
          website_name: 'heavyweightlegends.com',
          skus: 115790,
        },
      ],
    },
    {
      account_id: 6974,
      account_name: 'Legends Heavyweight Tees',
      websites: [],
    },
    {
      account_id: 6975,
      account_name: 'Big Commerce Store 5fmmzm5oxs',
      websites: [
        {
          account_name: 'Big Commerce Store 5fmmzm5oxs',
          website_id: 6168,
          website_name: 'designprintshop.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 6976,
      account_name: 'Design&PrintShop',
      websites: [],
    },
    {
      account_id: 6977,
      account_name: 'Shopify Store 06e068-45.myshopify.com',
      websites: [],
    },
    {
      account_id: 6978,
      account_name: 'Aspen Arlo',
      websites: [],
    },
    {
      account_id: 6979,
      account_name: 'Shopify Store zv1aha-1z.myshopify.com',
      websites: [],
    },
    {
      account_id: 6980,
      account_name: 'namdzzz',
      websites: [],
    },
    {
      account_id: 6981,
      account_name: 'Shopify Store lee-english-and-ray-551.myshopify.com',
      websites: [],
    },
    {
      account_id: 6982,
      account_name: 'Shopify Store gthn90-y7.myshopify.com',
      websites: [],
    },
    {
      account_id: 6983,
      account_name: 'Shopify Store 9g7033-ys.myshopify.com',
      websites: [],
    },
    {
      account_id: 6984,
      account_name: 'xxx',
      websites: [],
    },
    {
      account_id: 6985,
      account_name: 'fdsgfdsg',
      websites: [],
    },
    {
      account_id: 6986,
      account_name: 'Shopify Store vtxfnv-ai.myshopify.com',
      websites: [],
    },
    {
      account_id: 6987,
      account_name: 'sdgsdg',
      websites: [],
    },
    {
      account_id: 6988,
      account_name: 'keylime.neto.com.au',
      websites: [
        {
          account_name: 'keylime.neto.com.au',
          website_id: 6176,
          website_name: 'keylime.neto.com.au',
          skus: 3095,
        },
      ],
    },
    {
      account_id: 6989,
      account_name: 'Shopify Store wyknhf-ag.myshopify.com',
      websites: [],
    },
    {
      account_id: 6990,
      account_name: 'Big Commerce Store mepswkuetl',
      websites: [
        {
          account_name: 'Big Commerce Store mepswkuetl',
          website_id: 6181,
          website_name: 'give5tocancer.com',
          skus: 15387,
        },
      ],
    },
    {
      account_id: 6991,
      account_name: 'Give 5 To Cancer',
      websites: [],
    },
    {
      account_id: 6957,
      account_name: 'Big Commerce Store 6oilqw15kw',
      websites: [
        {
          account_name: 'Big Commerce Store 6oilqw15kw',
          website_id: 6152,
          website_name: 'parts.brimtractor.com',
          skus: 19227,
        },
      ],
    },
    {
      account_id: 6955,
      account_name: 'Southern Parts Warehouse',
      websites: [],
    },
    {
      account_id: 6992,
      account_name: 'Shopify Store 1zbmit-bc.myshopify.com',
      websites: [],
    },
    {
      account_id: 6993,
      account_name: 'fdsg',
      websites: [],
    },
    {
      account_id: 6994,
      account_name: 'Shopify Store 12ec4a-ff.myshopify.com',
      websites: [],
    },
    {
      account_id: 6965,
      account_name: 'Shopify Store boca-med-tech.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store boca-med-tech.myshopify.com',
          website_id: 6493,
          website_name: 'bocamedtech.com',
          skus: 454,
        },
      ],
    },
    {
      account_id: 6995,
      account_name: 'Shopify Store b6bf71-1d.myshopify.com',
      websites: [],
    },
    {
      account_id: 6996,
      account_name: 'AllSewParts.com',
      websites: [],
    },
    {
      account_id: 6997,
      account_name: 'Shopify Store 48a813-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 6998,
      account_name: 'Kickass Products',
      websites: [],
    },
    {
      account_id: 6999,
      account_name: 'First Page',
      websites: [],
    },
    {
      account_id: 7000,
      account_name: 'Shopify Store 1dyadb-s2.myshopify.com',
      websites: [],
    },
    {
      account_id: 7001,
      account_name: 'DFGHGFH',
      websites: [],
    },
    {
      account_id: 7002,
      account_name: 'Big Commerce Store eqpigwb3ql',
      websites: [],
    },
    {
      account_id: 7003,
      account_name: 'Will Leather Goods',
      websites: [],
    },
    {
      account_id: 7004,
      account_name: 'Shopify Store dmc-brikoneo.myshopify.com',
      websites: [],
    },
    {
      account_id: 7005,
      account_name: 'DAVMELCOM',
      websites: [],
    },
    {
      account_id: 7006,
      account_name: 'Big Commerce Store hiqgkqeucv',
      websites: [
        {
          account_name: 'Big Commerce Store hiqgkqeucv',
          website_id: 6191,
          website_name: 'bricenover.mybigcommerce.com',
          skus: 116412,
        },
      ],
    },
    {
      account_id: 7007,
      account_name: 'Bricenover',
      websites: [],
    },
    {
      account_id: 7008,
      account_name: 'Big Commerce Store crl7qxag2s',
      websites: [
        {
          account_name: 'Big Commerce Store crl7qxag2s',
          website_id: 6190,
          website_name: 'brunsongin.mybigcommerce.com',
          skus: 62464,
        },
      ],
    },
    {
      account_id: 7009,
      account_name: 'Brunsongin',
      websites: [],
    },
    {
      account_id: 7010,
      account_name: 'Big Commerce Store 1xsov8lsy4',
      websites: [
        {
          account_name: 'Big Commerce Store 1xsov8lsy4',
          website_id: 6192,
          website_name: 'pasificaca.mybigcommerce.com',
          skus: 112926,
        },
      ],
    },
    {
      account_id: 7011,
      account_name: 'Pasificaca',
      websites: [],
    },
    {
      account_id: 7012,
      account_name: 'Shopify Store 9721ec-dc.myshopify.com',
      websites: [],
    },
    {
      account_id: 7013,
      account_name: 'xmaker inc',
      websites: [],
    },
    {
      account_id: 7014,
      account_name: 'Shopify Store 35d19b-da.myshopify.com',
      websites: [],
    },
    {
      account_id: 7015,
      account_name: 'Debron Sales',
      websites: [],
    },
    {
      account_id: 7016,
      account_name: 'Big Commerce Store ceioe5acvq',
      websites: [
        {
          account_name: 'Big Commerce Store ceioe5acvq',
          website_id: 6196,
          website_name: 'siemonsma.mybigcommerce.com',
          skus: 74657,
        },
      ],
    },
    {
      account_id: 7017,
      account_name: 'Siemonsma',
      websites: [],
    },
    {
      account_id: 7018,
      account_name: 'Simbo Studio',
      websites: [],
    },
    {
      account_id: 4664,
      account_name: 'Natural Patch',
      websites: [
        {
          account_name: 'Natural Patch',
          website_id: 4117,
          website_name: 'natpat.com',
          skus: 96,
        },
      ],
    },
    {
      account_id: 7019,
      account_name: 'Shopify Store trak-racer-aus.myshopify.com',
      websites: [],
    },
    {
      account_id: 7020,
      account_name: 'Shopify Store trakracer.myshopify.com',
      websites: [],
    },
    {
      account_id: 7021,
      account_name: 'Big Commerce Store z9g4i6uvbu',
      websites: [
        {
          account_name: 'Big Commerce Store z9g4i6uvbu',
          website_id: 6199,
          website_name: 'triplertruckparts.com',
          skus: 8450,
        },
      ],
    },
    {
      account_id: 7022,
      account_name: 'Triple R Truck Parts',
      websites: [],
    },
    {
      account_id: 7023,
      account_name: 'Ascension with Endora LLC',
      websites: [],
    },
    {
      account_id: 7025,
      account_name: 'Shopify Store trak-racer-eu.myshopify.com',
      websites: [],
    },
    {
      account_id: 7764,
      account_name: 'smartsign',
      websites: [],
    },
    {
      account_id: 7026,
      account_name: 'Shopify Store trakracer-uk.myshopify.com',
      websites: [],
    },
    {
      account_id: 7027,
      account_name: 'Shopify Store trak-racer-canada.myshopify.com',
      websites: [],
    },
    {
      account_id: 7028,
      account_name: 'Big Commerce Store 3xlzir0ggb',
      websites: [],
    },
    {
      account_id: 7029,
      account_name: 'Success Chemistry',
      websites: [],
    },
    {
      account_id: 7030,
      account_name: 'Shopify Store modern-makerie.myshopify.com',
      websites: [],
    },
    {
      account_id: 7031,
      account_name: 'Modern Makerie, LLC',
      websites: [],
    },
    {
      account_id: 7032,
      account_name: 'Big Commerce Store bmfrteli8u',
      websites: [
        {
          account_name: 'Big Commerce Store bmfrteli8u',
          website_id: 6207,
          website_name: 'pre-provisioned-bmfrteli8u.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7033,
      account_name: 'Cats sells',
      websites: [],
    },
    {
      account_id: 7034,
      account_name: 'Shopify Store 1eghdb-mf.myshopify.com',
      websites: [],
    },
    {
      account_id: 7035,
      account_name: 'hinheai',
      websites: [],
    },
    {
      account_id: 7036,
      account_name: 'The Fire Stop',
      websites: [],
    },
    {
      account_id: 7037,
      account_name: 'Big Commerce Store mhui2qzc7b',
      websites: [],
    },
    {
      account_id: 7038,
      account_name: 'EGA Footwear Dist. LLC',
      websites: [],
    },
    {
      account_id: 7041,
      account_name: 'Big Commerce Store s82jczosh1',
      websites: [
        {
          account_name: 'Big Commerce Store s82jczosh1',
          website_id: 6212,
          website_name: 'nicashooting.com',
          skus: 2419,
        },
      ],
    },
    {
      account_id: 7042,
      account_name: 'nicashooting.com',
      websites: [],
    },
    {
      account_id: 7039,
      account_name: 'Shopify Store 487cfc-71.myshopify.com',
      websites: [],
    },
    {
      account_id: 7040,
      account_name: 'Bean Bags R Us',
      websites: [],
    },
    {
      account_id: 7043,
      account_name: 'Bean Bags R-US',
      websites: [],
    },
    {
      account_id: 7044,
      account_name: 'Shopify Store 3zfqej-qy.myshopify.com',
      websites: [],
    },
    {
      account_id: 7045,
      account_name: 'Big Commerce Store d2w7gjo4c8',
      websites: [],
    },
    {
      account_id: 7046,
      account_name: 'Pure Nature Inc',
      websites: [],
    },
    {
      account_id: 7047,
      account_name: 'Big Commerce Store qudj79zk4p',
      websites: [
        {
          account_name: 'Big Commerce Store qudj79zk4p',
          website_id: 6217,
          website_name: 'workwearbazaar.com.au',
          skus: 59393,
        },
      ],
    },
    {
      account_id: 7048,
      account_name: 'Big Commerce Store anjfpyrk49',
      websites: [],
    },
    {
      account_id: 7049,
      account_name: 'Messages in Metal',
      websites: [],
    },
    {
      account_id: 7050,
      account_name: 'Shopify Store plcgcc.myshopify.com',
      websites: [],
    },
    {
      account_id: 7051,
      account_name: 'Shopify Store garden-gate-florist.myshopify.com',
      websites: [],
    },
    {
      account_id: 7052,
      account_name: 'Garden Gate Florist',
      websites: [],
    },
    {
      account_id: 4566,
      account_name: 'Pharmacy Online',
      websites: [
        {
          account_name: 'Pharmacy Online',
          website_id: 4041,
          website_name: 'www.pharmacyonline.com.au',
          skus: 12583,
        },
      ],
    },
    {
      account_id: 7053,
      account_name: 'Shopify Store 70hfet-en.myshopify.com',
      websites: [],
    },
    {
      account_id: 7054,
      account_name: 'ádfjasklf',
      websites: [],
    },
    {
      account_id: 7055,
      account_name: 'Shopify Store seattlehockeyteamstore.myshopify.com',
      websites: [],
    },
    {
      account_id: 7056,
      account_name: 'BDA',
      websites: [],
    },
    {
      account_id: 7057,
      account_name: 'Big Commerce Store ivvjwllctl',
      websites: [
        {
          account_name: 'Big Commerce Store ivvjwllctl',
          website_id: 6225,
          website_name: 'kingsworkwear.com.au',
          skus: 68249,
        },
      ],
    },
    {
      account_id: 7058,
      account_name: 'HiVizWorkwear',
      websites: [],
    },
    {
      account_id: 7059,
      account_name: 'hivizworkwear',
      websites: [],
    },
    {
      account_id: 7813,
      account_name: 'Cue Clothing Co',
      websites: [],
    },
    {
      account_id: 7060,
      account_name: 'Shopify Store msgn7g-d0.myshopify.com',
      websites: [],
    },
    {
      account_id: 7061,
      account_name: 'VIBE',
      websites: [],
    },
    {
      account_id: 7062,
      account_name: 'Shopify Store zszkf1-sx.myshopify.com',
      websites: [],
    },
    {
      account_id: 7063,
      account_name: 'Big Commerce Store jucclf99da',
      websites: [],
    },
    {
      account_id: 7064,
      account_name: 'Culitrade',
      websites: [],
    },
    {
      account_id: 7065,
      account_name: 'Shopify Store k47aa4-gt.myshopify.com',
      websites: [],
    },
    {
      account_id: 7066,
      account_name: 'dfg',
      websites: [],
    },
    {
      account_id: 7067,
      account_name: 'Big Commerce Store 4ysh8if6kv',
      websites: [
        {
          account_name: 'Big Commerce Store 4ysh8if6kv',
          website_id: 6243,
          website_name: 'all-points-fly-shop-outfitter.mybigcommerce.com',
          skus: 4645,
        },
      ],
    },
    {
      account_id: 7068,
      account_name: 'Big Commerce Store kdx6fuivgp',
      websites: [
        {
          account_name: 'Big Commerce Store kdx6fuivgp',
          website_id: 6245,
          website_name: 'witte-perel.nl',
          skus: 140,
        },
      ],
    },
    {
      account_id: 7069,
      account_name: 'Bumblebee Med LTD',
      websites: [],
    },
    {
      account_id: 7070,
      account_name: 'Shopify Store 7ab18b-24.myshopify.com',
      websites: [],
    },
    {
      account_id: 7071,
      account_name: 'Luxecart ',
      websites: [],
    },
    {
      account_id: 7072,
      account_name: 'Shopify Store eng5d8-p1.myshopify.com',
      websites: [],
    },
    {
      account_id: 7073,
      account_name: 'Shopify Store 5c006f-a0.myshopify.com',
      websites: [],
    },
    {
      account_id: 7074,
      account_name: 'Shopify Store 1jtxpu-mu.myshopify.com',
      websites: [],
    },
    {
      account_id: 7075,
      account_name: 'Big Commerce Store oasnpwddqu',
      websites: [],
    },
    {
      account_id: 7076,
      account_name: 'Phantom Tag Protector',
      websites: [],
    },
    {
      account_id: 7077,
      account_name: 'Big Commerce Store q0gw1z2myh',
      websites: [
        {
          account_name: 'Big Commerce Store q0gw1z2myh',
          website_id: 6251,
          website_name: 'michelleart.mybigcommerce.com',
          skus: 79378,
        },
      ],
    },
    {
      account_id: 7078,
      account_name: 'Michelleart',
      websites: [],
    },
    {
      account_id: 7079,
      account_name: 'Skin with Care',
      websites: [],
    },
    {
      account_id: 7080,
      account_name: 'Big Commerce Store hfcdepralu',
      websites: [],
    },
    {
      account_id: 7081,
      account_name: 'Herzmar.de',
      websites: [],
    },
    {
      account_id: 7082,
      account_name: 'Shopify Store t51zvn-26.myshopify.com',
      websites: [],
    },
    {
      account_id: 7083,
      account_name: 'gameve',
      websites: [],
    },
    {
      account_id: 7084,
      account_name: 'Big Commerce Store c13llxnjtn',
      websites: [
        {
          account_name: 'Big Commerce Store c13llxnjtn',
          website_id: 6256,
          website_name: 'hivizworkwear.com.au',
          skus: 56694,
        },
      ],
    },
    {
      account_id: 7085,
      account_name: 'Big Commerce Store qs59yz9fe',
      websites: [],
    },
    {
      account_id: 7086,
      account_name: 'Shopify Store jdqgdc-ne.myshopify.com',
      websites: [],
    },
    {
      account_id: 7087,
      account_name: 'Big Commerce Store 49v18nqssl',
      websites: [
        {
          account_name: 'Big Commerce Store 49v18nqssl',
          website_id: 6259,
          website_name: 'powertec.com.au',
          skus: 2400,
        },
      ],
    },
    {
      account_id: 7088,
      account_name: 'Powertec',
      websites: [],
    },
    {
      account_id: 7089,
      account_name: 'Big Commerce Store r31oihamtb',
      websites: [
        {
          account_name: 'Big Commerce Store r31oihamtb',
          website_id: 6260,
          website_name: 'sorriso-divino.com',
          skus: 131,
        },
      ],
    },
    {
      account_id: 7090,
      account_name: 'Onbeautify LTD',
      websites: [],
    },
    {
      account_id: 7091,
      account_name: 'Big Commerce Store jstkp9grrv',
      websites: [
        {
          account_name: 'Big Commerce Store jstkp9grrv',
          website_id: 6261,
          website_name: 'www.supremepaint.co.uk',
          skus: 561,
        },
      ],
    },
    {
      account_id: 7092,
      account_name: 'Supreme Paint',
      websites: [],
    },
    {
      account_id: 7093,
      account_name: 'Big Commerce Store yt68tfv9',
      websites: [
        {
          account_name: 'Big Commerce Store yt68tfv9',
          website_id: 6262,
          website_name: 'www.wrightlife.com',
          skus: 18690,
        },
      ],
    },
    {
      account_id: 7094,
      account_name: 'WrightLife.com',
      websites: [],
    },
    {
      account_id: 7095,
      account_name: 'Shopify Store qaqxbg-tv.myshopify.com',
      websites: [],
    },
    {
      account_id: 7096,
      account_name: 'sdfgdsf',
      websites: [],
    },
    {
      account_id: 7097,
      account_name: 'Big Commerce Store 2vwytfyo7i',
      websites: [
        {
          account_name: 'Big Commerce Store 2vwytfyo7i',
          website_id: 6264,
          website_name: 'smilewunder.de',
          skus: 62,
        },
      ],
    },
    {
      account_id: 7098,
      account_name: 'DEJMI LTD',
      websites: [],
    },
    {
      account_id: 7099,
      account_name: 'Big Commerce Store bjrkas6alc',
      websites: [
        {
          account_name: 'Big Commerce Store bjrkas6alc',
          website_id: 6265,
          website_name: 'navepoint.mybigcommerce.com',
          skus: 540,
        },
      ],
    },
    {
      account_id: 7100,
      account_name: 'Shopify Store jvukef-ah.myshopify.com',
      websites: [],
    },
    {
      account_id: 7101,
      account_name: 'sdfds',
      websites: [],
    },
    {
      account_id: 7102,
      account_name: 'Big Commerce Store vg6kc8b1vf',
      websites: [],
    },
    {
      account_id: 7103,
      account_name: 'BUMBLEBEE MED LTD',
      websites: [],
    },
    {
      account_id: 7104,
      account_name: 'Shopify Store kindred-coffee.myshopify.com',
      websites: [],
    },
    {
      account_id: 7105,
      account_name: 'Kindred Coffee',
      websites: [],
    },
    {
      account_id: 7106,
      account_name: 'Big Commerce Store kwnge1urc2',
      websites: [
        {
          account_name: 'Big Commerce Store kwnge1urc2',
          website_id: 6269,
          website_name: 'cuphead.mybigcommerce.com',
          skus: 117,
        },
      ],
    },
    {
      account_id: 5664,
      account_name: 'Big Commerce Store j9vtxwolnf',
      websites: [
        {
          account_name: 'Big Commerce Store j9vtxwolnf',
          website_id: 5099,
          website_name: 'www.kimberleycountry.com.au',
          skus: 3145,
        },
      ],
    },
    {
      account_id: 7107,
      account_name: 'Big Commerce Store bdyerejtdw',
      websites: [
        {
          account_name: 'Big Commerce Store bdyerejtdw',
          website_id: 6271,
          website_name: 'ohioperformanceparts.com',
          skus: 29498,
        },
      ],
    },
    {
      account_id: 7108,
      account_name: 'Big Commerce Store uahhm6eqvm',
      websites: [],
    },
    {
      account_id: 7109,
      account_name: 'TowUniverse',
      websites: [],
    },
    {
      account_id: 7110,
      account_name: 'Ohio Performance Parts',
      websites: [],
    },
    {
      account_id: 7111,
      account_name: 'Big Commerce Store 9p5roq3llr',
      websites: [
        {
          account_name: 'Big Commerce Store 9p5roq3llr',
          website_id: 6273,
          website_name: 'corporateandhealthwear.com.au',
          skus: 23728,
        },
      ],
    },
    {
      account_id: 7112,
      account_name: 'corporate and healthwear',
      websites: [],
    },
    {
      account_id: 7113,
      account_name: 'Big Commerce Store a8dxtq6ypg',
      websites: [
        {
          account_name: 'Big Commerce Store a8dxtq6ypg',
          website_id: 6274,
          website_name: 'bootsandworkwear.com.au',
          skus: 9718,
        },
      ],
    },
    {
      account_id: 7114,
      account_name: 'Big Commerce Store jvyxo7ln92',
      websites: [
        {
          account_name: 'Big Commerce Store jvyxo7ln92',
          website_id: 6277,
          website_name: 'moviesrusa.biz',
          skus: 5188,
        },
      ],
    },
    {
      account_id: 7115,
      account_name: 'Shopify Store axrwgj-fk.myshopify.com',
      websites: [],
    },
    {
      account_id: 7116,
      account_name: 'Shopify Store artfuzz.myshopify.com',
      websites: [],
    },
    {
      account_id: 7117,
      account_name: 'artfuzz.com',
      websites: [],
    },
    {
      account_id: 7118,
      account_name: 'Shopify Store ffwc0x-d3.myshopify.com',
      websites: [],
    },
    {
      account_id: 7119,
      account_name: 'thetoad',
      websites: [],
    },
    {
      account_id: 7120,
      account_name: 'Shopify Store wpzmc6-h0.myshopify.com',
      websites: [],
    },
    {
      account_id: 7121,
      account_name: 'Shopify Store 1tyz9z-5q.myshopify.com',
      websites: [],
    },
    {
      account_id: 7122,
      account_name: 'sss',
      websites: [],
    },
    {
      account_id: 7123,
      account_name: 'Shopify Store reume8-mi.myshopify.com',
      websites: [],
    },
    {
      account_id: 7124,
      account_name: 'Big Commerce Store hw1ll9udnr',
      websites: [],
    },
    {
      account_id: 7125,
      account_name: 'Shopify Store cwbb5a-vq.myshopify.com',
      websites: [],
    },
    {
      account_id: 7126,
      account_name: 'Shopify Store e0c077-dc.myshopify.com',
      websites: [],
    },
    {
      account_id: 7127,
      account_name: 'Big Commerce Store k5xb3d5nlu',
      websites: [],
    },
    {
      account_id: 7128,
      account_name: 'Rich image, inc',
      websites: [],
    },
    {
      account_id: 7129,
      account_name: 'Shopify Store landsbybilleder.myshopify.com',
      websites: [],
    },
    {
      account_id: 7130,
      account_name: 'hjemegn.dk',
      websites: [],
    },
    {
      account_id: 7131,
      account_name: 'Big Commerce Store e9ynjrlyot',
      websites: [],
    },
    {
      account_id: 7132,
      account_name: 'Big Commerce Store hw31x',
      websites: [
        {
          account_name: 'Big Commerce Store hw31x',
          website_id: 6292,
          website_name: 'wrestlersupply.com',
          skus: 1318,
        },
      ],
    },
    {
      account_id: 7133,
      account_name: 'WarriorSport Wear Inc',
      websites: [],
    },
    {
      account_id: 7134,
      account_name: 'Big Commerce Store 6sd8uujgm4',
      websites: [],
    },
    {
      account_id: 7135,
      account_name: 'Shopify Store 25bc55-8f.myshopify.com',
      websites: [],
    },
    {
      account_id: 7136,
      account_name: 'Big Commerce Store lm2htas089',
      websites: [
        {
          account_name: 'Big Commerce Store lm2htas089',
          website_id: 6295,
          website_name: 'alexjordesastory.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7137,
      account_name: 'dvdsv',
      websites: [],
    },
    {
      account_id: 7138,
      account_name:
        'Shopify Store tacticalglide-everyday-gear-for-tactical-mindsets.myshopify.com',
      websites: [],
    },
    {
      account_id: 7139,
      account_name: 'Tactical Glide',
      websites: [],
    },
    {
      account_id: 7140,
      account_name: 'Shopify Store a5ce3d-aa.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a5ce3d-aa.myshopify.com',
          website_id: 6430,
          website_name: 'richardgrand.com',
          skus: 2702,
        },
      ],
    },
    {
      account_id: 7141,
      account_name: 'Richard Grand Cashmere',
      websites: [],
    },
    {
      account_id: 7142,
      account_name: 'Big Commerce Store dfccaj35',
      websites: [],
    },
    {
      account_id: 7143,
      account_name: 'Shopify Store zrgpar-jj.myshopify.com',
      websites: [],
    },
    {
      account_id: 7144,
      account_name: 'fgdhhg',
      websites: [],
    },
    {
      account_id: 7145,
      account_name: 'Big Commerce Store ysjmijkfrs',
      websites: [
        {
          account_name: 'Big Commerce Store ysjmijkfrs',
          website_id: 6303,
          website_name: 'h2tsport.com',
          skus: 13294,
        },
      ],
    },
    {
      account_id: 7146,
      account_name: 'The Bollard Shop ',
      websites: [],
    },
    {
      account_id: 7147,
      account_name: 'Big Commerce Store pzpx29uwy3',
      websites: [
        {
          account_name: 'Big Commerce Store pzpx29uwy3',
          website_id: 6305,
          website_name: 'jasonrodi.mybigcommerce.com',
          skus: 133993,
        },
      ],
    },
    {
      account_id: 7148,
      account_name: 'Jasonrodi',
      websites: [],
    },
    {
      account_id: 7149,
      account_name: 'Big Commerce Store rnae4ipty1',
      websites: [],
    },
    {
      account_id: 7150,
      account_name: 'Tee Customizers',
      websites: [],
    },
    {
      account_id: 7151,
      account_name: 'Shopify Store prof-dr-steinkraus.myshopify.com',
      websites: [],
    },
    {
      account_id: 7152,
      account_name: 'Purist Collective',
      websites: [],
    },
    {
      account_id: 7153,
      account_name: 'Shopify Store dcvnqh-ua.myshopify.com',
      websites: [],
    },
    {
      account_id: 7154,
      account_name: 'Nexus Games',
      websites: [],
    },
    {
      account_id: 7155,
      account_name: 'Big Commerce Store 6d8s7h',
      websites: [],
    },
    {
      account_id: 7156,
      account_name: 'US Night Vision Inc',
      websites: [],
    },
    {
      account_id: 7157,
      account_name: 'digital busoness app',
      websites: [
        {
          account_name: 'digital busoness app',
          website_id: 6313,
          website_name: 'digiltalsbussines.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7158,
      account_name: 'Big Commerce Store mfjemmh3xf',
      websites: [],
    },
    {
      account_id: 7159,
      account_name: 'Signal Sounds Ltd',
      websites: [],
    },
    {
      account_id: 7160,
      account_name: 'Shopify Store bz1unt-q1.myshopify.com',
      websites: [],
    },
    {
      account_id: 7161,
      account_name: 'world of curiosities',
      websites: [],
    },
    {
      account_id: 7163,
      account_name: 'The Bollard Shop, LLC',
      websites: [],
    },
    {
      account_id: 7164,
      account_name: 'SEFA',
      websites: [],
    },
    {
      account_id: 7165,
      account_name: 'Shopify Store trakraceres.myshopify.com',
      websites: [],
    },
    {
      account_id: 7168,
      account_name: 'Shopify Store betacraftworkwear.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store betacraftworkwear.myshopify.com',
          website_id: 6440,
          website_name: 'betacraftworkwear.com',
          skus: 1345,
        },
      ],
    },
    {
      account_id: 7169,
      account_name: 'Betacraft NZ Ltd',
      websites: [],
    },
    {
      account_id: 7170,
      account_name: 'Big Commerce Store 4ajodqacwr',
      websites: [],
    },
    {
      account_id: 7171,
      account_name: 'Vintage Brass Store',
      websites: [],
    },
    {
      account_id: 7172,
      account_name: 'Big Commerce Store ie8izvnfjp',
      websites: [],
    },
    {
      account_id: 7173,
      account_name: 'Shopify Store 41315c.myshopify.com',
      websites: [],
    },
    {
      account_id: 7167,
      account_name: 'SuperPharmacyPlus',
      websites: [
        {
          account_name: 'SuperPharmacyPlus',
          website_id: 2959,
          website_name: 'superpharmacyplus.com.au',
          skus: 8222,
        },
      ],
    },
    {
      account_id: 7162,
      account_name: 'Shopify Store thebollardshop.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store thebollardshop.myshopify.com',
          website_id: 6320,
          website_name: 'bollardshop.com',
          skus: 168,
        },
      ],
    },
    {
      account_id: 7175,
      account_name: 'Big Commerce Store dvuq4ydwn1',
      websites: [
        {
          account_name: 'Big Commerce Store dvuq4ydwn1',
          website_id: 6341,
          website_name: 'judithomti.mybigcommerce.com',
          skus: 85081,
        },
      ],
    },
    {
      account_id: 7176,
      account_name: 'Judithomti',
      websites: [],
    },
    {
      account_id: 7177,
      account_name: 'Big Commerce Store 4mdmn43za8',
      websites: [
        {
          account_name: 'Big Commerce Store 4mdmn43za8',
          website_id: 6404,
          website_name: 'grandentrydoors.com',
          skus: 103,
        },
      ],
    },
    {
      account_id: 7178,
      account_name: 'Grand Entry Doors',
      websites: [],
    },
    {
      account_id: 7179,
      account_name: 'Shopify Store cs7xvr-xu.myshopify.com',
      websites: [],
    },
    {
      account_id: 7180,
      account_name: 'Litterista@gmail.com',
      websites: [],
    },
    {
      account_id: 7181,
      account_name: 'DIGITAL OUTLOOK',
      websites: [],
    },
    {
      account_id: 7182,
      account_name: 'Big Commerce Store izzh81esja',
      websites: [
        {
          account_name: 'Big Commerce Store izzh81esja',
          website_id: 6338,
          website_name: 'middleeast-consultancy.mybigcommerce.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7183,
      account_name: 'Middleeast Conusltancies',
      websites: [],
    },
    {
      account_id: 7184,
      account_name: 'Big Commerce Store emmwsqojl0',
      websites: [
        {
          account_name: 'Big Commerce Store emmwsqojl0',
          website_id: 6339,
          website_name: 'hicksonclee.mybigcommerce.com',
          skus: 153390,
        },
      ],
    },
    {
      account_id: 7185,
      account_name: 'Hicksonclee',
      websites: [],
    },
    {
      account_id: 7186,
      account_name: 'Big Commerce Store j3sl93pupi',
      websites: [],
    },
    {
      account_id: 7187,
      account_name: 'EGA Footwear Distributors',
      websites: [],
    },
    {
      account_id: 7188,
      account_name: 'Big Commerce Store ndrjyuieox',
      websites: [
        {
          account_name: 'Big Commerce Store ndrjyuieox',
          website_id: 6342,
          website_name: 'kocherame.mybigcommerce.com',
          skus: 141319,
        },
      ],
    },
    {
      account_id: 7189,
      account_name: 'Kocherame',
      websites: [],
    },
    {
      account_id: 7190,
      account_name: 'Big Commerce Store angkbam7ig',
      websites: [
        {
          account_name: 'Big Commerce Store angkbam7ig',
          website_id: 6346,
          website_name: 'cecilykande.mybigcommerce.com',
          skus: 116895,
        },
      ],
    },
    {
      account_id: 7191,
      account_name: 'cecilykande',
      websites: [],
    },
    {
      account_id: 7192,
      account_name: 'Big Commerce Store q1ejejslpc',
      websites: [
        {
          account_name: 'Big Commerce Store q1ejejslpc',
          website_id: 6347,
          website_name: 'jellysamubi.mybigcommerce.com',
          skus: 107285,
        },
      ],
    },
    {
      account_id: 7193,
      account_name: 'Jellysamubi',
      websites: [],
    },
    {
      account_id: 7194,
      account_name: 'Shopify Store xnbimr-sq.myshopify.com',
      websites: [],
    },
    {
      account_id: 7195,
      account_name: 'Big Commerce Store 6r10lz',
      websites: [
        {
          account_name: 'Big Commerce Store 6r10lz',
          website_id: 6349,
          website_name: 'www.popvinyl.nz',
          skus: 1193,
        },
      ],
    },
    {
      account_id: 7196,
      account_name: 'popvinyl.nz',
      websites: [],
    },
    {
      account_id: 7197,
      account_name: 'Shopify Store 951998-f5.myshopify.com',
      websites: [],
    },
    {
      account_id: 7198,
      account_name: 'Online DVD Sales',
      websites: [],
    },
    {
      account_id: 7200,
      account_name: 'LIMIT+1',
      websites: [],
    },
    {
      account_id: 7201,
      account_name: 'Shopify Store ybxt4v-vq.myshopify.com',
      websites: [],
    },
    {
      account_id: 7202,
      account_name: 'gamedeal',
      websites: [],
    },
    {
      account_id: 7203,
      account_name: 'BIz Workwear',
      websites: [],
    },
    {
      account_id: 7204,
      account_name: 'Sparro',
      websites: [],
    },
    {
      account_id: 7205,
      account_name: 'Shopify Store 1m1bvf-bz.myshopify.com',
      websites: [],
    },
    {
      account_id: 7206,
      account_name: 'Gadgetspiremart',
      websites: [],
    },
    {
      account_id: 7207,
      account_name: 'Smeaton Bathrooms',
      websites: [
        {
          account_name: 'Smeaton Bathrooms',
          website_id: 4352,
          website_name: 'smeatonbathrooms.com.au',
          skus: 4523,
        },
      ],
    },
    {
      account_id: 7208,
      account_name: 'Shopify Store yinzershop-com.myshopify.com',
      websites: [],
    },
    {
      account_id: 7209,
      account_name: 'YinzerShop',
      websites: [],
    },
    {
      account_id: 7210,
      account_name: 'Big Commerce Store gp6i9zbcia',
      websites: [
        {
          account_name: 'Big Commerce Store gp6i9zbcia',
          website_id: 6361,
          website_name: 'all-flix-live-store-4-gen-z.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7211,
      account_name: 'ALL FLIX LIVE STORE',
      websites: [],
    },
    {
      account_id: 3912,
      account_name: 'RQmedia',
      websites: [
        {
          account_name: 'RQmedia',
          website_id: 1271,
          website_name: 'wrangler.com.au',
          skus: 1567,
        },
        {
          account_name: 'RQmedia',
          website_id: 103,
          website_name: 'redhotpie.com.au',
          skus: 0,
        },
        {
          account_name: 'RQmedia',
          website_id: 803,
          website_name: 'hypop.com.au',
          skus: 11103,
        },
        {
          account_name: 'RQmedia',
          website_id: 3478,
          website_name: 'www.bandestudio.com',
          skus: 677,
        },
        {
          account_name: 'RQmedia',
          website_id: 3001,
          website_name: 'stcloudlabel.com',
          skus: 320,
        },
        {
          account_name: 'RQmedia',
          website_id: 975,
          website_name: 'www.mannys.com.au',
          skus: 22914,
        },
        {
          account_name: 'RQmedia',
          website_id: 309,
          website_name: 'www.vacuumspot.com.au',
          skus: 3197,
        },
        {
          account_name: 'RQmedia',
          website_id: 1262,
          website_name: 'www.lacoste.com.au',
          skus: 3682,
        },
        {
          account_name: 'RQmedia',
          website_id: 301,
          website_name: 'www.livingstyles.com.au',
          skus: 56854,
        },
        {
          account_name: 'RQmedia',
          website_id: 1264,
          website_name: 'www.nautica.com.au',
          skus: 3542,
        },
        {
          account_name: 'RQmedia',
          website_id: 1263,
          website_name: 'www.leejeans.com.au',
          skus: 1395,
        },
        {
          account_name: 'RQmedia',
          website_id: 1672,
          website_name: 'trendyful.co.nz',
          skus: 113,
        },
        {
          account_name: 'RQmedia',
          website_id: 691,
          website_name: 'www.gadgets4geeks.com.au',
          skus: 1770,
        },
        {
          account_name: 'RQmedia',
          website_id: 1272,
          website_name: 'au.teva.com',
          skus: 1782,
        },
        {
          account_name: 'RQmedia',
          website_id: 472,
          website_name: 'www.vavoom.com.au',
          skus: 635,
        },
        {
          account_name: 'RQmedia',
          website_id: 1268,
          website_name: 'www.speedo.com.au',
          skus: 2579,
        },
        {
          account_name: 'RQmedia',
          website_id: 3053,
          website_name: 'www.superpharmacy.com.au',
          skus: 1,
        },
        {
          account_name: 'RQmedia',
          website_id: 3122,
          website_name: 'justbee.com.au',
          skus: 2358,
        },
        {
          account_name: 'RQmedia',
          website_id: 1652,
          website_name: 'www.wallartprints.com.au',
          skus: 41464,
        },
        {
          account_name: 'RQmedia',
          website_id: 1448,
          website_name: 'www.wallartprints.com/nz',
          skus: 18961,
        },
        {
          account_name: 'RQmedia',
          website_id: 1106,
          website_name: 'www.scorptec.com.au',
          skus: 9692,
        },
        {
          account_name: 'RQmedia',
          website_id: 3595,
          website_name: 'nz.teva.com',
          skus: 1902,
        },
        {
          account_name: 'RQmedia',
          website_id: 1281,
          website_name: 'thenorthface.co.nz',
          skus: 2472,
        },
        {
          account_name: 'RQmedia',
          website_id: 2096,
          website_name: 'vault2u.com',
          skus: 55,
        },
        {
          account_name: 'RQmedia',
          website_id: 1237,
          website_name: 'www.minidisc.com.au',
          skus: 2041,
        },
        {
          account_name: 'RQmedia',
          website_id: 1424,
          website_name: 'www.storedj.com.au',
          skus: 11368,
        },
        {
          account_name: 'RQmedia',
          website_id: 3784,
          website_name: 'ecokidorganics.com',
          skus: 39,
        },
        {
          account_name: 'RQmedia',
          website_id: 987,
          website_name: 'www.melbournesnowboard.com.au',
          skus: 12151,
        },
        {
          account_name: 'RQmedia',
          website_id: 1265,
          website_name: 'ridersbylee.com.au',
          skus: 1052,
        },
        {
          account_name: 'RQmedia',
          website_id: 565,
          website_name: 'www.bathwaredirect.com.au',
          skus: 5747,
        },
        {
          account_name: 'RQmedia',
          website_id: 3446,
          website_name: 'studio.hypop.com.au',
          skus: 0,
        },
        {
          account_name: 'RQmedia',
          website_id: 3955,
          website_name: 'www.marketingscience.info',
          skus: 0,
        },
        {
          account_name: 'RQmedia',
          website_id: 1146,
          website_name: 'spectrum-brand.com',
          skus: 1498,
        },
        {
          account_name: 'RQmedia',
          website_id: 4003,
          website_name: 'www.daisyandhen.com.au',
          skus: 37685,
        },
        {
          account_name: 'RQmedia',
          website_id: 1663,
          website_name: 'www.minijumbuk.com.au',
          skus: 348,
        },
        {
          account_name: 'RQmedia',
          website_id: 1269,
          website_name: 'thenorthface.com.au',
          skus: 2471,
        },
        {
          account_name: 'RQmedia',
          website_id: 4109,
          website_name: 'kitchenstyle.com.au',
          skus: 2714,
        },
        {
          account_name: 'RQmedia',
          website_id: 4119,
          website_name: 'www.careyounz.co.nz',
          skus: 975,
        },
        {
          account_name: 'RQmedia',
          website_id: 1125,
          website_name: 'careyou.com.au',
          skus: 1337,
        },
        {
          account_name: 'RQmedia',
          website_id: 219,
          website_name: 'www.fijiairways.com',
          skus: 0,
        },
        {
          account_name: 'RQmedia',
          website_id: 6970,
          website_name: 'www.derringers.com.au',
          skus: 23809,
        },
        {
          account_name: 'RQmedia',
          website_id: 3463,
          website_name: 'www.navman.com.au',
          skus: 195,
        },
        {
          account_name: 'RQmedia',
          website_id: 4952,
          website_name: 'oneteaspoon.com',
          skus: 25835,
        },
        {
          account_name: 'RQmedia',
          website_id: 4950,
          website_name: 'oneteaspoon.com.au',
          skus: 25835,
        },
        {
          account_name: 'RQmedia',
          website_id: 5768,
          website_name: 'rubyssalonsupplies.com.au',
          skus: 5405,
        },
        {
          account_name: 'RQmedia',
          website_id: 6046,
          website_name: 'rundna.com.au',
          skus: 23205,
        },
        {
          account_name: 'RQmedia',
          website_id: 340,
          website_name: 'www.digidirect.com.au',
          skus: 22738,
        },
        {
          account_name: 'RQmedia',
          website_id: 6100,
          website_name: 'radicalyes.com.au',
          skus: 689,
        },
        {
          account_name: 'RQmedia',
          website_id: 6144,
          website_name: 'www.icebreaker.com',
          skus: 1200,
        },
        {
          account_name: 'RQmedia',
          website_id: 805,
          website_name: 'www.designstuff.com.au',
          skus: 2586,
        },
        {
          account_name: 'RQmedia',
          website_id: 6998,
          website_name: 'naot.com.au',
          skus: 8171,
        },
        {
          account_name: 'RQmedia',
          website_id: 6878,
          website_name: 'www.swanonline.com.au',
          skus: 5517,
        },
      ],
    },
    {
      account_id: 1097,
      account_name: 'Meshki',
      websites: [
        {
          account_name: 'Meshki',
          website_id: 3130,
          website_name: 'www.meshki.com.au',
          skus: 18964,
        },
        {
          account_name: 'Meshki',
          website_id: 3129,
          website_name: 'www.meshki.com.au',
          skus: 18969,
        },
        {
          account_name: 'Meshki',
          website_id: 1285,
          website_name: 'www.meshki.com.au',
          skus: 18969,
        },
        {
          account_name: 'Meshki',
          website_id: 2910,
          website_name: 'www.meshki.us',
          skus: 14291,
        },
        {
          account_name: 'Meshki',
          website_id: 3127,
          website_name: 'www.meshki.us',
          skus: 14291,
        },
        {
          account_name: 'Meshki',
          website_id: 3128,
          website_name: 'meshki.co.uk',
          skus: 18927,
        },
      ],
    },
    {
      account_id: 7742,
      account_name: 'The Home Office',
      websites: [],
    },
    {
      account_id: 7212,
      account_name: 'Shopify Store wdwhmp-f4.myshopify.com',
      websites: [],
    },
    {
      account_id: 7214,
      account_name: 'Shopify Store tpcdemo.myshopify.com',
      websites: [],
    },
    {
      account_id: 7215,
      account_name: 'Monet Media',
      websites: [],
    },
    {
      account_id: 7216,
      account_name: 'Shopify Store jazib-sep-2024.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jazib-sep-2024.myshopify.com',
          website_id: 6757,
          website_name: 'jazib-sep-2024.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7217,
      account_name: 'Shopify Store feedops-test-jazib-5-feb-2025.myshopify.com',
      websites: [],
    },
    {
      account_id: 7218,
      account_name: 'Shopify Store yfpbui-gw.myshopify.com',
      websites: [],
    },
    {
      account_id: 7219,
      account_name: 'Big Commerce Store wg9x28mqmp',
      websites: [
        {
          account_name: 'Big Commerce Store wg9x28mqmp',
          website_id: 6380,
          website_name: 'lumiblanco.com',
          skus: 64,
        },
      ],
    },
    {
      account_id: 7220,
      account_name: 'LuminoAura LTD',
      websites: [],
    },
    {
      account_id: 7221,
      account_name: 'Big Commerce Store 1avwnh9fo7',
      websites: [
        {
          account_name: 'Big Commerce Store 1avwnh9fo7',
          website_id: 6381,
          website_name: 'maverickhunting.com',
          skus: 123,
        },
      ],
    },
    {
      account_id: 7222,
      account_name: 'Maverick Hunting',
      websites: [],
    },
    {
      account_id: 7224,
      account_name: 'Festa Radon Technologies',
      websites: [],
    },
    {
      account_id: 7225,
      account_name: 'Big Commerce Store mvj4cke2zp',
      websites: [],
    },
    {
      account_id: 7226,
      account_name: 'Trailworx UTV',
      websites: [],
    },
    {
      account_id: 7199,
      account_name: 'Shopify Store limit-1-5265.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store limit-1-5265.myshopify.com',
          website_id: 6453,
          website_name: 'limitplus1.com',
          skus: 4308,
        },
      ],
    },
    {
      account_id: 6947,
      account_name: 'Shopify Store 9202ba-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 9202ba-3.myshopify.com',
          website_id: 6466,
          website_name: 'shop.sullysrideshop.com',
          skus: 777,
        },
      ],
    },
    {
      account_id: 7227,
      account_name: 'Shopify Store m1a8dv-tm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store m1a8dv-tm.myshopify.com',
          website_id: 6385,
          website_name: 'grownbunny.store',
          skus: 2,
        },
      ],
    },
    {
      account_id: 7228,
      account_name: 'Big Commerce Store bb3tvensqz',
      websites: [],
    },
    {
      account_id: 7229,
      account_name: "Shopping Regina's",
      websites: [],
    },
    {
      account_id: 7230,
      account_name: 'Big Commerce Store qakdpxs6hs',
      websites: [],
    },
    {
      account_id: 7231,
      account_name: 'Noble 2',
      websites: [],
    },
    {
      account_id: 7233,
      account_name: 'Caribbean Corner Shop',
      websites: [],
    },
    {
      account_id: 7174,
      account_name: 'Big Commerce Store signalsounds',
      websites: [
        {
          account_name: 'Big Commerce Store signalsounds',
          website_id: 6327,
          website_name: 'signal-sounds.com',
          skus: 4936,
        },
        {
          account_name: 'Big Commerce Store signalsounds',
          website_id: 7281,
          website_name: 'www.signalsounds.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7234,
      account_name: 'Cutty Sark',
      websites: [
        {
          account_name: 'Cutty Sark',
          website_id: 3882,
          website_name: 'cuttysark.com.au',
          skus: 251,
        },
      ],
    },
    {
      account_id: 7236,
      account_name: 'BB Fashion Outlet',
      websites: [],
    },
    {
      account_id: 7237,
      account_name: 'Shopify Store koalavic.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store koalavic.myshopify.com',
          website_id: 6391,
          website_name: 'www.koalalamps.com.au',
          skus: 4243,
        },
      ],
    },
    {
      account_id: 7238,
      account_name: 'Shopify Store cater-equip.myshopify.com',
      websites: [],
    },
    {
      account_id: 7929,
      account_name: 'Glue Store',
      websites: [],
    },
    {
      account_id: 7240,
      account_name: 'Big Commerce Store ooao5hzy3l',
      websites: [
        {
          account_name: 'Big Commerce Store ooao5hzy3l',
          website_id: 6393,
          website_name: 'noone.com.tr',
          skus: 1802,
        },
      ],
    },
    {
      account_id: 7241,
      account_name: 'Big Commerce Store 62997',
      websites: [],
    },
    {
      account_id: 7242,
      account_name: 'Vacalon Company Inc',
      websites: [],
    },
    {
      account_id: 7223,
      account_name: 'Shopify Store festa-radon-technologies.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store festa-radon-technologies.myshopify.com',
          website_id: 6382,
          website_name: 'www.festaradontech.com',
          skus: 280,
        },
      ],
    },
    {
      account_id: 7243,
      account_name: 'Big Commerce Store xcgovq5ddq',
      websites: [],
    },
    {
      account_id: 7244,
      account_name: 'ledhouse',
      websites: [],
    },
    {
      account_id: 7245,
      account_name: 'Shopify Store bump-baby-and-beyond10.myshopify.com',
      websites: [],
    },
    {
      account_id: 7246,
      account_name: 'Bump, Baby and Beyond',
      websites: [],
    },
    {
      account_id: 7247,
      account_name: 'Trak Racer',
      websites: [],
    },
    {
      account_id: 7248,
      account_name: 'Shopify Store a22rgq-s3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a22rgq-s3.myshopify.com',
          website_id: 6398,
          website_name: 'aliceinusa.myshopify.com',
          skus: 12,
        },
      ],
    },
    {
      account_id: 7249,
      account_name: 'Alice in USA',
      websites: [],
    },
    {
      account_id: 7232,
      account_name: 'Shopify Store corner-shop-ja.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store corner-shop-ja.myshopify.com',
          website_id: 6388,
          website_name: 'mycaribbeangrocer.com',
          skus: 167,
        },
      ],
    },
    {
      account_id: 7250,
      account_name: 'Big Commerce Store kv1zprgzvc',
      websites: [
        {
          account_name: 'Big Commerce Store kv1zprgzvc',
          website_id: 6405,
          website_name: 'ukcoolers.co.uk',
          skus: 308,
        },
      ],
    },
    {
      account_id: 7251,
      account_name: 'Big Commerce Store ic5f5z66bm',
      websites: [
        {
          account_name: 'Big Commerce Store ic5f5z66bm',
          website_id: 6406,
          website_name: 'priesters.com',
          skus: 365,
        },
      ],
    },
    {
      account_id: 7252,
      account_name: "Priester's Pecans",
      websites: [],
    },
    {
      account_id: 7253,
      account_name: 'Shopify Store palazzo-online-couture.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store palazzo-online-couture.myshopify.com',
          website_id: 6407,
          website_name: 'palazzocoutureonline.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 3191,
      account_name: 'LocaliQ Australia & New Zealand',
      websites: [
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 3531,
          website_name: 'www.cyclingdeal.com.au',
          skus: 2723,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6043,
          website_name: 'www.solidworld.com.au',
          skus: 291,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 3951,
          website_name: 'www.4wdindustries.com.au',
          skus: 11336,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4101,
          website_name: 'www.everythingcaravans.com.au',
          skus: 6115,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4160,
          website_name: 'www.hospequip.com.au',
          skus: 899,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4172,
          website_name: 'www.tradeys.com.au',
          skus: 1975,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4243,
          website_name: 'www.badgeraustralia.com.au',
          skus: 11549,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4264,
          website_name: 'shop.empirehome.com.au',
          skus: 1409,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4275,
          website_name: 'www.whatevermudgee.com.au',
          skus: 14613,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4302,
          website_name: 'kiwiplay.nz',
          skus: 165,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4313,
          website_name: 'detailcentral.com.au',
          skus: 600,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4337,
          website_name: 'www.ablefix.com.au',
          skus: 3998,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4367,
          website_name: 'stevejones.com.au',
          skus: 1363,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4372,
          website_name: 'www.sittingprettyfurniture.com.au',
          skus: 1103,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4572,
          website_name: 'www.aussiestormshop.com.au',
          skus: 2027,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4791,
          website_name: 'painterswarehouse.com.au',
          skus: 32,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4834,
          website_name: 'bestwaterfilters.com.au',
          skus: 55,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4959,
          website_name: 'maclaceleather.com.au',
          skus: 4112,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 4022,
          website_name: 'supertoysandhobbies.com.au',
          skus: 7281,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5089,
          website_name: 'trailerspartsandrepairs.com.au',
          skus: 1401,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5136,
          website_name: 'keaneceramics.com.au',
          skus: 2384,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5688,
          website_name: 'www.healthsquad.com.au',
          skus: 593,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5695,
          website_name: 'ukuleletradingcoaustralia.com.au',
          skus: 1009,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5705,
          website_name: 'www.wondertribe.com.au',
          skus: 611,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5882,
          website_name: 'www.lollywarehouse.com.au',
          skus: 905,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 5900,
          website_name: 'www.monkeynuts.com.au',
          skus: 27,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6034,
          website_name: 'www.ginginbeef.com',
          skus: 425,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6068,
          website_name: 'incaorganics.com.au',
          skus: 11,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6074,
          website_name: 'shadespace.com.au',
          skus: 544,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6075,
          website_name: 'bitolalighting.com.au',
          skus: 3516,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6078,
          website_name: 'www.petzstore.com.au',
          skus: 1114,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6079,
          website_name: 'www.solarpoweredgates.com.au',
          skus: 64,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6092,
          website_name: 'cowfish.com.au',
          skus: 146,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6112,
          website_name: 'morningtontimber.com.au',
          skus: 700,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6117,
          website_name: 'vehiclesolarsolutions.com.au',
          skus: 466,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6147,
          website_name: 'ecomotion.com.au',
          skus: 500,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6148,
          website_name: 'www.paperplayonline.com.au',
          skus: 2133,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6159,
          website_name: 'www.tigarbathrooms.com.au',
          skus: 176,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6165,
          website_name: 'www.smartdietsolutions.com',
          skus: 30,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6210,
          website_name: 'tsunamisurfer.com.au',
          skus: 15596,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6216,
          website_name: 'www.hiscocks.com.au',
          skus: 11510,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6254,
          website_name: 'envokecarcare.com.au',
          skus: 124,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6974,
          website_name: 'www.thefencingwarehouse.com.au',
          skus: 1626,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6308,
          website_name: 'www.rutherford.com.au',
          skus: 2642,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6885,
          website_name: 'theitkit.com.au',
          skus: 2177,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6400,
          website_name: 'skyspanshade.com.au',
          skus: 112,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6402,
          website_name: 'shopbitsandpieces.com.au',
          skus: 1160,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6417,
          website_name: 'foxesden.com.au',
          skus: 54,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6419,
          website_name: 'cathammill.com.au',
          skus: 707,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6433,
          website_name: 'directcompostsolutions.com',
          skus: 64,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6444,
          website_name: 'www.liberateworld.com',
          skus: 15,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6457,
          website_name: 'luandcoboutique.com.au',
          skus: 2155,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6472,
          website_name: 'eagleautoparts.com.au',
          skus: 13848,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6467,
          website_name: 'strapsnstyles.com.au',
          skus: 137,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6470,
          website_name: 'storecollectables.shop',
          skus: 73,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6486,
          website_name: 'fenluxshop.com.au',
          skus: 270,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 7037,
          website_name: 'pizazzboutique.com.au',
          skus: 7412,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6756,
          website_name: 'timelesstrap.com',
          skus: 851,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6995,
          website_name: 'waliftingequipment.com.au',
          skus: 4380,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6877,
          website_name: 'sdfaustralia.com',
          skus: 1352,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6891,
          website_name: 'ferracinishoes.com.au',
          skus: 2050,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6933,
          website_name: 'strideon.com.au',
          skus: 66,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6954,
          website_name: 'presenceonline.com.au',
          skus: 2681,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6955,
          website_name: 'diamond-tools.co.nz',
          skus: 2338,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 7283,
          website_name: 'elisedesign.com.au',
          skus: 5230,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 6957,
          website_name: 'www.whoinc.com.au',
          skus: 484,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 7036,
          website_name: 'www.sblibris.com.au',
          skus: 1535,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 7132,
          website_name: 'www.medcareshop.com.au',
          skus: 711,
        },
        {
          account_name: 'LocaliQ Australia & New Zealand',
          website_id: 7133,
          website_name: 'wallartdesigns.com.au',
          skus: 171164,
        },
      ],
    },
    {
      account_id: 7254,
      account_name: 'Big Commerce Store xaprl0vu9q',
      websites: [],
    },
    {
      account_id: 7255,
      account_name: 'dickerson',
      websites: [],
    },
    {
      account_id: 7256,
      account_name: 'Big Commerce Store qt2xvln8m5',
      websites: [],
    },
    {
      account_id: 7257,
      account_name: 'shopler ltd',
      websites: [],
    },
    {
      account_id: 7258,
      account_name: 'Shopify Store circledlights.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store circledlights.myshopify.com',
          website_id: 6410,
          website_name: 'store.circledlights.com',
          skus: 817,
        },
      ],
    },
    {
      account_id: 7259,
      account_name: 'Big Commerce Store 2z1cfi9rht',
      websites: [],
    },
    {
      account_id: 7260,
      account_name: 'harlinshop',
      websites: [],
    },
    {
      account_id: 7261,
      account_name: 'Big Commerce Store r7ecwck0mm',
      websites: [],
    },
    {
      account_id: 7262,
      account_name: 'heywoodshop',
      websites: [],
    },
    {
      account_id: 7263,
      account_name: 'Shopify Store 6449c7-4d.myshopify.com',
      websites: [],
    },
    {
      account_id: 7264,
      account_name: 'Mango Bikes',
      websites: [],
    },
    {
      account_id: 7265,
      account_name: 'Big Commerce Store jl3dmodvj5',
      websites: [],
    },
    {
      account_id: 7267,
      account_name: 'Big Commerce Store da9mhg3oeo',
      websites: [],
    },
    {
      account_id: 7268,
      account_name: 'VitaminsKart',
      websites: [],
    },
    {
      account_id: 7276,
      account_name: 'Marple Antiques',
      websites: [],
    },
    {
      account_id: 7270,
      account_name: 'Leemo Emporium ',
      websites: [],
    },
    {
      account_id: 7271,
      account_name: 'Shopify Store eleganza-production.myshopify.com',
      websites: [],
    },
    {
      account_id: 7272,
      account_name: 'Eleganza Schoenen B.V.',
      websites: [],
    },
    {
      account_id: 7273,
      account_name: 'Shopify Store ip6jqm-x8.myshopify.com',
      websites: [],
    },
    {
      account_id: 7269,
      account_name: 'Big Commerce Store pziyq75lvy',
      websites: [
        {
          account_name: 'Big Commerce Store pziyq75lvy',
          website_id: 6437,
          website_name: 'leemoemporium.com',
          skus: 861,
        },
      ],
    },
    {
      account_id: 7274,
      account_name: 'PERSONALISED WATCH',
      websites: [],
    },
    {
      account_id: 7275,
      account_name: 'Big Commerce Store i59n93ies3',
      websites: [],
    },
    {
      account_id: 7278,
      account_name: 'Sole City Shoes',
      websites: [],
    },
    {
      account_id: 7277,
      account_name: 'Shopify Store sole-city-shoes.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sole-city-shoes.myshopify.com',
          website_id: 6442,
          website_name: 'solecityshoes.com',
          skus: 44961,
        },
      ],
    },
    {
      account_id: 7279,
      account_name: 'Shopify Store scrubdaddykopen.myshopify.com',
      websites: [],
    },
    {
      account_id: 7280,
      account_name: 'Big Commerce Store iqtdo3uy3l',
      websites: [],
    },
    {
      account_id: 7281,
      account_name: 'feelgorgeous limited',
      websites: [],
    },
    {
      account_id: 7282,
      account_name: 'Big Commerce Store 93wpeaobxh',
      websites: [
        {
          account_name: 'Big Commerce Store 93wpeaobxh',
          website_id: 6448,
          website_name: 'sandbox-store37.mybigcommerce.com',
          skus: 292,
        },
      ],
    },
    {
      account_id: 7283,
      account_name: 'JTC',
      websites: [],
    },
    {
      account_id: 7284,
      account_name: 'Rashid Hussein',
      websites: [
        {
          account_name: 'Rashid Hussein',
          website_id: 6458,
          website_name: 'rashidhussein.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7285,
      account_name: 'Big Commerce Store 64wwb4pbz6',
      websites: [],
    },
    {
      account_id: 7286,
      account_name: 'Stargaze Matketing',
      websites: [],
    },
    {
      account_id: 7287,
      account_name: 'Big Commerce Store yxij75m3b6',
      websites: [],
    },
    {
      account_id: 7288,
      account_name: 'Leather Bound',
      websites: [],
    },
    {
      account_id: 7289,
      account_name: 'Big Commerce Store a1fdcqwnbf',
      websites: [],
    },
    {
      account_id: 7290,
      account_name: 'Goodland Guns',
      websites: [],
    },
    {
      account_id: 7291,
      account_name: 'Big Commerce Store obtrfqpwy2',
      websites: [],
    },
    {
      account_id: 2313,
      account_name: 'screamingchicken.com',
      websites: [],
    },
    {
      account_id: 7292,
      account_name: 'Big Commerce Store l938sm817u',
      websites: [
        {
          account_name: 'Big Commerce Store l938sm817u',
          website_id: 6460,
          website_name: 'store.duckybucko.com',
          skus: 447,
        },
      ],
    },
    {
      account_id: 7293,
      account_name: 'Big Commerce Store 8cswp3dero',
      websites: [],
    },
    {
      account_id: 7294,
      account_name: 'Tomlinson Investments LLC',
      websites: [],
    },
    {
      account_id: 7295,
      account_name: 'Quincey Jones Jelly Preserves Co Pty Ltd',
      websites: [],
    },
    {
      account_id: 7296,
      account_name: 'Big Commerce Store 91b8wf61am',
      websites: [],
    },
    {
      account_id: 7297,
      account_name: 'Celtic Sustainables Sandbox',
      websites: [],
    },
    {
      account_id: 7298,
      account_name: 'Big Commerce Store o4efq9x',
      websites: [
        {
          account_name: 'Big Commerce Store o4efq9x',
          website_id: 6463,
          website_name: 'www.celticsustainables.co.uk',
          skus: 7443,
        },
      ],
    },
    {
      account_id: 7299,
      account_name: 'Shopify Store apgjti-zt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store apgjti-zt.myshopify.com',
          website_id: 6469,
          website_name: 'www.weine-mittelbach.at',
          skus: 31,
        },
      ],
    },
    {
      account_id: 7301,
      account_name: '5150 Skate Shop',
      websites: [],
    },
    {
      account_id: 4705,
      account_name: 'Amart Furniture',
      websites: [
        {
          account_name: 'Amart Furniture',
          website_id: 4155,
          website_name: 'www.amartfurniture.com.au',
          skus: 6595,
        },
      ],
    },
    {
      account_id: 7302,
      account_name: 'aiyuguangsi',
      websites: [],
    },
    {
      account_id: 7305,
      account_name: 'The Makeup Depot',
      websites: [],
    },
    {
      account_id: 7306,
      account_name: 'Big Commerce Store uf4z9sti',
      websites: [
        {
          account_name: 'Big Commerce Store uf4z9sti',
          website_id: 6477,
          website_name: 'www.southwestsilvergallery.com',
          skus: 9953,
        },
      ],
    },
    {
      account_id: 7300,
      account_name: 'Shopify Store cf6299-4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cf6299-4.myshopify.com',
          website_id: 6471,
          website_name: '5150skateshop.com',
          skus: 4338,
        },
      ],
    },
    {
      account_id: 7304,
      account_name: 'Big Commerce Store m6hxcv9em5',
      websites: [],
    },
    {
      account_id: 7307,
      account_name: 'Shopify Store dcg0z1-ex.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dcg0z1-ex.myshopify.com',
          website_id: 6479,
          website_name: 'dcg0z1-ex.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7308,
      account_name: 'Abdulaziz299 ',
      websites: [],
    },
    {
      account_id: 7303,
      account_name: 'Big Commerce Store Osboots',
      websites: [],
    },
    {
      account_id: 7309,
      account_name: 'Shopify Store aae1he-24.myshopify.com',
      websites: [],
    },
    {
      account_id: 7310,
      account_name: 'MEB Internet GmbH & co KG',
      websites: [],
    },
    {
      account_id: 7311,
      account_name: 'Big Commerce Store e77b5',
      websites: [],
    },
    {
      account_id: 7312,
      account_name: 'EPO Capital Inc.',
      websites: [],
    },
    {
      account_id: 7313,
      account_name: 'Shopify Store myhiddenphoto.myshopify.com',
      websites: [],
    },
    {
      account_id: 7314,
      account_name: 'Beegreeeen',
      websites: [],
    },
    {
      account_id: 7315,
      account_name: 'Big Commerce Store 8qarli8wmt',
      websites: [],
    },
    {
      account_id: 7316,
      account_name: '27-0048561',
      websites: [],
    },
    {
      account_id: 7317,
      account_name: 'Shopify Store bzyshq-ay.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bzyshq-ay.myshopify.com',
          website_id: 6485,
          website_name: 'happyelectro.fr',
          skus: 1007,
        },
      ],
    },
    {
      account_id: 7318,
      account_name: 'happyelectro',
      websites: [],
    },
    {
      account_id: 7266,
      account_name: 'Dymocks',
      websites: [
        {
          account_name: 'Dymocks',
          website_id: 6434,
          website_name: 'www.dymocks.com.au',
          skus: 45012,
        },
      ],
    },
    {
      account_id: 7319,
      account_name: 'Big Commerce Store 9uskdi1a52',
      websites: [],
    },
    {
      account_id: 7320,
      account_name: 'Fancy Rascal',
      websites: [],
    },
    {
      account_id: 7321,
      account_name: 'Southwest Silver Gallery',
      websites: [],
    },
    {
      account_id: 7322,
      account_name: 'Big Commerce Store 662hww4bxm',
      websites: [
        {
          account_name: 'Big Commerce Store 662hww4bxm',
          website_id: 6488,
          website_name: 'normanshop.mybigcommerce.com',
          skus: 163510,
        },
      ],
    },
    {
      account_id: 7323,
      account_name: 'normanshop',
      websites: [],
    },
    {
      account_id: 7324,
      account_name: 'Big Commerce Store qprflixzfb',
      websites: [
        {
          account_name: 'Big Commerce Store qprflixzfb',
          website_id: 6489,
          website_name: 'kingwoo.mybigcommerce.com',
          skus: 175163,
        },
      ],
    },
    {
      account_id: 7325,
      account_name: 'kingwoo',
      websites: [],
    },
    {
      account_id: 7326,
      account_name: 'Big Commerce Store r7qso1totr',
      websites: [],
    },
    {
      account_id: 7328,
      account_name: 'Big Commerce Store wbaeisfyqt',
      websites: [
        {
          account_name: 'Big Commerce Store wbaeisfyqt',
          website_id: 6491,
          website_name: 'suadshop.mybigcommerce.com',
          skus: 175820,
        },
      ],
    },
    {
      account_id: 7329,
      account_name: 'suadshop',
      websites: [],
    },
    {
      account_id: 7330,
      account_name: 'Big Commerce Store tsbliil93z',
      websites: [
        {
          account_name: 'Big Commerce Store tsbliil93z',
          website_id: 6492,
          website_name: 'sdiira-i8.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7332,
      account_name: 'percydoley',
      websites: [],
    },
    {
      account_id: 7333,
      account_name: 'Big Commerce Store ddnvblgyj3',
      websites: [
        {
          account_name: 'Big Commerce Store ddnvblgyj3',
          website_id: 6495,
          website_name: '887.mybigcommerce.com',
          skus: 1003,
        },
      ],
    },
    {
      account_id: 7334,
      account_name: 'Big Commerce Store 19thfdwlrx',
      websites: [
        {
          account_name: 'Big Commerce Store 19thfdwlrx',
          website_id: 6496,
          website_name: 'kaminsky.mybigcommerce.com',
          skus: 85467,
        },
      ],
    },
    {
      account_id: 7335,
      account_name: 'kaminsky',
      websites: [],
    },
    {
      account_id: 7336,
      account_name: 'Big Commerce Store ejvlbeckvz',
      websites: [
        {
          account_name: 'Big Commerce Store ejvlbeckvz',
          website_id: 6498,
          website_name: 'mdbookstore.mybigcommerce.com',
          skus: 152921,
        },
      ],
    },
    {
      account_id: 7337,
      account_name: 'mdbookstore',
      websites: [],
    },
    {
      account_id: 7338,
      account_name: 'Big Commerce Store tgrcca6nho',
      websites: [
        {
          account_name: 'Big Commerce Store tgrcca6nho',
          website_id: 6499,
          website_name: 'www.giftmandu.com',
          skus: 40723,
        },
      ],
    },
    {
      account_id: 7339,
      account_name: 'Giftmandu',
      websites: [],
    },
    {
      account_id: 7331,
      account_name: 'Big Commerce Store m5mdkinckr',
      websites: [
        {
          account_name: 'Big Commerce Store m5mdkinckr',
          website_id: 6494,
          website_name: 'percystore.mybigcommerce.com',
          skus: 109829,
        },
      ],
    },
    {
      account_id: 7340,
      account_name: 'Shopify Store 0hbsm7-zb.myshopify.com',
      websites: [],
    },
    {
      account_id: 7341,
      account_name: 'T & Workfy MB',
      websites: [],
    },
    {
      account_id: 8082,
      account_name: 'Shopify Store 595rh8-yd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 595rh8-yd.myshopify.com',
          website_id: 7242,
          website_name: '595rh8-yd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7343,
      account_name: 'Sension Holdings LLC ',
      websites: [],
    },
    {
      account_id: 7344,
      account_name: 'Shopify Store muzaara-timc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store muzaara-timc.myshopify.com',
          website_id: 6997,
          website_name: 'muzaara-timc.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7345,
      account_name: 'Shopify Store sitback-relax-sydney.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sitback-relax-sydney.myshopify.com',
          website_id: 6503,
          website_name: 'sitback-relax-sydney.myshopify.com',
          skus: 436,
        },
      ],
    },
    {
      account_id: 7346,
      account_name: 'Shopify Store google-shopping-dev-store.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store google-shopping-dev-store.myshopify.com',
          website_id: 6504,
          website_name: 'google-shopping-dev-store.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7347,
      account_name: 'Shopify Store truesun.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store truesun.myshopify.com',
          website_id: 6505,
          website_name: 'www.truesun.com',
          skus: 274,
        },
      ],
    },
    {
      account_id: 7348,
      account_name: 'Shopify Store turkish-plaza.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store turkish-plaza.myshopify.com',
          website_id: 6506,
          website_name: 'turkishplaza.com',
          skus: 2379,
        },
      ],
    },
    {
      account_id: 7349,
      account_name: 'Shopify Store massive-dimension.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store massive-dimension.myshopify.com',
          website_id: 6507,
          website_name: 'massivedimension.com',
          skus: 141,
        },
      ],
    },
    {
      account_id: 7350,
      account_name: 'Shopify Store pup-wax.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pup-wax.myshopify.com',
          website_id: 6508,
          website_name: 'pupwax.com',
          skus: 176,
        },
      ],
    },
    {
      account_id: 7351,
      account_name: 'Shopify Store skyluxhellodaylight.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store skyluxhellodaylight.myshopify.com',
          website_id: 6509,
          website_name: 'skylux.eu',
          skus: 21928,
        },
      ],
    },
    {
      account_id: 7352,
      account_name: 'Shopify Store 59s-us.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 59s-us.myshopify.com',
          website_id: 6510,
          website_name: 'www.59s.com',
          skus: 91,
        },
      ],
    },
    {
      account_id: 7353,
      account_name: 'Shopify Store dakota-dog-company.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dakota-dog-company.myshopify.com',
          website_id: 6511,
          website_name: 'dakotadogcompany.com',
          skus: 491,
        },
      ],
    },
    {
      account_id: 7354,
      account_name: 'Shopify Store salty-canvas-art.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store salty-canvas-art.myshopify.com',
          website_id: 6512,
          website_name: 'saltycanvasart.com',
          skus: 865,
        },
      ],
    },
    {
      account_id: 7355,
      account_name: 'Shopify Store real-science-nutrition.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store real-science-nutrition.myshopify.com',
          website_id: 6513,
          website_name: 'www.realscience.com',
          skus: 48,
        },
      ],
    },
    {
      account_id: 7356,
      account_name: 'Shopify Store milas-cove.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store milas-cove.myshopify.com',
          website_id: 6514,
          website_name: 'milascove.com',
          skus: 465,
        },
      ],
    },
    {
      account_id: 7357,
      account_name: 'Shopify Store www-astartecreations-ch.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store www-astartecreations-ch.myshopify.com',
          website_id: 6515,
          website_name: 'astartecreations.ch',
          skus: 180,
        },
      ],
    },
    {
      account_id: 7358,
      account_name: 'Shopify Store camberwellherbs-com.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store camberwellherbs-com.myshopify.com',
          website_id: 6516,
          website_name: 'camberwell.net',
          skus: 59,
        },
      ],
    },
    {
      account_id: 7359,
      account_name: 'Shopify Store forever-leeds.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store forever-leeds.myshopify.com',
          website_id: 6517,
          website_name: 'foreverleeds.com',
          skus: 2609,
        },
      ],
    },
    {
      account_id: 7360,
      account_name: 'Shopify Store afrori-books.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store afrori-books.myshopify.com',
          website_id: 6518,
          website_name: 'afroribooks.co.uk',
          skus: 3294,
        },
      ],
    },
    {
      account_id: 7361,
      account_name: 'Shopify Store ecom-gadgets-14196.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ecom-gadgets-14196.myshopify.com',
          website_id: 6519,
          website_name: 'www.177avenue.com',
          skus: 1610,
        },
      ],
    },
    {
      account_id: 7362,
      account_name: 'Shopify Store liamsbargains-co-uk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store liamsbargains-co-uk.myshopify.com',
          website_id: 6520,
          website_name: 'www.liamsbargains.co.uk',
          skus: 8439,
        },
      ],
    },
    {
      account_id: 7363,
      account_name: 'Shopify Store papaye-et-domino.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store papaye-et-domino.myshopify.com',
          website_id: 6521,
          website_name: 'www.papaye-et-domino.com',
          skus: 1661,
        },
      ],
    },
    {
      account_id: 7364,
      account_name: 'Shopify Store hpluscuff-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hpluscuff-2.myshopify.com',
          website_id: 6522,
          website_name: 'hpluscuff.com',
          skus: 14,
        },
      ],
    },
    {
      account_id: 7365,
      account_name: 'Shopify Store mykirana-app.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mykirana-app.myshopify.com',
          website_id: 6523,
          website_name: 'mykirana-app.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7366,
      account_name: 'Shopify Store contact-coffee.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store contact-coffee.myshopify.com',
          website_id: 6524,
          website_name: 'www.contactcoffee.com',
          skus: 179,
        },
      ],
    },
    {
      account_id: 7367,
      account_name: 'Shopify Store brilliante-crystal-cleaner.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store brilliante-crystal-cleaner.myshopify.com',
          website_id: 6525,
          website_name: 'www.brilliantecrystalcleaner.com',
          skus: 14,
        },
      ],
    },
    {
      account_id: 7368,
      account_name: 'Shopify Store nas-sports.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nas-sports.myshopify.com',
          website_id: 6526,
          website_name: 'www.designer-mart.com',
          skus: 2326,
        },
      ],
    },
    {
      account_id: 7369,
      account_name: 'Shopify Store life-and-memories-unlimited.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store life-and-memories-unlimited.myshopify.com',
          website_id: 6527,
          website_name: 'lamu.io',
          skus: 15,
        },
      ],
    },
    {
      account_id: 7370,
      account_name: 'Shopify Store kyrgies.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kyrgies.myshopify.com',
          website_id: 6528,
          website_name: 'kyrgies.com',
          skus: 673,
        },
      ],
    },
    {
      account_id: 7371,
      account_name: 'Shopify Store crane-kick-brain.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store crane-kick-brain.myshopify.com',
          website_id: 6529,
          website_name: 'cranekickbrain.com',
          skus: 9303,
        },
      ],
    },
    {
      account_id: 7372,
      account_name: 'Shopify Store the-brand-shopping.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store the-brand-shopping.myshopify.com',
          website_id: 6530,
          website_name: 'thebrandshopping.net',
          skus: 408,
        },
      ],
    },
    {
      account_id: 7373,
      account_name: 'Shopify Store thecurlytail.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store thecurlytail.myshopify.com',
          website_id: 6531,
          website_name: 'curlitail.com',
          skus: 1703,
        },
      ],
    },
    {
      account_id: 7374,
      account_name: 'Shopify Store md-parfums.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store md-parfums.myshopify.com',
          website_id: 6532,
          website_name: 'mdparfums.com',
          skus: 196,
        },
      ],
    },
    {
      account_id: 7375,
      account_name: 'Shopify Store fostino2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fostino2.myshopify.com',
          website_id: 6533,
          website_name: 'fostino.com',
          skus: 1021,
        },
      ],
    },
    {
      account_id: 7376,
      account_name: 'Shopify Store aerial-acrobatics-accessories.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store aerial-acrobatics-accessories.myshopify.com',
          website_id: 6534,
          website_name: 'luftyoga.de',
          skus: 253,
        },
      ],
    },
    {
      account_id: 7377,
      account_name: 'Shopify Store cushionpop.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cushionpop.myshopify.com',
          website_id: 6535,
          website_name: 'cushionpop.com',
          skus: 664,
        },
      ],
    },
    {
      account_id: 7378,
      account_name: 'Shopify Store adrenaline-activewear.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store adrenaline-activewear.myshopify.com',
          website_id: 6536,
          website_name: 'adrenaline-activewear.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7379,
      account_name: 'Shopify Store sakimat-urban.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sakimat-urban.myshopify.com',
          website_id: 6537,
          website_name: 'sakimaturban.com',
          skus: 206,
        },
      ],
    },
    {
      account_id: 7380,
      account_name: 'Shopify Store truestyln.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store truestyln.myshopify.com',
          website_id: 6538,
          website_name: 'truestyln.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7381,
      account_name: 'Shopify Store bum-sloppy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bum-sloppy.myshopify.com',
          website_id: 6539,
          website_name: 'bumsloppyclothing.com',
          skus: 4385,
        },
      ],
    },
    {
      account_id: 7407,
      account_name: 'Shopify Store plush-sheets.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store plush-sheets.myshopify.com',
          website_id: 6565,
          website_name: 'mudtracks.com.au',
          skus: 253,
        },
      ],
    },
    {
      account_id: 7481,
      account_name: 'Shopify Store closer-1648.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store closer-1648.myshopify.com',
          website_id: 6638,
          website_name: 'www.easydoor.shop',
          skus: 526,
        },
      ],
    },
    {
      account_id: 7382,
      account_name: 'Shopify Store lokoala-ch.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store lokoala-ch.myshopify.com',
          website_id: 6540,
          website_name: 'lokoala.ch',
          skus: 1014,
        },
      ],
    },
    {
      account_id: 7383,
      account_name: 'Shopify Store encyappdevelopment.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store encyappdevelopment.myshopify.com',
          website_id: 6541,
          website_name: 'encyappdevelopment.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7395,
      account_name: 'Shopify Store safety-signs-au.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store safety-signs-au.myshopify.com',
          website_id: 6553,
          website_name: 'signs4safety.com.au',
          skus: 81342,
        },
      ],
    },
    {
      account_id: 7397,
      account_name: 'Shopify Store layback-skateshop.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store layback-skateshop.myshopify.com',
          website_id: 6555,
          website_name: 'layback-skateshop.de',
          skus: 1117,
        },
      ],
    },
    {
      account_id: 7422,
      account_name: 'Shopify Store sociableweavernest.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sociableweavernest.myshopify.com',
          website_id: 6579,
          website_name: 'www.sociableweavernest.com',
          skus: 64644,
        },
      ],
    },
    {
      account_id: 7427,
      account_name: 'Shopify Store forartssakecosmetics.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store forartssakecosmetics.myshopify.com',
          website_id: 6584,
          website_name: 'forartssakecosmetics.com',
          skus: 144,
        },
      ],
    },
    {
      account_id: 7430,
      account_name: 'Shopify Store digitalzone-9201.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store digitalzone-9201.myshopify.com',
          website_id: 6587,
          website_name: 'digitalzonesoftware.com',
          skus: 22,
        },
      ],
    },
    {
      account_id: 7384,
      account_name: 'Shopify Store rewindcameras.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rewindcameras.myshopify.com',
          website_id: 6542,
          website_name: 'www.rewindcameras.co.uk',
          skus: 749,
        },
      ],
    },
    {
      account_id: 7385,
      account_name: 'Shopify Store banachief-outlet.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store banachief-outlet.myshopify.com',
          website_id: 6543,
          website_name: 'www.banachiefoutlet.com',
          skus: 1121,
        },
      ],
    },
    {
      account_id: 7414,
      account_name: 'Accent Group',
      websites: [],
    },
    {
      account_id: 7424,
      account_name: 'Shopify Store kobelli.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kobelli.myshopify.com',
          website_id: 6581,
          website_name: 'kobelli.com',
          skus: 53133,
        },
      ],
    },
    {
      account_id: 7477,
      account_name: 'Shopify Store mommiesbestmall.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mommiesbestmall.myshopify.com',
          website_id: 6634,
          website_name: 'www.mommiesbestmall.com',
          skus: 11911,
        },
      ],
    },
    {
      account_id: 7386,
      account_name: 'Shopify Store priyak-collections.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store priyak-collections.myshopify.com',
          website_id: 6544,
          website_name: 'priyakcollections.com',
          skus: 171,
        },
      ],
    },
    {
      account_id: 7387,
      account_name: 'Shopify Store dried-petal-company.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dried-petal-company.myshopify.com',
          website_id: 6545,
          website_name: 'driedpetalcompany.com',
          skus: 2630,
        },
      ],
    },
    {
      account_id: 7388,
      account_name: 'Shopify Store tov-kid.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tov-kid.myshopify.com',
          website_id: 6546,
          website_name: 'beitcollections.com',
          skus: 2460,
        },
      ],
    },
    {
      account_id: 7389,
      account_name: 'Shopify Store doubledutchdrinks.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store doubledutchdrinks.myshopify.com',
          website_id: 6547,
          website_name: 'doubledutchdrinks.com',
          skus: 39,
        },
      ],
    },
    {
      account_id: 7390,
      account_name: 'Shopify Store a-piece-of-art-from-heart.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a-piece-of-art-from-heart.myshopify.com',
          website_id: 6548,
          website_name: 'lailabeautycare.com',
          skus: 676,
        },
      ],
    },
    {
      account_id: 7470,
      account_name: 'Shopify Store cdfde5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cdfde5.myshopify.com',
          website_id: 6627,
          website_name: 'jennylyncollection.com',
          skus: 889,
        },
      ],
    },
    {
      account_id: 7391,
      account_name: 'Shopify Store somics.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store somics.myshopify.com',
          website_id: 6549,
          website_name: 'somidigiverse.com',
          skus: 10,
        },
      ],
    },
    {
      account_id: 7392,
      account_name: 'Shopify Store woodland-gatherer.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store woodland-gatherer.myshopify.com',
          website_id: 6550,
          website_name: 'www.woodlandgatherer.com',
          skus: 43716,
        },
      ],
    },
    {
      account_id: 7393,
      account_name: 'Shopify Store roulement-net.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store roulement-net.myshopify.com',
          website_id: 6551,
          website_name: 'roulement.net',
          skus: 42244,
        },
      ],
    },
    {
      account_id: 7428,
      account_name: 'Shopify Store dev-muzaara-bing.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dev-muzaara-bing.myshopify.com',
          website_id: 6585,
          website_name: 'dev-muzaara-bing.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7431,
      account_name: 'Shopify Store breezecare-oral-health.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store breezecare-oral-health.myshopify.com',
          website_id: 6588,
          website_name: 'breezecareoralhealth.com',
          skus: 255,
        },
      ],
    },
    {
      account_id: 7462,
      account_name: 'Shopify Store pressure-fw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pressure-fw.myshopify.com',
          website_id: 6619,
          website_name: 'www.fireandkisses.de',
          skus: 4083,
        },
      ],
    },
    {
      account_id: 7493,
      account_name: 'Shopify Store f9f2e0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store f9f2e0.myshopify.com',
          website_id: 6651,
          website_name: 'infinitydecor.co.uk',
          skus: 1560,
        },
      ],
    },
    {
      account_id: 7394,
      account_name: 'Shopify Store bouwkledij-testomgeving.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bouwkledij-testomgeving.myshopify.com',
          website_id: 6552,
          website_name: 'bouwkledij.nl',
          skus: 38929,
        },
      ],
    },
    {
      account_id: 7396,
      account_name: 'Shopify Store cablenova.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cablenova.myshopify.com',
          website_id: 6554,
          website_name: 'cablenova.com',
          skus: 1031,
        },
      ],
    },
    {
      account_id: 7464,
      account_name: 'Shopify Store tnrww.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tnrww.myshopify.com',
          website_id: 6621,
          website_name: 'thenakedrange.com',
          skus: 7,
        },
      ],
    },
    {
      account_id: 7398,
      account_name: 'Shopify Store oakcrafts.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store oakcrafts.myshopify.com',
          website_id: 6556,
          website_name: 'oakcrafts.co.uk',
          skus: 2059,
        },
      ],
    },
    {
      account_id: 7399,
      account_name: 'Shopify Store filtermate.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store filtermate.myshopify.com',
          website_id: 6557,
          website_name: 'filtermate.co.uk',
          skus: 128,
        },
      ],
    },
    {
      account_id: 7411,
      account_name: 'Shopify Store superhero-gear.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store superhero-gear.myshopify.com',
          website_id: 6569,
          website_name: 'www.superherogearstore.com',
          skus: 29215,
        },
      ],
    },
    {
      account_id: 7415,
      account_name: 'Shopify Store rug-queen.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rug-queen.myshopify.com',
          website_id: 6572,
          website_name: 'rugqueen.com.au',
          skus: 3137,
        },
      ],
    },
    {
      account_id: 7436,
      account_name: 'Shopify Store by-pariah.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store by-pariah.myshopify.com',
          website_id: 6593,
          website_name: 'bypariah.com',
          skus: 335,
        },
      ],
    },
    {
      account_id: 7438,
      account_name: 'Shopify Store dipdelivered.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dipdelivered.myshopify.com',
          website_id: 6595,
          website_name: 'dipdelivered.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7445,
      account_name: 'Shopify Store flash-ndt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store flash-ndt.myshopify.com',
          website_id: 6602,
          website_name: 'flashndt.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7448,
      account_name: 'Shopify Store afrocentric-boutique.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store afrocentric-boutique.myshopify.com',
          website_id: 6605,
          website_name: 'www.afrocentric-boutique.com',
          skus: 1002,
        },
      ],
    },
    {
      account_id: 7473,
      account_name: 'Shopify Store sit-back-relax-new.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sit-back-relax-new.myshopify.com',
          website_id: 6630,
          website_name: 'www.sitbackandrelax.com.au',
          skus: 12900,
        },
      ],
    },
    {
      account_id: 7490,
      account_name: 'Shopify Store super-dooper-testing-store.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store super-dooper-testing-store.myshopify.com',
          website_id: 6648,
          website_name: 'super-dooper-testing-store.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7400,
      account_name: 'Shopify Store bookmycostume.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bookmycostume.myshopify.com',
          website_id: 6558,
          website_name: 'www.bookmycostume.com',
          skus: 8208,
        },
      ],
    },
    {
      account_id: 7401,
      account_name: 'Shopify Store mastermassage.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mastermassage.myshopify.com',
          website_id: 6559,
          website_name: 'www.mastermassage.com',
          skus: 1083,
        },
      ],
    },
    {
      account_id: 7410,
      account_name: 'Shopify Store timetoplay-lab.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store timetoplay-lab.myshopify.com',
          website_id: 6568,
          website_name: 'www.timetoplay.games',
          skus: 174,
        },
      ],
    },
    {
      account_id: 7432,
      account_name: 'Shopify Store fashions-for-home.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fashions-for-home.myshopify.com',
          website_id: 6589,
          website_name: 'www.fashionsforhome.com',
          skus: 2447,
        },
      ],
    },
    {
      account_id: 7454,
      account_name: 'Shopify Store the-feo-collection.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store the-feo-collection.myshopify.com',
          website_id: 6611,
          website_name: 'thefeocollection.co.uk',
          skus: 795,
        },
      ],
    },
    {
      account_id: 7457,
      account_name: 'Shopify Store ucm1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ucm1.myshopify.com',
          website_id: 6614,
          website_name: 'ucmgroupusa.com',
          skus: 6,
        },
      ],
    },
    {
      account_id: 7476,
      account_name: 'Shopify Store sydoria.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sydoria.myshopify.com',
          website_id: 6633,
          website_name: 'sydoria.com',
          skus: 513,
        },
      ],
    },
    {
      account_id: 7486,
      account_name: 'Shopify Store puuringrid.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store puuringrid.myshopify.com',
          website_id: 6644,
          website_name: 'www.puuringrid.com',
          skus: 22,
        },
      ],
    },
    {
      account_id: 7402,
      account_name: 'Shopify Store theplantsociety.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store theplantsociety.myshopify.com',
          website_id: 6560,
          website_name: 'theplantsociety.com.au',
          skus: 2807,
        },
      ],
    },
    {
      account_id: 7417,
      account_name: 'Shopify Store earthbreath.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store earthbreath.myshopify.com',
          website_id: 6574,
          website_name: 'earthbreath.co.uk',
          skus: 143,
        },
      ],
    },
    {
      account_id: 7444,
      account_name: 'Shopify Store oprilife.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store oprilife.myshopify.com',
          website_id: 6601,
          website_name: 'oprilife.com',
          skus: 497,
        },
      ],
    },
    {
      account_id: 7403,
      account_name: 'Shopify Store greengreenstoreuk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store greengreenstoreuk.myshopify.com',
          website_id: 6561,
          website_name: 'www.greengreenstore.co.uk',
          skus: 3338,
        },
      ],
    },
    {
      account_id: 7419,
      account_name: 'Shopify Store crown1500.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store crown1500.myshopify.com',
          website_id: 6576,
          website_name: 'crownshop.it',
          skus: 797,
        },
      ],
    },
    {
      account_id: 7450,
      account_name: 'Shopify Store acm-container.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store acm-container.myshopify.com',
          website_id: 6607,
          website_name: 'acm-container.de',
          skus: 77,
        },
      ],
    },
    {
      account_id: 7463,
      account_name: 'Shopify Store makeupartistschoice.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store makeupartistschoice.myshopify.com',
          website_id: 6620,
          website_name: 'www.makeupartistschoice.com',
          skus: 177,
        },
      ],
    },
    {
      account_id: 7404,
      account_name: 'Shopify Store luwa-luxury.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store luwa-luxury.myshopify.com',
          website_id: 6562,
          website_name: 'luwaluxury.com',
          skus: 6657,
        },
      ],
    },
    {
      account_id: 7405,
      account_name: 'Shopify Store the-art-of-succulents.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store the-art-of-succulents.myshopify.com',
          website_id: 6563,
          website_name: 'www.theartofsucculents.co.uk',
          skus: 195,
        },
      ],
    },
    {
      account_id: 7413,
      account_name: 'Shopify Store decorerlamaison.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store decorerlamaison.myshopify.com',
          website_id: 6571,
          website_name: 'decorerlamaison.com',
          skus: 50,
        },
      ],
    },
    {
      account_id: 7433,
      account_name: 'Shopify Store slipnot1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store slipnot1.myshopify.com',
          website_id: 6590,
          website_name: 'www.questorm.co.uk',
          skus: 4094,
        },
      ],
    },
    {
      account_id: 7406,
      account_name: 'Shopify Store backnear.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store backnear.myshopify.com',
          website_id: 6564,
          website_name: 'vivianseven.com',
          skus: 6317,
        },
      ],
    },
    {
      account_id: 7408,
      account_name: 'Shopify Store partyislife.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store partyislife.myshopify.com',
          website_id: 6566,
          website_name: 'partyislife.com',
          skus: 4775,
        },
      ],
    },
    {
      account_id: 7471,
      account_name: 'Shopify Store raspberry-smoke-online-store.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store raspberry-smoke-online-store.myshopify.com',
          website_id: 6628,
          website_name: 'raspberrysmoke.com',
          skus: 2636,
        },
      ],
    },
    {
      account_id: 7475,
      account_name: 'Shopify Store harborclassic.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store harborclassic.myshopify.com',
          website_id: 6632,
          website_name: 'hcluxuryoutdoor.com',
          skus: 802,
        },
      ],
    },
    {
      account_id: 7409,
      account_name: 'Shopify Store wolphgl.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wolphgl.myshopify.com',
          website_id: 6567,
          website_name: 'wolph.co.uk',
          skus: 1441,
        },
      ],
    },
    {
      account_id: 7416,
      account_name: 'Shopify Store ryanfoxpainting.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ryanfoxpainting.myshopify.com',
          website_id: 6573,
          website_name: 'ryanfoxpainting.com',
          skus: 8159,
        },
      ],
    },
    {
      account_id: 7418,
      account_name: 'Shopify Store official-stuburt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store official-stuburt.myshopify.com',
          website_id: 6575,
          website_name: 'stuburt.com',
          skus: 890,
        },
      ],
    },
    {
      account_id: 7420,
      account_name: 'Shopify Store splash-com-uk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store splash-com-uk.myshopify.com',
          website_id: 6577,
          website_name: 'splash-com-uk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7421,
      account_name: 'Shopify Store dirtylabs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dirtylabs.myshopify.com',
          website_id: 6578,
          website_name: 'dirtylabs.com',
          skus: 36,
        },
      ],
    },
    {
      account_id: 7423,
      account_name: 'Shopify Store alpha00.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store alpha00.myshopify.com',
          website_id: 6580,
          website_name: 'www.tradatheaterequip.com',
          skus: 16794,
        },
      ],
    },
    {
      account_id: 7429,
      account_name: 'Shopify Store almoes-inc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store almoes-inc.myshopify.com',
          website_id: 6586,
          website_name: 'almoes-inc.myshopify.com',
          skus: 14,
        },
      ],
    },
    {
      account_id: 7434,
      account_name: 'Shopify Store finest-leathers.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store finest-leathers.myshopify.com',
          website_id: 6591,
          website_name: 'www.thefinestleathers.com',
          skus: 220,
        },
      ],
    },
    {
      account_id: 7459,
      account_name: 'Shopify Store fafrees-official-store.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fafrees-official-store.myshopify.com',
          website_id: 6616,
          website_name: 'www.fafreesebike.com',
          skus: 917,
        },
      ],
    },
    {
      account_id: 7468,
      account_name: 'Shopify Store sjjjoy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sjjjoy.myshopify.com',
          website_id: 6625,
          website_name: 'sjjplush.com',
          skus: 8398,
        },
      ],
    },
    {
      account_id: 7425,
      account_name:
        'Shopify Store sunniland-patio-patio-furniture-and-spas-in-boca-raton.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store sunniland-patio-patio-furniture-and-spas-in-boca-raton.myshopify.com',
          website_id: 6582,
          website_name: 'www.sunnilandpatio.com',
          skus: 1427,
        },
      ],
    },
    {
      account_id: 7426,
      account_name: 'Shopify Store makerhouse.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store makerhouse.myshopify.com',
          website_id: 6583,
          website_name: 'makerhouse.com',
          skus: 2784,
        },
      ],
    },
    {
      account_id: 7435,
      account_name: 'Shopify Store mybooblehead.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mybooblehead.myshopify.com',
          website_id: 6592,
          website_name: 'hibobbleheads.com',
          skus: 7084,
        },
      ],
    },
    {
      account_id: 7437,
      account_name: 'Shopify Store wave-of-entertainment-litcite.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store wave-of-entertainment-litcite.myshopify.com',
          website_id: 6594,
          website_name: 'waveofentertainment.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7439,
      account_name: 'Shopify Store 16745d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 16745d.myshopify.com',
          website_id: 6596,
          website_name: 'fishnetsandfeathers.com',
          skus: 851,
        },
      ],
    },
    {
      account_id: 7440,
      account_name: 'Shopify Store slips-away.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store slips-away.myshopify.com',
          website_id: 6597,
          website_name: 'slipsaway.co.uk',
          skus: 2884,
        },
      ],
    },
    {
      account_id: 7441,
      account_name: 'Shopify Store drapedivaa.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store drapedivaa.myshopify.com',
          website_id: 6598,
          website_name: 'drapedivaa.com',
          skus: 2409,
        },
      ],
    },
    {
      account_id: 7442,
      account_name: 'Shopify Store z-skin.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store z-skin.myshopify.com',
          website_id: 6599,
          website_name: 'zskincosmetics.com',
          skus: 90,
        },
      ],
    },
    {
      account_id: 7443,
      account_name: 'Shopify Store 88-jeans.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 88-jeans.myshopify.com',
          website_id: 6600,
          website_name: 'www.88jeans.com',
          skus: 2406,
        },
      ],
    },
    {
      account_id: 7446,
      account_name: 'Shopify Store quickstart-1c81192f.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store quickstart-1c81192f.myshopify.com',
          website_id: 6603,
          website_name: 'quickstart-1c81192f.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7447,
      account_name: 'Shopify Store aplusecommerce.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store aplusecommerce.myshopify.com',
          website_id: 6604,
          website_name: 'bigboxstore.com.au',
          skus: 845,
        },
      ],
    },
    {
      account_id: 7449,
      account_name: 'Shopify Store evanescent-visions.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store evanescent-visions.myshopify.com',
          website_id: 6606,
          website_name: 'evanescent-visions.uk',
          skus: 3221,
        },
      ],
    },
    {
      account_id: 7451,
      account_name: 'Shopify Store airconcare.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store airconcare.myshopify.com',
          website_id: 6608,
          website_name: 'www.airconcarepro.com.au',
          skus: 37,
        },
      ],
    },
    {
      account_id: 7452,
      account_name: 'Shopify Store korallenwaechter.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store korallenwaechter.myshopify.com',
          website_id: 6609,
          website_name: 'shop.korallenwaechter.com',
          skus: 129,
        },
      ],
    },
    {
      account_id: 7453,
      account_name: 'Shopify Store instock-windows-pty-ltd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store instock-windows-pty-ltd.myshopify.com',
          website_id: 6610,
          website_name: 'windowsinstock.com.au',
          skus: 66,
        },
      ],
    },
    {
      account_id: 7455,
      account_name: 'Shopify Store alogenic-8070.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store alogenic-8070.myshopify.com',
          website_id: 6612,
          website_name: 'alogenic.com',
          skus: 57,
        },
      ],
    },
    {
      account_id: 7456,
      account_name: 'Shopify Store cakerywonderlandevents.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cakerywonderlandevents.myshopify.com',
          website_id: 6613,
          website_name: 'www.cakerywonderland.com',
          skus: 61,
        },
      ],
    },
    {
      account_id: 7458,
      account_name: 'Shopify Store novedge.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store novedge.myshopify.com',
          website_id: 6615,
          website_name: 'novedge.com',
          skus: 4628,
        },
      ],
    },
    {
      account_id: 7460,
      account_name: 'Shopify Store dusala-official.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dusala-official.myshopify.com',
          website_id: 6617,
          website_name: 'dusala.in',
          skus: 979,
        },
      ],
    },
    {
      account_id: 7461,
      account_name: 'Shopify Store uglycookie.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store uglycookie.myshopify.com',
          website_id: 6618,
          website_name: 'uglycookie.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7465,
      account_name: 'Shopify Store mustgotoday.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mustgotoday.myshopify.com',
          website_id: 6622,
          website_name: 'thedecohub.com',
          skus: 2460,
        },
      ],
    },
    {
      account_id: 7466,
      account_name: 'Shopify Store activeera-uk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store activeera-uk.myshopify.com',
          website_id: 6623,
          website_name: 'activeera.com',
          skus: 61,
        },
      ],
    },
    {
      account_id: 7467,
      account_name: 'Shopify Store wundertape.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wundertape.myshopify.com',
          website_id: 6624,
          website_name: 'wundertape.com',
          skus: 18,
        },
      ],
    },
    {
      account_id: 7469,
      account_name: 'Shopify Store ama-jewellery-and-accessories.myshopify.com',
      websites: [
        {
          account_name:
            'Shopify Store ama-jewellery-and-accessories.myshopify.com',
          website_id: 6626,
          website_name: 'amajewellery.co.uk',
          skus: 307,
        },
      ],
    },
    {
      account_id: 7472,
      account_name: 'Shopify Store ipump-suplementos.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ipump-suplementos.myshopify.com',
          website_id: 6629,
          website_name: 'ipumpsuplementos.com',
          skus: 944,
        },
      ],
    },
    {
      account_id: 7479,
      account_name: 'Shopify Store boothandbooth.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store boothandbooth.myshopify.com',
          website_id: 6636,
          website_name: 'www.boothandbooth.co.uk',
          skus: 789,
        },
      ],
    },
    {
      account_id: 7484,
      account_name: 'Shopify Store vintage-vohara-8374.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vintage-vohara-8374.myshopify.com',
          website_id: 6642,
          website_name: 'vintage-vohara-8374.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7485,
      account_name: 'Shopify Store 802176.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 802176.myshopify.com',
          website_id: 6643,
          website_name: 'coolsmartshop.com',
          skus: 34094,
        },
      ],
    },
    {
      account_id: 7488,
      account_name: 'Shopify Store madkitty2013.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store madkitty2013.myshopify.com',
          website_id: 6646,
          website_name: 'madkitty.me.uk',
          skus: 3011,
        },
      ],
    },
    {
      account_id: 7489,
      account_name: 'Shopify Store kitchen-witch-gourmet.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kitchen-witch-gourmet.myshopify.com',
          website_id: 6647,
          website_name: 'kitchenwitchgourmet.com',
          skus: 645,
        },
      ],
    },
    {
      account_id: 7474,
      account_name: 'Shopify Store e4codesx.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store e4codesx.myshopify.com',
          website_id: 6631,
          website_name: 'e4codes.com',
          skus: 22,
        },
      ],
    },
    {
      account_id: 7478,
      account_name: 'Shopify Store meneer-kwant.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store meneer-kwant.myshopify.com',
          website_id: 6635,
          website_name: 'kwantjesplantjes.nl',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7480,
      account_name: 'Shopify Store fin-toecosmetics.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fin-toecosmetics.myshopify.com',
          website_id: 6637,
          website_name: 'fin-toecosmetics.myshopify.com',
          skus: 40,
        },
      ],
    },
    {
      account_id: 7482,
      account_name: 'Shopify Store dcb331-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dcb331-3.myshopify.com',
          website_id: 6639,
          website_name: 'relax.nl',
          skus: 1096,
        },
      ],
    },
    {
      account_id: 7483,
      account_name: 'Shopify Store 701d19-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 701d19-2.myshopify.com',
          website_id: 6640,
          website_name: 'kokania.com',
          skus: 116107,
        },
      ],
    },
    {
      account_id: 7487,
      account_name: 'Shopify Store nanshyuk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nanshyuk.myshopify.com',
          website_id: 6645,
          website_name: 'nanshy.com',
          skus: 93,
        },
      ],
    },
    {
      account_id: 7491,
      account_name: 'Shopify Store d9dd87-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store d9dd87-2.myshopify.com',
          website_id: 6649,
          website_name: 'frishay.uk',
          skus: 108002,
        },
      ],
    },
    {
      account_id: 7492,
      account_name: 'Shopify Store mid-century-barware.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mid-century-barware.myshopify.com',
          website_id: 6650,
          website_name: 'midcenturybarware.com',
          skus: 247,
        },
      ],
    },
    {
      account_id: 7494,
      account_name: 'Shopify Store 5001d9-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 5001d9-2.myshopify.com',
          website_id: 6652,
          website_name: 'frishay.com',
          skus: 96353,
        },
      ],
    },
    {
      account_id: 7495,
      account_name: 'Shopify Store bedb1b-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bedb1b-3.myshopify.com',
          website_id: 6653,
          website_name: 'golfiya.com',
          skus: 43214,
        },
      ],
    },
    {
      account_id: 7496,
      account_name: 'Shopify Store dc8e3f-4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dc8e3f-4.myshopify.com',
          website_id: 6654,
          website_name: 'martincart.com',
          skus: 92095,
        },
      ],
    },
    {
      account_id: 7497,
      account_name: 'Shopify Store c511af-4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store c511af-4.myshopify.com',
          website_id: 6655,
          website_name: 'lustrao.com',
          skus: 18,
        },
      ],
    },
    {
      account_id: 7498,
      account_name: 'Shopify Store 54ac40-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 54ac40-2.myshopify.com',
          website_id: 6656,
          website_name: 'refinedlace.com',
          skus: 1651,
        },
      ],
    },
    {
      account_id: 7499,
      account_name: 'Shopify Store 38847a.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 38847a.myshopify.com',
          website_id: 6657,
          website_name: 'www.niutn.com',
          skus: 281,
        },
      ],
    },
    {
      account_id: 7500,
      account_name: 'Shopify Store kevin-feedops-test-5.myshopify.com',
      websites: [],
    },
    {
      account_id: 7501,
      account_name: 'Shopify Store total-wellness-esperance.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store total-wellness-esperance.myshopify.com',
          website_id: 6659,
          website_name: 'www.jamesstboutique.com.au',
          skus: 900,
        },
      ],
    },
    {
      account_id: 7502,
      account_name: 'Shopify Store hugginsattic.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hugginsattic.myshopify.com',
          website_id: 6660,
          website_name: 'hugginsattic.co.uk',
          skus: 976,
        },
      ],
    },
    {
      account_id: 7503,
      account_name: 'Shopify Store boulettauk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store boulettauk.myshopify.com',
          website_id: 6661,
          website_name: 'bomontigoods.com',
          skus: 4670,
        },
      ],
    },
    {
      account_id: 7504,
      account_name: 'Shopify Store d2002c-66.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store d2002c-66.myshopify.com',
          website_id: 6662,
          website_name: 'emberandclaycups.co.uk',
          skus: 138,
        },
      ],
    },
    {
      account_id: 7505,
      account_name: 'Shopify Store 97902f.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 97902f.myshopify.com',
          website_id: 6663,
          website_name: '97902f.myshopify.com',
          skus: 10139,
        },
      ],
    },
    {
      account_id: 7506,
      account_name: 'Shopify Store a86235-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a86235-2.myshopify.com',
          website_id: 6664,
          website_name: 'tuistee.com',
          skus: 433,
        },
      ],
    },
    {
      account_id: 7507,
      account_name: 'Shopify Store 66433a-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 66433a-2.myshopify.com',
          website_id: 6665,
          website_name: 'drinkcoves.com',
          skus: 3,
        },
      ],
    },
    {
      account_id: 7508,
      account_name: 'Shopify Store dfd430-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dfd430-2.myshopify.com',
          website_id: 6666,
          website_name: 'proboxing.com.au',
          skus: 701,
        },
      ],
    },
    {
      account_id: 7509,
      account_name: 'Shopify Store slickerbikeshelters.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store slickerbikeshelters.myshopify.com',
          website_id: 6667,
          website_name: 'slickerbikeshelters.com',
          skus: 728,
        },
      ],
    },
    {
      account_id: 7510,
      account_name: 'Shopify Store quince-living.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store quince-living.myshopify.com',
          website_id: 6668,
          website_name: 'www.quinceandcook.co.uk',
          skus: 6077,
        },
      ],
    },
    {
      account_id: 7511,
      account_name: 'Shopify Store bearcat-jewelry.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bearcat-jewelry.myshopify.com',
          website_id: 6669,
          website_name: 'bearcat-jewelry.com',
          skus: 113,
        },
      ],
    },
    {
      account_id: 7512,
      account_name: 'Shopify Store fishingmonk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fishingmonk.myshopify.com',
          website_id: 6670,
          website_name: 'shop.fishingmonk.com',
          skus: 2548,
        },
      ],
    },
    {
      account_id: 7513,
      account_name: 'Shopify Store abitto-ltd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store abitto-ltd.myshopify.com',
          website_id: 6671,
          website_name: 'www.abitto.com',
          skus: 806,
        },
      ],
    },
    {
      account_id: 7514,
      account_name: 'Shopify Store archery-uk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store archery-uk.myshopify.com',
          website_id: 6672,
          website_name: 'tacticalarchery.co.uk',
          skus: 1460,
        },
      ],
    },
    {
      account_id: 7515,
      account_name: 'Shopify Store eb1e24-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store eb1e24-2.myshopify.com',
          website_id: 6673,
          website_name: 'tejasshop.store',
          skus: 878,
        },
      ],
    },
    {
      account_id: 7516,
      account_name: 'Shopify Store c84b7a.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store c84b7a.myshopify.com',
          website_id: 6674,
          website_name: 'luxerealms.com',
          skus: 641,
        },
      ],
    },
    {
      account_id: 7517,
      account_name: 'Shopify Store mein-poolroboter.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mein-poolroboter.myshopify.com',
          website_id: 6675,
          website_name: 'mein-poolroboter.de',
          skus: 85,
        },
      ],
    },
    {
      account_id: 7518,
      account_name: 'Shopify Store triton-europe.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store triton-europe.myshopify.com',
          website_id: 6676,
          website_name: 'triton-europe.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7519,
      account_name: 'Shopify Store snowpaw-store.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store snowpaw-store.myshopify.com',
          website_id: 6677,
          website_name: 'snowpawstore.com',
          skus: 4242,
        },
      ],
    },
    {
      account_id: 7520,
      account_name: 'Shopify Store shifagoodness.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store shifagoodness.myshopify.com',
          website_id: 6678,
          website_name: 'shifagoodness.com',
          skus: 41,
        },
      ],
    },
    {
      account_id: 7521,
      account_name: 'Shopify Store 52b5a6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 52b5a6.myshopify.com',
          website_id: 6679,
          website_name: 'procureus.net',
          skus: 2081,
        },
      ],
    },
    {
      account_id: 7522,
      account_name: 'Shopify Store a246c1-4e.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a246c1-4e.myshopify.com',
          website_id: 6680,
          website_name: 'a246c1-4e.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7523,
      account_name: 'Shopify Store a1e785-4e.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a1e785-4e.myshopify.com',
          website_id: 6681,
          website_name: 'www.handelsondernemingkremer.com',
          skus: 3398,
        },
      ],
    },
    {
      account_id: 7524,
      account_name: 'Shopify Store 87f752-5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 87f752-5.myshopify.com',
          website_id: 6682,
          website_name: 'www.imperaitalia.com',
          skus: 7584,
        },
      ],
    },
    {
      account_id: 7525,
      account_name: 'Shopify Store luxbeautytrading.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store luxbeautytrading.myshopify.com',
          website_id: 6683,
          website_name: 'luxbeauty.com.au',
          skus: 2781,
        },
      ],
    },
    {
      account_id: 7526,
      account_name: 'Shopify Store gamingdesktopau.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gamingdesktopau.myshopify.com',
          website_id: 6684,
          website_name: 'www.gamingdesktop.com.au',
          skus: 3885,
        },
      ],
    },
    {
      account_id: 7527,
      account_name: 'Shopify Store vitiligo-organic.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vitiligo-organic.myshopify.com',
          website_id: 6685,
          website_name: 'vitiligoorganics.com',
          skus: 29,
        },
      ],
    },
    {
      account_id: 7528,
      account_name: 'Shopify Store jersey-knit.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jersey-knit.myshopify.com',
          website_id: 6686,
          website_name: 'www.soccerchicshop.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7529,
      account_name: 'Shopify Store 5a062d-6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 5a062d-6.myshopify.com',
          website_id: 6687,
          website_name: 'www.beauty-explained.com',
          skus: 17,
        },
      ],
    },
    {
      account_id: 7530,
      account_name: 'Shopify Store 27164f-24.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 27164f-24.myshopify.com',
          website_id: 6688,
          website_name: 'athleticprovidence.com',
          skus: 58,
        },
      ],
    },
    {
      account_id: 7531,
      account_name: 'Shopify Store pantynova.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pantynova.myshopify.com',
          website_id: 6689,
          website_name: 'www.pantynova.com',
          skus: 142,
        },
      ],
    },
    {
      account_id: 7532,
      account_name: 'Shopify Store a22e46-d3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a22e46-d3.myshopify.com',
          website_id: 6690,
          website_name: 'mobile365.co.uk',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7533,
      account_name: 'Shopify Store 3c8063-4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3c8063-4.myshopify.com',
          website_id: 6691,
          website_name: 'dressesdioma.com',
          skus: 97,
        },
      ],
    },
    {
      account_id: 7534,
      account_name: 'Shopify Store 1ced1f-8f.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1ced1f-8f.myshopify.com',
          website_id: 6692,
          website_name: 'mazimsteno.myshopify.com',
          skus: 5,
        },
      ],
    },
    {
      account_id: 7535,
      account_name: 'Shopify Store moto-tech-diagnostics.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store moto-tech-diagnostics.myshopify.com',
          website_id: 6693,
          website_name: 'www.moto-tech.com.au',
          skus: 166,
        },
      ],
    },
    {
      account_id: 7536,
      account_name: 'Shopify Store 0a68c2-de.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0a68c2-de.myshopify.com',
          website_id: 6694,
          website_name: 'shoppywoppydodah.com',
          skus: 9539,
        },
      ],
    },
    {
      account_id: 7537,
      account_name: 'Shopify Store 6d6aa4-e9.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 6d6aa4-e9.myshopify.com',
          website_id: 6695,
          website_name: '6d6aa4-e9.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7538,
      account_name: 'Shopify Store b6bfcf-85.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b6bfcf-85.myshopify.com',
          website_id: 6696,
          website_name: 'b6bfcf-85.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7539,
      account_name: 'Shopify Store ab1be2-39.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ab1be2-39.myshopify.com',
          website_id: 6697,
          website_name: 'ab1be2-39.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7540,
      account_name: 'Shopify Store factoryfast-fast.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store factoryfast-fast.myshopify.com',
          website_id: 6698,
          website_name: 'www.factoryfast.com.au',
          skus: 12746,
        },
      ],
    },
    {
      account_id: 7541,
      account_name: 'Shopify Store engineer-seal-stamps.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store engineer-seal-stamps.myshopify.com',
          website_id: 6699,
          website_name: 'engineersealstamps.com',
          skus: 38206,
        },
      ],
    },
    {
      account_id: 7542,
      account_name: 'Shopify Store dfda9a-48.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dfda9a-48.myshopify.com',
          website_id: 6700,
          website_name: 'abathome.com',
          skus: 4,
        },
      ],
    },
    {
      account_id: 7543,
      account_name: 'Shopify Store bouwguide.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bouwguide.myshopify.com',
          website_id: 6702,
          website_name: 'qlineo.nl',
          skus: 47,
        },
      ],
    },
    {
      account_id: 7544,
      account_name: 'Shopify Store a4cd40-2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a4cd40-2.myshopify.com',
          website_id: 6703,
          website_name: 'cooldelo.com',
          skus: 155,
        },
      ],
    },
    {
      account_id: 7545,
      account_name: 'Shopify Store 02b2ba-e2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 02b2ba-e2.myshopify.com',
          website_id: 6704,
          website_name: 'lesriches.co.uk',
          skus: 570,
        },
      ],
    },
    {
      account_id: 7546,
      account_name: 'Shopify Store 87cdec.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 87cdec.myshopify.com',
          website_id: 6705,
          website_name: '87cdec.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7547,
      account_name: 'Shopify Store fabeaulux-4723.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fabeaulux-4723.myshopify.com',
          website_id: 6706,
          website_name: 'thefabeaulux.com',
          skus: 147,
        },
      ],
    },
    {
      account_id: 7548,
      account_name: 'Shopify Store 1589dd-f4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1589dd-f4.myshopify.com',
          website_id: 6707,
          website_name: 'www.speedxcrafts.com',
          skus: 23412,
        },
      ],
    },
    {
      account_id: 7549,
      account_name: 'Shopify Store ebeeea-25.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ebeeea-25.myshopify.com',
          website_id: 6708,
          website_name: 'brightbuy.online',
          skus: 30353,
        },
      ],
    },
    {
      account_id: 7550,
      account_name: 'Shopify Store ambersleys.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ambersleys.myshopify.com',
          website_id: 6709,
          website_name: 'ambersleys.co.uk',
          skus: 85,
        },
      ],
    },
    {
      account_id: 7551,
      account_name: 'Shopify Store 9c8cfb-ed.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 9c8cfb-ed.myshopify.com',
          website_id: 6710,
          website_name: 'bricknest.uk',
          skus: 142,
        },
      ],
    },
    {
      account_id: 7552,
      account_name: 'Shopify Store muzzara-funnel-testing.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store muzzara-funnel-testing.myshopify.com',
          website_id: 6711,
          website_name: 'muzzara-funnel-testing.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7553,
      account_name: 'Shopify Store mu-dev-store.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mu-dev-store.myshopify.com',
          website_id: 6712,
          website_name: 'your-decor.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7554,
      account_name: 'Shopify Store a643bf-b3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a643bf-b3.myshopify.com',
          website_id: 6713,
          website_name: 'h0modeltrainmaster.shop',
          skus: 120,
        },
      ],
    },
    {
      account_id: 7555,
      account_name: 'Shopify Store penny-garden-3007.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store penny-garden-3007.myshopify.com',
          website_id: 6714,
          website_name: 'benchstore.co.uk',
          skus: 194,
        },
      ],
    },
    {
      account_id: 7556,
      account_name: 'Shopify Store evecouturelondon.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store evecouturelondon.myshopify.com',
          website_id: 6715,
          website_name: 'evecouture.co.uk',
          skus: 582,
        },
      ],
    },
    {
      account_id: 7557,
      account_name: 'Shopify Store 3488af-e5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3488af-e5.myshopify.com',
          website_id: 6716,
          website_name: 'adultclothdiaper.com',
          skus: 332,
        },
      ],
    },
    {
      account_id: 7558,
      account_name: 'Shopify Store sv-trading-uk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sv-trading-uk.myshopify.com',
          website_id: 6717,
          website_name: 'www.shopvapour.co.uk',
          skus: 12113,
        },
      ],
    },
    {
      account_id: 7559,
      account_name: 'Shopify Store c47b4a-01.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store c47b4a-01.myshopify.com',
          website_id: 6718,
          website_name: 'onlinechemicalien.nl',
          skus: 75,
        },
      ],
    },
    {
      account_id: 7560,
      account_name: 'Shopify Store 531270-d6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 531270-d6.myshopify.com',
          website_id: 6720,
          website_name: 'hypigo.com',
          skus: 22,
        },
      ],
    },
    {
      account_id: 7561,
      account_name: 'Shopify Store petotreats.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store petotreats.myshopify.com',
          website_id: 6721,
          website_name: 'www.petotreats.co.za',
          skus: 2244,
        },
      ],
    },
    {
      account_id: 7562,
      account_name: 'Shopify Store 0034eb-21.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0034eb-21.myshopify.com',
          website_id: 6722,
          website_name: 'farben-held.de',
          skus: 1171,
        },
      ],
    },
    {
      account_id: 7563,
      account_name: 'Shopify Store 2pvmgr-xz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2pvmgr-xz.myshopify.com',
          website_id: 6723,
          website_name: '2pvmgr-xz.myshopify.com',
          skus: 1209,
        },
      ],
    },
    {
      account_id: 7564,
      account_name: 'Shopify Store glassvandels.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store glassvandels.myshopify.com',
          website_id: 6724,
          website_name: 'www.glassvandal.com',
          skus: 6005,
        },
      ],
    },
    {
      account_id: 7565,
      account_name: 'Shopify Store test-pay-test.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store test-pay-test.myshopify.com',
          website_id: 6725,
          website_name: 'test-pay-test.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7566,
      account_name: 'Shopify Store pdkt12-yt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pdkt12-yt.myshopify.com',
          website_id: 6726,
          website_name: 'vrdrops.store',
          skus: 217,
        },
      ],
    },
    {
      account_id: 7576,
      account_name: 'Shopify Store 0iu5id-bm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0iu5id-bm.myshopify.com',
          website_id: 6736,
          website_name: 'cie-meurthe-moselanne-matma.com',
          skus: 133,
        },
      ],
    },
    {
      account_id: 7584,
      account_name: 'Shopify Store 6frsmg-wh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 6frsmg-wh.myshopify.com',
          website_id: 6744,
          website_name: 'hipomarket.us',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7587,
      account_name: 'Shopify Store 70ghvb-uc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 70ghvb-uc.myshopify.com',
          website_id: 6747,
          website_name: 'www.vibrantvibes.online',
          skus: 12,
        },
      ],
    },
    {
      account_id: 7588,
      account_name: 'Shopify Store f8dese-2j.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store f8dese-2j.myshopify.com',
          website_id: 6748,
          website_name: 'audend.com',
          skus: 5,
        },
      ],
    },
    {
      account_id: 7590,
      account_name: 'Shopify Store sancta-maria-epl.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sancta-maria-epl.myshopify.com',
          website_id: 6750,
          website_name: 'www.indianslingshot.com',
          skus: 2876,
        },
      ],
    },
    {
      account_id: 7567,
      account_name: 'Shopify Store 8d362d-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8d362d-3.myshopify.com',
          website_id: 6727,
          website_name: 'yoursophisticase.com',
          skus: 8972,
        },
      ],
    },
    {
      account_id: 7568,
      account_name: 'Shopify Store 773d7a-44.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 773d7a-44.myshopify.com',
          website_id: 6728,
          website_name: 'handjgarudafurniture.com.au',
          skus: 89,
        },
      ],
    },
    {
      account_id: 7569,
      account_name: 'Shopify Store 1e2cd7-4d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1e2cd7-4d.myshopify.com',
          website_id: 6729,
          website_name: 'goddid.in',
          skus: 40,
        },
      ],
    },
    {
      account_id: 7570,
      account_name: 'Shopify Store bicqft-zp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bicqft-zp.myshopify.com',
          website_id: 6730,
          website_name: 'visitrehobothshop.myshopify.com',
          skus: 759,
        },
      ],
    },
    {
      account_id: 7571,
      account_name: 'Shopify Store your-paint-hub.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store your-paint-hub.myshopify.com',
          website_id: 6731,
          website_name: 'refinishhub.co.uk',
          skus: 656,
        },
      ],
    },
    {
      account_id: 7572,
      account_name: 'Shopify Store smartappliancehub.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store smartappliancehub.myshopify.com',
          website_id: 6732,
          website_name: 'reliablehomegoods.com',
          skus: 14482,
        },
      ],
    },
    {
      account_id: 7582,
      account_name: 'Shopify Store c4t0ya-sk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store c4t0ya-sk.myshopify.com',
          website_id: 6742,
          website_name: 'c4t0ya-sk.myshopify.com',
          skus: 1710,
        },
      ],
    },
    {
      account_id: 7573,
      account_name: 'Shopify Store 01246a-kz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 01246a-kz.myshopify.com',
          website_id: 6733,
          website_name: 'www.pisugar.com',
          skus: 8,
        },
      ],
    },
    {
      account_id: 7586,
      account_name: 'Shopify Store n0xdfi-ba.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store n0xdfi-ba.myshopify.com',
          website_id: 6746,
          website_name: 'purelifevitamins.com',
          skus: 143,
        },
      ],
    },
    {
      account_id: 7574,
      account_name: 'Shopify Store 041578.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 041578.myshopify.com',
          website_id: 6734,
          website_name: 'www.mnex.co.uk',
          skus: 268,
        },
      ],
    },
    {
      account_id: 7575,
      account_name: 'Shopify Store windmill-biona.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store windmill-biona.myshopify.com',
          website_id: 6735,
          website_name: 'biona.co.uk',
          skus: 579,
        },
      ],
    },
    {
      account_id: 7577,
      account_name: 'Shopify Store 07c32e-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 07c32e-3.myshopify.com',
          website_id: 6737,
          website_name: 'www.drmedicart.com',
          skus: 65138,
        },
      ],
    },
    {
      account_id: 7578,
      account_name: 'Shopify Store neha-ecommerce-store.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store neha-ecommerce-store.myshopify.com',
          website_id: 6738,
          website_name: 'neha-ecommerce-store.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7579,
      account_name: 'Shopify Store m0gp1t-sv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store m0gp1t-sv.myshopify.com',
          website_id: 6739,
          website_name: 'www.amberglass-shop.nl',
          skus: 20,
        },
      ],
    },
    {
      account_id: 7591,
      account_name: 'Shopify Store plcgcc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store plcgcc.myshopify.com',
          website_id: 6751,
          website_name: 'plcgcc.com',
          skus: 3578,
        },
      ],
    },
    {
      account_id: 7594,
      account_name: 'Shopify Store muzaara-timc-3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store muzaara-timc-3.myshopify.com',
          website_id: 6754,
          website_name: 'muzaara-timc-3.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7580,
      account_name: 'Shopify Store adc6fd-06.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store adc6fd-06.myshopify.com',
          website_id: 6740,
          website_name: 'miriame.org',
          skus: 12638,
        },
      ],
    },
    {
      account_id: 7581,
      account_name: 'Shopify Store 4326f9-da.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 4326f9-da.myshopify.com',
          website_id: 6741,
          website_name: 'biggamesports.co.uk',
          skus: 4153,
        },
      ],
    },
    {
      account_id: 7583,
      account_name: 'Shopify Store djhhaf-d0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store djhhaf-d0.myshopify.com',
          website_id: 6743,
          website_name: '6drones.com',
          skus: 1052,
        },
      ],
    },
    {
      account_id: 7585,
      account_name: 'Shopify Store brc5yc-w0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store brc5yc-w0.myshopify.com',
          website_id: 6745,
          website_name: 'www.jevogueltd.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7589,
      account_name: 'Shopify Store 8bcb3c-46.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8bcb3c-46.myshopify.com',
          website_id: 6749,
          website_name: 'www.indoarchery.com',
          skus: 644,
        },
      ],
    },
    {
      account_id: 7592,
      account_name: 'Shopify Store muzaara-migration-timc.myshopify.com',
      websites: [],
    },
    {
      account_id: 7593,
      account_name: 'Shopify Store ckmms6-y4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ckmms6-y4.myshopify.com',
          website_id: 6753,
          website_name: 'ckmms6-y4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7595,
      account_name: 'Shopify Store k0r1v5-uz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store k0r1v5-uz.myshopify.com',
          website_id: 6758,
          website_name: 'k0r1v5-uz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7596,
      account_name: 'Shopify Store 2g0epj-s1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2g0epj-s1.myshopify.com',
          website_id: 6759,
          website_name: '2g0epj-s1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7597,
      account_name: 'Shopify Store cczc7q-fk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cczc7q-fk.myshopify.com',
          website_id: 6761,
          website_name: 'cczc7q-fk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7598,
      account_name: 'Shopify Store iesb1r-yr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store iesb1r-yr.myshopify.com',
          website_id: 6762,
          website_name: 'iesb1r-yr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7599,
      account_name: 'Shopify Store 0tutxk-sw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0tutxk-sw.myshopify.com',
          website_id: 6763,
          website_name: '0tutxk-sw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7600,
      account_name: 'Shopify Store ge2xg0-s6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ge2xg0-s6.myshopify.com',
          website_id: 6764,
          website_name: 'ge2xg0-s6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7601,
      account_name: 'Shopify Store 631ab7.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 631ab7.myshopify.com',
          website_id: 6766,
          website_name: 'libasaa.com',
          skus: 8416,
        },
      ],
    },
    {
      account_id: 7602,
      account_name: 'Shopify Store pro-fabric-supply.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pro-fabric-supply.myshopify.com',
          website_id: 6767,
          website_name: 'www.profabricsupply.com',
          skus: 5900,
        },
      ],
    },
    {
      account_id: 7603,
      account_name: 'Pro Fabric Supply',
      websites: [],
    },
    {
      account_id: 7604,
      account_name: 'Big Commerce Store 3o8g1qd',
      websites: [],
    },
    {
      account_id: 7605,
      account_name: 'My Care Colorado',
      websites: [],
    },
    {
      account_id: 7606,
      account_name: 'Shopify Store rtv4v1-6q.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rtv4v1-6q.myshopify.com',
          website_id: 6769,
          website_name: 'rtv4v1-6q.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7607,
      account_name: 'Shopify Store x0cdgw-cy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store x0cdgw-cy.myshopify.com',
          website_id: 6770,
          website_name: 'x0cdgw-cy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7608,
      account_name: 'Shopify Store gopher-block.myshopify.com',
      websites: [],
    },
    {
      account_id: 7609,
      account_name: 'Gopher Block',
      websites: [],
    },
    {
      account_id: 7610,
      account_name: 'Big Commerce Store ls9ux9',
      websites: [
        {
          account_name: 'Big Commerce Store ls9ux9',
          website_id: 6772,
          website_name: 'www.hittingstore.com',
          skus: 1034,
        },
      ],
    },
    {
      account_id: 7611,
      account_name: 'HittingStore',
      websites: [],
    },
    {
      account_id: 7613,
      account_name: 'ZOMDO LLC',
      websites: [],
    },
    {
      account_id: 7614,
      account_name: 'Shopify Store gx41ja-ja.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gx41ja-ja.myshopify.com',
          website_id: 6774,
          website_name: 'gx41ja-ja.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7615,
      account_name: 'Big Commerce Store ftlh2ewbbq',
      websites: [
        {
          account_name: 'Big Commerce Store ftlh2ewbbq',
          website_id: 6775,
          website_name: 'store-ftlh2ewbbq.mybigcommerce.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7616,
      account_name: 'Big Commerce Store ftlh2ewbbq',
      websites: [
        {
          account_name: 'Big Commerce Store ftlh2ewbbq',
          website_id: 6776,
          website_name: 'store-ftlh2ewbbq.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7618,
      account_name: 'Big Commerce Store ftlh2ewbbq',
      websites: [
        {
          account_name: 'Big Commerce Store ftlh2ewbbq',
          website_id: 6777,
          website_name: 'store-ftlh2ewbbq.mybigcommerce.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7617,
      account_name: 'Big Commerce Store ftlh2ewbbq',
      websites: [
        {
          account_name: 'Big Commerce Store ftlh2ewbbq',
          website_id: 6778,
          website_name: 'store-ftlh2ewbbq.mybigcommerce.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7619,
      account_name: 'Big Commerce Store ftlh2ewbbq',
      websites: [
        {
          account_name: 'Big Commerce Store ftlh2ewbbq',
          website_id: 6779,
          website_name: 'store-ftlh2ewbbq.mybigcommerce.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7620,
      account_name: 'Shopify Store 9w9zyh-nn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 9w9zyh-nn.myshopify.com',
          website_id: 6780,
          website_name: '9w9zyh-nn.myshopify.com',
          skus: 0,
        },
        {
          account_name: 'Shopify Store 9w9zyh-nn.myshopify.com',
          website_id: 6783,
          website_name: '9w9zyh-nn.myshopify.com',
          skus: 0,
        },
        {
          account_name: 'Shopify Store 9w9zyh-nn.myshopify.com',
          website_id: 6786,
          website_name: '9w9zyh-nn.myshopify.com',
          skus: 0,
        },
        {
          account_name: 'Shopify Store 9w9zyh-nn.myshopify.com',
          website_id: 6787,
          website_name: '9w9zyh-nn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7624,
      account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
          website_id: 6781,
          website_name: 'qiw8uy-0d.myshopify.com',
          skus: 0,
        },
        {
          account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
          website_id: 6782,
          website_name: 'qiw8uy-0d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7622,
      account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
          website_id: 6785,
          website_name: 'qiw8uy-0d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7623,
      account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
          website_id: 6784,
          website_name: 'qiw8uy-0d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7621,
      account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qiw8uy-0d.myshopify.com',
          website_id: 6788,
          website_name: 'qiw8uy-0d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7625,
      account_name: 'Shopify Store ypxs2w-xd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ypxs2w-xd.myshopify.com',
          website_id: 6789,
          website_name: 'ypxs2w-xd.myshopify.com',
          skus: 0,
        },
        {
          account_name: 'Shopify Store ypxs2w-xd.myshopify.com',
          website_id: 6790,
          website_name: 'ypxs2w-xd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7626,
      account_name: 'Shopify Store yj81wg-4d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yj81wg-4d.myshopify.com',
          website_id: 6791,
          website_name: 'yj81wg-4d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7627,
      account_name: 'Shopify Store rh0p69-ri.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rh0p69-ri.myshopify.com',
          website_id: 6792,
          website_name: 'rh0p69-ri.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7628,
      account_name: 'Shopify Store 15m00p-8h.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 15m00p-8h.myshopify.com',
          website_id: 6793,
          website_name: '15m00p-8h.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7753,
      account_name: 'DecjubaAU',
      websites: [
        {
          account_name: 'DecjubaAU',
          website_id: 6897,
          website_name: 'www.decjuba.com.au',
          skus: 9486,
        },
      ],
    },
    {
      account_id: 6926,
      account_name: 'Glue Store',
      websites: [
        {
          account_name: 'Glue Store',
          website_id: 5198,
          website_name: 'www.gluestore.com.au',
          skus: 11827,
        },
      ],
    },
    {
      account_id: 7629,
      account_name: 'Shopify Store kws01m-t7.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kws01m-t7.myshopify.com',
          website_id: 6794,
          website_name: 'kws01m-t7.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7630,
      account_name: 'Shopify Store 2fmj75-sj.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2fmj75-sj.myshopify.com',
          website_id: 6795,
          website_name: '2fmj75-sj.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7631,
      account_name: 'Shopify Store pnfvfv-y9.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pnfvfv-y9.myshopify.com',
          website_id: 6796,
          website_name: 'pnfvfv-y9.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7632,
      account_name: 'Shopify Store thukry-bs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store thukry-bs.myshopify.com',
          website_id: 6797,
          website_name: 'thukry-bs.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7633,
      account_name: 'Shopify Store 501skg-ta.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 501skg-ta.myshopify.com',
          website_id: 6798,
          website_name: '501skg-ta.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7634,
      account_name: 'Shopify Store g16ibe-01.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store g16ibe-01.myshopify.com',
          website_id: 6799,
          website_name: 'g16ibe-01.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7635,
      account_name: 'Shopify Store 2izcec-ze.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2izcec-ze.myshopify.com',
          website_id: 6802,
          website_name: '2izcec-ze.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7636,
      account_name: 'Shopify Store 6bx6uy-1y.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 6bx6uy-1y.myshopify.com',
          website_id: 6803,
          website_name: '6bx6uy-1y.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7637,
      account_name: 'Shopify Store 0r0p9v-h4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0r0p9v-h4.myshopify.com',
          website_id: 6804,
          website_name: '0r0p9v-h4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7638,
      account_name: 'Shopify Store 50b0xh-cr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 50b0xh-cr.myshopify.com',
          website_id: 6805,
          website_name: '50b0xh-cr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7639,
      account_name: 'Shopify Store 08sgje-ib.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 08sgje-ib.myshopify.com',
          website_id: 6806,
          website_name: '08sgje-ib.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7640,
      account_name: 'Shopify Store 4j1fmp-jp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 4j1fmp-jp.myshopify.com',
          website_id: 6807,
          website_name: '4j1fmp-jp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7641,
      account_name: 'Shopify Store f3k1yq-by.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store f3k1yq-by.myshopify.com',
          website_id: 6808,
          website_name: 'f3k1yq-by.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7642,
      account_name: 'Shopify Store eacpv5-iq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store eacpv5-iq.myshopify.com',
          website_id: 6809,
          website_name: 'eacpv5-iq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7643,
      account_name: 'Shopify Store vhvr1e-pm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vhvr1e-pm.myshopify.com',
          website_id: 6810,
          website_name: 'vhvr1e-pm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7644,
      account_name: 'Shopify Store k7i5ip-mc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store k7i5ip-mc.myshopify.com',
          website_id: 6811,
          website_name: 'k7i5ip-mc.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7645,
      account_name: 'Shopify Store aki9gg-nj.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store aki9gg-nj.myshopify.com',
          website_id: 6812,
          website_name: 'aki9gg-nj.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7646,
      account_name: 'Shopify Store gofishtest.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gofishtest.myshopify.com',
          website_id: 6813,
          website_name: 'gofishtest.myshopify.com',
          skus: 331,
        },
      ],
    },
    {
      account_id: 7647,
      account_name: 'jadeshooting',
      websites: [],
    },
    {
      account_id: 7235,
      account_name: 'Shopify Store littlebeagleboutique.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store littlebeagleboutique.myshopify.com',
          website_id: 6390,
          website_name: 'beagleboutique.co.uk',
          skus: 29270,
        },
      ],
    },
    {
      account_id: 7648,
      account_name: 'Shopify Store auto-parts-exotic.myshopify.com',
      websites: [],
    },
    {
      account_id: 7649,
      account_name: 'Exotic Auto Parts',
      websites: [],
    },
    {
      account_id: 7650,
      account_name: 'Shopify Store zarkoperfume-eu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zarkoperfume-eu.myshopify.com',
          website_id: 6815,
          website_name: 'nice-stories.com',
          skus: 376,
        },
      ],
    },
    {
      account_id: 7651,
      account_name: 'nice.brands GmbH & Co.KG',
      websites: [],
    },
    {
      account_id: 7652,
      account_name: 'Big Commerce Store g7srqd3ulb',
      websites: [
        {
          account_name: 'Big Commerce Store g7srqd3ulb',
          website_id: 6816,
          website_name: 'salvage-matters.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7653,
      account_name: 'Salvage Matters',
      websites: [],
    },
    {
      account_id: 7654,
      account_name: 'Shopify Store hb6qr2-u1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hb6qr2-u1.myshopify.com',
          website_id: 6817,
          website_name: 'hb6qr2-u1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7655,
      account_name: 'Shopify Store 0mzi1n-q8.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0mzi1n-q8.myshopify.com',
          website_id: 6818,
          website_name: '0mzi1n-q8.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7656,
      account_name: 'Shopify Store zrcewr-ix.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zrcewr-ix.myshopify.com',
          website_id: 6819,
          website_name: 'zrcewr-ix.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7657,
      account_name: 'Shopify Store fu7zxs-y0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fu7zxs-y0.myshopify.com',
          website_id: 6820,
          website_name: 'fu7zxs-y0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7658,
      account_name: 'Big Commerce Store 7ahpi2es1h',
      websites: [
        {
          account_name: 'Big Commerce Store 7ahpi2es1h',
          website_id: 6821,
          website_name: 'signparts.net',
          skus: 205,
        },
      ],
    },
    {
      account_id: 7659,
      account_name: 'Victory Sign inc.',
      websites: [],
    },
    {
      account_id: 7660,
      account_name: 'Big Commerce Store degqc89h0v',
      websites: [
        {
          account_name: 'Big Commerce Store degqc89h0v',
          website_id: 6822,
          website_name: 'adaudioplus.com',
          skus: 156,
        },
      ],
    },
    {
      account_id: 7661,
      account_name: 'Big Commerce Store 2anpsajkj5',
      websites: [],
    },
    {
      account_id: 7662,
      account_name: 'JiffyPrintOnline.com',
      websites: [],
    },
    {
      account_id: 7663,
      account_name: 'Big Commerce Store j1nakd0o9f',
      websites: [],
    },
    {
      account_id: 7664,
      account_name: "Penguin's Crown di Venturini Ludovico",
      websites: [],
    },
    {
      account_id: 7665,
      account_name: 'Shopify Store x1yxwg-y1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store x1yxwg-y1.myshopify.com',
          website_id: 6825,
          website_name: 'parfumdeal.eu',
          skus: 4995,
        },
      ],
    },
    {
      account_id: 7666,
      account_name: 'Shopify Store qmhdru-b1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qmhdru-b1.myshopify.com',
          website_id: 6826,
          website_name: 'qmhdru-b1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7667,
      account_name: 'Shopify Store ef0i95-v0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ef0i95-v0.myshopify.com',
          website_id: 6827,
          website_name: 'ef0i95-v0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7668,
      account_name: 'Shopify Store tbuvkg-dy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tbuvkg-dy.myshopify.com',
          website_id: 6828,
          website_name: 'tbuvkg-dy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4683,
      account_name: 'Mega Office Supplies',
      websites: [
        {
          account_name: 'Mega Office Supplies',
          website_id: 3886,
          website_name: 'poscart.com.au',
          skus: 457,
        },
        {
          account_name: 'Mega Office Supplies',
          website_id: 3890,
          website_name: 'dymoonline.com.au',
          skus: 137,
        },
        {
          account_name: 'Mega Office Supplies',
          website_id: 3962,
          website_name: 'megaofficesupplies.com.au',
          skus: 28096,
        },
      ],
    },
    {
      account_id: 7669,
      account_name: 'Shopify Store tsv0dw-ce.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tsv0dw-ce.myshopify.com',
          website_id: 6829,
          website_name: 'tsv0dw-ce.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7671,
      account_name: 'Modern Pets',
      websites: [
        {
          account_name: 'Modern Pets',
          website_id: 6831,
          website_name: 'www.modernpet.com.au',
          skus: 1580,
        },
      ],
    },
    {
      account_id: 7672,
      account_name: 'Big Commerce Store 3iovoo0',
      websites: [],
    },
    {
      account_id: 7673,
      account_name: 'ShoeStation Direct',
      websites: [],
    },
    {
      account_id: 7674,
      account_name: 'JTC Trading UK Ltd',
      websites: [],
    },
    {
      account_id: 7675,
      account_name: 'Big Commerce Store rbtl0lt3wh',
      websites: [],
    },
    {
      account_id: 7676,
      account_name: 'Fidelis Flag Supply LLC',
      websites: [],
    },
    {
      account_id: 7677,
      account_name: 'Shopify Store jdez1q-41.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jdez1q-41.myshopify.com',
          website_id: 6834,
          website_name: 'jdez1q-41.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7678,
      account_name: 'dsbsdb',
      websites: [],
    },
    {
      account_id: 7679,
      account_name: 'Shopify Store q6qmc1-d3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store q6qmc1-d3.myshopify.com',
          website_id: 6835,
          website_name: 'q6qmc1-d3.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7680,
      account_name: 'KAS Elektrotechnik GmbH & Co. KG',
      websites: [],
    },
    {
      account_id: 7681,
      account_name: 'Shopify Store nextleveluk.myshopify.com',
      websites: [],
    },
    {
      account_id: 7682,
      account_name: 'NEXT LEVEL BRADFORD LTD',
      websites: [],
    },
    {
      account_id: 7683,
      account_name: 'Shopify Store jnf3sv-s5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jnf3sv-s5.myshopify.com',
          website_id: 6839,
          website_name: 'jnf3sv-s5.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7690,
      account_name: 'Big Commerce Store 3066l27',
      websites: [
        {
          account_name: 'Big Commerce Store 3066l27',
          website_id: 6845,
          website_name: 'www.mc-powersports.com',
          skus: 132657,
        },
      ],
    },
    {
      account_id: 7685,
      account_name: 'Shopify Store 0s1kiu-vv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0s1kiu-vv.myshopify.com',
          website_id: 6841,
          website_name: '0s1kiu-vv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7743,
      account_name: 'Shopify Store gfndft-s5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gfndft-s5.myshopify.com',
          website_id: 6886,
          website_name: 'surimi.icu',
          skus: 69,
        },
      ],
    },
    {
      account_id: 7687,
      account_name: 'Shopify Store tw4m1m-v6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tw4m1m-v6.myshopify.com',
          website_id: 6843,
          website_name: 'tw4m1m-v6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7688,
      account_name: 'Big Commerce Store vtd6spkrnp',
      websites: [
        {
          account_name: 'Big Commerce Store vtd6spkrnp',
          website_id: 6844,
          website_name: 'the-ibex-shop.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7689,
      account_name: 'The Ibex Shop',
      websites: [],
    },
    {
      account_id: 7691,
      account_name: 'mc-powersports.com',
      websites: [],
    },
    {
      account_id: 7692,
      account_name: 'Big Commerce Store 3tzsey9keb',
      websites: [],
    },
    {
      account_id: 7693,
      account_name: 'BigCommerce',
      websites: [],
    },
    {
      account_id: 7744,
      account_name: 'VIVA TUBES LLC',
      websites: [],
    },
    {
      account_id: 7695,
      account_name: 'Yunnan Baiyao USA',
      websites: [],
    },
    {
      account_id: 7694,
      account_name: 'Big Commerce Store dpxp1pah2c',
      websites: [
        {
          account_name: 'Big Commerce Store dpxp1pah2c',
          website_id: 6847,
          website_name: 'yunnanbaiyaousa.com',
          skus: 14,
        },
      ],
    },
    {
      account_id: 7684,
      account_name: 'Shopify Store afd320-5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store afd320-5.myshopify.com',
          website_id: 6840,
          website_name: 'steppybed.com',
          skus: 59,
        },
      ],
    },
    {
      account_id: 7696,
      account_name: 'Big Commerce Store gmv9xcbkzq',
      websites: [],
    },
    {
      account_id: 7698,
      account_name: 'Hawkes Outdoors',
      websites: [],
    },
    {
      account_id: 7699,
      account_name: 'Steppy Bed',
      websites: [],
    },
    {
      account_id: 7700,
      account_name: 'Big Commerce Store ayxzoz2pqm',
      websites: [
        {
          account_name: 'Big Commerce Store ayxzoz2pqm',
          website_id: 6853,
          website_name: 'crest.pl',
          skus: 18,
        },
      ],
    },
    {
      account_id: 7701,
      account_name: 'Smilumin LLC',
      websites: [],
    },
    {
      account_id: 7697,
      account_name: 'Shopify Store hawkes-outdoors.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hawkes-outdoors.myshopify.com',
          website_id: 6851,
          website_name: 'hawkesoutdoors.com',
          skus: 1296,
        },
      ],
    },
    {
      account_id: 7745,
      account_name: 'Shopify Store ebc890-62.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ebc890-62.myshopify.com',
          website_id: 6887,
          website_name: 'fashionqueene.com',
          skus: 3850,
        },
      ],
    },
    {
      account_id: 7702,
      account_name: 'Big Commerce Store 1rsptmqn2g',
      websites: [
        {
          account_name: 'Big Commerce Store 1rsptmqn2g',
          website_id: 6855,
          website_name: 'www.yunnanbaiyaoshop.com',
          skus: 16,
        },
      ],
    },
    {
      account_id: 7703,
      account_name: 'Big Commerce Store wepv6',
      websites: [],
    },
    {
      account_id: 7746,
      account_name: 'Big Commerce Store hojcvqptab',
      websites: [],
    },
    {
      account_id: 7748,
      account_name: 'Movie Posters',
      websites: [
        {
          account_name: 'Movie Posters',
          website_id: 6889,
          website_name: 'www.movieposters.com',
          skus: 68751,
        },
      ],
    },
    {
      account_id: 7749,
      account_name: 'Shopify Store victorymalibuebikes.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store victorymalibuebikes.myshopify.com',
          website_id: 6892,
          website_name: 'victorymalibuco.store',
          skus: 15463,
        },
      ],
    },
    {
      account_id: 7750,
      account_name: 'Shopify Store 7e0b21.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7e0b21.myshopify.com',
          website_id: 6893,
          website_name: 'www.josec.co.za',
          skus: 2236,
        },
      ],
    },
    {
      account_id: 7751,
      account_name: 'Shopify Store bsqxbj-cs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bsqxbj-cs.myshopify.com',
          website_id: 6894,
          website_name: 'www.thebigdaypa.com',
          skus: 3447,
        },
      ],
    },
    {
      account_id: 7752,
      account_name: 'Shopify Store cm3ndc-wg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cm3ndc-wg.myshopify.com',
          website_id: 6895,
          website_name: 'jrcclothingcircuit.myshopify.com',
          skus: 8,
        },
      ],
    },
    {
      account_id: 7670,
      account_name: 'Blue Focus',
      websites: [
        {
          account_name: 'Blue Focus',
          website_id: 6830,
          website_name: 'www.oxknit.com',
          skus: 4083,
        },
      ],
    },
    {
      account_id: 7704,
      account_name: 'Shopify Store xxrega-cc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xxrega-cc.myshopify.com',
          website_id: 6857,
          website_name: 'xxrega-cc.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6804,
      account_name: 'Big Commerce Store 6ciqma9a9h',
      websites: [
        {
          account_name: 'Big Commerce Store 6ciqma9a9h',
          website_id: 6020,
          website_name: 'www.serrv.org',
          skus: 1047,
        },
      ],
    },
    {
      account_id: 7705,
      account_name: 'MC Powersports',
      websites: [],
    },
    {
      account_id: 7706,
      account_name: 'Shopify Store b904d5-e2.myshopify.com',
      websites: [],
    },
    {
      account_id: 7707,
      account_name: 'Yucca Metal Art',
      websites: [],
    },
    {
      account_id: 7708,
      account_name: 'Shopify Store 737e78-a3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 737e78-a3.myshopify.com',
          website_id: 6859,
          website_name: 'www.thetroutfitter.com',
          skus: 5156,
        },
      ],
    },
    {
      account_id: 7709,
      account_name: 'abdul_Test',
      websites: [],
    },
    {
      account_id: 4869,
      account_name: 'healthylife',
      websites: [
        {
          account_name: 'healthylife',
          website_id: 4301,
          website_name: 'www.healthylife.com.au',
          skus: 13029,
        },
      ],
    },
    {
      account_id: 7710,
      account_name: 'Shopify Store 06kemh-4m.myshopify.com',
      websites: [],
    },
    {
      account_id: 7711,
      account_name: 'Shopify Store renogy-uk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store renogy-uk.myshopify.com',
          website_id: 6861,
          website_name: 'renogy-uk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7712,
      account_name: 'Shopify Store ebdsr0-wz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ebdsr0-wz.myshopify.com',
          website_id: 6863,
          website_name: 'ebdsr0-wz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7713,
      account_name: 'Big Commerce Store 675d76',
      websites: [],
    },
    {
      account_id: 7714,
      account_name: 'Storm Hospitality Supplies Pty Ltd',
      websites: [],
    },
    {
      account_id: 7715,
      account_name: 'Shopify Store fjsyf0-t3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fjsyf0-t3.myshopify.com',
          website_id: 6865,
          website_name: 'fjsyf0-t3.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7716,
      account_name: 'Big Commerce Store d1uxebqizs',
      websites: [
        {
          account_name: 'Big Commerce Store d1uxebqizs',
          website_id: 6866,
          website_name: 'exteriorcleaning.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7717,
      account_name: 'bdsbsdb',
      websites: [],
    },
    {
      account_id: 7726,
      account_name: 'VinniesFinds',
      websites: [
        {
          account_name: 'VinniesFinds',
          website_id: 6890,
          website_name: 'vinniesfinds.com.au',
          skus: 18197,
        },
      ],
    },
    {
      account_id: 7719,
      account_name: 'Oh!mino',
      websites: [],
    },
    {
      account_id: 7720,
      account_name: 'Shopify Store vft1e1-kt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vft1e1-kt.myshopify.com',
          website_id: 6868,
          website_name: 'fukua-store.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7721,
      account_name: 'Big Commerce Store cqyms9jluf',
      websites: [],
    },
    {
      account_id: 7722,
      account_name: 'Shopping Hub US LLC',
      websites: [],
    },
    {
      account_id: 7723,
      account_name: 'Shopify Store aa4181.myshopify.com',
      websites: [],
    },
    {
      account_id: 7724,
      account_name: 'Electro South West Ltd',
      websites: [],
    },
    {
      account_id: 7718,
      account_name: 'Shopify Store oh-mino.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store oh-mino.myshopify.com',
          website_id: 6867,
          website_name: 'ohmino.com',
          skus: 211,
        },
      ],
    },
    {
      account_id: 7166,
      account_name: 'Shopify Store autoone.com',
      websites: [
        {
          account_name: 'Shopify Store autoone.com',
          website_id: 6322,
          website_name: 'autoone.com.au',
          skus: 27383,
        },
      ],
    },
    {
      account_id: 7766,
      account_name: 'Shopify Store cocoon-fine-rugs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cocoon-fine-rugs.myshopify.com',
          website_id: 6912,
          website_name: 'www.cocooncarpets.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7767,
      account_name: 'Big Commerce Store i7kbf0c8zj',
      websites: [
        {
          account_name: 'Big Commerce Store i7kbf0c8zj',
          website_id: 6919,
          website_name: 'forrspec5.mybigcommerce.com',
          skus: 2836,
        },
      ],
    },
    {
      account_id: 7728,
      account_name: 'Tuhil Threads',
      websites: [],
    },
    {
      account_id: 7729,
      account_name: 'Shopify Store 11ujna-x2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 11ujna-x2.myshopify.com',
          website_id: 6874,
          website_name: 'asmry.top',
          skus: 511,
        },
      ],
    },
    {
      account_id: 7730,
      account_name: 'Shopify Store t9e1zc-1d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store t9e1zc-1d.myshopify.com',
          website_id: 6875,
          website_name: 'nmnysx.com',
          skus: 39797,
        },
      ],
    },
    {
      account_id: 7731,
      account_name: 'Nmnysx',
      websites: [],
    },
    {
      account_id: 7732,
      account_name: 'Shopify Store adnabu-store-test14.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store adnabu-store-test14.myshopify.com',
          website_id: 6876,
          website_name: 'adnabu-store-test14.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7733,
      account_name: 'Shopify Store s9xrsa-hm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store s9xrsa-hm.myshopify.com',
          website_id: 6879,
          website_name: 'guaranteedexchange.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7734,
      account_name: 'Shopify Store 60c7k0-uq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 60c7k0-uq.myshopify.com',
          website_id: 6880,
          website_name: 'guaranteedexchange.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7735,
      account_name: 'Big Commerce Store 7pulbjnq3i',
      websites: [
        {
          account_name: 'Big Commerce Store 7pulbjnq3i',
          website_id: 6881,
          website_name: 'store-7pulbjnq3i.mybigcommerce.com',
          skus: 1364,
        },
      ],
    },
    {
      account_id: 7736,
      account_name: 'A1 Supplements.com',
      websites: [],
    },
    {
      account_id: 7737,
      account_name: 'A1 Supplements',
      websites: [],
    },
    {
      account_id: 7768,
      account_name: 'Big Commerce Store 6c4x0y2c2j',
      websites: [
        {
          account_name: 'Big Commerce Store 6c4x0y2c2j',
          website_id: 6918,
          website_name: 'rahesh-111.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7738,
      account_name: 'Shopify Store 47vdba-sv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 47vdba-sv.myshopify.com',
          website_id: 6882,
          website_name: 'whidbeyislandpets.com',
          skus: 174,
        },
      ],
    },
    {
      account_id: 6910,
      account_name: 'Tug Agency',
      websites: [
        {
          account_name: 'Tug Agency',
          website_id: 1208,
          website_name: 'www.suzannegrae.com.au',
          skus: 4078,
        },
      ],
    },
    {
      account_id: 7739,
      account_name: 'Big Commerce Store niqr7znz7g',
      websites: [],
    },
    {
      account_id: 7740,
      account_name: 'Bo Wang',
      websites: [],
    },
    {
      account_id: 7747,
      account_name: 'Sports Decals USA',
      websites: [],
    },
    {
      account_id: 7754,
      account_name: 'Shopify Store b0m5ym-ge.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b0m5ym-ge.myshopify.com',
          website_id: 6898,
          website_name: 'semoormakemefit.store',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7727,
      account_name: 'Big Commerce Store xryhhblbro',
      websites: [],
    },
    {
      account_id: 7756,
      account_name: 'Shopify Store rajesh-test-1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rajesh-test-1.myshopify.com',
          website_id: 6902,
          website_name: 'rajesh-test-1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 4170,
      account_name: 'Madison Accessories',
      websites: [
        {
          account_name: 'Madison Accessories',
          website_id: 3691,
          website_name: 'www.madisonaccessories.com.au',
          skus: 938,
        },
        {
          account_name: 'Madison Accessories',
          website_id: 4308,
          website_name: 'madisonaccessories.com',
          skus: 676,
        },
      ],
    },
    {
      account_id: 7757,
      account_name: 'Shopify Store kevin-feedops-test-store-8.myshopify.com',
      websites: [],
    },
    {
      account_id: 7758,
      account_name: 'Shopify Store abdulxtest1.myshopify.com',
      websites: [],
    },
    {
      account_id: 7759,
      account_name: 'Big Commerce Store p486s45a99',
      websites: [],
    },
    {
      account_id: 7760,
      account_name: 'Shopify Store j5c6az-0a.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store j5c6az-0a.myshopify.com',
          website_id: 6906,
          website_name: 'j5c6az-0a.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7761,
      account_name: 'Shopify Store testrajeevs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store testrajeevs.myshopify.com',
          website_id: 6907,
          website_name: 'testrajeevs.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7762,
      account_name: 'Shopify Store kevin-test-jun-2025.myshopify.com',
      websites: [],
    },
    {
      account_id: 7763,
      account_name: 'Shopify Store jxw65y-0d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jxw65y-0d.myshopify.com',
          website_id: 6910,
          website_name: 'www.thecozywardrobe.co.za',
          skus: 273,
        },
      ],
    },
    {
      account_id: 7765,
      account_name: 'Shopify Store raceology-dh2t.myshopify.com',
      websites: [],
    },
    {
      account_id: 7769,
      account_name: 'Big Commerce Store azufoo16fw',
      websites: [
        {
          account_name: 'Big Commerce Store azufoo16fw',
          website_id: 6920,
          website_name: 'rajeshtest.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7770,
      account_name: 'Big Commerce Store gvchah',
      websites: [],
    },
    {
      account_id: 7771,
      account_name: 'Big Commerce Store 8730teb8',
      websites: [
        {
          account_name: 'Big Commerce Store 8730teb8',
          website_id: 6923,
          website_name: 'www.dogleggs.com',
          skus: 140,
        },
      ],
    },
    {
      account_id: 7772,
      account_name: 'DogLeggs',
      websites: [],
    },
    {
      account_id: 7773,
      account_name: 'Big Commerce Store 9gzena4d11',
      websites: [],
    },
    {
      account_id: 7774,
      account_name: 'Cty Bao Linh',
      websites: [],
    },
    {
      account_id: 7775,
      account_name: 'Big Commerce Store rc8egsctu8',
      websites: [],
    },
    {
      account_id: 7776,
      account_name: 'Big Commerce Store yrda1y',
      websites: [
        {
          account_name: 'Big Commerce Store yrda1y',
          website_id: 6926,
          website_name: 'workshopgraphics.co.nz',
          skus: 35599,
        },
      ],
    },
    {
      account_id: 7342,
      account_name: 'Big Commerce Store 5fl0unj4d',
      websites: [
        {
          account_name: 'Big Commerce Store 5fl0unj4d',
          website_id: 6501,
          website_name: 'www.trendytransfers.com',
          skus: 99179,
        },
      ],
    },
    {
      account_id: 7612,
      account_name: 'Shopify Store zomdo.myshopify.com',
      websites: [],
    },
    {
      account_id: 7784,
      account_name: 'Big Commerce Store pqitvsnj2x',
      websites: [],
    },
    {
      account_id: 7725,
      account_name: 'HairCo',
      websites: [
        {
          account_name: 'HairCo',
          website_id: 6871,
          website_name: 'www.shophairco.com.au',
          skus: 5236,
        },
      ],
    },
    {
      account_id: 7777,
      account_name: 'Big Commerce Store v1xykmsome',
      websites: [
        {
          account_name: 'Big Commerce Store v1xykmsome',
          website_id: 6927,
          website_name: 'www.auntrubyspeanuts.com',
          skus: 78,
        },
      ],
    },
    {
      account_id: 7778,
      account_name: "Aunt Ruby's Peanuts",
      websites: [],
    },
    {
      account_id: 7779,
      account_name: 'Shopify Store fcc34f-2a.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fcc34f-2a.myshopify.com',
          website_id: 6928,
          website_name: 'limitplus1offroad.com',
          skus: 2021,
        },
      ],
    },
    {
      account_id: 7780,
      account_name: 'Big Commerce Store attdmacx3a',
      websites: [],
    },
    {
      account_id: 7782,
      account_name: 'Big Commerce Store ntany0elw9',
      websites: [
        {
          account_name: 'Big Commerce Store ntany0elw9',
          website_id: 6931,
          website_name: 'agwheelexpress.com',
          skus: 589,
        },
      ],
    },
    {
      account_id: 7783,
      account_name: 'Ag Wheel Express',
      websites: [],
    },
    {
      account_id: 7785,
      account_name: 'A.D.A AUDIO PLUS',
      websites: [],
    },
    {
      account_id: 7786,
      account_name: 'Shopify Store tealove24-4876.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tealove24-4876.myshopify.com',
          website_id: 6934,
          website_name: 'grenzland-genuss.de',
          skus: 126,
        },
      ],
    },
    {
      account_id: 7787,
      account_name: 'Big Commerce Store p486s45a99',
      websites: [
        {
          account_name: 'Big Commerce Store p486s45a99',
          website_id: 6937,
          website_name: 'thegelbottle.us',
          skus: 1288,
        },
      ],
    },
    {
      account_id: 7789,
      account_name: 'Workshop Graphics Ltd',
      websites: [],
    },
    {
      account_id: 7790,
      account_name: 'Workshop Graphics',
      websites: [],
    },
    {
      account_id: 7791,
      account_name: 'Big Commerce Store gdva05ut0r',
      websites: [],
    },
    {
      account_id: 7792,
      account_name: 'Big Commerce Store cslij34emb',
      websites: [
        {
          account_name: 'Big Commerce Store cslij34emb',
          website_id: 6940,
          website_name: 'edivauebook.mybigcommerce.com',
          skus: 226919,
        },
      ],
    },
    {
      account_id: 7793,
      account_name: 'edivaursongrail',
      websites: [],
    },
    {
      account_id: 7794,
      account_name: 'Shopify Store kbxqg3-r6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kbxqg3-r6.myshopify.com',
          website_id: 6941,
          website_name: 'remotecontroltoysplus.com',
          skus: 49,
        },
      ],
    },
    {
      account_id: 7814,
      account_name: 'Shopify Store 0z8xsj-xn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0z8xsj-xn.myshopify.com',
          website_id: 6968,
          website_name: 'colorado-styler.myshopify.com',
          skus: 4,
        },
      ],
    },
    {
      account_id: 7795,
      account_name: 'Shopify Store xtv47d-zw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xtv47d-zw.myshopify.com',
          website_id: 6942,
          website_name: 'vfddirect.com',
          skus: 447,
        },
      ],
    },
    {
      account_id: 7796,
      account_name: 'Shopify Store qvs96d-nv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qvs96d-nv.myshopify.com',
          website_id: 6943,
          website_name: 'amicart.au',
          skus: 52726,
        },
      ],
    },
    {
      account_id: 7797,
      account_name: 'Big Commerce Store 6phha',
      websites: [
        {
          account_name: 'Big Commerce Store 6phha',
          website_id: 6944,
          website_name: 'www.supremekitchenbath.com',
          skus: 103485,
        },
      ],
    },
    {
      account_id: 7798,
      account_name: 'supremekitchenbath.com',
      websites: [],
    },
    {
      account_id: 7799,
      account_name: 'Shopify Store isiju0-t1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store isiju0-t1.myshopify.com',
          website_id: 6945,
          website_name: 'matrixes.info',
          skus: 6,
        },
      ],
    },
    {
      account_id: 7800,
      account_name: 'Shopify Store qsjswp-rm.myshopify.com',
      websites: [],
    },
    {
      account_id: 7801,
      account_name: 'Shopify Store feral-strumpet.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store feral-strumpet.myshopify.com',
          website_id: 6948,
          website_name: 'feralstrumpet.com',
          skus: 526,
        },
      ],
    },
    {
      account_id: 7802,
      account_name: 'Big Commerce Store 5muosub5nc',
      websites: [
        {
          account_name: 'Big Commerce Store 5muosub5nc',
          website_id: 6949,
          website_name: 'bitto-digi-banks-e8.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7803,
      account_name: "Bitto Digi Bank's ",
      websites: [],
    },
    {
      account_id: 7805,
      account_name: 'Shopify Store zfjhpv-ig.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zfjhpv-ig.myshopify.com',
          website_id: 6951,
          website_name: 'zfjhpv-ig.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7815,
      account_name: 'Shopify Store cdhkaw-d3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cdhkaw-d3.myshopify.com',
          website_id: 6969,
          website_name: 'lunavitae.com',
          skus: 5247,
        },
      ],
    },
    {
      account_id: 7816,
      account_name: 'Shopify Store g5vam8-ty.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store g5vam8-ty.myshopify.com',
          website_id: 6971,
          website_name: 'www.wixusps.com',
          skus: 339,
        },
      ],
    },
    {
      account_id: 7818,
      account_name: 'Big Commerce Store gfrmfy65e4',
      websites: [],
    },
    {
      account_id: 7820,
      account_name: 'Empire furniture',
      websites: [
        {
          account_name: 'Empire furniture',
          website_id: 6996,
          website_name: 'empirefurniture.com.au',
          skus: 42924,
        },
      ],
    },
    {
      account_id: 7821,
      account_name: 'Shopify Store pcfpqc-1q.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pcfpqc-1q.myshopify.com',
          website_id: 6977,
          website_name: 'pcfpqc-1q.myshopify.com',
          skus: 7500,
        },
      ],
    },
    {
      account_id: 7822,
      account_name: 'Shopify Store 3m8pcf-si.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3m8pcf-si.myshopify.com',
          website_id: 6980,
          website_name: '3m8pcf-si.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7823,
      account_name: 'Shopify Store 5ttmpe-cb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 5ttmpe-cb.myshopify.com',
          website_id: 6981,
          website_name: '5ttmpe-cb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7824,
      account_name: 'Shopify Store 0n9w0r-ga.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0n9w0r-ga.myshopify.com',
          website_id: 6982,
          website_name: '0n9w0r-ga.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7825,
      account_name: 'Shopify Store att1sj-c6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store att1sj-c6.myshopify.com',
          website_id: 6983,
          website_name: 'att1sj-c6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7826,
      account_name: 'Shopify Store 0adj9c-7m.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0adj9c-7m.myshopify.com',
          website_id: 6984,
          website_name: '0adj9c-7m.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7828,
      account_name: 'Shopify Store fv48xv-yp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fv48xv-yp.myshopify.com',
          website_id: 6986,
          website_name: 'fv48xv-yp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7851,
      account_name: 'Shopify Store b1smrq-xd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b1smrq-xd.myshopify.com',
          website_id: 7013,
          website_name: 'b1smrq-xd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7857,
      account_name: 'Shopify Store utpjr9-br.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store utpjr9-br.myshopify.com',
          website_id: 7019,
          website_name: 'utpjr9-br.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7860,
      account_name: 'Shopify Store k5mt6c-36.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store k5mt6c-36.myshopify.com',
          website_id: 7022,
          website_name: 'k5mt6c-36.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7865,
      account_name: 'Shopify Store ug1251-1p.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ug1251-1p.myshopify.com',
          website_id: 7027,
          website_name: 'ug1251-1p.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7876,
      account_name: 'Shopify Store nakul1998.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nakul1998.myshopify.com',
          website_id: 7039,
          website_name: 'nakul1998.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7877,
      account_name: 'Big Commerce Store 2h0b0p7q3w',
      websites: [
        {
          account_name: 'Big Commerce Store 2h0b0p7q3w',
          website_id: 7040,
          website_name: 'sheepwoolinsulationshop.co.uk',
          skus: 95,
        },
      ],
    },
    {
      account_id: 7878,
      account_name: 'Shopify Store 8gkzzy-zj.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8gkzzy-zj.myshopify.com',
          website_id: 7041,
          website_name: '8gkzzy-zj.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7879,
      account_name: 'Shopify Store 1sxgyu-z2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1sxgyu-z2.myshopify.com',
          website_id: 7042,
          website_name: '1sxgyu-z2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7880,
      account_name: 'Shopify Store y0bf9e-fq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store y0bf9e-fq.myshopify.com',
          website_id: 7043,
          website_name: 'y0bf9e-fq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7881,
      account_name: 'Shopify Store pqu10k-xu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pqu10k-xu.myshopify.com',
          website_id: 7044,
          website_name: 'pqu10k-xu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7883,
      account_name: 'Shopify Store htgtvy-sb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store htgtvy-sb.myshopify.com',
          website_id: 7046,
          website_name: 'htgtvy-sb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7884,
      account_name: 'Shopify Store 2tfigf-bf.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2tfigf-bf.myshopify.com',
          website_id: 7047,
          website_name: '2tfigf-bf.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7885,
      account_name: 'Shopify Store 6pxneb-9p.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 6pxneb-9p.myshopify.com',
          website_id: 7048,
          website_name: '6pxneb-9p.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7886,
      account_name: 'Shopify Store 1gt1ca-fn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1gt1ca-fn.myshopify.com',
          website_id: 7049,
          website_name: '1gt1ca-fn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7887,
      account_name: 'Shopify Store 415jrd-i9.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 415jrd-i9.myshopify.com',
          website_id: 7050,
          website_name: '415jrd-i9.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7888,
      account_name: 'Exovitahealth',
      websites: [
        {
          account_name: 'Exovitahealth',
          website_id: 7051,
          website_name: 'exovitahealth.com.au',
          skus: 51,
        },
      ],
    },
    {
      account_id: 7889,
      account_name: 'Big Commerce Store sf6yw',
      websites: [
        {
          account_name: 'Big Commerce Store sf6yw',
          website_id: 7052,
          website_name: 'store.rightstartmath.com',
          skus: 369,
        },
      ],
    },
    {
      account_id: 7890,
      account_name: 'RightStart Math',
      websites: [],
    },
    {
      account_id: 7891,
      account_name: 'Shopify Store bxkyje-t1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bxkyje-t1.myshopify.com',
          website_id: 7053,
          website_name: 'bxkyje-t1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7892,
      account_name: 'Shopify Store njgqu5-sd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store njgqu5-sd.myshopify.com',
          website_id: 7054,
          website_name: 'njgqu5-sd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7894,
      account_name: 'Shopify Store i730tv-5h.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store i730tv-5h.myshopify.com',
          website_id: 7055,
          website_name: 'i730tv-5h.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7895,
      account_name: 'Shopify Store dtkjcg-zx.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dtkjcg-zx.myshopify.com',
          website_id: 7056,
          website_name: 'dtkjcg-zx.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7896,
      account_name: 'Shopify Store ufum9n-5g.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ufum9n-5g.myshopify.com',
          website_id: 7057,
          website_name: 'ufum9n-5g.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7898,
      account_name: 'Shopify Store xch6gc-qm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xch6gc-qm.myshopify.com',
          website_id: 7059,
          website_name: 'xch6gc-qm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7900,
      account_name: 'Shopify Store m3jsgv-ee.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store m3jsgv-ee.myshopify.com',
          website_id: 7061,
          website_name: 'm3jsgv-ee.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7901,
      account_name: 'Shopify Store gbpapr-rw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gbpapr-rw.myshopify.com',
          website_id: 7062,
          website_name: 'gbpapr-rw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7904,
      account_name: 'Shopify Store s0m029-hb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store s0m029-hb.myshopify.com',
          website_id: 7065,
          website_name: 's0m029-hb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7905,
      account_name: 'Shopify Store d0tgfv-4i.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store d0tgfv-4i.myshopify.com',
          website_id: 7066,
          website_name: 'd0tgfv-4i.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7907,
      account_name: 'Shopify Store jcaezf-yv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jcaezf-yv.myshopify.com',
          website_id: 7068,
          website_name: 'jcaezf-yv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7908,
      account_name: 'Shopify Store zfsscw-ff.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zfsscw-ff.myshopify.com',
          website_id: 7069,
          website_name: 'zfsscw-ff.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7909,
      account_name: 'Shopify Store nfc5ut-dg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nfc5ut-dg.myshopify.com',
          website_id: 7070,
          website_name: 'nfc5ut-dg.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7910,
      account_name: 'Big Commerce Store sda4xku1s1',
      websites: [
        {
          account_name: 'Big Commerce Store sda4xku1s1',
          website_id: 7071,
          website_name: 'bpnorthwest.com',
          skus: 4588,
        },
      ],
    },
    {
      account_id: 7911,
      account_name: 'British Parts NW Inc.',
      websites: [],
    },
    {
      account_id: 7913,
      account_name: 'Shopify Store cgggtn-v8.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cgggtn-v8.myshopify.com',
          website_id: 7073,
          website_name: 'cgggtn-v8.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7915,
      account_name: 'Shopify Store 8q6m01-cg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8q6m01-cg.myshopify.com',
          website_id: 7075,
          website_name: '8q6m01-cg.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7917,
      account_name: 'Shopify Store tm5xav-wn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tm5xav-wn.myshopify.com',
          website_id: 7077,
          website_name: 'tm5xav-wn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7919,
      account_name: 'Shopify Store pybwfy-xc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pybwfy-xc.myshopify.com',
          website_id: 7079,
          website_name: 'pybwfy-xc.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7920,
      account_name: 'Shopify Store ay90mv-3j.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ay90mv-3j.myshopify.com',
          website_id: 7080,
          website_name: 'ay90mv-3j.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7922,
      account_name: 'Shopify Store ybg3pe-gi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ybg3pe-gi.myshopify.com',
          website_id: 7082,
          website_name: 'ybg3pe-gi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7924,
      account_name: 'Shopify Store ehugjq-12.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ehugjq-12.myshopify.com',
          website_id: 7084,
          website_name: 'ehugjq-12.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7926,
      account_name: 'Shopify Store psgt3q-at.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store psgt3q-at.myshopify.com',
          website_id: 7086,
          website_name: 'psgt3q-at.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7928,
      account_name: 'Shopify Store biizcs-f0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store biizcs-f0.myshopify.com',
          website_id: 7088,
          website_name: 'biizcs-f0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7931,
      account_name: 'Automation International, LLC',
      websites: [],
    },
    {
      account_id: 7932,
      account_name: 'Orange Line',
      websites: [
        {
          account_name: 'Orange Line',
          website_id: 7237,
          website_name: 'www.mwave.com.au',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7933,
      account_name: 'Shopify Store ssj1ys-yq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ssj1ys-yq.myshopify.com',
          website_id: 7089,
          website_name: 'ssj1ys-yq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7934,
      account_name: 'Shopify Store zy141n-su.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zy141n-su.myshopify.com',
          website_id: 7090,
          website_name: 'zy141n-su.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7935,
      account_name: 'Shopify Store uq4yss-6m.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store uq4yss-6m.myshopify.com',
          website_id: 7091,
          website_name: 'uq4yss-6m.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7936,
      account_name: 'Shopify Store nvdzxw-92.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nvdzxw-92.myshopify.com',
          website_id: 7092,
          website_name: 'nvdzxw-92.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7937,
      account_name: 'Shopify Store h2c21m-jy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store h2c21m-jy.myshopify.com',
          website_id: 7093,
          website_name: 'h2c21m-jy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7938,
      account_name: 'Shopify Store hthads-eg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hthads-eg.myshopify.com',
          website_id: 7094,
          website_name: 'hthads-eg.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7939,
      account_name: 'Shopify Store n7yr3d-tv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store n7yr3d-tv.myshopify.com',
          website_id: 7095,
          website_name: 'n7yr3d-tv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7940,
      account_name: 'Shopify Store frigr0-ni.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store frigr0-ni.myshopify.com',
          website_id: 7096,
          website_name: 'frigr0-ni.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7941,
      account_name: 'Shopify Store w1ua5e-2i.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store w1ua5e-2i.myshopify.com',
          website_id: 7097,
          website_name: 'w1ua5e-2i.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7942,
      account_name: 'Shopify Store 1sjv0u-s4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1sjv0u-s4.myshopify.com',
          website_id: 7098,
          website_name: '1sjv0u-s4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7944,
      account_name: 'Shopify Store g0nxf1-1d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store g0nxf1-1d.myshopify.com',
          website_id: 7100,
          website_name: 'g0nxf1-1d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7945,
      account_name: 'Shopify Store bbdc4b-dz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bbdc4b-dz.myshopify.com',
          website_id: 7101,
          website_name: 'bbdc4b-dz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7947,
      account_name: 'Shopify Store gdds4p-t6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gdds4p-t6.myshopify.com',
          website_id: 7103,
          website_name: 'gdds4p-t6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7948,
      account_name: 'Shopify Store 4w0fxt-0t.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 4w0fxt-0t.myshopify.com',
          website_id: 7104,
          website_name: '4w0fxt-0t.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7949,
      account_name: 'Shopify Store 8vpdnv-xw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8vpdnv-xw.myshopify.com',
          website_id: 7105,
          website_name: '8vpdnv-xw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7950,
      account_name: 'Shopify Store m8he1t-uu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store m8he1t-uu.myshopify.com',
          website_id: 7106,
          website_name: 'm8he1t-uu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7951,
      account_name: 'Shopify Store 11tnwv-qy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 11tnwv-qy.myshopify.com',
          website_id: 7107,
          website_name: '11tnwv-qy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7817,
      account_name: 'mwave',
      websites: [
        {
          account_name: 'mwave',
          website_id: 6972,
          website_name: 'www.mwave.com.au',
          skus: 18196,
        },
      ],
    },
    {
      account_id: 7806,
      account_name: 'We Brand It',
      websites: [
        {
          account_name: 'We Brand It',
          website_id: 6952,
          website_name: 'www.webrandit.co.uk',
          skus: 53320,
        },
      ],
    },
    {
      account_id: 7804,
      account_name: 'Tapestry',
      websites: [
        {
          account_name: 'Tapestry',
          website_id: 1259,
          website_name: 'coachaustralia.com',
          skus: 729,
        },
        {
          account_name: 'Tapestry',
          website_id: 3669,
          website_name: 'au.coachoutlet.com',
          skus: 1690,
        },
        {
          account_name: 'Tapestry',
          website_id: 4091,
          website_name: 'nz.coach.com',
          skus: 988,
        },
        {
          account_name: 'Tapestry',
          website_id: 2081,
          website_name: 'katespade.com.au',
          skus: 1420,
        },
      ],
    },
    {
      account_id: 7807,
      account_name: 'Shopify Store cmks7k-au.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cmks7k-au.myshopify.com',
          website_id: 6953,
          website_name: 'www.hopsandpops.com',
          skus: 1278,
        },
      ],
    },
    {
      account_id: 7808,
      account_name: 'Shopify Store 7hvek8-eh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7hvek8-eh.myshopify.com',
          website_id: 6958,
          website_name: '7hvek8-eh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7809,
      account_name: 'Shopify Store azwq-9933.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store azwq-9933.myshopify.com',
          website_id: 6959,
          website_name: 'amer-ip.com',
          skus: 2481,
        },
      ],
    },
    {
      account_id: 7810,
      account_name: 'Big Commerce Store vmq84id47e',
      websites: [
        {
          account_name: 'Big Commerce Store vmq84id47e',
          website_id: 6961,
          website_name: 'oriente.mybigcommerce.com',
          skus: 68,
        },
      ],
    },
    {
      account_id: 7811,
      account_name: 'Shopify Store xmkf2y-xm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xmkf2y-xm.myshopify.com',
          website_id: 6962,
          website_name: 'colorado-dill.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7862,
      account_name: 'Shopify Store gpe3ma-mh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gpe3ma-mh.myshopify.com',
          website_id: 7024,
          website_name: 'gpe3ma-mh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6264,
      account_name: 'Onsport',
      websites: [
        {
          account_name: 'Onsport',
          website_id: 3608,
          website_name: 'www.onsport.com.au',
          skus: 7958,
        },
      ],
    },
    {
      account_id: 7863,
      account_name: 'Shopify Store pg1iqt-nu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pg1iqt-nu.myshopify.com',
          website_id: 7025,
          website_name: 'pg1iqt-nu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7812,
      account_name: 'Cue & Co Pty Ltd',
      websites: [
        {
          account_name: 'Cue & Co Pty Ltd',
          website_id: 6963,
          website_name: 'www.cue.com',
          skus: 3061,
        },
        {
          account_name: 'Cue & Co Pty Ltd',
          website_id: 6964,
          website_name: 'nz.cue.com',
          skus: 2264,
        },
        {
          account_name: 'Cue & Co Pty Ltd',
          website_id: 6965,
          website_name: 'www.veronikamaine.com.au',
          skus: 3821,
        },
        {
          account_name: 'Cue & Co Pty Ltd',
          website_id: 6966,
          website_name: 'www.veronikamaine.co.nz',
          skus: 1406,
        },
      ],
    },
    {
      account_id: 7819,
      account_name: 'Principle Supply',
      websites: [],
    },
    {
      account_id: 7827,
      account_name: 'Shopify Store zqehy8-se.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zqehy8-se.myshopify.com',
          website_id: 6985,
          website_name: 'zqehy8-se.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7829,
      account_name: 'Shopify Store hdetkd-y6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hdetkd-y6.myshopify.com',
          website_id: 6987,
          website_name: 'hdetkd-y6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7830,
      account_name: 'Shopify Store qzhtab-f6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qzhtab-f6.myshopify.com',
          website_id: 6988,
          website_name: 'qzhtab-f6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7831,
      account_name: 'Shopify Store rs41wc-w1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rs41wc-w1.myshopify.com',
          website_id: 6989,
          website_name: 'rs41wc-w1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7832,
      account_name: 'Shopify Store fjq1wf-eh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fjq1wf-eh.myshopify.com',
          website_id: 6990,
          website_name: 'fjq1wf-eh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7833,
      account_name: 'Shopify Store zga1r8-9h.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zga1r8-9h.myshopify.com',
          website_id: 6991,
          website_name: 'zga1r8-9h.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7834,
      account_name: 'Shopify Store wh0atf-aw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wh0atf-aw.myshopify.com',
          website_id: 6992,
          website_name: 'wh0atf-aw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7835,
      account_name: 'Shopify Store 91adff-xf.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 91adff-xf.myshopify.com',
          website_id: 6993,
          website_name: '91adff-xf.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7836,
      account_name: 'Shopify Store s40afb-pn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store s40afb-pn.myshopify.com',
          website_id: 6994,
          website_name: 's40afb-pn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7837,
      account_name: 'Penguin Uniform',
      websites: [],
    },
    {
      account_id: 7838,
      account_name: 'www.groovewarehouse.com.au',
      websites: [
        {
          account_name: 'www.groovewarehouse.com.au',
          website_id: 6999,
          website_name: 'www.groovewarehouse.com.au',
          skus: 5552,
        },
      ],
    },
    {
      account_id: 7839,
      account_name: 'Shopify Store jnmzn2-gc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jnmzn2-gc.myshopify.com',
          website_id: 7000,
          website_name: 'jnmzn2-gc.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7840,
      account_name: 'Shopify Store 1rx5c6-3y.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1rx5c6-3y.myshopify.com',
          website_id: 7001,
          website_name: '1rx5c6-3y.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7841,
      account_name: 'Shopify Store cui0cz-r1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cui0cz-r1.myshopify.com',
          website_id: 7002,
          website_name: 'cui0cz-r1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7842,
      account_name: 'Shopify Store 37uu9t-qu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 37uu9t-qu.myshopify.com',
          website_id: 7003,
          website_name: '37uu9t-qu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7843,
      account_name: 'Shopify Store umf700-qe.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store umf700-qe.myshopify.com',
          website_id: 7004,
          website_name: 'umf700-qe.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7844,
      account_name: 'Shopify Store falcon-mobility-singapore.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store falcon-mobility-singapore.myshopify.com',
          website_id: 7006,
          website_name: 'elfigo.sg',
          skus: 456,
        },
      ],
    },
    {
      account_id: 7845,
      account_name: 'mirumiru.ro',
      websites: [],
    },
    {
      account_id: 7846,
      account_name: 'Shopify Store 1vnmme-ut.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1vnmme-ut.myshopify.com',
          website_id: 7008,
          website_name: '1vnmme-ut.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7847,
      account_name: 'Shopify Store pnbg1d-iy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pnbg1d-iy.myshopify.com',
          website_id: 7009,
          website_name: 'pnbg1d-iy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7848,
      account_name: 'Shopify Store vvqpzr-di.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vvqpzr-di.myshopify.com',
          website_id: 7010,
          website_name: 'vvqpzr-di.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7849,
      account_name: 'Shopify Store wj0j1f-k4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wj0j1f-k4.myshopify.com',
          website_id: 7011,
          website_name: 'wj0j1f-k4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7850,
      account_name: 'Shopify Store 8busag-qi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8busag-qi.myshopify.com',
          website_id: 7012,
          website_name: '8busag-qi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7852,
      account_name: 'Shopify Store nei8av-sp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nei8av-sp.myshopify.com',
          website_id: 7014,
          website_name: 'nei8av-sp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7853,
      account_name: 'Shopify Store tr40nv-uy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tr40nv-uy.myshopify.com',
          website_id: 7015,
          website_name: 'tr40nv-uy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7854,
      account_name: 'Shopify Store rj9tyy-wy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rj9tyy-wy.myshopify.com',
          website_id: 7016,
          website_name: 'rj9tyy-wy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7855,
      account_name: 'Shopify Store nchtxw-q5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nchtxw-q5.myshopify.com',
          website_id: 7017,
          website_name: 'nchtxw-q5.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7856,
      account_name: 'Shopify Store 1w0vpp-by.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1w0vpp-by.myshopify.com',
          website_id: 7018,
          website_name: '1w0vpp-by.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7858,
      account_name: 'Shopify Store pyajea-uq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pyajea-uq.myshopify.com',
          website_id: 7020,
          website_name: 'pyajea-uq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7859,
      account_name: 'Shopify Store tnhu2e-m1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tnhu2e-m1.myshopify.com',
          website_id: 7021,
          website_name: 'tnhu2e-m1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7861,
      account_name: 'Shopify Store riy05v-ry.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store riy05v-ry.myshopify.com',
          website_id: 7023,
          website_name: 'riy05v-ry.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7864,
      account_name: 'Shopify Store wtxy3u-dr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wtxy3u-dr.myshopify.com',
          website_id: 7026,
          website_name: 'wtxy3u-dr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7866,
      account_name: 'Shopify Store p9u8zw-v5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store p9u8zw-v5.myshopify.com',
          website_id: 7028,
          website_name: 'p9u8zw-v5.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7867,
      account_name: 'Shopify Store v1q1n9-1e.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store v1q1n9-1e.myshopify.com',
          website_id: 7029,
          website_name: 'v1q1n9-1e.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7868,
      account_name: 'Shopify Store yhbapf-kp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yhbapf-kp.myshopify.com',
          website_id: 7030,
          website_name: 'yhbapf-kp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7869,
      account_name: 'Shopify Store 54e1vm-vr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 54e1vm-vr.myshopify.com',
          website_id: 7031,
          website_name: '54e1vm-vr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7870,
      account_name: 'Shopify Store a97isf-fw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a97isf-fw.myshopify.com',
          website_id: 7032,
          website_name: 'a97isf-fw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7871,
      account_name: 'Shopify Store xcq0wb-i0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xcq0wb-i0.myshopify.com',
          website_id: 7033,
          website_name: 'xcq0wb-i0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7872,
      account_name: 'Shopify Store 9gknyk-8r.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 9gknyk-8r.myshopify.com',
          website_id: 7034,
          website_name: '9gknyk-8r.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7873,
      account_name: 'Shopify Store implementek.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store implementek.myshopify.com',
          website_id: 7035,
          website_name: 'implementek.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7874,
      account_name: 'Big Commerce Store xvd8me65kx',
      websites: [
        {
          account_name: 'Big Commerce Store xvd8me65kx',
          website_id: 7038,
          website_name: 'panda-wagon.com',
          skus: 280,
        },
      ],
    },
    {
      account_id: 7882,
      account_name: 'Shopify Store b9jn2d-yt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b9jn2d-yt.myshopify.com',
          website_id: 7045,
          website_name: 'b9jn2d-yt.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7893,
      account_name: 'RightStart Mathematics',
      websites: [],
    },
    {
      account_id: 7897,
      account_name: 'Shopify Store n0qdeq-kz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store n0qdeq-kz.myshopify.com',
          website_id: 7058,
          website_name: 'n0qdeq-kz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7899,
      account_name: 'Shopify Store vvrqvv-xn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vvrqvv-xn.myshopify.com',
          website_id: 7060,
          website_name: 'vvrqvv-xn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7902,
      account_name: 'Shopify Store airgy2-ib.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store airgy2-ib.myshopify.com',
          website_id: 7063,
          website_name: 'airgy2-ib.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7903,
      account_name: 'Shopify Store 6vmsm2-n1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 6vmsm2-n1.myshopify.com',
          website_id: 7064,
          website_name: '6vmsm2-n1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7906,
      account_name: 'Shopify Store yqn7dd-e9.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yqn7dd-e9.myshopify.com',
          website_id: 7067,
          website_name: 'yqn7dd-e9.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7912,
      account_name: 'Shopify Store v8jkyf-89.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store v8jkyf-89.myshopify.com',
          website_id: 7072,
          website_name: 'v8jkyf-89.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7914,
      account_name: 'Shopify Store jreke3-sm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jreke3-sm.myshopify.com',
          website_id: 7074,
          website_name: 'jreke3-sm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7916,
      account_name: 'Shopify Store unhmr1-v6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store unhmr1-v6.myshopify.com',
          website_id: 7076,
          website_name: 'unhmr1-v6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7918,
      account_name: 'Shopify Store eei0u8-y2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store eei0u8-y2.myshopify.com',
          website_id: 7078,
          website_name: 'eei0u8-y2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7921,
      account_name: 'Shopify Store 0ifaiv-kb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0ifaiv-kb.myshopify.com',
          website_id: 7081,
          website_name: '0ifaiv-kb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7923,
      account_name: 'Shopify Store g9wure-i0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store g9wure-i0.myshopify.com',
          website_id: 7083,
          website_name: 'g9wure-i0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7925,
      account_name: 'Shopify Store 510ub0-kw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 510ub0-kw.myshopify.com',
          website_id: 7085,
          website_name: '510ub0-kw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7927,
      account_name: 'Shopify Store xgtyqq-gf.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xgtyqq-gf.myshopify.com',
          website_id: 7087,
          website_name: 'xgtyqq-gf.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7943,
      account_name: 'Shopify Store 401tbc-y7.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 401tbc-y7.myshopify.com',
          website_id: 7099,
          website_name: '401tbc-y7.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7946,
      account_name: 'Shopify Store 2kfh9f-ny.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2kfh9f-ny.myshopify.com',
          website_id: 7102,
          website_name: '2kfh9f-ny.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7952,
      account_name: 'Shopify Store df1red-6u.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store df1red-6u.myshopify.com',
          website_id: 7108,
          website_name: 'df1red-6u.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7953,
      account_name: 'Shopify Store 3ckc50-f0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3ckc50-f0.myshopify.com',
          website_id: 7109,
          website_name: '3ckc50-f0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7954,
      account_name: 'Shopify Store fzgnkw-cy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fzgnkw-cy.myshopify.com',
          website_id: 7110,
          website_name: 'fzgnkw-cy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7955,
      account_name: 'Shopify Store ipjrhd-sz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ipjrhd-sz.myshopify.com',
          website_id: 7111,
          website_name: 'ipjrhd-sz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7956,
      account_name: 'Shopify Store k7jsht-n1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store k7jsht-n1.myshopify.com',
          website_id: 7112,
          website_name: 'k7jsht-n1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7957,
      account_name: 'Shopify Store 7v8jem-ba.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7v8jem-ba.myshopify.com',
          website_id: 7113,
          website_name: '7v8jem-ba.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7958,
      account_name: 'Shopify Store 0ptnry-hz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0ptnry-hz.myshopify.com',
          website_id: 7114,
          website_name: '0ptnry-hz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7959,
      account_name: 'Shopify Store ryyuef-qu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ryyuef-qu.myshopify.com',
          website_id: 7115,
          website_name: 'ryyuef-qu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7960,
      account_name: 'Shopify Store yihud1-ak.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yihud1-ak.myshopify.com',
          website_id: 7116,
          website_name: 'yihud1-ak.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7961,
      account_name: 'Shopify Store vjaejd-tb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vjaejd-tb.myshopify.com',
          website_id: 7117,
          website_name: 'vjaejd-tb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7962,
      account_name: 'Shopify Store r301a0-h0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store r301a0-h0.myshopify.com',
          website_id: 7118,
          website_name: 'r301a0-h0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7963,
      account_name: 'Shopify Store cdzstd-bm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cdzstd-bm.myshopify.com',
          website_id: 7119,
          website_name: 'cdzstd-bm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7964,
      account_name: 'Shopify Store ea29ih-wq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ea29ih-wq.myshopify.com',
          website_id: 7120,
          website_name: 'ea29ih-wq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7965,
      account_name: 'Shopify Store 0nftag-fy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0nftag-fy.myshopify.com',
          website_id: 7121,
          website_name: '0nftag-fy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7966,
      account_name: 'Shopify Store 0z7f0f-xt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0z7f0f-xt.myshopify.com',
          website_id: 7122,
          website_name: '0z7f0f-xt.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7967,
      account_name: 'Shopify Store k3upbs-ke.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store k3upbs-ke.myshopify.com',
          website_id: 7123,
          website_name: 'k3upbs-ke.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7968,
      account_name: 'Shopify Store izgmau-tv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store izgmau-tv.myshopify.com',
          website_id: 7124,
          website_name: 'izgmau-tv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7969,
      account_name: 'Shopify Store mivyrj-0i.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mivyrj-0i.myshopify.com',
          website_id: 7125,
          website_name: 'mivyrj-0i.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7970,
      account_name: 'Shopify Store 3qhfms-iy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3qhfms-iy.myshopify.com',
          website_id: 7126,
          website_name: '3qhfms-iy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7971,
      account_name: 'Shopify Store 2ntkna-st.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2ntkna-st.myshopify.com',
          website_id: 7127,
          website_name: '2ntkna-st.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7972,
      account_name: 'Shopify Store qqcbr2-es.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qqcbr2-es.myshopify.com',
          website_id: 7128,
          website_name: 'novoa.co.uk',
          skus: 302,
        },
      ],
    },
    {
      account_id: 7973,
      account_name: 'Shopify Store yrgyd4-ma.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yrgyd4-ma.myshopify.com',
          website_id: 7129,
          website_name: 'yrgyd4-ma.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7974,
      account_name: 'Shopify Store w1wjcy-gi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store w1wjcy-gi.myshopify.com',
          website_id: 7130,
          website_name: 'w1wjcy-gi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7975,
      account_name: 'Shopify Store gbsubk-r8.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gbsubk-r8.myshopify.com',
          website_id: 7131,
          website_name: 'gbsubk-r8.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7976,
      account_name: 'Shopify Store pn17nu-ah.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pn17nu-ah.myshopify.com',
          website_id: 7134,
          website_name: 'pn17nu-ah.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7977,
      account_name: 'Shopify Store mx3tv1-0s.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mx3tv1-0s.myshopify.com',
          website_id: 7135,
          website_name: 'mx3tv1-0s.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7978,
      account_name: 'Shopify Store 0g00ef-jk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0g00ef-jk.myshopify.com',
          website_id: 7136,
          website_name: '0g00ef-jk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7979,
      account_name: 'Shopify Store w0qtxw-nu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store w0qtxw-nu.myshopify.com',
          website_id: 7137,
          website_name: 'w0qtxw-nu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7980,
      account_name: 'Shopify Store zan3j5-cq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zan3j5-cq.myshopify.com',
          website_id: 7138,
          website_name: 'zan3j5-cq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7981,
      account_name: 'Shopify Store 1zatkd-nw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1zatkd-nw.myshopify.com',
          website_id: 7139,
          website_name: '1zatkd-nw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7982,
      account_name: 'Shopify Store 12rkiv-nh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 12rkiv-nh.myshopify.com',
          website_id: 7140,
          website_name: '12rkiv-nh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7983,
      account_name: 'Shopify Store ech2db-6j.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ech2db-6j.myshopify.com',
          website_id: 7141,
          website_name: 'ech2db-6j.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7984,
      account_name: 'Shopify Store g1rxby-ji.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store g1rxby-ji.myshopify.com',
          website_id: 7142,
          website_name: 'g1rxby-ji.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7985,
      account_name: 'Shopify Store j5e9c2-pi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store j5e9c2-pi.myshopify.com',
          website_id: 7143,
          website_name: 'j5e9c2-pi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7986,
      account_name: 'Shopify Store 01imez-nb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 01imez-nb.myshopify.com',
          website_id: 7144,
          website_name: '01imez-nb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7987,
      account_name: 'Shopify Store ca60sn-n2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ca60sn-n2.myshopify.com',
          website_id: 7145,
          website_name: 'ca60sn-n2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7988,
      account_name: 'Shopify Store qkr1ur-mh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qkr1ur-mh.myshopify.com',
          website_id: 7146,
          website_name: 'qkr1ur-mh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7989,
      account_name: 'Shopify Store xcghte-2c.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xcghte-2c.myshopify.com',
          website_id: 7147,
          website_name: 'xcghte-2c.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7990,
      account_name: 'Shopify Store b4bcqg-30.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b4bcqg-30.myshopify.com',
          website_id: 7148,
          website_name: 'b4bcqg-30.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7991,
      account_name: 'Shopify Store zw08tu-p1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zw08tu-p1.myshopify.com',
          website_id: 7149,
          website_name: 'zw08tu-p1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7992,
      account_name: 'Shopify Store aqa2ik-pk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store aqa2ik-pk.myshopify.com',
          website_id: 7150,
          website_name: 'aqa2ik-pk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7993,
      account_name: 'Shopify Store ngsi5t-c0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ngsi5t-c0.myshopify.com',
          website_id: 7151,
          website_name: 'ngsi5t-c0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7994,
      account_name: 'Shopify Store 7ir31b-hr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7ir31b-hr.myshopify.com',
          website_id: 7152,
          website_name: '7ir31b-hr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7995,
      account_name: 'Shopify Store te06xy-2q.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store te06xy-2q.myshopify.com',
          website_id: 7153,
          website_name: 'te06xy-2q.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7996,
      account_name: 'Shopify Store sx0g06-c2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sx0g06-c2.myshopify.com',
          website_id: 7154,
          website_name: 'sx0g06-c2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7997,
      account_name: 'Shopify Store 2krkxk-kc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2krkxk-kc.myshopify.com',
          website_id: 7155,
          website_name: '2krkxk-kc.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7998,
      account_name: 'Shopify Store bjtihm-gz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bjtihm-gz.myshopify.com',
          website_id: 7156,
          website_name: 'bjtihm-gz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7999,
      account_name: 'Shopify Store b4af1h-j3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b4af1h-j3.myshopify.com',
          website_id: 7157,
          website_name: 'b4af1h-j3.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8000,
      account_name: 'Shopify Store ijbbdd-in.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ijbbdd-in.myshopify.com',
          website_id: 7158,
          website_name: 'ijbbdd-in.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8001,
      account_name: 'Shopify Store 43r0ss-iv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 43r0ss-iv.myshopify.com',
          website_id: 7159,
          website_name: '43r0ss-iv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8002,
      account_name: 'Shopify Store 1tg6gn-rd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1tg6gn-rd.myshopify.com',
          website_id: 7160,
          website_name: '1tg6gn-rd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8003,
      account_name: 'Big Commerce Store 8clcyymir0',
      websites: [],
    },
    {
      account_id: 8004,
      account_name: 'Shopify Store pqwdyg-m4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pqwdyg-m4.myshopify.com',
          website_id: 7162,
          website_name: 'pqwdyg-m4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8005,
      account_name: 'Shopify Store fxpevz-xi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fxpevz-xi.myshopify.com',
          website_id: 7163,
          website_name: 'fxpevz-xi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8006,
      account_name: 'Shopify Store zpcpcx-u6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zpcpcx-u6.myshopify.com',
          website_id: 7164,
          website_name: 'zpcpcx-u6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8007,
      account_name: 'Shopify Store a5ip8z-sw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a5ip8z-sw.myshopify.com',
          website_id: 7165,
          website_name: 'a5ip8z-sw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8008,
      account_name: 'Shopify Store v1pxpi-r3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store v1pxpi-r3.myshopify.com',
          website_id: 7166,
          website_name: 'v1pxpi-r3.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8009,
      account_name: 'Shopify Store dpzvsr-0n.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dpzvsr-0n.myshopify.com',
          website_id: 7167,
          website_name: 'dpzvsr-0n.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8010,
      account_name: 'Shopify Store 7tn2ny-j0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7tn2ny-j0.myshopify.com',
          website_id: 7168,
          website_name: '7tn2ny-j0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8011,
      account_name: 'Shopify Store d12v11-83.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store d12v11-83.myshopify.com',
          website_id: 7169,
          website_name: 'd12v11-83.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8012,
      account_name: 'Shopify Store egh9tp-er.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store egh9tp-er.myshopify.com',
          website_id: 7170,
          website_name: 'egh9tp-er.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8013,
      account_name: 'Shopify Store 70wxcv-3d.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 70wxcv-3d.myshopify.com',
          website_id: 7171,
          website_name: '70wxcv-3d.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8014,
      account_name: 'Shopify Store q1hica-cw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store q1hica-cw.myshopify.com',
          website_id: 7172,
          website_name: 'q1hica-cw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8015,
      account_name: 'Shopify Store ucu1p1-kr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ucu1p1-kr.myshopify.com',
          website_id: 7173,
          website_name: 'ucu1p1-kr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8016,
      account_name: 'Shopify Store hee7g1-7i.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hee7g1-7i.myshopify.com',
          website_id: 7174,
          website_name: 'hee7g1-7i.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8017,
      account_name: 'Shopify Store 1mgx2f-29.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1mgx2f-29.myshopify.com',
          website_id: 7175,
          website_name: '1mgx2f-29.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8018,
      account_name: 'Shopify Store qt5hqg-7x.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qt5hqg-7x.myshopify.com',
          website_id: 7176,
          website_name: 'qt5hqg-7x.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8019,
      account_name: 'Shopify Store ti1sdk-fb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ti1sdk-fb.myshopify.com',
          website_id: 7177,
          website_name: 'ti1sdk-fb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8020,
      account_name: 'Shopify Store tmw1a1-7u.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store tmw1a1-7u.myshopify.com',
          website_id: 7178,
          website_name: 'tmw1a1-7u.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8021,
      account_name: 'Shopify Store hzmm0x-fw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hzmm0x-fw.myshopify.com',
          website_id: 7179,
          website_name: 'hzmm0x-fw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8022,
      account_name: 'Shopify Store jc28d2-zc.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jc28d2-zc.myshopify.com',
          website_id: 7180,
          website_name: 'jc28d2-zc.myshopify.com',
          skus: 24868,
        },
      ],
    },
    {
      account_id: 8023,
      account_name: 'Shopify Store x5vysv-ns.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store x5vysv-ns.myshopify.com',
          website_id: 7181,
          website_name: 'x5vysv-ns.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8024,
      account_name: 'Shopify Store q1ybip-w9.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store q1ybip-w9.myshopify.com',
          website_id: 7182,
          website_name: 'q1ybip-w9.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8025,
      account_name: 'Shopify Store r4iuuk-1s.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store r4iuuk-1s.myshopify.com',
          website_id: 7183,
          website_name: 'r4iuuk-1s.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8026,
      account_name: 'Shopify Store cszswe-an.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cszswe-an.myshopify.com',
          website_id: 7184,
          website_name: 'cszswe-an.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8027,
      account_name: 'Shopify Store sacrdc-wv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sacrdc-wv.myshopify.com',
          website_id: 7185,
          website_name: 'sacrdc-wv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8028,
      account_name: 'Shopify Store nqiryu-zy.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nqiryu-zy.myshopify.com',
          website_id: 7186,
          website_name: 'nqiryu-zy.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8029,
      account_name: 'Shopify Store dg0zsx-bw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dg0zsx-bw.myshopify.com',
          website_id: 7187,
          website_name: 'dg0zsx-bw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8030,
      account_name: 'Shopify Store pz1u61-1u.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pz1u61-1u.myshopify.com',
          website_id: 7188,
          website_name: 'pz1u61-1u.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8031,
      account_name: 'Shopify Store 1mvjcb-ix.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1mvjcb-ix.myshopify.com',
          website_id: 7189,
          website_name: '1mvjcb-ix.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8032,
      account_name: 'Shopify Store dqqyzh-fs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dqqyzh-fs.myshopify.com',
          website_id: 7190,
          website_name: 'dqqyzh-fs.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8033,
      account_name: 'Shopify Store hja1ph-rs.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hja1ph-rs.myshopify.com',
          website_id: 7191,
          website_name: 'hja1ph-rs.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8034,
      account_name: 'Shopify Store dne40t-zp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dne40t-zp.myshopify.com',
          website_id: 7192,
          website_name: 'dne40t-zp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8035,
      account_name: 'Shopify Store b968hz-mt.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store b968hz-mt.myshopify.com',
          website_id: 7193,
          website_name: 'b968hz-mt.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8036,
      account_name: 'Shopify Store cv0jj2-1p.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cv0jj2-1p.myshopify.com',
          website_id: 7194,
          website_name: 'cv0jj2-1p.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8037,
      account_name: 'Luxe Mirrors',
      websites: [
        {
          account_name: 'Luxe Mirrors',
          website_id: 7195,
          website_name: 'www.luxemirrors.com.au',
          skus: 3063,
        },
      ],
    },
    {
      account_id: 8038,
      account_name: 'Shopify Store ghf2y0-gp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ghf2y0-gp.myshopify.com',
          website_id: 7196,
          website_name: 'ghf2y0-gp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8083,
      account_name: 'Shopify Store 1y1m1e-y0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1y1m1e-y0.myshopify.com',
          website_id: 7243,
          website_name: '1y1m1e-y0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8062,
      account_name: 'Bprimal',
      websites: [
        {
          account_name: 'Bprimal',
          website_id: 7221,
          website_name: 'bprimal.com.au',
          skus: 4802,
        },
      ],
    },
    {
      account_id: 8039,
      account_name: 'Shopify Store dcq64b-jw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dcq64b-jw.myshopify.com',
          website_id: 7197,
          website_name: 'dcq64b-jw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8040,
      account_name: 'Shopify Store 4hitsy-yh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 4hitsy-yh.myshopify.com',
          website_id: 7198,
          website_name: '4hitsy-yh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8041,
      account_name: 'Shopify Store ftmy7j-cn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ftmy7j-cn.myshopify.com',
          website_id: 7199,
          website_name: 'ftmy7j-cn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8042,
      account_name: 'Shopify Store baktfp-fb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store baktfp-fb.myshopify.com',
          website_id: 7200,
          website_name: 'baktfp-fb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8043,
      account_name: 'Shopify Store hxujup-jp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hxujup-jp.myshopify.com',
          website_id: 7201,
          website_name: 'hxujup-jp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8044,
      account_name: 'Shopify Store v4rkgk-sp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store v4rkgk-sp.myshopify.com',
          website_id: 7202,
          website_name: 'v4rkgk-sp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8045,
      account_name: 'Shopify Store znd4w7-dm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store znd4w7-dm.myshopify.com',
          website_id: 7203,
          website_name: 'znd4w7-dm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8046,
      account_name: 'Shopify Store 0qrv00-e0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0qrv00-e0.myshopify.com',
          website_id: 7204,
          website_name: '0qrv00-e0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8047,
      account_name: 'Shopify Store gbq5ip-3y.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gbq5ip-3y.myshopify.com',
          website_id: 7205,
          website_name: 'gbq5ip-3y.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8048,
      account_name: 'Shopify Store 0hdqym-3a.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0hdqym-3a.myshopify.com',
          website_id: 7206,
          website_name: '0hdqym-3a.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8049,
      account_name: 'Shopify Store 4rne5p-hk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 4rne5p-hk.myshopify.com',
          website_id: 7207,
          website_name: '4rne5p-hk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8050,
      account_name: 'Shopify Store 56rerm-mv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 56rerm-mv.myshopify.com',
          website_id: 7208,
          website_name: '56rerm-mv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8051,
      account_name: 'Shopify Store iivxf7-jh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store iivxf7-jh.myshopify.com',
          website_id: 7209,
          website_name: 'iivxf7-jh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8052,
      account_name: 'Shopify Store 00ki37-gh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 00ki37-gh.myshopify.com',
          website_id: 7210,
          website_name: '00ki37-gh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8053,
      account_name: 'Shopify Store s9kyfk-cf.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store s9kyfk-cf.myshopify.com',
          website_id: 7211,
          website_name: 's9kyfk-cf.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8054,
      account_name: 'Shopify Store st9pi7-cm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store st9pi7-cm.myshopify.com',
          website_id: 7212,
          website_name: 'st9pi7-cm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8055,
      account_name: 'Shopify Store ksnjec-vq.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ksnjec-vq.myshopify.com',
          website_id: 7213,
          website_name: 'ksnjec-vq.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8056,
      account_name: 'Shopify Store ujcf8z-zn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ujcf8z-zn.myshopify.com',
          website_id: 7214,
          website_name: 'ujcf8z-zn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8057,
      account_name: 'Shopify Store 0f5cpa-9g.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0f5cpa-9g.myshopify.com',
          website_id: 7215,
          website_name: '0f5cpa-9g.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8058,
      account_name: 'Shopify Store stenrw-kp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store stenrw-kp.myshopify.com',
          website_id: 7216,
          website_name: 'stenrw-kp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8059,
      account_name: 'Shopify Store 2zgif3-4n.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 2zgif3-4n.myshopify.com',
          website_id: 7217,
          website_name: '2zgif3-4n.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8060,
      account_name: 'Shopify Store ubeds9-i4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ubeds9-i4.myshopify.com',
          website_id: 7218,
          website_name: 'ubeds9-i4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8061,
      account_name: 'Shopify Store uhe7bb-kz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store uhe7bb-kz.myshopify.com',
          website_id: 7219,
          website_name: 'uhe7bb-kz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8063,
      account_name: 'Shopify Store p3mf4w-ng.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store p3mf4w-ng.myshopify.com',
          website_id: 7222,
          website_name: 'p3mf4w-ng.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8064,
      account_name: 'Shopify Store q0iv50-qi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store q0iv50-qi.myshopify.com',
          website_id: 7223,
          website_name: 'q0iv50-qi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8065,
      account_name: 'Shopify Store ge4nzj-h0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ge4nzj-h0.myshopify.com',
          website_id: 7224,
          website_name: 'ge4nzj-h0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8066,
      account_name: 'Shopify Store yzpwxu-pp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yzpwxu-pp.myshopify.com',
          website_id: 7225,
          website_name: 'yzpwxu-pp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8067,
      account_name: 'Shopify Store s1eqfr-aj.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store s1eqfr-aj.myshopify.com',
          website_id: 7226,
          website_name: 's1eqfr-aj.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8068,
      account_name: 'Shopify Store 5wvtrr-cb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 5wvtrr-cb.myshopify.com',
          website_id: 7227,
          website_name: '5wvtrr-cb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8069,
      account_name: 'Shopify Store ra5gtj-m1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ra5gtj-m1.myshopify.com',
          website_id: 7228,
          website_name: 'ra5gtj-m1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8070,
      account_name: 'Shopify Store fc1cji-be.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fc1cji-be.myshopify.com',
          website_id: 7229,
          website_name: 'fc1cji-be.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8071,
      account_name: 'Shopify Store x6nbxm-fm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store x6nbxm-fm.myshopify.com',
          website_id: 7230,
          website_name: 'x6nbxm-fm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8072,
      account_name: 'Shopify Store 7ha4pu-s6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7ha4pu-s6.myshopify.com',
          website_id: 7231,
          website_name: '7ha4pu-s6.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8073,
      account_name: 'Shopify Store f9dzqc-61.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store f9dzqc-61.myshopify.com',
          website_id: 7232,
          website_name: 'f9dzqc-61.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8074,
      account_name: 'Shopify Store ntyffy-fd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ntyffy-fd.myshopify.com',
          website_id: 7233,
          website_name: 'ntyffy-fd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8075,
      account_name: 'Shopify Store rbj1d9-ey.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rbj1d9-ey.myshopify.com',
          website_id: 7234,
          website_name: 'rbj1d9-ey.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8076,
      account_name: 'Shopify Store kc9hp5-f0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kc9hp5-f0.myshopify.com',
          website_id: 7235,
          website_name: 'kc9hp5-f0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8077,
      account_name: 'Shopify Store geitu8-iz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store geitu8-iz.myshopify.com',
          website_id: 7236,
          website_name: 'geitu8-iz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8078,
      account_name: 'Shopify Store 1b8yts-vk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1b8yts-vk.myshopify.com',
          website_id: 7238,
          website_name: '1b8yts-vk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8079,
      account_name: 'Shopify Store squatc-sd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store squatc-sd.myshopify.com',
          website_id: 7239,
          website_name: 'squatc-sd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8080,
      account_name: 'Shopify Store ian00g-qm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ian00g-qm.myshopify.com',
          website_id: 7240,
          website_name: 'ian00g-qm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8081,
      account_name: 'Shopify Store m4jkdk-ma.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store m4jkdk-ma.myshopify.com',
          website_id: 7241,
          website_name: 'm4jkdk-ma.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8084,
      account_name: 'Shopify Store dfvmd8-jd.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dfvmd8-jd.myshopify.com',
          website_id: 7244,
          website_name: 'dfvmd8-jd.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8085,
      account_name: 'Shopify Store nnixxd-bb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nnixxd-bb.myshopify.com',
          website_id: 7245,
          website_name: 'nnixxd-bb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8086,
      account_name: 'Big Commerce Store c42uao95g7',
      websites: [],
    },
    {
      account_id: 8087,
      account_name: 'Shopify Store apuv0f-xv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store apuv0f-xv.myshopify.com',
          website_id: 7247,
          website_name: 'apuv0f-xv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 6943,
      account_name: 'Shopify Store aca7ff-c6.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store aca7ff-c6.myshopify.com',
          website_id: 6384,
          website_name: 'aplpros.com',
          skus: 429,
        },
      ],
    },
    {
      account_id: 8088,
      account_name: 'Shopify Store zrxcan-v2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store zrxcan-v2.myshopify.com',
          website_id: 7248,
          website_name: 'zrxcan-v2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8089,
      account_name: 'Shopify Store uszgjg-rp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store uszgjg-rp.myshopify.com',
          website_id: 7249,
          website_name: 'uszgjg-rp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8090,
      account_name: 'Shopify Store shm1cn-wb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store shm1cn-wb.myshopify.com',
          website_id: 7250,
          website_name: 'shm1cn-wb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8091,
      account_name: 'Shopify Store s4hb6g-jg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store s4hb6g-jg.myshopify.com',
          website_id: 7251,
          website_name: 's4hb6g-jg.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8092,
      account_name: 'Shopify Store 3u06ni-m0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3u06ni-m0.myshopify.com',
          website_id: 7252,
          website_name: '3u06ni-m0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8093,
      account_name: 'Shopify Store a6kbbm-y0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a6kbbm-y0.myshopify.com',
          website_id: 7253,
          website_name: 'a6kbbm-y0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8094,
      account_name: 'Shopify Store jbt9hx-ex.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jbt9hx-ex.myshopify.com',
          website_id: 7254,
          website_name: 'jbt9hx-ex.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8095,
      account_name: 'Shopify Store ybcge1-q0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ybcge1-q0.myshopify.com',
          website_id: 7255,
          website_name: 'ybcge1-q0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8096,
      account_name: 'Shopify Store a2jwqq-70.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store a2jwqq-70.myshopify.com',
          website_id: 7256,
          website_name: 'a2jwqq-70.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8097,
      account_name: 'Big Commerce Store 9utsbsybbo',
      websites: [],
    },
    {
      account_id: 8098,
      account_name: 'GadgetiCloud',
      websites: [],
    },
    {
      account_id: 8099,
      account_name: 'Shopify Store y08dpe-pa.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store y08dpe-pa.myshopify.com',
          website_id: 7258,
          website_name: 'y08dpe-pa.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8100,
      account_name: 'Shopify Store wwkeqr-px.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wwkeqr-px.myshopify.com',
          website_id: 7259,
          website_name: 'wwkeqr-px.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8101,
      account_name: 'Shopify Store 6dzmdb-sk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 6dzmdb-sk.myshopify.com',
          website_id: 7260,
          website_name: '6dzmdb-sk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8102,
      account_name: 'Shopify Store v2ubwg-kp.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store v2ubwg-kp.myshopify.com',
          website_id: 7261,
          website_name: 'v2ubwg-kp.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8103,
      account_name: 'Shopify Store 1yxh5g-x3.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1yxh5g-x3.myshopify.com',
          website_id: 7262,
          website_name: '1yxh5g-x3.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8104,
      account_name: 'Shopify Store rbi1kn-af.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rbi1kn-af.myshopify.com',
          website_id: 7263,
          website_name: 'rbi1kn-af.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8105,
      account_name: 'Shopify Store rjdmqs-0k.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store rjdmqs-0k.myshopify.com',
          website_id: 7264,
          website_name: 'rjdmqs-0k.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8106,
      account_name: 'Shopify Store etz1dw-fi.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store etz1dw-fi.myshopify.com',
          website_id: 7265,
          website_name: 'etz1dw-fi.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8107,
      account_name: 'Shopify Store mca1da-9i.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store mca1da-9i.myshopify.com',
          website_id: 7266,
          website_name: 'mca1da-9i.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8108,
      account_name: 'Shopify Store 4wd0kg-kf.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 4wd0kg-kf.myshopify.com',
          website_id: 7267,
          website_name: '4wd0kg-kf.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8109,
      account_name: 'Shopify Store 8s0sfu-kw.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8s0sfu-kw.myshopify.com',
          website_id: 7268,
          website_name: '8s0sfu-kw.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8110,
      account_name: 'Shopify Store z18w0r-z1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store z18w0r-z1.myshopify.com',
          website_id: 7269,
          website_name: 'z18w0r-z1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8111,
      account_name: 'Shopify Store buzvfb-za.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store buzvfb-za.myshopify.com',
          website_id: 7270,
          website_name: 'buzvfb-za.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8112,
      account_name: 'Shopify Store fygjkt-uu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fygjkt-uu.myshopify.com',
          website_id: 7271,
          website_name: 'fygjkt-uu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8113,
      account_name: 'Shopify Store xa50ib-u2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xa50ib-u2.myshopify.com',
          website_id: 7272,
          website_name: 'xa50ib-u2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8114,
      account_name: 'Shopify Store 1auh61-b0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1auh61-b0.myshopify.com',
          website_id: 7273,
          website_name: '1auh61-b0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8115,
      account_name: 'Shopify Store uftg1m-t1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store uftg1m-t1.myshopify.com',
          website_id: 7274,
          website_name: 'uftg1m-t1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8116,
      account_name: 'Shopify Store j1kbc9-qz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store j1kbc9-qz.myshopify.com',
          website_id: 7275,
          website_name: 'j1kbc9-qz.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8117,
      account_name: 'Shopify Store 7nzgy3-jr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 7nzgy3-jr.myshopify.com',
          website_id: 7276,
          website_name: '7nzgy3-jr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8118,
      account_name: 'Shopify Store fj1zi1-ab.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store fj1zi1-ab.myshopify.com',
          website_id: 7277,
          website_name: 'fj1zi1-ab.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8119,
      account_name: 'Eliane Gawloski',
      websites: [],
    },
    {
      account_id: 8120,
      account_name: 'Shopify Store csds18-v2.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store csds18-v2.myshopify.com',
          website_id: 7279,
          website_name: 'csds18-v2.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8121,
      account_name: 'Shopify Store vaumue-fn.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vaumue-fn.myshopify.com',
          website_id: 7280,
          website_name: 'vaumue-fn.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8122,
      account_name: 'Shopify Store may5vx-5z.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store may5vx-5z.myshopify.com',
          website_id: 7282,
          website_name: 'may5vx-5z.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 7412,
      account_name: 'Shopify Store marick-booster.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store marick-booster.myshopify.com',
          website_id: 6570,
          website_name: 'marickbooster.shop',
          skus: 382135,
        },
      ],
    },
    {
      account_id: 8123,
      account_name: 'Shopify Store pbeggm-ea.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pbeggm-ea.myshopify.com',
          website_id: 7284,
          website_name: 'pbeggm-ea.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8124,
      account_name: 'Shopify Store r78900-9f.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store r78900-9f.myshopify.com',
          website_id: 7285,
          website_name: 'r78900-9f.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8125,
      account_name: 'Shopify Store hbrvr0-89.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hbrvr0-89.myshopify.com',
          website_id: 7286,
          website_name: 'hbrvr0-89.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8126,
      account_name: 'Shopify Store 3bruce-cm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3bruce-cm.myshopify.com',
          website_id: 7287,
          website_name: '3bruce-cm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8127,
      account_name: 'Shopify Store m40b09-it.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store m40b09-it.myshopify.com',
          website_id: 7288,
          website_name: 'm40b09-it.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8128,
      account_name: 'Shopify Store krsn8u-2b.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store krsn8u-2b.myshopify.com',
          website_id: 7289,
          website_name: 'krsn8u-2b.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8129,
      account_name: 'Shopify Store yahynw-jv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yahynw-jv.myshopify.com',
          website_id: 7290,
          website_name: 'yahynw-jv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8130,
      account_name: 'Shopify Store ebs10j-wr.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ebs10j-wr.myshopify.com',
          website_id: 7291,
          website_name: 'ebs10j-wr.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8131,
      account_name: 'Shopify Store 3yd70q-65.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 3yd70q-65.myshopify.com',
          website_id: 7292,
          website_name: '3yd70q-65.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8132,
      account_name: 'Shopify Store ubg0fv-1s.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ubg0fv-1s.myshopify.com',
          website_id: 7293,
          website_name: 'ubg0fv-1s.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8133,
      account_name: 'Shopify Store vskcbx-cx.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store vskcbx-cx.myshopify.com',
          website_id: 7294,
          website_name: 'vskcbx-cx.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8134,
      account_name: 'Shopify Store e1v0bj-g1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store e1v0bj-g1.myshopify.com',
          website_id: 7295,
          website_name: 'e1v0bj-g1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8135,
      account_name: 'Shopify Store jq600x-75.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store jq600x-75.myshopify.com',
          website_id: 7296,
          website_name: 'jq600x-75.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8136,
      account_name: 'Shopify Store nzmyns-n0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store nzmyns-n0.myshopify.com',
          website_id: 7297,
          website_name: 'nzmyns-n0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8137,
      account_name: 'Shopify Store kwaqrd-e1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store kwaqrd-e1.myshopify.com',
          website_id: 7298,
          website_name: 'kwaqrd-e1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8138,
      account_name: 'Shopify Store ahkbsr-0u.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ahkbsr-0u.myshopify.com',
          website_id: 7299,
          website_name: 'ahkbsr-0u.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8139,
      account_name: 'Shopify Store qjb7ej-mu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qjb7ej-mu.myshopify.com',
          website_id: 7300,
          website_name: 'qjb7ej-mu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8140,
      account_name: 'Shopify Store 0azeeq-b4.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0azeeq-b4.myshopify.com',
          website_id: 7301,
          website_name: '0azeeq-b4.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8141,
      account_name: 'Shopify Store isa6xx-rk.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store isa6xx-rk.myshopify.com',
          website_id: 7302,
          website_name: 'isa6xx-rk.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8142,
      account_name: 'Shopify Store wxt48v-z1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wxt48v-z1.myshopify.com',
          website_id: 7303,
          website_name: 'wxt48v-z1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8143,
      account_name: 'Shopify Store 9chq7f-0j.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 9chq7f-0j.myshopify.com',
          website_id: 7304,
          website_name: '9chq7f-0j.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8144,
      account_name: 'Shopify Store xnqwwt-pg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store xnqwwt-pg.myshopify.com',
          website_id: 7305,
          website_name: 'xnqwwt-pg.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8145,
      account_name: 'Shopify Store wdv0nu-0p.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wdv0nu-0p.myshopify.com',
          website_id: 7306,
          website_name: 'wdv0nu-0p.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8146,
      account_name: 'Shopify Store cry038-0f.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cry038-0f.myshopify.com',
          website_id: 7307,
          website_name: 'cry038-0f.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8147,
      account_name: 'Shopify Store 8ymkyy-fj.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 8ymkyy-fj.myshopify.com',
          website_id: 7308,
          website_name: '8ymkyy-fj.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8148,
      account_name: 'Shopify Store 1vrtw0-zu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1vrtw0-zu.myshopify.com',
          website_id: 7309,
          website_name: '1vrtw0-zu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8149,
      account_name: 'Shopify Store md250d-nv.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store md250d-nv.myshopify.com',
          website_id: 7310,
          website_name: 'md250d-nv.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8150,
      account_name: 'Shopify Store znhw17-pm.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store znhw17-pm.myshopify.com',
          website_id: 7311,
          website_name: 'znhw17-pm.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8151,
      account_name: 'Shopify Store izmghv-ss.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store izmghv-ss.myshopify.com',
          website_id: 7312,
          website_name: 'izmghv-ss.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8152,
      account_name: 'Shopify Store eg9rz8-bf.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store eg9rz8-bf.myshopify.com',
          website_id: 7313,
          website_name: 'eg9rz8-bf.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8153,
      account_name: 'Shopify Store uz05ir-8q.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store uz05ir-8q.myshopify.com',
          website_id: 7314,
          website_name: 'uz05ir-8q.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8154,
      account_name: 'Shopify Store sg8nmv-vu.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store sg8nmv-vu.myshopify.com',
          website_id: 7315,
          website_name: 'sg8nmv-vu.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8155,
      account_name: 'Shopify Store dy0kpp-9z.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store dy0kpp-9z.myshopify.com',
          website_id: 7316,
          website_name: 'dy0kpp-9z.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8156,
      account_name: 'Shopify Store 0b4yh4-pg.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 0b4yh4-pg.myshopify.com',
          website_id: 7317,
          website_name: '0b4yh4-pg.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8157,
      account_name: 'Shopify Store ttx55i-ky.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store ttx55i-ky.myshopify.com',
          website_id: 7318,
          website_name: 'ttx55i-ky.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8158,
      account_name: 'Shopify Store v0etnr-c0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store v0etnr-c0.myshopify.com',
          website_id: 7319,
          website_name: 'v0etnr-c0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8159,
      account_name: 'Shopify Store 1unmrk-fh.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store 1unmrk-fh.myshopify.com',
          website_id: 7320,
          website_name: '1unmrk-fh.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8160,
      account_name: 'Shopify Store qc4xsx-w5.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store qc4xsx-w5.myshopify.com',
          website_id: 7321,
          website_name: 'qc4xsx-w5.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8161,
      account_name: 'Shopify Store gbntif-in.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store gbntif-in.myshopify.com',
          website_id: 7322,
          website_name: 'gbntif-in.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8162,
      account_name: 'Shopify Store bmjkfh-97.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store bmjkfh-97.myshopify.com',
          website_id: 7323,
          website_name: 'bmjkfh-97.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8163,
      account_name: 'Shopify Store wapc5q-s0.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store wapc5q-s0.myshopify.com',
          website_id: 7324,
          website_name: 'wapc5q-s0.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8164,
      account_name: 'Shopify Store pd39qu-u1.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store pd39qu-u1.myshopify.com',
          website_id: 7325,
          website_name: 'pd39qu-u1.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8165,
      account_name: 'Shopify Store cwpy2p-fb.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store cwpy2p-fb.myshopify.com',
          website_id: 7326,
          website_name: 'cwpy2p-fb.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8166,
      account_name: 'Shopify Store yhn3hy-9p.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store yhn3hy-9p.myshopify.com',
          website_id: 7327,
          website_name: 'yhn3hy-9p.myshopify.com',
          skus: 0,
        },
      ],
    },
    {
      account_id: 8167,
      account_name: 'Shopify Store hmizg3-uz.myshopify.com',
      websites: [
        {
          account_name: 'Shopify Store hmizg3-uz.myshopify.com',
          website_id: 7328,
          website_name: 'hmizg3-uz.myshopify.com',
          skus: 0,
        },
      ],
    },
  ],
};

const removeEmptyWebsites = (data) => {
  data.user_accounts.forEach((account) => {
    account.websites = account.websites.filter((website) => website.skus > 0);
  });
  return data;
};

const found = data.user_accounts.flatMap((account) => account.websites || []);

const filtered = found.filter((website) => website.skus > 0);

fs.writeFileSync('websites.json', JSON.stringify(filtered, null, 2));

console.log(filtered);
