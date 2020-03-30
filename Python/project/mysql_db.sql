--Sql File which create all the tables which are needed--
CREATE TABLE `role` (
  `role_id` int(10) unsigned NOT NULL auto_increment,
  `role_name` varchar(50) default NULL,
  PRIMARY KEY  (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user_account` (
  `user_id` int(10) unsigned NOT NULL auto_increment,
  `emp_id` int(11) unsigned default NULL,
  `role_id` int(11) unsigned default NULL,
  `username` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  `name` varchar(255) default NULL,
  `tags` varchar(255) default NULL,
  `registration_time` timestamp NULL,
  `updated_time` timestamp NULL,
  PRIMARY KEY  (`user_id`),
  KEY `role_id` (`role_id`),
  UNIQUE KEY `emp_id_UNIQUE` (`emp_id`),
  CONSTRAINT `fk_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `project` (
  `project_id` int(10) unsigned NOT NULL auto_increment,
  `project_name` varchar(255)  default NULL,
  `start_date` date default NULL,
  `end_date` date default NULL,
  PRIMARY KEY  (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user_logs_details` (
  `log_id` int(10) unsigned NOT NULL auto_increment,
  `project_id` int(11) unsigned default NULL,
  `user_id` int(11) unsigned default NULL,
  `log_time` int(11) default NULL,
  `log_date` date default NULL,
  PRIMARY KEY  (`log_id`),
  UNIQUE KEY `project_id_user_id_date_UNIQUE` (`project_id`, `user_id`, `log_date`),
  CONSTRAINT `fk_project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_account` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `leave_details` (
  `leave_id` int(10) unsigned NOT NULL auto_increment,
  `user_id` int(11) unsigned default NULL,
  `start_date` date default NULL,
  `end_date` date default NULL,
  `leave_type` varchar(50) default NULL,
  PRIMARY KEY  (`leave_id`),
  CONSTRAINT `fk_leave_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_account` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;