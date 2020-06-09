-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 21, 2020 at 04:31 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `truck`
--

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(124),
(124),
(124);

-- --------------------------------------------------------

--
-- Table structure for table `tblbooking`
--

CREATE TABLE `tblbooking` (
  `id` int(11) NOT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `pickup_time` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `car_id` int(11) DEFAULT NULL,
  `note_id` int(11) DEFAULT NULL,
  `route_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblbooking`
--

INSERT INTO `tblbooking` (`id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`, `pickup_time`, `car_id`, `note_id`, `route_id`) VALUES
(11, 'javainuse', '2019-11-11 21:50:19', 'javainuse', '2019-11-11 21:50:19', '2019-11-08 05:58:51', 0, 0, 0),
(24, 'javainuse', '2019-11-12 17:55:54', 'javainuse', '2019-11-12 17:55:54', '2019-11-08 05:58:51', 0, 0, 0),
(89, 'javainuse', '2019-12-06 23:05:06', 'javainuse', '2019-12-06 23:05:06', '2019-11-08 05:58:51', 0, 0, 0),
(94, 'javainuse', '2019-12-07 11:39:59', 'javainuse', '2019-12-07 11:39:59', '2019-12-06T19:30:00.000Z', 1, 0, 0),
(96, 'javainuse', '2019-12-10 23:50:05', 'javainuse', '2019-12-10 23:50:05', '2019-11-08 11:49:43', 1, 0, 0),
(99, 'javainuse', '2019-12-25 17:22:56', 'javainuse', '2019-12-25 17:22:56', '2019-12-26 05:22:43', 0, 0, 0),
(100, 'javainuse', '2019-12-25 17:46:28', 'javainuse', '2019-12-25 17:46:28', '2019-12-26 05:46:07', 2, 0, 0),
(101, 'javainuse', '2019-12-25 17:49:56', 'javainuse', '2019-12-25 17:49:56', '2019-12-26 05:46:07', 2, 0, 0),
(102, 'javainuse', '2019-12-25 17:55:33', 'javainuse', '2019-12-25 17:55:33', '2019-12-26 05:46:07', 2, 0, 0),
(105, 'javainuse', '2019-12-25 17:58:40', 'javainuse', '2019-12-25 17:58:40', '2019-12-26 05:58:06', 0, 0, 0),
(107, 'javainuse', '2019-12-25 18:06:21', 'javainuse', '2019-12-25 18:06:21', '2019-12-26 05:58:06', 0, 0, 0),
(109, 'javainuse', '2019-12-25 18:07:33', 'javainuse', '2019-12-25 18:07:33', '2019-12-26 06:07:22', 0, 0, 0),
(111, 'javainuse', '2019-12-25 18:08:55', 'javainuse', '2019-12-25 18:08:55', '2019-12-26 06:07:22', 0, 0, 0),
(113, 'javainuse', '2019-12-25 18:13:41', 'javainuse', '2019-12-25 18:13:41', '2019-12-26 06:07:22', 0, 0, 0),
(115, 'javainuse', '2019-12-25 18:19:53', 'javainuse', '2019-12-25 18:19:53', '2019-12-26 06:19:42', 2, 0, 0),
(117, 'javainuse', '2019-12-25 18:22:43', 'javainuse', '2019-12-25 18:22:43', '2019-12-26 06:19:42', 2, 0, 0),
(119, 'javainuse', '2019-12-25 18:25:38', 'javainuse', '2019-12-25 18:25:38', '2019-12-26 06:19:42', 2, 118, 0),
(121, 'javainuse', '2019-12-25 23:57:45', 'javainuse', '2019-12-25 23:57:45', '2019-12-26 11:56:40', 3, 120, 0),
(123, 'javainuse', '2019-12-26 10:14:55', 'javainuse', '2019-12-26 10:14:55', '2019-12-26 10:11:00', 0, 122, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tblcar`
--

CREATE TABLE `tblcar` (
  `id` int(11) NOT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `img_url` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `price_per_km` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `total_rate` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblcar`
--

INSERT INTO `tblcar` (`id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`, `description`, `img_url`, `price`, `price_per_km`, `rate`, `status`, `total_rate`, `category_id`, `driver_id`) VALUES
(0, NULL, NULL, 'javainuse', '2019-12-05 21:14:22', 'Maximum load capacity of 0.1 kg', 'https://cdn2.iconfinder.com/data/icons/e-commerce-filled-outline-5/128/Courier-512.png', 1170000, 'Fare 1.170.000đ limit to 130Km - From 131Km, fare 9.000đ/Km', 5, 'Active', 5, 3, 1),
(1, NULL, NULL, NULL, NULL, '0.5 ton truck', 'https://images.vexels.com/media/users/3/145789/isolated/lists/2a61e9b6c0a92cf265342d684229f3a0-pickup-side-view.png', 2000000, 'Fare 2.000.000đ limit to 130Km - From 131Km, fare 15.000đ/Km', 5, 'Active', 5, 0, 2),
(2, NULL, NULL, NULL, NULL, '2.5 ton truck', 'http://icongal.com/gallery/download/5078/setting_color_settings_car/png', 2500000, 'Fare 2.500.000đ limit to 130Km - From 131Km, fare 20.000đ/Km', 5, 'Active', 5, 1, 2),
(3, NULL, NULL, 'javainuse', '2019-12-04 23:59:56', '5 ton truck', 'https://mobilegoo.in/front_end/img/delivery-truck.png', 3500000, 'Fare 3.700.000đ limit to 130Km - From 131Km, fare 35.000đ/Km', 5, 'Active', 5, 2, 2),
(4, NULL, NULL, 'javainuse', '2019-12-05 21:14:22', 'Maximum load capacity of 0.1 kg', 'https://cdn2.iconfinder.com/data/icons/e-commerce-filled-outline-5/128/Courier-512.png', 1250000, 'Fare 1.370.000đ limit to 130Km - From 131Km, fare 10.000đ/Km', 5, 'Active', 5, 3, 1),
(5, NULL, NULL, 'javainuse', '2019-12-05 21:14:22', 'Maximum load capacity of 0.1 kg', 'https://cdn2.iconfinder.com/data/icons/e-commerce-filled-outline-5/128/Courier-512.png', 1300000, 'Fare 1.570.000đ limit to 130Km - From 131Km, fare 13.000đ/Km', 5, 'Active', 5, 3, 1),
(6, NULL, NULL, NULL, NULL, '0.5 ton truck', 'https://images.vexels.com/media/users/3/145789/isolated/lists/2a61e9b6c0a92cf265342d684229f3a0-pickup-side-view.png', 2500000, 'Fare 2.150.000đ limit to 130Km - From 131Km, fare 18.000đ/Km', 5, 'Active', 5, 0, 2),
(7, NULL, NULL, NULL, NULL, '0.5 ton truck', 'https://images.vexels.com/media/users/3/145789/isolated/lists/2a61e9b6c0a92cf265342d684229f3a0-pickup-side-view.png', 2700000, 'Fare 2.380.000đ limit to 130Km - From 131Km, fare 19.000đ/Km', 5, 'Active', 5, 0, 2),
(8, NULL, NULL, NULL, NULL, '2.5 ton truck', 'http://icongal.com/gallery/download/5078/setting_color_settings_car/png', 4500000, 'Fare 3.500.000đ limit to 130Km - From 131Km, fare 25.000đ/Km', 5, 'Active', 5, 1, 2),
(9, NULL, NULL, NULL, NULL, '5 ton truck', 'https://mobilegoo.in/front_end/img/delivery-truck.png', 5300000, 'Fare 4.300.000đ limit to 130Km - From 131Km, fare 29.000đ/Km', 5, 'Active', 5, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tblcar_list_route`
--

CREATE TABLE `tblcar_list_route` (
  `car_id` int(11) NOT NULL,
  `list_route_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblcar_list_route`
--

INSERT INTO `tblcar_list_route` (`car_id`, `list_route_id`) VALUES
(0, 0),
(1, 0),
(2, 0),
(3, 0),
(5, 0),
(6, 0),
(7, 0),
(8, 0),
(9, 0),
(4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tblcategory`
--

CREATE TABLE `tblcategory` (
  `id` int(11) NOT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblcategory`
--

INSERT INTO `tblcategory` (`id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`, `icon`, `name`) VALUES
(0, NULL, NULL, NULL, NULL, 'fas fa-truck-pickup', 'Pickup'),
(1, NULL, NULL, NULL, NULL, 'fas fa-truck', 'Van'),
(2, NULL, NULL, NULL, NULL, 'fas fa-truck-moving', 'Truck'),
(3, NULL, NULL, NULL, NULL, 'fas fa-motorcycle', 'Motorcycle');

-- --------------------------------------------------------

--
-- Table structure for table `tblcontact`
--

CREATE TABLE `tblcontact` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblcontact`
--

INSERT INTO `tblcontact` (`id`, `email`, `message`, `name`, `status`, `user_id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`) VALUES
(0, 'a', 'a', 'a', 'Pending', 0, NULL, NULL, NULL, NULL),
(5, 'contact@gmail.com', 'aaa', 'a', 'Close', NULL, NULL, NULL, 'javainuse', '2019-10-30 12:25:44'),
(47, 'a@', 'hello', 'a', 'PENDING', NULL, 'anonymousUser', '2019-11-30 22:16:17', 'anonymousUser', '2019-11-30 22:16:17'),
(50, 'a@', 'hello', 'a', 'PENDING', NULL, 'anonymousUser', '2019-11-30 22:43:26', 'anonymousUser', '2019-11-30 22:43:26'),
(70, 'a@', 'Hello', 'a', 'PENDING', NULL, 'anonymousUser', '2019-11-30 23:47:15', 'anonymousUser', '2019-11-30 23:47:15'),
(71, 'a@', 'Hello not sb-admin.css', 'a', 'PENDING', NULL, 'anonymousUser', '2019-11-30 23:48:26', 'anonymousUser', '2019-11-30 23:48:26');

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomer`
--

CREATE TABLE `tblcustomer` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblemployee`
--

CREATE TABLE `tblemployee` (
  `id` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `experience` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblnote`
--

CREATE TABLE `tblnote` (
  `id` int(11) NOT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `note` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblnote`
--

INSERT INTO `tblnote` (`id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`, `note`) VALUES
(0, NULL, NULL, 'javainuse', '2019-12-07 23:55:35', 'Den dung gio'),
(18, 'javainuse', '2019-11-12 15:09:07', 'javainuse', '2019-11-12 15:09:07', 'Den dung gio, tai xe ko hut thuoc.'),
(104, 'javainuse', '2019-12-25 17:58:40', 'javainuse', '2019-12-25 17:58:40', 'Tai xe ko hut thuoc'),
(118, 'javainuse', '2019-12-25 18:25:38', 'javainuse', '2019-12-25 18:25:38', 'test'),
(120, 'javainuse', '2019-12-25 23:57:44', 'javainuse', '2019-12-25 23:57:44', 'no smoking'),
(122, 'javainuse', '2019-12-26 10:14:55', 'javainuse', '2019-12-26 10:14:55', 'den dung gio');

-- --------------------------------------------------------

--
-- Table structure for table `tblorder`
--

CREATE TABLE `tblorder` (
  `id` int(11) NOT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblorder_list_booking`
--

CREATE TABLE `tblorder_list_booking` (
  `order_id` int(11) NOT NULL,
  `list_booking_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblpermission`
--

CREATE TABLE `tblpermission` (
  `id` int(11) NOT NULL,
  `action` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblrole`
--

CREATE TABLE `tblrole` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblrole`
--

INSERT INTO `tblrole` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Quản lý'),
(2, 'user', 'Khách hàng'),
(3, 'driver', 'Lái xe');

-- --------------------------------------------------------

--
-- Table structure for table `tblrole_list_permission`
--

CREATE TABLE `tblrole_list_permission` (
  `role_id` int(11) NOT NULL,
  `list_permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblroute`
--

CREATE TABLE `tblroute` (
  `id` int(11) NOT NULL,
  `end_point` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `start_point` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblroute`
--

INSERT INTO `tblroute` (`id`, `end_point`, `start_date`, `start_point`) VALUES
(0, 'Chợ Nghĩa Tân Nghĩa Tân, Cầu Giấy, Hà Nội, Vietnam', '2019-12-26 12:00:00', '1A, Block 2, Giap Nhat, Nhan Chính, Giáp Nhất Quan Nhân, Nhân Chính, Thanh Xuân, Hà Nội, Vietnam'),
(16, 'Chợ Nghĩa Tân Nghĩa Tân, Cầu Giấy, Hà Nội, Vietnam', '2019-12-26 12:00:00', '1A, Block 2, Giap Nhat, Nhan Chính, Giáp Nhất Quan Nhân, Nhân Chính, Thanh Xuân, Hà Nội, Vietnam'),
(19, 'Chợ Nghĩa Tân Nghĩa Tân, Cầu Giấy, Hà Nội, Vietnam', '2019-12-26 00:00:00', '1A, Block 2, Giap Nhat, Nhan Chính, Giáp Nhất Quan Nhân, Nhân Chính, Thanh Xuân, Hà Nội, Vietnam'),
(82, 'b', '2019-12-26 00:00:00', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `tblservice`
--

CREATE TABLE `tblservice` (
  `id` int(11) NOT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `unity` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblservice`
--

INSERT INTO `tblservice` (`id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`, `name`, `price`, `unity`) VALUES
(0, NULL, NULL, NULL, NULL, 'Khuôn dỡ hàng', 500, '1 người');

-- --------------------------------------------------------

--
-- Table structure for table `tblslider`
--

CREATE TABLE `tblslider` (
  `id` int(11) NOT NULL,
  `img_url` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tblslider`
--

INSERT INTO `tblslider` (`id`, `img_url`, `status`, `text`, `title`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`) VALUES
(1, 'https://www.dichvuxnk.com/wp-content/uploads/2019/07/Slider-dichvuxnk.png', 'Active', 'One stop solution your transport requirements', 'Our service ', NULL, NULL, 'javainuse', '2019-12-01 17:55:53'),
(2, 'https://bizweb.dktcdn.net/100/353/629/themes/717390/assets/slider_3.png?1568945135111', 'Active', 'Full range of services including inland haulage, transportation of oversized-overweight cargoes, customs application & clearance...', 'Logogistics service', NULL, NULL, 'javainuse', '2019-10-30 14:49:14'),
(3, 'http://niyalogistics.com/wp-content/uploads/2019/05/NIYA-Logistics-Slider-6.jpg', 'Active', 'Supply Chain Management', 'Supply Chain Management', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblusedservice`
--

CREATE TABLE `tblusedservice` (
  `id` int(11) NOT NULL,
  `pricePerUnit` float NOT NULL,
  `quantity` int(255) DEFAULT NULL,
  `totalprice` float DEFAULT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `price_per_unit` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `id` int(11) NOT NULL,
  `avatar_url` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`id`, `avatar_url`, `first_name`, `last_name`, `password`, `username`, `role_id`, `email`, `full_name`, `phone`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`) VALUES
(0, 'https://media.istockphoto.com/vectors/eagle-icon-vector-id904421152', 'aaa', NULL, '$2y$12$l7.YEo9iF5j5lG6xIFPj/eFXets2at3EkpOsPNRQicNgPHywI7G8O', 'javainuse', 1, 'java@email.com', 'Nguyen Quy Chi', '012345', NULL, NULL, NULL, NULL),
(1, 'https://pallycon.com/wp-content/uploads/2018/07/PallyCon_symbol_square.png', NULL, NULL, '$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6', 'java', NULL, NULL, 'xx', NULL, NULL, NULL, NULL, NULL),
(2, 'https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_02.png', NULL, NULL, '$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6', ' aaa', NULL, 'contact@gmail.com', 'tieu new contact', ' 0123456789', NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, '$2y$12$l7.YEo9iF5j5lG6xIFPj/eFXets2at3EkpOsPNRQicNgPHywI7G8O', ' aa', NULL, 'contact@gmail.com', 'tieu new contact', ' 0123456789', NULL, NULL, 'javainuse', '2019-10-30 16:02:19');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(0, 1),
(1, 2),
(2, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblbooking`
--
ALTER TABLE `tblbooking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKhsw7uesx4b1qs3ynl0sgwcfc1` (`car_id`),
  ADD KEY `FKqhc3r3cr6ble89fhus5wa6jui` (`note_id`),
  ADD KEY `FK75ncpeb9ee9acjkw5597bt06m` (`route_id`);

--
-- Indexes for table `tblcar`
--
ALTER TABLE `tblcar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKev9h9ioandt97up9f1qfrdvl1` (`category_id`),
  ADD KEY `FKc63usvpy1urouwu9ngx24m4l0` (`driver_id`);

--
-- Indexes for table `tblcar_list_route`
--
ALTER TABLE `tblcar_list_route`
  ADD KEY `FK1fepx462djtx36n04uhwgsiqf` (`car_id`),
  ADD KEY `FKb3a6x7pp206du8sjgsx648p92` (`list_route_id`);

--
-- Indexes for table `tblcategory`
--
ALTER TABLE `tblcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblcontact`
--
ALTER TABLE `tblcontact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5g5yynjqo6qliug6wkrjy2krc` (`user_id`);

--
-- Indexes for table `tblcustomer`
--
ALTER TABLE `tblcustomer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKqbnxaa34xpk6ilqap3pvjo73q` (`user_id`);

--
-- Indexes for table `tblemployee`
--
ALTER TABLE `tblemployee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4fn6yb6bigdwb3f6fexhbmi2` (`user_id`);

--
-- Indexes for table `tblnote`
--
ALTER TABLE `tblnote`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblorder`
--
ALTER TABLE `tblorder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKg7nnlhxe2lqto9pn2vj7ve5av` (`user_id`);

--
-- Indexes for table `tblorder_list_booking`
--
ALTER TABLE `tblorder_list_booking`
  ADD KEY `FK2m1ox3euq10tm20j6etymn5yf` (`list_booking_id`),
  ADD KEY `FKhxxl4qyu4kgc013s3xw5wdday` (`order_id`);

--
-- Indexes for table `tblpermission`
--
ALTER TABLE `tblpermission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblrole`
--
ALTER TABLE `tblrole`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblrole_list_permission`
--
ALTER TABLE `tblrole_list_permission`
  ADD KEY `FKt95pf174rgixhcmokx49larl0` (`list_permission_id`),
  ADD KEY `FKrgln54gb2bwto32eexojpvhin` (`role_id`);

--
-- Indexes for table `tblroute`
--
ALTER TABLE `tblroute`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblservice`
--
ALTER TABLE `tblservice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblslider`
--
ALTER TABLE `tblslider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblusedservice`
--
ALTER TABLE `tblusedservice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKncq2nfi0242kfk725n6i4udyc` (`booking_id`),
  ADD KEY `FKdk9ej8pa6qxf506228ruc68im` (`service_id`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1q7oe9kqv78iwppsyotbxwn5f` (`role_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKope2bdfrpxsj8pxiyl5a0l0wp` (`role_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblbooking`
--
ALTER TABLE `tblbooking`
  ADD CONSTRAINT `FK75ncpeb9ee9acjkw5597bt06m` FOREIGN KEY (`route_id`) REFERENCES `tblroute` (`id`),
  ADD CONSTRAINT `FKhsw7uesx4b1qs3ynl0sgwcfc1` FOREIGN KEY (`car_id`) REFERENCES `tblcar` (`id`),
  ADD CONSTRAINT `FKqhc3r3cr6ble89fhus5wa6jui` FOREIGN KEY (`note_id`) REFERENCES `tblnote` (`id`);

--
-- Constraints for table `tblcar`
--
ALTER TABLE `tblcar`
  ADD CONSTRAINT `FKc63usvpy1urouwu9ngx24m4l0` FOREIGN KEY (`driver_id`) REFERENCES `tbluser` (`id`),
  ADD CONSTRAINT `FKev9h9ioandt97up9f1qfrdvl1` FOREIGN KEY (`category_id`) REFERENCES `tblcategory` (`id`);

--
-- Constraints for table `tblcar_list_route`
--
ALTER TABLE `tblcar_list_route`
  ADD CONSTRAINT `FK1fepx462djtx36n04uhwgsiqf` FOREIGN KEY (`car_id`) REFERENCES `tblcar` (`id`),
  ADD CONSTRAINT `FKb3a6x7pp206du8sjgsx648p92` FOREIGN KEY (`list_route_id`) REFERENCES `tblroute` (`id`),
  ADD CONSTRAINT `FKr0slkq0f4f4nmsuwejjrs8482` FOREIGN KEY (`list_route_id`) REFERENCES `tblcategory` (`id`);

--
-- Constraints for table `tblcustomer`
--
ALTER TABLE `tblcustomer`
  ADD CONSTRAINT `FKqbnxaa34xpk6ilqap3pvjo73q` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`id`);

--
-- Constraints for table `tblemployee`
--
ALTER TABLE `tblemployee`
  ADD CONSTRAINT `FK4fn6yb6bigdwb3f6fexhbmi2` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`id`);

--
-- Constraints for table `tblorder`
--
ALTER TABLE `tblorder`
  ADD CONSTRAINT `FKg7nnlhxe2lqto9pn2vj7ve5av` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`id`);

--
-- Constraints for table `tblorder_list_booking`
--
ALTER TABLE `tblorder_list_booking`
  ADD CONSTRAINT `FK2m1ox3euq10tm20j6etymn5yf` FOREIGN KEY (`list_booking_id`) REFERENCES `tblbooking` (`id`),
  ADD CONSTRAINT `FKhxxl4qyu4kgc013s3xw5wdday` FOREIGN KEY (`order_id`) REFERENCES `tblorder` (`id`);

--
-- Constraints for table `tblusedservice`
--
ALTER TABLE `tblusedservice`
  ADD CONSTRAINT `FKdk9ej8pa6qxf506228ruc68im` FOREIGN KEY (`service_id`) REFERENCES `tblservice` (`id`),
  ADD CONSTRAINT `FKncq2nfi0242kfk725n6i4udyc` FOREIGN KEY (`booking_id`) REFERENCES `tblbooking` (`id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKha1bxyt1w20fvfrbnd0cvh0lr` FOREIGN KEY (`user_id`) REFERENCES `tbluser` (`id`),
  ADD CONSTRAINT `FKope2bdfrpxsj8pxiyl5a0l0wp` FOREIGN KEY (`role_id`) REFERENCES `tblrole` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
