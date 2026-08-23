CREATE TABLE `guestbook_notes` (
	`id` text PRIMARY KEY NOT NULL,
	`nickname` text NOT NULL,
	`message` text NOT NULL,
	`color` text DEFAULT 'pink' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
