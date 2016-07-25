-- ************************************************************
-- Version 0.0.1
-- Host: 127.0.0.1 (Postgresql 5.5.31-0ubuntu0.12.04.1)
-- Database: mobiletrck
-- Generation Time: 2016-05-01 00:26:58 +0000
-- ************************************************************


DROP TABLE IF EXISTS mobiletrck.visits;
DROP TABLE IF EXISTS mobiletrck.campaigns;
DROP TABLE IF EXISTS mobiletrck.mobilepages;
DROP TABLE IF EXISTS mobiletrck.users;

DROP SEQUENCE IF EXISTS mobiletrck.sqvisits;
DROP SEQUENCE  IF EXISTS mobiletrck.sqcampaigns;
DROP SEQUENCE IF EXISTS mobiletrck.sqmobilepages;
DROP SEQUENCE IF EXISTS mobiletrck.squsers;

-- sequence squsers
-- ------------------------------------------------------------

CREATE SEQUENCE mobiletrck.squsers
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE mobiletrck.squsers
  OWNER TO xtovzhufkpgnam;
  
  
  
-- table users
-- ------------------------------------------------------------

CREATE TABLE mobiletrck.users
(
  id integer NOT NULL DEFAULT nextval('mobiletrck.squsers'::regclass),
  description character varying(450),
  email character varying(150),
  local_email  character varying(150),
  local_password character varying(255),
  facebook_id character varying(150),
  facebook_token character varying(350),
  facebook_email character varying(150),
  facebook_name character varying(150),
  twitter_id character varying(150),
  twitter_token character varying(150),
  twitter_displayname character varying(150),
  twitter_username character varying(150),
  google_id character varying(150),
  google_token character varying(150),
  google_email character varying(150),
  google_name character varying(150),
  id_user integer,
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_users_fk FOREIGN KEY (id_user)
      REFERENCES mobiletrck.users (id)
);
ALTER TABLE mobiletrck.users
  OWNER TO xtovzhufkpgnam;


-- sequence sqmobilepages
-- ------------------------------------------------------------

CREATE SEQUENCE mobiletrck.sqmobilepages
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE mobiletrck.sqmobilepages
  OWNER TO xtovzhufkpgnam;


-- sequence sqmobilepages
-- ------------------------------------------------------------

CREATE TABLE mobiletrck.mobilepages
(
  id integer NOT NULL DEFAULT nextval('mobiletrck.sqmobilepages'::regclass),
  name character varying(250),
  description character varying(1000),
  html character varying(10000000),
  id_user integer,
  id_page integer,
  CONSTRAINT mobilepage_pkey PRIMARY KEY (id),
  CONSTRAINT mobilepages_users_fk FOREIGN KEY (id_user)
      REFERENCES mobiletrck.users (id),
  CONSTRAINT mobilepages_mobilepages_fk FOREIGN KEY (id_page)
      REFERENCES mobiletrck.mobilepages (id) 
);
ALTER TABLE mobiletrck.mobilepages
  OWNER TO xtovzhufkpgnam;



-- sequence sqcampaigns
-- ------------------------------------------------------------

CREATE SEQUENCE mobiletrck.sqcampaigns
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE mobiletrck.sqcampaigns
  OWNER TO xtovzhufkpgnam;


-- sequence sqcampaigns
-- ------------------------------------------------------------

CREATE TABLE mobiletrck.campaigns
(
  id integer NOT NULL DEFAULT nextval('mobiletrck.sqcampaigns'::regclass),
  name character varying(150),
  description character varying(255),
  
  img_bg character varying(250),
  img_qr character varying(250),
  img_logo character varying(250),
  custom_qr_svg character varying(100000),
  custom_qr_json character varying(100000),
  
  id_user integer,
  id_page integer,
  CONSTRAINT campaigns_pkey PRIMARY KEY (id),
  CONSTRAINT users_fk FOREIGN KEY (id_user)
      REFERENCES mobiletrck.users (id)
  
);
ALTER TABLE mobiletrck.campaigns
  OWNER TO xtovzhufkpgnam;


-- sequence sqvisits
-- ------------------------------------------------------------

CREATE SEQUENCE mobiletrck.sqvisits
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE mobiletrck.sqvisits
  OWNER TO xtovzhufkpgnam;

-- table visits
-- ------------------------------------------------------------

CREATE TABLE mobiletrck.visits
(
  id integer NOT NULL DEFAULT nextval('mobiletrck.sqvisits'::regclass),
  trigger character varying(10),
  mobile character varying(150),
  tablet character varying(150),
  phone character varying(150),
  userAgent character varying(150),
  os character varying(150),

  isIphone boolean,
  isBot boolean,
  version character varying(100),
  versionStr character varying(100),
  
  country character varying(150),
  region character varying(150),
  city character varying(150),
  long character varying(250),
  lat character varying(250),
  
  date date,
  time time,
  id_page integer,
  CONSTRAINT visits_pkey PRIMARY KEY (id),
  CONSTRAINT visits_mobilepages_fk FOREIGN KEY (id_page)
      REFERENCES mobiletrck.mobilepages (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);
ALTER TABLE mobiletrck.visits
  OWNER TO xtovzhufkpgnam;





