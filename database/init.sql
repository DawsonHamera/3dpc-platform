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
-- Table structure for table `activity_log`
--

DROP TABLE IF EXISTS `activity_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `action_type` varchar(255) NOT NULL,
  `table_name` varchar(100) NOT NULL,
  `record_id` int(11) NOT NULL,
  `result` varchar(50) NOT NULL,
  `details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`details`)),
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `activity_log_user_id_fkey` (`user_id`),
  CONSTRAINT `activity_log_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_log`
--

LOCK TABLES `activity_log` WRITE;
/*!40000 ALTER TABLE `activity_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `arrival_time` datetime(3) DEFAULT current_timestamp(3),
  `rsvp_time` datetime(3) DEFAULT current_timestamp(3),
  `status` enum('rsvp','attended') NOT NULL DEFAULT 'rsvp',
  PRIMARY KEY (`id`),
  UNIQUE KEY `attendance_event_id_user_id_key` (`event_id`,`user_id`),
  KEY `attendance_user_id_fkey` (`user_id`),
  CONSTRAINT `attendance_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `attendance_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `location` varchar(255) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `image_file_id` int(11) DEFAULT NULL,
  `is_featured` tinyint(1) DEFAULT 0,
  `event_type` enum('meeting','workshop','competition','maintenance') DEFAULT 'meeting',
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `verification_code` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `event_start_time_end_time_key` (`start_time`,`end_time`),
  UNIQUE KEY `event_verification_code_key` (`verification_code`),
  KEY `event_image_file_id_fkey` (`image_file_id`),
  KEY `event_user_id_fkey` (`user_id`),
  CONSTRAINT `event_image_file_id_fkey` FOREIGN KEY (`image_file_id`) REFERENCES `file` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `event_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (4,'Monthly Club Meeting','Join us for our November community gathering. Snacks and drinks provided.','Del Oro Room 117','2025-11-17 00:00:00','2025-11-17 05:00:00',3,0,'meeting','2025-11-16 23:50:21.147','2025-11-16 23:50:21.147',NULL,'X4ZN5X',NULL),(5,'Football Fundraiser Night','Join us for our November community gathering. Snacks and drinks provided.','Del Oro Football Stadium','2025-11-17 02:00:00','2025-11-17 05:00:00',3,0,'meeting','2025-11-17 01:03:11.002','2025-11-17 01:03:11.002',NULL,'N3GNQH',NULL),(6,'Holiday Shop Night','Join us for our November community gathering. Snacks and drinks provided.','Del Oro Cafeteria','2025-11-25 02:00:00','2025-11-25 05:00:00',5,0,'meeting','2025-11-17 03:21:57.374','2025-11-17 05:38:37.289',NULL,'Y7CCW0',NULL),(7,'Holiday Shop Night 2','Join us for our November community gathering. Snacks and drinks provided.','Del Oro Cafeteria','2025-11-26 02:00:00','2025-11-26 05:00:00',3,0,'meeting','2025-11-17 03:30:43.894','2025-11-17 06:44:18.126',NULL,'HF39Y8',NULL);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `original_name` varchar(255) NOT NULL,
  `stored_name` varchar(255) NOT NULL,
  `mime_type` varchar(100) DEFAULT NULL,
  `size` int(10) unsigned NOT NULL,
  `path` varchar(255) NOT NULL,
  `uploaded_by` int(11) DEFAULT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `description` text DEFAULT NULL,
  `type` enum('image','model','texture','document','other') NOT NULL DEFAULT 'other',
  PRIMARY KEY (`id`),
  KEY `files_uploaded_by_foreign` (`uploaded_by`),
  CONSTRAINT `file_uploaded_by_fkey` FOREIGN KEY (`uploaded_by`) REFERENCES `user` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (2,'spiral.png','1763335592952_ze95jsvy_spiral.png','image/png',955516,'http://localhost:3000/api/uploads/1763335592952_ze95jsvy_spiral.png',NULL,'2025-11-16 23:26:32.963','2025-11-16 23:26:32.963',NULL,NULL,'image'),(3,'SUNLU_PLA_RECYC.webp','1763335848722_g26ci7gt_SUNLU_PLA_RECYC.webp','image/webp',771160,'http://localhost:3000/api/uploads/1763335848722_g26ci7gt_SUNLU_PLA_RECYC.webp',NULL,'2025-11-16 23:30:48.730','2025-11-16 23:30:48.730',NULL,NULL,'other'),(4,'star.png','1763357907054_78wywnfu_star.png','image/png',1054603,'http://localhost:3000/api/uploads/1763357907054_78wywnfu_star.png',NULL,'2025-11-17 05:38:27.064','2025-11-17 05:38:27.064',NULL,NULL,'image'),(5,'earring.png','1763357915828_z3g1gt4k_earring.png','image/png',795405,'http://localhost:3000/api/uploads/1763357915828_z3g1gt4k_earring.png',NULL,'2025-11-17 05:38:35.839','2025-11-17 05:38:35.839',NULL,NULL,'image'),(6,'keychain.png','1763357923976_dpv2mlnr_keychain.png','image/png',406914,'http://localhost:3000/api/uploads/1763357923976_dpv2mlnr_keychain.png',NULL,'2025-11-17 05:38:43.980','2025-11-17 05:38:43.980',NULL,NULL,'image'),(7,'lizardTransparent.png','1763357932125_1aidp68q_lizardTransparent.png','image/png',1085768,'http://localhost:3000/api/uploads/1763357932125_1aidp68q_lizardTransparent.png',NULL,'2025-11-17 05:38:52.140','2025-11-17 05:38:52.140',NULL,NULL,'image');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `version` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point_log`
--

DROP TABLE IF EXISTS `point_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `point_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `change` int(11) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `details` longtext DEFAULT NULL,
  `logged_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `point_log_user_id_fkey` (`user_id`),
  CONSTRAINT `point_log_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point_log`
--

LOCK TABLES `point_log` WRITE;
/*!40000 ALTER TABLE `point_log` DISABLE KEYS */;
INSERT INTO `point_log` VALUES (14,12,20,'other','First test of manual points','2025-09-22 06:04:16'),(15,23,-42,'other','test','2025-09-22 18:29:42'),(16,23,20,'other','test','2025-09-22 18:30:07'),(17,23,22,'other','test','2025-09-22 18:30:21'),(18,19,20,'workshop','Plant Pot Workshop Pt.1','2025-09-22 21:56:14'),(19,24,10,'other','Help with S5 setup','2025-09-22 21:57:35'),(20,19,20,'workshop','Plant Pot Workshop Pt.2','2025-09-22 21:57:52'),(21,19,10,'other','Filament recycler part','2025-09-22 21:58:53'),(22,25,20,'workshop','Plant Pot Workshop Pt.1','2025-09-22 22:00:08'),(23,25,20,'workshop','Plant Pot Workshop Pt.2','2025-09-22 22:00:21'),(24,25,20,'workshop','Recreator Pt.2','2025-09-22 22:00:45'),(25,16,20,'workshop','Recreator Pt.1','2025-09-22 22:01:18'),(26,16,20,'workshop','Recreator Pt.2','2025-09-22 22:01:33'),(27,33,20,'workshop','Recreator Pt.2','2025-09-22 22:01:54'),(28,18,20,'workshop','Recreator Pt.1','2025-09-22 22:02:15'),(29,18,20,'workshop','Recreator Pt.2','2025-09-22 22:02:19'),(30,28,20,'workshop','Recreator Pt.1','2025-09-22 22:04:07'),(31,28,20,'workshop','Recreator Pt.2','2025-09-22 22:04:14'),(32,27,20,'workshop','Recreator Pt.1','2025-09-22 22:04:27'),(33,27,20,'workshop','Recreator Pt.2','2025-09-22 22:04:34'),(34,3,1,'other','Admin','2025-09-22 22:05:15'),(35,3,-40,'other','Admin','2025-09-22 22:05:26'),(36,16,220,'other','Pre-app points','2025-09-25 03:07:28'),(37,25,180,'other','Pre-app points','2025-09-25 03:10:26'),(38,18,60,'other','Pre-app points','2025-09-25 03:11:09'),(39,19,60,'other','Pre-app points','2025-09-25 03:11:27'),(40,21,40,'other','Pre-app points','2025-09-25 03:11:55'),(41,13,20,'other','Pre-app points','2025-09-25 03:12:05'),(42,14,20,'other','Pre-app points','2025-09-25 03:12:09'),(43,38,20,'workshop','Plant Pot Workshop Pt.1','2025-09-28 16:47:22'),(44,38,20,'workshop','Plant Pot Workshop Pt.2','2025-09-28 16:47:31'),(45,38,20,'workshop','Recreator Workshop Ender 3 Pt.2','2025-09-28 16:48:07'),(46,38,220,'other','Pre-app points','2025-09-28 16:48:30'),(47,19,20,'workshop','Recreator Workshop Ender 3 Pt.1','2025-09-28 16:50:55'),(48,19,20,'workshop','Recreator Workshop Ender 3 Pt.2','2025-09-28 16:50:59'),(49,21,130,'other','Printing Recreator Parts','2025-09-29 18:56:13'),(50,38,20,'meeting','3DPC Meeting','2025-10-09 19:27:11'),(51,16,20,'meeting','3DPC Meeting','2025-10-09 19:27:29'),(52,25,20,'meeting','3DPC Meeting','2025-10-09 19:28:42'),(53,22,20,'meeting','3DPC Meeting','2025-10-09 19:28:55'),(54,18,20,'meeting','3DPC Meeting','2025-10-09 19:29:01'),(55,19,20,'meeting','3DPC Meeting','2025-10-09 19:29:27'),(56,16,50,'fundraiser','Football Fundraiser','2025-10-11 18:32:32'),(57,33,50,'fundraiser','Football Fundraiser','2025-10-11 18:33:44'),(58,38,50,'fundraiser','Football Fundraiser','2025-10-11 18:34:39'),(59,12,50,'fundraiser','Football Fundraiser','2025-10-11 18:34:45'),(60,38,10,'other','Poster','2025-10-11 18:36:24'),(61,38,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:17'),(62,12,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:22'),(63,16,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:31'),(64,18,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:45'),(65,19,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:46:55'),(66,21,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:26'),(67,22,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:31'),(68,24,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:38'),(69,25,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:51'),(70,39,20,'workshop','Recreator Assembly Pt.1','2025-10-16 23:47:59'),(71,39,10,'other','Helping with 3DPC stuff','2025-10-16 23:48:37'),(72,16,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:12:41'),(73,24,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:12:52'),(74,25,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:12:58'),(75,38,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:13:09'),(76,39,20,'workshop','Recreator Assembly Pt. 2','2025-10-17 23:13:17'),(77,38,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:00'),(78,18,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:10'),(79,19,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:21'),(80,22,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:29'),(81,24,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:35'),(82,39,20,'workshop','Recreator Workshop pt.3','2025-10-21 19:21:47'),(83,38,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:28:26'),(84,16,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:28:45'),(85,18,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:28:53'),(86,25,20,'workshop','Recreator Workshop pt.4','2025-10-24 01:29:12'),(87,3,-20,'workshop','NA for points.','2025-10-24 01:30:32'),(88,3,-1,'workshop','NA for points.','2025-10-24 01:30:43'),(89,12,-150,'workshop','NA for points.','2025-10-24 01:31:13'),(90,23,-40,'workshop','NA for points.','2025-10-24 01:32:04');
/*!40000 ALTER TABLE `point_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'viewer','Can view content',NULL,NULL),(2,'member','Can view and participate in content',NULL,NULL),(3,'admin','Full access to the system',NULL,NULL),(4,'developer','Can manage and deploy system updates',NULL,NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 2,
  `grade` enum('freshman','sophomore','junior','senior','other') NOT NULL DEFAULT 'other',
  `last_active` datetime DEFAULT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `points` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `user_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'Admin','example@domain.com','$2y$10$gIyE5T./wbxFkadHiDyYnu7thjYuEdXUC0glRU5r2Hc327GYwdg5O',3,'sophomore','2025-11-17 07:04:03','2025-10-07 04:38:31.000','2025-11-17 07:04:03.282',NULL,-20),(12,'Dawson','hamerad27@puhsd.k12.ca.us','$2b$12$tLdtJutCPVgfQk/xmqh7e.08WIxt6BBHaTFRsN0Jit8U4XyRpjK.e',3,'junior','2025-11-17 07:11:57','2025-10-07 04:45:18.000','2025-11-17 07:11:57.768',NULL,-20),(13,'lilian fryer','fryerl26@puhsd.k12.ca.us','$2b$10$.C1J2BAGN7gfn4wPii37Vu4pIJHVBHIqVveZyU6y6rT4qxKdfc/BO',2,'senior','2025-10-21 19:03:46','2025-10-02 00:38:41.000','2025-10-02 00:38:41.000',NULL,60),(14,'Symantha Somer','somers26@puhsd.k12.ca.us','$2b$10$zSTS8fzihkVyrW.QzqPzGeka1CxhHJFxy8z34nMhCwN02GxnXeOo6',2,'senior','2025-10-21 19:08:11','2025-10-01 23:35:50.000','2025-10-01 23:35:50.000',NULL,60),(15,'Josh Bohrer','thunderstrikejrb3@gmail.com','$2b$10$jbq9qZJG3B5jgOOgXmkJ5OIXzZ7rX/tan3OpTprVgu1q1XVl44m2W',1,'junior','2025-08-21 19:31:26','2025-09-09 03:13:30.000','2025-09-09 03:13:30.000',NULL,20),(16,'Ethan Mendoza','emm.2nado@gmail.com','$2b$10$AK5ZqLSy/bU3oYfbVwdRLeEx10O8xtPO83dOh4sU5I//3oHC..j6S',2,'junior','2025-10-10 19:34:39','2025-09-25 03:07:28.000','2025-09-25 03:07:28.000',NULL,410),(17,'Joseph Hardey ','hardeyj29@puhsd.k12.ca.us','$2b$10$EV5n3n4LNXiTJK3M/MNGJORNy2de5V7Kv7rfMs3NXFhgPfDGVBe22',2,'freshman','2025-08-27 01:25:46','2025-08-27 19:22:42.000','2025-08-27 19:22:42.000',NULL,20),(18,'Jacob Adamek','adamekj27@puhsd.k12.ca.us','$2b$10$ZXs32imGwElUFVJ/O.UYpeuDI2YBU06/wSApFRayIqzEejk1qx7cS',2,'junior','2025-09-17 22:42:22','2025-09-25 03:11:09.000','2025-09-25 03:11:09.000',NULL,200),(19,'Olivia Montes','oliviamontes101@gmail.com','$2b$10$rv6HRFomUiGboPiAXJnRgehkb2Y3GCOHm1rampk5kriOhJIUB3Cm.',2,'sophomore','2025-08-21 19:31:04','2025-09-28 16:50:59.000','2025-09-28 16:50:59.000',NULL,250),(20,'Brenton','1gamer2win1@gmail.com','$2b$10$eick42XdEhW4VhMptifkDefQ5ppZPLrzyrlLv3HA6y4S6HMvyZ8KK',1,'senior','2025-09-19 05:59:48','2025-09-19 05:59:48.000','2025-09-19 05:59:48.000',NULL,20),(21,'Dexter Whatcott','dexterwhatcott@gmail.com','$2b$10$Q6kt48zFEZP8V1DVJEO6qeBJg6SW5INh/eBXu4i4GarEjnNlMqy3u',2,'other','2025-10-21 03:50:35','2025-10-02 02:59:34.000','2025-10-02 02:59:34.000',NULL,210),(22,'Nikhil Chakrabarti','beyoucat@gmail.com','$2b$10$20OraqiKsED8L.JZRCHnz.XQmqvW.0N7whivXP7p/nnN5KkJ7AnY6',2,'junior','2025-09-03 04:18:15','2025-09-03 04:18:15.000','2025-09-03 04:18:15.000',NULL,80),(23,'Ben Frank','frankb27@puhsd.k12.ca.us','$2b$10$6fnhh/CiNOzo9uchTJ41s.Cs.uoVqJKyATuFKODqcozhw0KHsvSCK',3,'junior','2025-10-24 02:20:30','2025-10-04 23:27:26.000','2025-10-04 23:27:26.000',NULL,-20),(24,'Luke Sanborn','sanbornl29@puhsd.k12.ca.us','$2b$10$toWgfMz0Fs4QXaXbOivss.Ljr9k3MfXG6adE1.dYuOEIl3FgN71Xu',2,'freshman','2025-09-17 22:46:35','2025-09-22 21:57:35.000','2025-09-22 21:57:35.000',NULL,70),(25,'Jackson Alexander Wattson','wattsonj26@puhsd.k12.ca.us','$2b$10$YAf8Wi6HZs8stK4Bg5w6OORqfMAjCToY8iHJyHxvWxG2eFH3VQwt6',2,'senior','2025-09-18 19:17:11','2025-09-25 03:10:26.000','2025-09-25 03:10:26.000',NULL,320),(26,'Hunter Sessions','sessionsh28@puhsd.k12.ca.us','$2b$10$9UjR3YMW7l2M2it7Piy7vudE6KO3KwWrB3uZZy1NmH7zK9LHRwZgK',2,'sophomore','2025-09-08 02:35:27','2025-09-09 03:13:03.000','2025-09-09 03:13:03.000',NULL,0),(27,'Charles Martin','charliemartin1495@gmail.com','$2b$10$SD2IzNBtNzuEqx8EmGlAIu7LJ9t3wB27hBENg9ceqlydRGanzmhGO',1,'freshman','2025-09-28 20:06:43','2025-09-28 20:06:43.000','2025-09-28 20:06:43.000',NULL,40),(28,'Caleb bryant','dbryantspfld@gmail.com','$2b$10$/Om2jX3nhdPwU.8521UFbOMf1mIWDhGEzpAodpZMm.RL/B35XG8Ti',1,'freshman','2025-10-21 19:07:51','2025-09-29 18:27:29.000','2025-09-29 18:27:29.000',NULL,40),(29,'Wyatt Osborne','osbornejr77@gmail.com','$2b$10$EEyI76sPghoheYfaHb9oYezhCYxbl2A5RUY1/Fz003KQxIghPWtr2',1,'freshman','2025-10-21 19:04:09','2025-10-01 23:33:06.000','2025-10-01 23:33:06.000',NULL,0),(30,'lucas elijah bair','bairl29@puhsd.k12.ca.us','$2b$10$01uJ5/Dfu1RGSS2tQR9c2uH2hY0HVR/h7ZO7PDmk3MwboCZfqiRpe',1,'freshman','2025-10-09 19:14:08','2025-09-26 19:18:55.000','2025-09-26 19:18:55.000',NULL,0),(32,'Everett D Nelson','nelsone28@puhsd.k12.ca.us','$2b$10$3kaGg9V.1YYoJMhAS39EbeBr2XO.DkO3pt/KjAlJg1Qzhaz8pqB5S',1,'other','2025-09-08 18:49:01','2025-09-08 18:49:01.000','2025-09-08 18:49:01.000',NULL,0),(33,'Brooklyn Maybaum','maybaumb29@puhsd.k12.ca.us','$2b$10$LuBDqtouTIcnHjKjt4QlIORnxEp1nrMFNToKgMhkaO9zfIA5PCete',2,'freshman','2025-10-22 18:53:49','2025-10-02 20:29:52.000','2025-10-02 20:29:52.000',NULL,70),(34,'Brooklyn Maybaum','brooklyn_maybaum@icloud.com','$2b$10$IjTO/4z9R3BBx6YqZ/jUrexCLQelm/ODp4EfMZCtIyomdPW0VUIZi',1,'freshman','2025-09-18 23:35:12','2025-09-18 23:35:12.000','2025-09-18 23:35:12.000',NULL,0),(35,'jason','soltanirodriguezj26@puhsd.k12.ca.us','$2b$10$O47BVcGzhH.dQfQroIeYge.h.K.sd0RqX9ERzbl1jP2n9KK5GRkA.',2,'senior','2025-10-09 23:07:36','2025-10-01 23:59:00.000','2025-10-01 23:59:00.000',NULL,0),(36,'Krista Strecker','kstrecker@puhsd.k12.ca.edu','$2b$10$9n1ylpbPpMqZantB6pbCA.VqYJxph9ub4UclUDS0wC.T5TGegiJMG',1,'senior','2025-09-28 05:29:29','2025-09-28 05:34:01.000','2025-09-28 05:34:01.000',NULL,0),(37,'nick zerwas','nzerwas@puhsd.k12.ca.us','$2b$10$bx1ADRFanUVaBongk.FxcuVXIdsLb4zanNGywpDAdLzMG.mshbuyG',1,'senior','2025-10-24 04:03:00','2025-09-27 03:24:41.000','2025-09-27 03:24:41.000',NULL,0),(38,'Elizabeth Baldus','balduse28@puhsd.k12.ca.us','$2b$10$9m4xeOPULFkRPwV7TSE8gOeH1jjSS.2d5SMCztsy8NY/14Mkyv5H6',1,'sophomore','2025-09-28 04:53:33','2025-09-28 16:48:30.000','2025-09-28 16:48:30.000',NULL,440),(39,'luke sharkey','sharkey.luke@icloud.com','$2b$10$KTuxKVMoUZA3I71EOh/ft.d2QucBt/B74n4pg64XEDd1rBHn8vN/O',1,'freshman','2025-10-17 00:25:46','2025-10-02 00:14:06.000','2025-10-02 00:14:06.000',NULL,70),(40,'brooklyn','maybaumbrooklyn@gmail.com','$2b$10$fIHw8Y/YjtQs81ZVkH6Qf.G2ovUdIaQ7j7.wJDefbMm3D8YqGBSzS',1,'freshman','2025-10-21 19:09:28',NULL,NULL,NULL,0),(41,'Weston Emick','emickweston@gmail.com','$2b$10$oq1g9F7NANKGhOGBhyg1gen0Rdy7LWOluEkvdOEvbHmqcZ9oMNyhe',2,'freshman','2025-10-22 04:51:11',NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-17  7:18:46
