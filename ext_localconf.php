<?php
if(!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'Qinx.' . $_EXTKEY,
	'Frontend',
	array(),
	array()
);

// Register extension as provider for FCEs.
\FluidTYPO3\Flux\Core::registerProviderExtensionKey($_EXTKEY, 'Content');