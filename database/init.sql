/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.5.29-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: 3dpcdb
-- ------------------------------------------------------
-- Server version	10.5.29-MariaDB-ubu2004

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendances`
--

DROP TABLE IF EXISTS `attendances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendances` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `event_id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `arrival_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_attendances_events` (`event_id`),
  KEY `fk_attendances_users` (`user_id`),
  CONSTRAINT `fk_attendances_events` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_attendances_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendances`
--

LOCK TABLES `attendances` WRITE;
/*!40000 ALTER TABLE `attendances` DISABLE KEYS */;
INSERT INTO `attendances` VALUES (1,12,11,NULL,NULL,'2025-08-21 03:55:55'),(3,3,11,NULL,NULL,'2025-08-21 18:43:36'),(4,3,11,NULL,NULL,'2025-08-21 18:44:23'),(5,13,11,NULL,NULL,'2025-08-21 19:25:24'),(6,14,11,NULL,NULL,'2025-08-21 19:25:29'),(7,16,11,NULL,NULL,'2025-08-21 19:26:34'),(8,17,11,NULL,NULL,'2025-08-21 19:27:11'),(9,21,11,NULL,NULL,'2025-08-21 19:37:37'),(10,22,11,NULL,NULL,'2025-08-21 19:39:25'),(11,14,16,NULL,NULL,'2025-08-28 19:20:26'),(12,13,16,NULL,NULL,'2025-08-28 19:21:16');
/*!40000 ALTER TABLE `attendances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `ip_address` varchar(100) DEFAULT NULL,
  `session_id` int(11) DEFAULT NULL,
  `first_seen` datetime DEFAULT current_timestamp(),
  `last_seen` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `preferred_shipping_address` varchar(100) DEFAULT NULL,
  `preferred_shipping_method` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'d','h','d@h.com','::ffff:172.18.0.5',NULL,'2025-10-10 02:43:41','2025-10-10 04:39:19','3223gfvr','delivery'),(2,NULL,NULL,NULL,'::ffff:172.18.0.2',NULL,'2025-10-13 15:15:53',NULL,NULL,NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `error_reports`
--

DROP TABLE IF EXISTS `error_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `error_reports` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `task_id` bigint(20) NOT NULL,
  `submitted_by` bigint(20) NOT NULL,
  `step_id` bigint(20) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `error_reports_task_id_foreign` (`task_id`),
  KEY `error_reports_submitted_by_foreign` (`submitted_by`),
  KEY `error_reports_step_id_foreign` (`step_id`),
  CONSTRAINT `error_reports_step_id_foreign` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE CASCADE ON UPDATE SET NULL,
  CONSTRAINT `error_reports_submitted_by_foreign` FOREIGN KEY (`submitted_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `error_reports_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `error_reports`
--

LOCK TABLES `error_reports` WRITE;
/*!40000 ALTER TABLE `error_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `error_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `location` varchar(255) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `image_file_id` bigint(20) DEFAULT NULL,
  `is_featured` tinyint(1) DEFAULT 0,
  `event_type` enum('meeting','workshop','competition','maintenance') DEFAULT 'meeting',
  `created_by` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `verification_code` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_events_files` (`image_file_id`),
  KEY `fk_events_users` (`created_by`),
  CONSTRAINT `fk_events_files` FOREIGN KEY (`image_file_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_events_users` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (11,'Fall Kickoff Meeting','Join us for our first meeting this fall! We\'ll go over our plans for this year and give a brief overview of the club for new members. Everyone is welcome, no experience necessary! ','Room 117','2025-08-21 19:11:00','2025-08-21 19:41:00',49,1,'meeting',12,NULL,'2025-08-31 02:41:01',NULL,'p09hqctd26q'),(16,'Plant Pot Workshop Pt.1','Design, 3D print, and fill your very own plant pot!','Mr. Stargaard\'s Room(117) During Lunch','2025-08-28 19:15:00','2025-08-28 19:42:00',56,1,'meeting',3,NULL,'2025-08-31 20:04:49',NULL,'nyr5kw2c1p'),(17,'Plant Pot Workshop Pt.2','Planting plants in the 3D printed pots you designed!','Mr. Stargaard\'s room (117)','2025-09-04 19:15:00','2025-09-04 19:42:00',56,1,'meeting',23,NULL,'2025-08-31 20:08:45',NULL,'hhroyu06bp6'),(18,'Football Fundraiser (TFTC)','A fun way raise money for the 3DPC by selling 3D printed items! (10% of proceeds go to TFTC)','Football Stadium (near the snack bar)','2025-10-11 01:15:00','2025-10-11 04:00:00',68,1,'meeting',3,NULL,'2025-09-08 03:05:23',NULL,'i48nor8a17o'),(19,'Homecoming Fundriaser','A fun way raise money for the 3DPC by selling 3D printed items at the Del Oro HOCO parade!','Meet in Ms. Watson\'s room (806 English)','2025-10-31 21:25:00','2025-10-31 23:30:00',61,1,'meeting',3,NULL,'2025-09-17 05:02:09',NULL,'tjbzsxxwy1d'),(20,'Recreator | Ender-3 Disassembly Pt.2','The first part of a multi-day project where we will be turing and old Ender-3 into a plastic bottle➡️filament recycler.','Stargaard\'s Room (117)','2025-09-18 19:12:00','2025-09-18 19:41:00',66,1,'meeting',23,NULL,'2025-09-17 15:12:38',NULL,'32ut67mgjxy'),(21,'Recreator | Ender-3 Disassembly Pt.1','The second part of a multi-day project where we will be turing and old Ender-3 into a plastic bottle➡️filament recycler.','Stargaard\'s Room (117)','2025-09-17 09:12:00','2025-09-17 09:41:00',66,1,'meeting',23,NULL,'2025-10-03 03:49:58',NULL,'8l2kfmlc5e'),(22,'Recreator | Assembly Pt.1','Day one of asembling a plastic bottle➡️filament recycling machine.','Stargaard\'s Room (117)','2025-10-16 19:15:00','2025-10-16 21:41:00',67,1,'meeting',23,NULL,'2025-10-02 00:45:23',NULL,'97ru7zlg6aq'),(23,'Recreator | Assembly Pt.2','Day two of assembling a plastic bottle➡️filament recycling machine.','Stargaard\'s Room (117)','2025-10-17 19:15:00','2025-10-17 19:41:00',67,0,'meeting',23,NULL,'2025-10-02 00:45:36',NULL,'uotwanbf4md'),(24,'3DPC Meeting','We\'ll be discussing the upcoming fundraiser.','Stargaard\'s Room (117)','2025-10-09 19:12:00','2025-10-09 19:41:00',69,1,'meeting',23,NULL,'2025-09-23 23:08:05',NULL,'slkh8ni3n9');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `original_name` varchar(255) NOT NULL,
  `stored_name` varchar(255) NOT NULL,
  `mime_type` varchar(100) DEFAULT NULL,
  `size` int(10) unsigned NOT NULL,
  `path` varchar(255) NOT NULL,
  `uploaded_by` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `description` text DEFAULT NULL,
  `type` enum('image','model','texture','document','other') NOT NULL DEFAULT 'other',
  PRIMARY KEY (`id`),
  KEY `files_uploaded_by_foreign` (`uploaded_by`) USING BTREE,
  CONSTRAINT `files_uploaded_by_foreign` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (7,'lizardTransparent.png','1751497278_500df4af574e31b91479.png','image/png',1085768,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:01:18','2025-07-02 23:01:18',NULL,NULL,'other'),(9,'lizard.glb','a1bd905774121e61.glb','model/gltf-binary',44955660,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:03:51','2025-07-02 23:03:51',NULL,NULL,'other'),(10,'star.glb','991694e7f6ca47db.glb','model/gltf-binary',546920,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:16:44','2025-07-02 23:16:44',NULL,NULL,'other'),(11,'earrings.glb','0e7c394e3269b8f5.glb','model/gltf-binary',123888,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:16:50','2025-07-02 23:16:50',NULL,NULL,'other'),(12,'eagle-keychain.glb','19e1d52e6aae5f04.glb','model/gltf-binary',108492,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:16:58','2025-07-02 23:16:58',NULL,NULL,'other'),(13,'earring.png','fecc88a4b0e760ad.png','image/png',795405,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:17:12','2025-07-02 23:17:12',NULL,NULL,'other'),(14,'keychain.png','cbe090eb31614d61.png','image/png',406914,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:17:19','2025-07-02 23:17:19',NULL,NULL,'other'),(15,'star.png','7c9543d5af38f796.png','image/png',1054603,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:17:25','2025-07-02 23:17:25',NULL,NULL,'other'),(16,'red-blue.jpg','0896b45ac3d316a9.jpg','image/jpeg',6058,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:29:49','2025-07-02 23:29:49',NULL,NULL,'other'),(17,'blue_metal_plate_diff_1k.webp','49b15f56f23f3ea6.webp','image/webp',934,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads/',3,'2025-07-02 23:43:34','2025-07-02 23:43:34',NULL,NULL,'other'),(20,'ender3api.webp','a8740fe9a3b8bab8.webp','image/webp',91966,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-17 04:30:15','2025-07-17 04:30:15',NULL,NULL,'other'),(37,'cr10-min.png','97c74e3a9c8af652.png','image/png',59313,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-18 02:31:28','2025-07-18 02:31:28',NULL,NULL,'other'),(40,'esunblackmatte.jpg','c6a515a92cd90851.jpg','image/jpeg',116768,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-18 04:34:18','2025-07-18 04:34:18',NULL,NULL,'other'),(41,'sunlugoldpla.webp','43eb0a29b3c6c0d0.webp','image/webp',89644,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-18 04:34:22','2025-07-18 04:34:22',NULL,NULL,'other'),(42,'sunluglowpla.webp','9156d0945f1b11ea.webp','image/webp',491374,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-18 04:35:55','2025-07-18 04:35:55',NULL,NULL,'other'),(43,'redbluepla.jpg','cb49209e24f5ed28.jpg','image/jpeg',66079,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-18 04:37:17','2025-07-18 04:37:17',NULL,NULL,'other'),(45,'filamentcut.webp','cdda44b3724384f6.webp','image/webp',12760,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-22 21:08:11','2025-08-24 04:18:11','2025-08-24 04:18:11',NULL,'other'),(46,'Ender_3_V3_SE.png','ec82da004a6c4cf3.png','image/png',33792,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-24 03:36:25','2025-07-24 03:36:25',NULL,NULL,'other'),(47,'ender3.png','4272d352be155731.png','image/png',1251755,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-26 23:45:59','2025-08-24 04:18:14','2025-08-24 04:18:14',NULL,'other'),(48,'ender3square.png','1ea6c98007e169b2.png','image/png',591669,'C:\\Users\\dawso\\Documents\\Apache\\htdocs\\api\\writable\\uploads\\',3,'2025-07-27 00:23:48','2025-08-24 04:18:16','2025-08-24 04:18:16',NULL,'other'),(49,'SUNLU_PLA_RECYC.webp','1755988752797_73kjggxv_SUNLU_PLA_RECYC.webp','image/webp',771160,'http://localhost:3000/uploads/1755988752797_73kjggxv_SUNLU_PLA_RECYC.webp',12,NULL,NULL,NULL,'','other'),(50,'Lithophane-with-family-scaled.jpg','1755990763780_bt5ak6m3_Lithophane-with-family-scaled.jpg','image/jpeg',344720,'http://localhost:3000/uploads/1755990763780_bt5ak6m3_Lithophane-with-family-scaled.jpg',12,NULL,NULL,NULL,'','other'),(51,'0.96_Inch_OLED_Display_4 (1).webp','1755990910756_n7n51b3l_0.96_Inch_OLED_Display_4 (1).webp','image/webp',24114,'http://localhost:3000/uploads/1755990910756_n7n51b3l_0.96_Inch_OLED_Display_4 (1).webp',3,NULL,'2025-08-24 04:18:18','2025-08-24 04:18:18','','other'),(52,'Aeries Student Dashboard.pdf','1755990982621_dkabgk98_Aeries Student Dashboard.pdf','application/pdf',232810,'http://localhost:3000/uploads/1755990982621_dkabgk98_Aeries Student Dashboard.pdf',3,NULL,'2025-08-23 23:27:32','2025-08-23 23:27:32','','other'),(53,'20250822_1837_Succulent_in_Geometric_Planter_simple_compose_01k3a9410vee78g7dn3j4eeqrs-removebg-preview (1).png','1755990991725_d0sarani_20250822_1837_Succulent_in_Geometric_Planter_simple_compose_01k3a9410vee78g7dn3j4eeqrs-removebg-preview (1).png','image/png',201188,'http://localhost:3000/uploads/1755990991725_d0sarani_20250822_1837_Succulent_in_Geometric_Planter_simple_compose_01k3a9410vee78g7dn3j4eeqrs-removebg-preview (1).png',3,NULL,'2025-08-23 23:20:07','2025-08-23 23:20:07','','other'),(54,'sample1.heic','1755991106382_0hixv941_sample1.heic','application/octet-stream',293608,'http://localhost:3000/uploads/1755991106382_0hixv941_sample1.heic',12,NULL,'2025-08-23 23:18:42','2025-08-23 23:18:42','','other'),(55,'planttest2.jpg','1755991133488_s2ew9pgl_planttest2.jpg','image/jpeg',50307,'http://localhost:3000/uploads/1755991133488_s2ew9pgl_planttest2.jpg',3,NULL,'2025-08-23 23:20:02','2025-08-23 23:20:02','','other'),(56,'Plant.jpg','1755991184683_cug7i1ua_Plant.jpg','image/jpeg',96425,'http://localhost:3000/uploads/1755991184683_cug7i1ua_Plant.jpg',3,NULL,NULL,NULL,'','other'),(57,'IMG_0957.webp','1756491849850_k1gvkab5_IMG_0957.webp','image/webp',1043188,'http://localhost:3000/uploads/1756491849850_k1gvkab5_IMG_0957.webp',23,NULL,NULL,NULL,'','other'),(58,'TFTC Football Fundraiser.jpg','1756680583445_6dcfek76_TFTC Football Fundraiser.jpg','image/jpeg',65487,'http://localhost:3000/uploads/1756680583445_6dcfek76_TFTC Football Fundraiser.jpg',3,NULL,NULL,NULL,'','other'),(59,'Football Fundraiser.jpg','1756680779279_ql04j45r_Football Fundraiser.jpg','image/jpeg',123683,'http://localhost:3000/uploads/1756680779279_ql04j45r_Football Fundraiser.jpg',3,NULL,NULL,NULL,'','other'),(60,'20250901_1145_Del Oro Homecoming Logo_simple_compose_01k439j83nfmttwhfxyyhs5rpy.jpg','1756752517551_8d5pof02_20250901_1145_Del Oro Homecoming Logo_simple_compose_01k439j83nfmttwhfxyyhs5rpy.jpg','image/jpeg',351167,'http://localhost:3000/uploads/1756752517551_8d5pof02_20250901_1145_Del Oro Homecoming Logo_simple_compose_01k439j83nfmttwhfxyyhs5rpy.jpg',23,NULL,'2025-09-02 00:57:27','2025-09-02 00:57:27','','other'),(61,'HC Pumpkin.jpg','1756773147799_s1c8rqlb_HC Pumpkin.jpg','image/jpeg',199130,'http://localhost:3000/uploads/1756773147799_s1c8rqlb_HC Pumpkin.jpg',23,NULL,NULL,NULL,'','other'),(62,'D.O. Football.jpg','1756781324280_ipam5p8y_D.O. Football.jpg','image/jpeg',95592,'http://localhost:3000/uploads/1756781324280_ipam5p8y_D.O. Football.jpg',23,NULL,'2025-09-02 03:08:58','2025-09-02 03:08:58','','other'),(63,'Screenshot 2025-09-01 at 7.52.33â¯PM.png','1756781677959_e62jgci5_Screenshot 2025-09-01 at 7.52.33â¯PM.png','image/png',373040,'http://localhost:3000/uploads/1756781677959_e62jgci5_Screenshot 2025-09-01 at 7.52.33â¯PM.png',23,NULL,NULL,NULL,'','other'),(64,'Screenshot 2025-09-01 at 8.06.41â¯PM.png','1756782527350_8l021rs1_Screenshot 2025-09-01 at 8.06.41â¯PM.png','image/png',186890,'http://localhost:3000/uploads/1756782527350_8l021rs1_Screenshot 2025-09-01 at 8.06.41â¯PM.png',23,NULL,NULL,NULL,'','other'),(65,'taylors - Google Search.pdf','1757297931994_7bn2br9x_taylors - Google Search.pdf','application/pdf',208641,'http://localhost:3000/uploads/1757297931994_7bn2br9x_taylors - Google Search.pdf',23,NULL,'2025-09-08 02:18:56','2025-09-08 02:18:56','','other'),(66,'Ender 3.jpg','1757297992455_b1d5bs0j_Ender 3.jpg','image/jpeg',350931,'http://localhost:3000/uploads/1757297992455_b1d5bs0j_Ender 3.jpg',23,NULL,NULL,NULL,'','other'),(67,'Recreator.jpg','1757298961936_6tyidlka_Recreator.jpg','image/jpeg',103729,'http://localhost:3000/uploads/1757298961936_6tyidlka_Recreator.jpg',23,NULL,NULL,NULL,'','other'),(68,'TFTH Football.jpg','1757300696155_cxgyqqly_TFTH Football.jpg','image/jpeg',169701,'http://localhost:3000/uploads/1757300696155_cxgyqqly_TFTH Football.jpg',23,NULL,NULL,NULL,'','other'),(69,'Screenshot 2025-09-01 at 10.25.27â¯AM.png','1758498680119_3iiev3qi_Screenshot 2025-09-01 at 10.25.27â¯AM.png','image/png',608501,'http://localhost:3000/uploads/1758498680119_3iiev3qi_Screenshot 2025-09-01 at 10.25.27â¯AM.png',23,NULL,NULL,NULL,'','other'),(70,'IMG_0719.png','1759984096323_pdx8ug5g_IMG_0719.png','image/png',385326,'http://localhost:3000/uploads/1759984096323_pdx8ug5g_IMG_0719.png',23,NULL,NULL,NULL,'','other'),(71,'close-up-of-a-golden-eagle-s-profile-in-black-and-white-photo.jpeg','1760142977765_jtirjbgh_close-up-of-a-golden-eagle-s-profile-in-black-and-white-photo.jpeg','image/jpeg',9798,'http://localhost:3000/uploads/1760142977765_jtirjbgh_close-up-of-a-golden-eagle-s-profile-in-black-and-white-photo.jpeg',NULL,NULL,NULL,NULL,'','other'),(72,'spiral.png','1760144757937_x088z78r_spiral.png','image/png',955516,'http://localhost:3000/uploads/1760144757937_x088z78r_spiral.png',NULL,NULL,NULL,NULL,'','other'),(73,'star.png','1760144776569_y74jetx1_star.png','image/png',1054603,'http://localhost:3000/uploads/1760144776569_y74jetx1_star.png',NULL,NULL,NULL,NULL,'','other'),(74,'large_display_coverphoto_229666.jpg','1760144790545_msr4gqsq_large_display_coverphoto_229666.jpg','image/jpeg',182024,'http://localhost:3000/uploads/1760144790545_msr4gqsq_large_display_coverphoto_229666.jpg',NULL,NULL,NULL,NULL,'','other'),(75,'2025-03-01_6b1f78574d9d2.webp','1760144820686_j7ik6eob_2025-03-01_6b1f78574d9d2.webp','image/webp',27702,'http://localhost:3000/uploads/1760144820686_j7ik6eob_2025-03-01_6b1f78574d9d2.webp',NULL,NULL,NULL,NULL,'','other');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `grade` enum('freshman','sophomore','junior','senior') NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'freshman',NULL,NULL,NULL),(2,'',NULL,NULL,NULL),(3,'junior',NULL,NULL,NULL),(4,'senior',NULL,NULL,NULL);
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `materials` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `hex` varchar(7) NOT NULL,
  `texture_file_id` bigint(20) DEFAULT NULL,
  `image_file_id` bigint(20) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `vendor` varchar(255) NOT NULL,
  `min_temp` float DEFAULT NULL,
  `max_temp` float DEFAULT NULL,
  `details` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `texture_url` varchar(255) DEFAULT NULL,
  `cost` decimal(8,2) DEFAULT NULL,
  `cost_unit` varchar(50) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `safety_data` text DEFAULT NULL,
  `density` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `material_texture_file_id_foreign` (`texture_file_id`) USING BTREE,
  KEY `material_image_file_id_foreign` (`image_file_id`) USING BTREE,
  CONSTRAINT `material_image_file_id_foreign` FOREIGN KEY (`image_file_id`) REFERENCES `files` (`id`) ON DELETE SET NULL,
  CONSTRAINT `material_texture_file_id_foreign` FOREIGN KEY (`texture_file_id`) REFERENCES `files` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (3,'Gold Esun PLA','#FFD700',NULL,41,'PLA','esun',210,230,'The random blue filament that came with the printer','2025-07-02 03:08:08','2025-07-02 03:08:08',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Matte Black Esun PLA','#28282B',NULL,40,'PLA','esun',210,230,'The random blue filament that came with the printer','2025-07-02 03:08:46','2025-07-02 03:08:46',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Sunlu Glow PLA','#d1f6cb',NULL,42,'PLA','Sunlu',210,230,'A glowing filament, brittle','2025-07-02 18:49:40','2025-07-02 18:49:40',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'Color Shift Red/Blue PLA','#AA4A44',16,43,'PLA','Bambu',210,230,'A simple colorshift','2025-07-02 21:34:36','2025-07-02 21:34:36',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'Easy PLA yellow glow ','#ffff00',NULL,42,'PLA','Overture Easy PLA',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `version` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2025-06-06-083000','App\\Database\\Migrations\\InitialFullMigration','default','App',1750735986,1),(2,'2025-06-13-083000','App\\Database\\Migrations\\UpdateWorkflowStepTitle','default','App',1750735986,1),(3,'2025-06-16-000000','App\\Database\\Migrations\\RemovedSubmitttedByFK','default','App',1750735986,1),(4,'2025-06-16-000100','App\\Database\\Migrations\\ChangedTaskDatetimesToString','default','App',1750735986,1),(5,'2025-06-18-000100','App\\Database\\Migrations\\AddDefaultStatusToPrintTasksAndRequests','default','App',1750735986,1),(6,'2025-06-18-000200','App\\Database\\Migrations\\AddDefaultCurrentStepToPrintTasks','default','App',1750735986,1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `models`
--

DROP TABLE IF EXISTS `models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `models` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image_file_id` bigint(20) NOT NULL,
  `model_file_id` bigint(20) NOT NULL,
  `material_slots` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`material_slots`)),
  `estimated_duration` int(11) DEFAULT NULL,
  `estimated_filament` float DEFAULT NULL,
  `description` text DEFAULT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`tags`)),
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `model_image_file_id_foreign` (`image_file_id`) USING BTREE,
  KEY `model_model_file_id_foreign` (`model_file_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `models`
--

LOCK TABLES `models` WRITE;
/*!40000 ALTER TABLE `models` DISABLE KEYS */;
INSERT INTO `models` VALUES (29,'Articulated Lizard',7,9,'[{\"slot\":\"base\",\"default_material_id\":3}]',120,5.5,'A fun articulated lizard!','[\"toy\",\"fidget\", \"fun\"]','2025-07-02 23:08:23','2025-07-02 23:08:23',NULL),(30,'Eagle Keychain',14,12,'[{\"slot\":\"base\",\"default_material_id\":4},{\"slot\":\"eagle\",\"default_material_id\":3}]',120,5.5,'DO Merch','[\"jewelry\",\"merch\"]','2025-07-02 23:19:35','2025-07-02 23:19:35',NULL),(31,'DO Earrings',13,11,'[{\"slot\":\"base\",\"default_material_id\":3}]',120,5.5,'DO Merch','[\"jewelry\",\"merch\"]','2025-07-02 23:21:41','2025-07-02 23:21:41',NULL),(32,'Star Fidget',15,10,'[{\"slot\":\"base\",\"default_material_id\":5}]',120,5.5,'A fun fidget','[\"fun\",\"fidget\"]','2025-07-02 23:26:31','2025-07-02 23:26:31',NULL);
/*!40000 ALTER TABLE `models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` float DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total_price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_items_orders` (`order_id`),
  KEY `fk_order_items_products` (`product_id`),
  CONSTRAINT `fk_order_items_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (4,4,4,2,19.99,NULL,39.98),(5,4,6,1,20,NULL,20),(6,5,10,3,NULL,NULL,NULL),(8,5,9,2,NULL,NULL,NULL),(9,6,10,3,NULL,NULL,NULL),(10,6,9,6,NULL,NULL,NULL),(11,7,10,9,NULL,NULL,NULL),(12,7,13,1,NULL,NULL,NULL),(13,8,9,1,NULL,NULL,NULL),(14,9,14,3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_logs`
--

DROP TABLE IF EXISTS `order_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_logs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) NOT NULL,
  `log_timestamp` datetime DEFAULT current_timestamp(),
  `log_message` text NOT NULL,
  `log_details` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_logs_orders` (`order_id`),
  CONSTRAINT `fk_order_logs_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_logs`
--

LOCK TABLES `order_logs` WRITE;
/*!40000 ALTER TABLE `order_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer_id` bigint(20) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `requested_by_date` date DEFAULT NULL,
  `order_status` varchar(255) DEFAULT 'unpaid',
  `payment_status` varchar(255) DEFAULT NULL,
  `shipping_method` varchar(255) DEFAULT NULL,
  `shipping_address` varchar(100) DEFAULT NULL,
  `total_price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2025-10-07','2025-10-14','pending','unpaid','standard','123 Main St, Anytown, USA 12345',59.98),(2,1,'2025-10-07','2025-10-14','pending','unpaid','standard','123 Main St, Anytown, USA 12345',59.98),(3,1,'2025-10-07','2025-10-14','pending','unpaid','standard','123 Main St, Anytown, USA 12345',59.98),(4,1,'2025-10-07','2025-10-14','pending','unpaid','standard','123 Main St, Anytown, USA 12345',59.98),(5,NULL,NULL,NULL,'processing',NULL,'delivery','Room 117',NULL),(6,NULL,NULL,NULL,'processing',NULL,'pickup','',NULL),(7,NULL,NULL,NULL,'processing',NULL,'pickup','',112),(8,NULL,NULL,NULL,'processing',NULL,'delivery','3223gfvr',8),(9,NULL,NULL,NULL,'cart',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point_logs`
--

DROP TABLE IF EXISTS `point_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `point_logs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `change` int(11) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `details` longtext DEFAULT NULL,
  `logged_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_point_logs_users` (`user_id`),
  CONSTRAINT `fk_point_logs_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point_logs`
--

LOCK TABLES `point_logs` WRITE;
/*!40000 ALTER TABLE `point_logs` DISABLE KEYS */;
INSERT INTO `point_logs` VALUES (14,12,20,'other','First test of manual points','2025-09-22 06:04:16'),(15,23,-42,'other','test','2025-09-22 18:29:42'),(16,23,20,'other','test','2025-09-22 18:30:07'),(17,23,22,'other','test','2025-09-22 18:30:21'),(18,19,20,'workshop','Plant Pot Workshop Pt.1','2025-09-22 21:56:14'),(19,24,10,'other','Help with S5 setup','2025-09-22 21:57:35'),(20,19,20,'workshop','Plant Pot Workshop Pt.2','2025-09-22 21:57:52'),(21,19,10,'other','Filament recycler part','2025-09-22 21:58:53'),(22,25,20,'workshop','Plant Pot Workshop Pt.1','2025-09-22 22:00:08'),(23,25,20,'workshop','Plant Pot Workshop Pt.2','2025-09-22 22:00:21'),(24,25,20,'workshop','Recreator Pt.2','2025-09-22 22:00:45'),(25,16,20,'workshop','Recreator Pt.1','2025-09-22 22:01:18'),(26,16,20,'workshop','Recreator Pt.2','2025-09-22 22:01:33'),(27,33,20,'workshop','Recreator Pt.2','2025-09-22 22:01:54'),(28,18,20,'workshop','Recreator Pt.1','2025-09-22 22:02:15'),(29,18,20,'workshop','Recreator Pt.2','2025-09-22 22:02:19'),(30,28,20,'workshop','Recreator Pt.1','2025-09-22 22:04:07'),(31,28,20,'workshop','Recreator Pt.2','2025-09-22 22:04:14'),(32,27,20,'workshop','Recreator Pt.1','2025-09-22 22:04:27'),(33,27,20,'workshop','Recreator Pt.2','2025-09-22 22:04:34'),(34,3,1,'other','Admin','2025-09-22 22:05:15'),(35,3,-40,'other','Admin','2025-09-22 22:05:26'),(36,16,220,'other','Pre-app points','2025-09-25 03:07:28'),(37,25,180,'other','Pre-app points','2025-09-25 03:10:26'),(38,18,60,'other','Pre-app points','2025-09-25 03:11:09'),(39,19,60,'other','Pre-app points','2025-09-25 03:11:27'),(40,21,40,'other','Pre-app points','2025-09-25 03:11:55'),(41,13,20,'other','Pre-app points','2025-09-25 03:12:05'),(42,14,20,'other','Pre-app points','2025-09-25 03:12:09'),(43,38,20,'workshop','Plant Pot Workshop Pt.1','2025-09-28 16:47:22'),(44,38,20,'workshop','Plant Pot Workshop Pt.2','2025-09-28 16:47:31'),(45,38,20,'workshop','Recreator Workshop Ender 3 Pt.2','2025-09-28 16:48:07'),(46,38,220,'other','Pre-app points','2025-09-28 16:48:30'),(47,19,20,'workshop','Recreator Workshop Ender 3 Pt.1','2025-09-28 16:50:55'),(48,19,20,'workshop','Recreator Workshop Ender 3 Pt.2','2025-09-28 16:50:59'),(49,21,130,'other','Printing Recreator Parts','2025-09-29 18:56:13'),(50,38,20,'meeting','3DPC Meeting','2025-10-09 19:27:11'),(51,16,20,'meeting','3DPC Meeting','2025-10-09 19:27:29'),(52,25,20,'meeting','3DPC Meeting','2025-10-09 19:28:42'),(53,22,20,'meeting','3DPC Meeting','2025-10-09 19:28:55'),(54,18,20,'meeting','3DPC Meeting','2025-10-09 19:29:01'),(55,19,20,'meeting','3DPC Meeting','2025-10-09 19:29:27'),(56,16,50,'fundraiser','Football Fundraiser','2025-10-11 18:32:32'),(57,33,50,'fundraiser','Football Fundraiser','2025-10-11 18:33:44'),(58,38,50,'fundraiser','Football Fundraiser','2025-10-11 18:34:39'),(59,12,50,'fundraiser','Football Fundraiser','2025-10-11 18:34:45'),(60,38,10,'other','Poster','2025-10-11 18:36:24'),(61,38,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:17'),(62,12,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:22'),(63,16,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:31'),(64,18,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:45'),(65,19,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:55'),(66,21,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:26'),(67,22,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:31'),(68,24,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:38'),(69,25,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:51'),(70,39,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:59'),(71,39,10,'other','Helping with 3DPC stuff','2025-10-16 23:48:37'),(72,16,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:12:41'),(73,24,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:12:52'),(74,25,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:12:58'),(75,38,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:13:09'),(76,39,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:13:17'),(77,38,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:00'),(78,18,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:10'),(79,19,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:21'),(80,22,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:29'),(81,24,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:35'),(82,39,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:47'),(83,38,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:28:26'),(84,16,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:28:45'),(85,18,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:28:53'),(86,25,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:29:12'),(87,3,-20,'workshop','NA for points.','2025-10-24 01:30:32'),(88,3,-1,'workshop','NA for points.','2025-10-24 01:30:43'),(89,12,-150,'workshop','NA for points.','2025-10-24 01:31:13'),(90,23,-40,'workshop','NA for points.','2025-10-24 01:32:04');
/*!40000 ALTER TABLE `point_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printer_statuses`
--

DROP TABLE IF EXISTS `printer_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `printer_statuses` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printer_statuses`
--

LOCK TABLES `printer_statuses` WRITE;
/*!40000 ALTER TABLE `printer_statuses` DISABLE KEYS */;
INSERT INTO `printer_statuses` VALUES (1,'idle','Ready for printing',NULL,NULL),(2,'reserved','Printer is within the scheduled time slot but hasn\'t been started yet.',NULL,NULL),(3,'in_progress','The printer is currently printing.',NULL,NULL),(4,'unavailable','Printer is unavailable for use',NULL,NULL);
/*!40000 ALTER TABLE `printer_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printers`
--

DROP TABLE IF EXISTS `printers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `printers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `status_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `image_id` bigint(20) DEFAULT NULL,
  `material_id` bigint(20) DEFAULT NULL,
  `process_template_id` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `printers_material_id_foreign` (`material_id`),
  KEY `printers_status_id_foreign` (`status_id`),
  KEY `printer_file_id_foreign` (`image_id`) USING BTREE,
  KEY `printer_process_template_id_foreign` (`process_template_id`) USING BTREE,
  CONSTRAINT `printer_process_template_id_foreign` FOREIGN KEY (`process_template_id`) REFERENCES `process_templates` (`id`),
  CONSTRAINT `printers_file_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `files` (`id`),
  CONSTRAINT `printers_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON DELETE CASCADE ON UPDATE SET NULL,
  CONSTRAINT `printers_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `printer_statuses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printers`
--

LOCK TABLES `printers` WRITE;
/*!40000 ALTER TABLE `printers` DISABLE KEYS */;
INSERT INTO `printers` VALUES (9,1,'CR-10','Room 117','Mr. Lee','An older CR-10 model donated by a DO parent. Large baseplate, but of lower quality; it stretches the y-axis sometimes.',37,4,4,NULL,'2025-09-08 01:32:09',NULL),(10,1,'Ender 3 V3','Room 117','3D Printing Club','The main new printer',46,5,4,NULL,NULL,NULL),(11,1,'Ender 3','Room 117','3D Printing Club','Donated ender-3',20,3,4,NULL,NULL,NULL),(12,1,'Ultimaker S5','Stargaard\'s room.','3DPC','',57,NULL,NULL,NULL,NULL,NULL),(13,1,'Ultimaker S5','Stargaard\'s Room','3DPC','',57,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `printers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_instance_steps`
--

DROP TABLE IF EXISTS `process_instance_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_instance_steps` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `process_instance_id` bigint(20) NOT NULL,
  `step_id` bigint(20) NOT NULL,
  `step_order` int(11) NOT NULL,
  `status` enum('pending','running','waiting_user','waiting_condition','waiting_timer','completed','skipped','failed') NOT NULL DEFAULT 'pending',
  `started_at` timestamp NULL DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `assigned_user_id` bigint(20) DEFAULT NULL,
  `is_required` tinyint(1) NOT NULL DEFAULT 1,
  `input_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`input_data`)),
  `output_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`output_data`)),
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `due_date` timestamp NULL DEFAULT NULL,
  `notes` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_process_step_order` (`process_instance_id`,`step_order`),
  KEY `idx_process_instance` (`process_instance_id`),
  KEY `idx_step` (`step_id`),
  KEY `idx_status` (`status`),
  KEY `idx_step_order` (`process_instance_id`,`step_order`),
  KEY `idx_assigned_user` (`assigned_user_id`),
  CONSTRAINT `process_instance_steps_ibfk_1` FOREIGN KEY (`process_instance_id`) REFERENCES `process_instances` (`id`) ON DELETE CASCADE,
  CONSTRAINT `process_instance_steps_ibfk_2` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE CASCADE,
  CONSTRAINT `process_instance_steps_ibfk_3` FOREIGN KEY (`assigned_user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_instance_steps`
--

LOCK TABLES `process_instance_steps` WRITE;
/*!40000 ALTER TABLE `process_instance_steps` DISABLE KEYS */;
INSERT INTO `process_instance_steps` VALUES (1,2,20,1,'pending',NULL,NULL,NULL,1,NULL,NULL,'{}','2025-08-10 22:00:34','2025-08-10 22:00:34',NULL,NULL,NULL),(2,2,21,2,'pending',NULL,NULL,NULL,1,NULL,NULL,'{}','2025-08-10 22:00:34','2025-08-10 22:00:34',NULL,NULL,NULL),(3,3,20,1,'failed',NULL,NULL,NULL,1,NULL,NULL,'{\"error\":\"Data truncated for column \'status\' at row 1\"}','2025-08-10 22:00:47','2025-08-10 22:00:47',NULL,NULL,NULL),(4,3,21,2,'pending',NULL,NULL,NULL,1,NULL,NULL,'{}','2025-08-10 22:00:47','2025-08-10 22:00:47',NULL,NULL,NULL),(5,4,20,1,'completed','2025-08-10 22:01:18','2025-08-10 22:01:44',NULL,1,NULL,NULL,'{}','2025-08-10 22:01:18','2025-08-10 22:01:44',NULL,NULL,NULL),(6,4,21,2,'waiting_user','2025-08-10 22:01:44',NULL,NULL,1,NULL,NULL,'{}','2025-08-10 22:01:18','2025-08-10 22:01:44',NULL,NULL,NULL),(7,5,20,1,'completed','2025-08-10 22:12:13','2025-08-10 22:36:29',NULL,1,NULL,NULL,'{}','2025-08-10 22:12:13','2025-08-10 22:36:29',NULL,NULL,NULL),(8,5,21,2,'completed','2025-08-10 22:36:29','2025-08-10 22:37:53',NULL,1,NULL,NULL,'{}','2025-08-10 22:12:13','2025-08-10 22:37:53',NULL,NULL,NULL),(9,6,20,1,'waiting_user','2025-08-10 22:54:21',NULL,NULL,1,NULL,NULL,'{}','2025-08-10 22:54:21','2025-08-10 22:54:21',NULL,NULL,NULL),(10,6,21,2,'pending',NULL,NULL,NULL,1,NULL,NULL,'{}','2025-08-10 22:54:21','2025-08-10 22:54:21',NULL,NULL,NULL),(11,7,20,1,'waiting_user','2025-08-10 23:04:00',NULL,3,1,NULL,NULL,'{}','2025-08-10 23:04:00','2025-08-10 23:04:00',NULL,NULL,NULL),(12,7,21,2,'pending',NULL,NULL,NULL,1,NULL,NULL,'{}','2025-08-10 23:04:00','2025-08-10 23:04:00',NULL,NULL,NULL),(13,8,20,1,'waiting_user','2025-08-10 23:40:53',NULL,3,1,NULL,NULL,'{}','2025-08-10 23:40:53','2025-08-10 23:40:53',NULL,NULL,NULL),(14,8,21,2,'pending',NULL,NULL,NULL,1,NULL,NULL,'{}','2025-08-10 23:40:53','2025-08-10 23:40:53',NULL,NULL,NULL);
/*!40000 ALTER TABLE `process_instance_steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_instances`
--

DROP TABLE IF EXISTS `process_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_instances` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `process_template_id` bigint(20) NOT NULL,
  `status` enum('pending','running','paused','completed','failed','cancelled') NOT NULL DEFAULT 'pending',
  `priority` enum('low','normal','high','critical') NOT NULL DEFAULT 'normal',
  `assigned_user_id` bigint(20) DEFAULT NULL,
  `current_step_order` int(11) NOT NULL DEFAULT 1,
  `estimated_duration` int(11) DEFAULT NULL COMMENT 'Estimated duration in minutes',
  `actual_duration` int(11) DEFAULT NULL COMMENT 'Actual duration in minutes',
  `started_at` timestamp NULL DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_process_template` (`process_template_id`),
  KEY `idx_status` (`status`),
  KEY `idx_assigned_user` (`assigned_user_id`),
  KEY `idx_due_date` (`due_date`),
  KEY `idx_created_at` (`created_at`),
  CONSTRAINT `process_instances_ibfk_1` FOREIGN KEY (`process_template_id`) REFERENCES `process_templates` (`id`) ON DELETE CASCADE,
  CONSTRAINT `process_instances_ibfk_2` FOREIGN KEY (`assigned_user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_instances`
--

LOCK TABLES `process_instances` WRITE;
/*!40000 ALTER TABLE `process_instances` DISABLE KEYS */;
INSERT INTO `process_instances` VALUES (1,'Test Process Instance','Testing the new process execution system',4,'pending','normal',NULL,1,60,NULL,NULL,NULL,NULL,'{}','2025-08-10 22:00:14','2025-08-10 22:00:14',NULL),(2,'Test Process Instance','Testing the new process execution system',4,'pending','normal',NULL,1,60,NULL,NULL,NULL,NULL,'{}','2025-08-10 22:00:34','2025-08-10 22:00:34',NULL),(3,'Test Process Instance','Testing the new process execution system',4,'failed','normal',NULL,1,60,NULL,'2025-08-10 22:00:47',NULL,NULL,'{}','2025-08-10 22:00:47','2025-08-10 22:00:47',NULL),(4,'Test Process Instance 2','Testing the process execution system again',4,'cancelled','normal',NULL,2,60,NULL,'2025-08-10 22:01:18','2025-08-10 22:51:48',NULL,'{}','2025-08-10 22:01:18','2025-08-10 22:51:48',NULL),(5,'Print Task #27','Print process for task 27',4,'completed','normal',NULL,2,60,26,'2025-08-10 22:12:13','2025-08-10 22:37:53',NULL,'{\"taskId\":27,\"printerId\":9,\"scheduledStartTime\":\"2025-08-10T15:12:00.000Z\"}','2025-08-10 22:12:13','2025-08-10 22:37:53',NULL),(6,'Print Task #28','Print process for task 28',4,'cancelled','normal',NULL,1,60,NULL,'2025-08-10 22:54:21','2025-08-10 23:40:00',NULL,'{\"taskId\":28,\"printerId\":10,\"scheduledStartTime\":\"2025-08-10T15:54:00.000Z\"}','2025-08-10 22:54:21','2025-08-10 23:40:00',NULL),(7,'Print Task #29','Print process for task 29',4,'completed','normal',3,1,60,23,'2025-08-10 23:04:00','2025-08-10 23:26:38',NULL,'{\"taskId\":29,\"printerId\":11,\"scheduledStartTime\":\"2025-08-10T16:03:00.000Z\"}','2025-08-10 23:04:00','2025-08-10 23:26:38',NULL),(8,'Print Task #30','Print process for task 30',4,'completed','normal',3,1,60,33,'2025-08-10 23:40:53','2025-08-11 00:13:51',NULL,'{\"taskId\":30,\"printerId\":10,\"scheduledStartTime\":\"2025-08-10T16:40:00.000Z\"}','2025-08-10 23:40:53','2025-08-11 00:13:51',NULL);
/*!40000 ALTER TABLE `process_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_logs`
--

DROP TABLE IF EXISTS `process_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_logs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `process_instance_id` bigint(20) NOT NULL,
  `step_order` int(11) DEFAULT NULL,
  `level` enum('debug','info','warn','error') NOT NULL DEFAULT 'info',
  `action` enum('process_started','process_completed','process_failed','process_paused','process_resumed','process_cancelled','step_started','step_completed','step_failed','step_assigned','step_unassigned') NOT NULL,
  `message` text NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `user_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_process_instance` (`process_instance_id`),
  KEY `idx_level` (`level`),
  KEY `idx_action` (`action`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_step_order` (`process_instance_id`,`step_order`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `process_logs_ibfk_1` FOREIGN KEY (`process_instance_id`) REFERENCES `process_instances` (`id`) ON DELETE CASCADE,
  CONSTRAINT `process_logs_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_logs`
--

LOCK TABLES `process_logs` WRITE;
/*!40000 ALTER TABLE `process_logs` DISABLE KEYS */;
INSERT INTO `process_logs` VALUES (1,3,NULL,'info','process_started','Process \'Test Process Instance\' started from template \'Standard Printing Process\'','{\"templateId\":4,\"templateName\":\"Standard Printing Process\"}',NULL,'2025-08-10 22:00:47',NULL,'2025-08-10 22:00:47'),(2,3,1,'error','step_failed','Step 1 failed: Data truncated for column \'status\' at row 1','{\"error\":\"Data truncated for column \'status\' at row 1\"}',NULL,'2025-08-10 22:00:47',NULL,'2025-08-10 22:00:47'),(3,3,NULL,'error','process_failed','Process failed due to required step failure','{\"failedStepOrder\":1}',NULL,'2025-08-10 22:00:47',NULL,'2025-08-10 22:00:47'),(4,4,NULL,'info','process_started','Process \'Test Process Instance 2\' started from template \'Standard Printing Process\'','{\"templateId\":4,\"templateName\":\"Standard Printing Process\"}',NULL,'2025-08-10 22:01:18',NULL,'2025-08-10 22:01:18'),(5,4,1,'info','step_started','Step 1: Clear Print Bed started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 22:01:18',NULL,'2025-08-10 22:01:18'),(6,4,1,'info','step_completed','Step 1 completed',NULL,NULL,'2025-08-10 22:01:44',NULL,'2025-08-10 22:01:44'),(7,4,2,'info','step_started','Step 2: Change Filament started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 22:01:44',NULL,'2025-08-10 22:01:44'),(8,5,NULL,'info','process_started','Process \'Print Task #27\' started from template \'Standard Printing Process\'','{\"templateId\":4,\"templateName\":\"Standard Printing Process\"}',NULL,'2025-08-10 22:12:13',NULL,'2025-08-10 22:12:13'),(9,5,1,'info','step_started','Step 1: Clear Print Bed started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 22:12:13',NULL,'2025-08-10 22:12:13'),(10,5,1,'info','step_completed','Step 1 completed',NULL,NULL,'2025-08-10 22:36:29',NULL,'2025-08-10 22:36:29'),(11,5,2,'info','step_started','Step 2: Change Filament started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 22:36:29',NULL,'2025-08-10 22:36:29'),(12,5,NULL,'info','process_paused','Process paused',NULL,NULL,'2025-08-10 22:37:19',NULL,'2025-08-10 22:37:19'),(13,5,NULL,'info','process_resumed','Process resumed',NULL,NULL,'2025-08-10 22:37:22',NULL,'2025-08-10 22:37:22'),(14,5,NULL,'info','process_completed','Process completed successfully','{\"actualDuration\":25}',NULL,'2025-08-10 22:37:22',NULL,'2025-08-10 22:37:22'),(15,5,2,'info','step_completed','Step 2 completed',NULL,NULL,'2025-08-10 22:37:53',NULL,'2025-08-10 22:37:53'),(16,5,NULL,'info','process_completed','Process completed successfully','{\"actualDuration\":26}',NULL,'2025-08-10 22:37:53',NULL,'2025-08-10 22:37:53'),(17,4,NULL,'info','process_cancelled','Process cancelled',NULL,NULL,'2025-08-10 22:51:48',NULL,'2025-08-10 22:51:48'),(18,6,NULL,'info','process_started','Process \'Print Task #28\' started from template \'Standard Printing Process\'','{\"templateId\":4,\"templateName\":\"Standard Printing Process\"}',NULL,'2025-08-10 22:54:21',NULL,'2025-08-10 22:54:21'),(19,6,1,'info','step_started','Step 1: Clear Print Bed started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 22:54:21',NULL,'2025-08-10 22:54:21'),(20,7,NULL,'info','process_started','Process \'Print Task #29\' started from template \'Standard Printing Process\'','{\"templateId\":4,\"templateName\":\"Standard Printing Process\"}',3,'2025-08-10 23:04:00',NULL,'2025-08-10 23:04:00'),(21,7,1,'info','step_started','Step 1: Clear Print Bed started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 23:04:00',NULL,'2025-08-10 23:04:00'),(22,7,NULL,'info','process_paused','Process paused',NULL,NULL,'2025-08-10 23:26:36',NULL,'2025-08-10 23:26:36'),(23,7,NULL,'info','process_resumed','Process resumed',NULL,NULL,'2025-08-10 23:26:38',NULL,'2025-08-10 23:26:38'),(24,7,NULL,'info','process_completed','Process completed successfully','{\"actualDuration\":23}',NULL,'2025-08-10 23:26:38',NULL,'2025-08-10 23:26:38'),(25,6,NULL,'info','process_cancelled','Process cancelled',NULL,NULL,'2025-08-10 23:40:00',NULL,'2025-08-10 23:40:00'),(26,8,NULL,'info','process_started','Process \'Print Task #30\' started from template \'Standard Printing Process\'','{\"templateId\":4,\"templateName\":\"Standard Printing Process\"}',3,'2025-08-10 23:40:53',NULL,'2025-08-10 23:40:53'),(27,8,1,'info','step_started','Step 1: Clear Print Bed started','{\"stepType\":\"manual\"}',NULL,'2025-08-10 23:40:53',NULL,'2025-08-10 23:40:53'),(28,8,NULL,'info','process_paused','Process paused',NULL,NULL,'2025-08-11 00:13:50',NULL,'2025-08-11 00:13:50'),(29,8,NULL,'info','process_resumed','Process resumed',NULL,NULL,'2025-08-11 00:13:51',NULL,'2025-08-11 00:13:51'),(30,8,NULL,'info','process_completed','Process completed successfully','{\"actualDuration\":33}',NULL,'2025-08-11 00:13:51',NULL,'2025-08-11 00:13:51');
/*!40000 ALTER TABLE `process_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_template_steps`
--

DROP TABLE IF EXISTS `process_template_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_template_steps` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `process_template_id` bigint(20) NOT NULL,
  `step_id` bigint(20) NOT NULL,
  `step_order` int(11) NOT NULL,
  `is_required` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_workflow_step` (`step_id`),
  KEY `fk_process_template_steps_process_templates` (`process_template_id`),
  CONSTRAINT `fk_process_template_steps_process_templates` FOREIGN KEY (`process_template_id`) REFERENCES `process_templates` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_process_template_steps_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `process_template_steps_ibfk_1` FOREIGN KEY (`process_template_id`) REFERENCES `process_templates` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_template_steps`
--

LOCK TABLES `process_template_steps` WRITE;
/*!40000 ALTER TABLE `process_template_steps` DISABLE KEYS */;
INSERT INTO `process_template_steps` VALUES (30,4,20,1,1,'2025-08-10 01:46:05','2025-08-10 01:46:16'),(31,4,21,2,1,'2025-08-10 01:46:10','2025-08-10 01:46:16'),(32,4,22,3,1,'2025-08-24 17:11:07','2025-08-24 17:11:07');
/*!40000 ALTER TABLE `process_template_steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_templates`
--

DROP TABLE IF EXISTS `process_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_templates` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `version` varchar(50) DEFAULT '1.0',
  `category` enum('printing','maintenance','quality_check','post_processing') DEFAULT 'printing',
  `estimated_duration` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`),
  KEY `idx_category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_templates`
--

LOCK TABLES `process_templates` WRITE;
/*!40000 ALTER TABLE `process_templates` DISABLE KEYS */;
INSERT INTO `process_templates` VALUES (4,'Standard Printing Process','The standard workflow for printing an item','1.0','printing',60,'2025-08-10 01:45:56','2025-08-10 01:45:56',NULL);
/*!40000 ALTER TABLE `process_templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_variants`
--

DROP TABLE IF EXISTS `product_variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_variants` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `material_id` bigint(20) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `image_file_id` bigint(20) DEFAULT NULL,
  `background_color` varchar(9) DEFAULT NULL,
  `model_color` varchar(9) DEFAULT NULL,
  `product_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_variants_products` (`product_id`),
  CONSTRAINT `fk_product_variants_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_variants`
--

LOCK TABLES `product_variants` WRITE;
/*!40000 ALTER TABLE `product_variants` DISABLE KEYS */;
INSERT INTO `product_variants` VALUES (11,5,'Sunlu Glow PLA',7,'#81c995','#d1f6cb',27);
/*!40000 ALTER TABLE `product_variants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` longtext DEFAULT NULL,
  `price` float DEFAULT NULL,
  `model_id` bigint(20) NOT NULL,
  `default_variant_id` bigint(20) DEFAULT NULL,
  `custom_options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`custom_options`)),
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `section_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_models` (`model_id`),
  KEY `fk_products_files` (`default_variant_id`),
  KEY `fk_products_shop_sections` (`section_id`),
  CONSTRAINT `fk_products_models` FOREIGN KEY (`model_id`) REFERENCES `models` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_shop_sections` FOREIGN KEY (`section_id`) REFERENCES `shop_sections` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (27,'Articulated Lizard3','A cute little lizard, great for any occasion!',10,29,11,NULL,NULL,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_statuses`
--

DROP TABLE IF EXISTS `request_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_statuses` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_statuses`
--

LOCK TABLES `request_statuses` WRITE;
/*!40000 ALTER TABLE `request_statuses` DISABLE KEYS */;
INSERT INTO `request_statuses` VALUES (1,'pending','Waiting approval by admins',NULL,NULL),(2,'approved','Request has been approved and is ready for club members to print.',NULL,NULL);
/*!40000 ALTER TABLE `request_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `requests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `submitted_by` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `status_id` bigint(20) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `requested_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `priority` int(11) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `requests_status_id_foreign` (`status_id`),
  CONSTRAINT `requests_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `request_statuses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (53,'Sally','sally@email.com','nope',2,'2025-08-10 20:55:12','2025-08-10 21:15:56',NULL,'2025-08-07',NULL,1),(54,'Sally','sally@email.com','nope',2,'2025-08-10 21:34:44','2025-08-10 21:35:33',NULL,'2025-08-07',NULL,1),(55,'Sally','sally@email.com','nope',2,'2025-08-10 22:53:57','2025-08-10 22:54:05',NULL,'2025-08-07',NULL,1),(56,'Sally','sally@email.com','nope',2,'2025-08-10 23:03:33','2025-08-10 23:03:43',NULL,'2025-08-07',NULL,1),(57,'Sally','sally@email.com','nope',2,'2025-08-10 23:40:30','2025-08-10 23:40:37',NULL,'2025-08-07',NULL,1);
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'viewer',NULL,NULL,NULL),(2,'member',NULL,NULL,NULL),(3,'admin',NULL,NULL,NULL),(4,'developer',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_sections`
--

DROP TABLE IF EXISTS `shop_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_sections` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `order_index` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_sections`
--

LOCK TABLES `shop_sections` WRITE;
/*!40000 ALTER TABLE `shop_sections` DISABLE KEYS */;
INSERT INTO `shop_sections` VALUES (1,'featured','Featured',0),(2,'fidgets','Fidgets',1),(3,'classroom','Classroom Essentials',2);
/*!40000 ALTER TABLE `shop_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_actions`
--

DROP TABLE IF EXISTS `step_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_actions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `step_id` bigint(20) NOT NULL,
  `action_order` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `action_type` text NOT NULL,
  `action_config` text DEFAULT NULL,
  `button_style` enum('primary','secondary','success','warning','danger') DEFAULT 'primary',
  `icon` varchar(100) DEFAULT NULL,
  `is_enabled` tinyint(1) DEFAULT 1,
  `confirmation_message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_step_actions` (`step_id`,`action_order`),
  CONSTRAINT `fk_step_actions_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_actions`
--

LOCK TABLES `step_actions` WRITE;
/*!40000 ALTER TABLE `step_actions` DISABLE KEYS */;
INSERT INTO `step_actions` VALUES (1,13,1,'Complete Step','complete_step',NULL,'primary',NULL,1,NULL,'2025-08-07 21:27:47','2025-08-07 21:27:47'),(2,14,1,'Complete Step','complete_step',NULL,'primary',NULL,1,NULL,'2025-08-07 21:27:47','2025-08-07 21:27:47'),(4,16,1,'Complete Step','complete_step',NULL,'primary',NULL,1,NULL,'2025-08-07 21:27:47','2025-08-07 21:27:47'),(8,13,2,'Skip Step','skip_step',NULL,'secondary',NULL,1,NULL,'2025-08-07 21:27:53','2025-08-07 21:27:53'),(9,14,2,'Skip Step','skip_step',NULL,'secondary',NULL,1,NULL,'2025-08-07 21:27:53','2025-08-07 21:27:53'),(11,16,2,'Skip Step','skip_step',NULL,'secondary',NULL,1,NULL,'2025-08-07 21:27:53','2025-08-07 21:27:53'),(32,15,1,'Complete Step','complete_process','','primary',NULL,1,NULL,'2025-08-09 22:46:48','2025-08-09 22:46:48'),(33,15,2,'Skip Step','skip_step',NULL,'secondary',NULL,1,NULL,'2025-08-09 22:46:48','2025-08-09 22:46:48'),(34,15,3,'','automation','','primary',NULL,1,NULL,'2025-08-09 22:46:48','2025-08-09 22:46:48'),(35,15,4,'rrwgrgw','button','','primary',NULL,1,NULL,'2025-08-09 22:46:48','2025-08-09 22:46:48'),(36,15,5,'Finish!!!','button','','primary',NULL,0,NULL,'2025-08-09 22:46:48','2025-08-09 22:46:48'),(37,20,1,'Next Step','button','{\"type\": \"complete_step\"}','primary',NULL,1,NULL,'2025-08-10 01:35:42','2025-08-10 01:35:42'),(38,21,1,'Continue','button','','primary',NULL,1,NULL,'2025-08-10 01:45:01','2025-08-10 01:45:01'),(39,21,2,'Message Admin','button','','warning',NULL,0,NULL,'2025-08-10 01:45:01','2025-08-10 01:45:01'),(40,22,1,'First Layer Failed','button','','warning',NULL,1,NULL,'2025-08-24 17:10:52','2025-08-24 17:10:52'),(41,22,2,'First Layer Completed','button','','primary',NULL,1,NULL,'2025-08-24 17:10:52','2025-08-24 17:10:52');
/*!40000 ALTER TABLE `step_actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_content`
--

DROP TABLE IF EXISTS `step_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_content` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `step_id` bigint(20) NOT NULL,
  `content_order` int(11) NOT NULL,
  `content_type` enum('text','image','video','file','link','template_variable') NOT NULL,
  `content_data` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_step_content` (`step_id`,`content_order`),
  CONSTRAINT `fk_step_content_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_content`
--

LOCK TABLES `step_content` WRITE;
/*!40000 ALTER TABLE `step_content` DISABLE KEYS */;
INSERT INTO `step_content` VALUES (1,13,1,'text','Complete the step: Pre-Print Inspection','2025-08-07 21:27:42','2025-08-07 21:27:42'),(2,14,1,'text','Complete the step: Material Loading','2025-08-07 21:27:42','2025-08-07 21:27:42'),(5,17,1,'text','Ensure the printer bed is clean and level before starting the print job. Check that the nozzle temperature is set correctly.','2025-08-08 23:19:08','2025-08-08 23:19:08'),(29,19,1,'text','Begin printing by pressing start','2025-08-09 21:53:54','2025-08-09 21:53:54'),(44,15,1,'image','http://localhost/uploads/97c74e3a9c8af652.png','2025-08-09 22:46:48','2025-08-09 22:46:48'),(45,15,2,'text','Dont forget!','2025-08-09 22:46:48','2025-08-09 22:46:48'),(46,15,3,'text','Complete the step: Bed Preparation','2025-08-09 22:46:48','2025-08-09 22:46:48'),(47,15,4,'link','http://localhost/uploads/97c74e3a9c8af652.png','2025-08-09 22:46:48','2025-08-09 22:46:48'),(51,20,1,'text','Start by clearing the print bed of any debris.','2025-08-10 01:35:42','2025-08-10 01:35:42'),(52,20,2,'image','https://preview.redd.it/cf3z53exqj761.png?width=747&format=png&auto=webp&s=f46cf0b12f747cdba40081428a66c036bf4e5b69','2025-08-10 01:35:42','2025-08-10 01:35:42'),(53,20,3,'text','Try to avoid scrapping or damaging the print bed. If neccesary, use soap and water.','2025-08-10 01:35:42','2025-08-10 01:35:42'),(54,21,1,'text','Start by preheating the nozzle to the suggested temperature of teh current filament. When it reaches the right temperature, push down in the level and gently pull it out.','2025-08-10 01:45:01','2025-08-10 01:45:01'),(55,21,2,'image','https://wiki.openworksbmore.org/3d-printing/1-12.png','2025-08-10 01:45:01','2025-08-10 01:45:01'),(56,21,3,'text','If it snags, either the nozzle isnt hot enough or it has gotten jammed. Please contact an Admin rigth away.','2025-08-10 01:45:01','2025-08-10 01:45:01'),(57,22,1,'text','Select the model and begin printing, making sure to watch the first layer go down.','2025-08-24 17:10:52','2025-08-24 17:10:52');
/*!40000 ALTER TABLE `step_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_triggers`
--

DROP TABLE IF EXISTS `step_triggers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_triggers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `step_action_id` bigint(20) NOT NULL,
  `trigger_order` int(11) NOT NULL,
  `trigger_type` enum('update_task_status','update_printer_status','send_notification','schedule_timer','create_subtask','log_event') NOT NULL,
  `trigger_config` text NOT NULL,
  `condition_rules` text DEFAULT NULL,
  `is_enabled` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_action_triggers` (`step_action_id`,`trigger_order`),
  CONSTRAINT `fk_step_triggers_step_actions` FOREIGN KEY (`step_action_id`) REFERENCES `step_actions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_triggers`
--

LOCK TABLES `step_triggers` WRITE;
/*!40000 ALTER TABLE `step_triggers` DISABLE KEYS */;
/*!40000 ALTER TABLE `step_triggers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `steps`
--

DROP TABLE IF EXISTS `steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `steps` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_critical` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `step_type` enum('manual','automatic','conditional','timer') DEFAULT 'manual',
  `is_required` tinyint(1) DEFAULT 1,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steps`
--

LOCK TABLES `steps` WRITE;
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` VALUES (1,'Pre-Print Inspection','Verify printer condition and prepare for printing',1,NULL,'2025-08-09 02:06:58','manual',1,'2025-08-09 02:06:58'),(2,'Material Loading','Load and verify printing material',1,NULL,'2025-08-09 02:06:58','manual',1,'2025-08-09 02:06:58'),(3,'Bed Preparation','Level bed and apply adhesion aids if needed',1,NULL,'2025-08-09 02:06:59','manual',1,'2025-08-09 02:06:59'),(4,'File Preparation','Load and verify the print file',1,NULL,'2025-08-09 02:06:59','manual',1,'2025-08-09 02:06:59'),(5,'Print Start','Begin the printing process',1,NULL,'2025-08-09 02:06:59','manual',1,'2025-08-09 02:06:59'),(6,'First Layer Check','Monitor and verify first layer adhesion',1,NULL,'2025-08-09 02:06:59','manual',1,'2025-08-09 02:06:59'),(7,'Print Monitoring','Periodic monitoring during print',0,NULL,'2025-08-09 02:07:00','timer',1,'2025-08-09 02:07:00'),(8,'Print Completion','Handle print completion and cooling',1,NULL,'2025-08-09 02:07:00','manual',1,'2025-08-09 02:07:00'),(9,'Part Removal','Safely remove printed part from bed',1,NULL,'2025-08-09 02:07:00','manual',1,'2025-08-09 02:07:00'),(10,'Post-Processing','Clean and finish the printed part',0,NULL,'2025-08-09 02:07:01','manual',1,'2025-08-09 02:07:01'),(11,'Quality Check','Inspect final part quality',1,NULL,'2025-08-09 02:07:01','manual',1,'2025-08-09 02:07:01'),(12,'Cleanup','Clean printer and work area',0,NULL,'2025-08-09 02:07:01','manual',1,'2025-08-09 02:07:01'),(13,'Pre-Print Inspection','Verify printer condition and prepare for printing',1,NULL,'2025-08-09 01:11:04','manual',1,'2025-08-09 01:11:04'),(14,'Material Loading','Load and verify printing material',1,NULL,'2025-08-09 01:11:09','manual',1,'2025-08-09 01:11:09'),(15,'Bed Preparation Step he','Level bed and apply adhesion aids if needed',1,NULL,'2025-08-10 00:51:17','timer',1,'2025-08-10 00:51:17'),(16,'File Preparation','Load and verify the print file',1,NULL,'2025-08-09 02:07:02','manual',1,'2025-08-09 02:07:02'),(17,'Quality Control Check','Inspect finished product for defects and quality standards',0,NULL,'2025-08-08 23:33:57','manual',1,'2025-08-08 23:33:57'),(18,'Test step','A test step',0,NULL,'2025-08-09 02:07:03','timer',1,'2025-08-09 02:07:03'),(19,'Printing','Start printing',1,NULL,'2025-08-10 00:51:17','manual',1,'2025-08-10 00:51:17'),(20,'Clear Print Bed','Clear up the printing bed',0,NULL,'2025-08-10 01:35:42','manual',1,NULL),(21,'Change Filament','Switch out one filament for another',0,NULL,'2025-08-10 01:45:01','manual',1,NULL),(22,'Start printing ','',1,NULL,'2025-08-24 17:10:52','manual',1,NULL);
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_statuses`
--

DROP TABLE IF EXISTS `task_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_statuses` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_statuses`
--

LOCK TABLES `task_statuses` WRITE;
/*!40000 ALTER TABLE `task_statuses` DISABLE KEYS */;
INSERT INTO `task_statuses` VALUES (1,'draft','A draft of a task without any assigned date or user',NULL,NULL),(2,'approved','The task has been approved by an admin but not yet scheduled for printing by a member.',NULL,NULL),(3,'scheduled','Task has been scheduled for printing',NULL,NULL),(4,'printing','Task is being printed',NULL,NULL),(5,'completed','The task has been finished.',NULL,NULL);
/*!40000 ALTER TABLE `task_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `request_id` bigint(20) NOT NULL,
  `model_id` bigint(20) NOT NULL,
  `printer_id` bigint(20) DEFAULT NULL,
  `material_slots` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`material_slots`)),
  `quality` varchar(100) DEFAULT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `status_id` bigint(20) DEFAULT 1,
  `assigned_user_id` bigint(20) DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `scheduled_start_time` time DEFAULT NULL,
  `scheduled_end_time` time DEFAULT NULL,
  `process_instance_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_assigned_user_id_foreign` (`assigned_user_id`) USING BTREE,
  KEY `tasks_status_id_foreign` (`status_id`) USING BTREE,
  KEY `tasks_printer_id_foreign` (`printer_id`) USING BTREE,
  KEY `tasks_request_id_foreign` (`request_id`) USING BTREE,
  KEY `tasks_model_id_foreign` (`model_id`) USING BTREE,
  KEY `idx_process_instance` (`process_instance_id`),
  CONSTRAINT `fk_tasks_process_instance` FOREIGN KEY (`process_instance_id`) REFERENCES `process_instances` (`id`) ON DELETE SET NULL,
  CONSTRAINT `tasks_assigned_user_id_foreign` FOREIGN KEY (`assigned_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE SET NULL,
  CONSTRAINT `tasks_model_id_foreign` FOREIGN KEY (`model_id`) REFERENCES `models` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tasks_printer_id_foreign` FOREIGN KEY (`printer_id`) REFERENCES `printers` (`id`) ON DELETE CASCADE ON UPDATE SET NULL,
  CONSTRAINT `tasks_request_id_foreign` FOREIGN KEY (`request_id`) REFERENCES `requests` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tasks_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `task_statuses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (26,53,30,NULL,'[{\"slot\":\"base\",\"material_id\":4},{\"slot\":\"eagle\",\"material_id\":3}]','standard',1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,54,30,9,'[{\"slot\":\"base\",\"material_id\":4},{\"slot\":\"eagle\",\"material_id\":3}]','standard',1,3,NULL,NULL,NULL,'2025-08-10 22:12:13',NULL,'15:12:00',NULL,5),(28,55,30,10,'[{\"slot\":\"base\",\"material_id\":4},{\"slot\":\"eagle\",\"material_id\":3}]','standard',1,3,NULL,NULL,NULL,'2025-08-10 22:54:21',NULL,'15:54:00',NULL,6),(29,56,30,11,'[{\"slot\":\"base\",\"material_id\":4},{\"slot\":\"eagle\",\"material_id\":3}]','standard',1,3,3,NULL,NULL,'2025-08-10 23:04:00',NULL,'16:03:00',NULL,7),(30,57,30,10,'[{\"slot\":\"base\",\"material_id\":4},{\"slot\":\"eagle\",\"material_id\":3}]','standard',1,3,3,NULL,NULL,'2025-08-10 23:40:53',NULL,'16:40:00',NULL,8);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role_id` bigint(20) NOT NULL DEFAULT 2,
  `grade_id` bigint(20) DEFAULT NULL,
  `score` int(11) NOT NULL DEFAULT 0,
  `last_active` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  KEY `users_grade_id_foreign` (`grade_id`),
  CONSTRAINT `users_grade_id_foreign` FOREIGN KEY (`grade_id`) REFERENCES `grades` (`id`) ON DELETE CASCADE ON UPDATE SET NULL,
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Admin','example@domain.com','$2y$10$gIyE5T./wbxFkadHiDyYnu7thjYuEdXUC0glRU5r2Hc327GYwdg5O',3,2,-20,'2025-10-25 03:23:50',NULL,'2025-10-07 04:38:31',NULL),(12,'Dawson','hamerad27@puhsd.k12.ca.us','$2b$12$tLdtJutCPVgfQk/xmqh7e.08WIxt6BBHaTFRsN0Jit8U4XyRpjK.e',3,3,-20,'2025-10-23 17:07:55',NULL,'2025-10-07 04:45:18',NULL),(13,'lilian fryer','fryerl26@puhsd.k12.ca.us','$2b$10$.C1J2BAGN7gfn4wPii37Vu4pIJHVBHIqVveZyU6y6rT4qxKdfc/BO',2,4,60,'2025-10-21 19:03:46',NULL,'2025-10-02 00:38:41',NULL),(14,'Symantha Somer','somers26@puhsd.k12.ca.us','$2b$10$zSTS8fzihkVyrW.QzqPzGeka1CxhHJFxy8z34nMhCwN02GxnXeOo6',2,4,60,'2025-10-21 19:08:11',NULL,'2025-10-01 23:35:50',NULL),(15,'Josh Bohrer','thunderstrikejrb3@gmail.com','$2b$10$jbq9qZJG3B5jgOOgXmkJ5OIXzZ7rX/tan3OpTprVgu1q1XVl44m2W',1,3,20,'2025-08-21 19:31:26',NULL,'2025-09-09 03:13:30',NULL),(16,'Ethan Mendoza','emm.2nado@gmail.com','$2b$10$AK5ZqLSy/bU3oYfbVwdRLeEx10O8xtPO83dOh4sU5I//3oHC..j6S',2,3,410,'2025-10-10 19:34:39',NULL,'2025-09-25 03:07:28',NULL),(17,'Joseph Hardey ','hardeyj29@puhsd.k12.ca.us','$2b$10$EV5n3n4LNXiTJK3M/MNGJORNy2de5V7Kv7rfMs3NXFhgPfDGVBe22',2,1,20,'2025-08-27 01:25:46',NULL,'2025-08-27 19:22:42',NULL),(18,'Jacob Adamek','adamekj27@puhsd.k12.ca.us','$2b$10$ZXs32imGwElUFVJ/O.UYpeuDI2YBU06/wSApFRayIqzEejk1qx7cS',2,3,200,'2025-09-17 22:42:22',NULL,'2025-09-25 03:11:09',NULL),(19,'Olivia Montes','oliviamontes101@gmail.com','$2b$10$rv6HRFomUiGboPiAXJnRgehkb2Y3GCOHm1rampk5kriOhJIUB3Cm.',2,2,250,'2025-08-21 19:31:04',NULL,'2025-09-28 16:50:59',NULL),(20,'Brenton','1gamer2win1@gmail.com','$2b$10$eick42XdEhW4VhMptifkDefQ5ppZPLrzyrlLv3HA6y4S6HMvyZ8KK',1,4,20,'2025-09-19 05:59:48',NULL,'2025-09-19 05:59:48',NULL),(21,'Dexter Whatcott','dexterwhatcott@gmail.com','$2b$10$Q6kt48zFEZP8V1DVJEO6qeBJg6SW5INh/eBXu4i4GarEjnNlMqy3u',2,NULL,210,'2025-10-21 03:50:35',NULL,'2025-10-02 02:59:34',NULL),(22,'Nikhil Chakrabarti','beyoucat@gmail.com','$2b$10$20OraqiKsED8L.JZRCHnz.XQmqvW.0N7whivXP7p/nnN5KkJ7AnY6',2,3,80,'2025-09-03 04:18:15',NULL,'2025-09-03 04:18:15',NULL),(23,'Ben Frank','frankb27@puhsd.k12.ca.us','$2b$10$6fnhh/CiNOzo9uchTJ41s.Cs.uoVqJKyATuFKODqcozhw0KHsvSCK',3,3,-20,'2025-10-24 02:20:30',NULL,'2025-10-04 23:27:26',NULL),(24,'Luke Sanborn','sanbornl29@puhsd.k12.ca.us','$2b$10$toWgfMz0Fs4QXaXbOivss.Ljr9k3MfXG6adE1.dYuOEIl3FgN71Xu',2,1,70,'2025-09-17 22:46:35',NULL,'2025-09-22 21:57:35',NULL),(25,'Jackson Alexander Wattson','wattsonj26@puhsd.k12.ca.us','$2b$10$YAf8Wi6HZs8stK4Bg5w6OORqfMAjCToY8iHJyHxvWxG2eFH3VQwt6',2,4,320,'2025-09-18 19:17:11',NULL,'2025-09-25 03:10:26',NULL),(26,'Hunter Sessions','sessionsh28@puhsd.k12.ca.us','$2b$10$9UjR3YMW7l2M2it7Piy7vudE6KO3KwWrB3uZZy1NmH7zK9LHRwZgK',2,2,0,'2025-09-08 02:35:27',NULL,'2025-09-09 03:13:03',NULL),(27,'Charles Martin','charliemartin1495@gmail.com','$2b$10$SD2IzNBtNzuEqx8EmGlAIu7LJ9t3wB27hBENg9ceqlydRGanzmhGO',1,1,40,'2025-09-28 20:06:43',NULL,'2025-09-28 20:06:43',NULL),(28,'Caleb bryant','dbryantspfld@gmail.com','$2b$10$/Om2jX3nhdPwU.8521UFbOMf1mIWDhGEzpAodpZMm.RL/B35XG8Ti',1,1,40,'2025-10-21 19:07:51',NULL,'2025-09-29 18:27:29',NULL),(29,'Wyatt Osborne','osbornejr77@gmail.com','$2b$10$EEyI76sPghoheYfaHb9oYezhCYxbl2A5RUY1/Fz003KQxIghPWtr2',1,1,0,'2025-10-21 19:04:09',NULL,'2025-10-01 23:33:06',NULL),(30,'lucas elijah bair','bairl29@puhsd.k12.ca.us','$2b$10$01uJ5/Dfu1RGSS2tQR9c2uH2hY0HVR/h7ZO7PDmk3MwboCZfqiRpe',1,1,0,'2025-10-09 19:14:08',NULL,'2025-09-26 19:18:55',NULL),(32,'Everett D Nelson','nelsone28@puhsd.k12.ca.us','$2b$10$3kaGg9V.1YYoJMhAS39EbeBr2XO.DkO3pt/KjAlJg1Qzhaz8pqB5S',1,NULL,0,'2025-09-08 18:49:01',NULL,'2025-09-08 18:49:01',NULL),(33,'Brooklyn Maybaum','maybaumb29@puhsd.k12.ca.us','$2b$10$LuBDqtouTIcnHjKjt4QlIORnxEp1nrMFNToKgMhkaO9zfIA5PCete',2,1,70,'2025-10-22 18:53:49',NULL,'2025-10-02 20:29:52',NULL),(34,'Brooklyn Maybaum','brooklyn_maybaum@icloud.com','$2b$10$IjTO/4z9R3BBx6YqZ/jUrexCLQelm/ODp4EfMZCtIyomdPW0VUIZi',1,1,0,'2025-09-18 23:35:12',NULL,'2025-09-18 23:35:12',NULL),(35,'jason','soltanirodriguezj26@puhsd.k12.ca.us','$2b$10$O47BVcGzhH.dQfQroIeYge.h.K.sd0RqX9ERzbl1jP2n9KK5GRkA.',2,4,0,'2025-10-09 23:07:36',NULL,'2025-10-01 23:59:00',NULL),(36,'Krista Strecker','kstrecker@puhsd.k12.ca.edu','$2b$10$9n1ylpbPpMqZantB6pbCA.VqYJxph9ub4UclUDS0wC.T5TGegiJMG',1,4,0,'2025-09-28 05:29:29',NULL,'2025-09-28 05:34:01',NULL),(37,'nick zerwas','nzerwas@puhsd.k12.ca.us','$2b$10$bx1ADRFanUVaBongk.FxcuVXIdsLb4zanNGywpDAdLzMG.mshbuyG',1,4,0,'2025-10-24 04:03:00',NULL,'2025-09-27 03:24:41',NULL),(38,'Elizabeth Baldus','balduse28@puhsd.k12.ca.us','$2b$10$9m4xeOPULFkRPwV7TSE8gOeH1jjSS.2d5SMCztsy8NY/14Mkyv5H6',1,2,440,'2025-09-28 04:53:33',NULL,'2025-09-28 16:48:30',NULL),(39,'luke sharkey','sharkey.luke@icloud.com','$2b$10$KTuxKVMoUZA3I71EOh/ft.d2QucBt/B74n4pg64XEDd1rBHn8vN/O',1,1,70,'2025-10-17 00:25:46',NULL,'2025-10-02 00:14:06',NULL),(40,'brooklyn','maybaumbrooklyn@gmail.com','$2b$10$fIHw8Y/YjtQs81ZVkH6Qf.G2ovUdIaQ7j7.wJDefbMm3D8YqGBSzS',1,1,0,'2025-10-21 19:09:28',NULL,NULL,NULL),(41,'Weston Emick','emickweston@gmail.com','$2b$10$oq1g9F7NANKGhOGBhyg1gen0Rdy7LWOluEkvdOEvbHmqcZ9oMNyhe',2,1,0,'2025-10-22 04:51:11',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-01 23:15:21
