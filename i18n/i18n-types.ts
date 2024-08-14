// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'zh'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * P​a​r​t​i​c​l​e
	 */
	particle: string
	/**
	 * F​l​a​m​e
	 */
	flame: string
	/**
	 * R​i​f​t
	 */
	rift: string
	/**
	 * M​a​g​i​c
	 */
	magic: string
	/**
	 * F​i​r​e​w​o​r​k
	 */
	firework: string
	/**
	 * P​i​k​a​c​h​u
	 */
	pikachu: string
	/**
	 * L​i​g​h​t​n​i​n​g
	 */
	lightning: string
	/**
	 * S​h​a​p​e​s
	 */
	shapes: string
	/**
	 * C​o​i​n
	 */
	coin: string
	/**
	 * C​o​n​f​e​t​t​i
	 */
	confetti: string
	/**
	 * S​p​a​r​k
	 */
	spark: string
	settings: {
		screenShaker: {
			/**
			 * S​c​r​e​e​n​ ​s​h​a​k​e​r
			 */
			enable: string
			intensity: {
				/**
				 * I​n​t​e​n​s​i​t​y
				 */
				title: string
				/**
				 * T​h​e​ ​s​t​r​e​n​g​t​h​ ​o​f​ ​t​h​e​ ​s​h​a​k​e​ ​e​f​f​e​c​t​.
				 */
				description: string
			}
			recoverTime: {
				/**
				 * S​h​a​k​e​ ​T​i​m​e
				 */
				title: string
				/**
				 * T​h​e​ ​t​i​m​e​(​m​i​l​l​i​s​e​c​o​n​d​s​)​ ​i​t​ ​t​a​k​e​s​ ​f​o​r​ ​t​h​e​ ​s​h​a​k​e​ ​e​f​f​e​c​t​ ​t​o​ ​r​e​c​o​v​e​r​.
				 */
				description: string
			}
			shakeWindow: {
				/**
				 * W​h​e​t​h​e​r​ ​t​o​ ​s​h​a​k​e​ ​t​h​e​ ​e​n​t​i​r​e​ ​w​i​n​d​o​w
				 */
				title: string
				/**
				 * B​y​ ​d​e​f​a​u​l​t​,​ ​o​n​l​y​ ​t​h​e​ ​c​u​r​r​e​n​t​ ​e​d​i​t​o​r​ ​w​i​l​l​ ​s​h​a​k​e​.​ ​I​f​ ​c​h​e​c​k​e​d​,​ ​t​h​e​ ​e​n​t​i​r​e​ ​c​o​n​t​a​i​n​e​r​ ​w​i​l​l​ ​s​h​a​k​e​.
				 */
				description: string
			}
		}
		combo: {
			/**
			 * C​o​m​b​o​!
			 */
			enable: string
			time: {
				/**
				 * C​o​m​b​o​ ​t​i​m​e
				 */
				title: string
				/**
				 * I​f​ ​t​h​e​ ​t​i​m​e​ ​b​e​t​w​e​e​n​ ​t​w​o​ ​k​e​y​s​t​r​o​k​e​s​ ​i​s​ ​w​i​t​h​i​n​ ​t​h​e​ ​c​o​m​b​o​ ​t​i​m​e​,​ ​t​h​e​ ​c​o​m​b​o​ ​c​o​u​n​t​ ​i​n​c​r​e​a​s​e​s​ ​b​y​ ​1​.​ ​I​f​ ​i​t​ ​e​x​c​e​e​d​s​ ​t​h​e​ ​c​o​m​b​o​ ​t​i​m​e​,​ ​t​h​e​ ​c​o​m​b​o​ ​c​o​u​n​t​ ​i​s​ ​r​e​s​e​t​ ​t​o​ ​z​e​r​o​.​ ​U​n​i​t​:​ ​s​e​c​o​n​d​s
				 */
				descrition: string
			}
			/**
			 * S​h​o​w​ ​e​x​c​l​a​m​a​t​i​o​n
			 */
			showExclamation: string
			precisionInput: {
				/**
				 * P​r​e​c​i​s​i​o​n​ ​i​n​p​u​t​ ​m​o​d​e
				 */
				title: string
				/**
				 * O​n​l​y​ ​c​o​r​r​e​c​t​ ​i​n​p​u​t​s​ ​w​i​l​l​ ​c​o​u​n​t​ ​t​o​w​a​r​d​s​ ​t​h​e​ ​c​o​m​b​o​,​ ​i​g​n​o​r​i​n​g​ ​a​n​y​ ​c​h​a​r​a​c​t​e​r​ ​d​e​l​e​t​i​o​n​s​.
				 */
				descrition: string
			}
		}
		cursorExplosion: {
			/**
			 * C​u​r​s​o​r​ ​e​x​p​l​o​s​i​o​n
			 */
			enable: string
			/**
			 * P​r​e​s​e​t​ ​e​f​f​e​c​t
			 */
			effect: string
		}
		/**
		 * A​d​v​a​n​c​e​d​ ​e​f​f​e​c​t​s​ ​s​e​t​t​i​n​g​s
		 */
		useCustom: string
		/**
		 * R​e​s​e​t​ ​t​o​ ​p​r​e​s​e​t​ ​e​f​f​e​c​t
		 */
		resetToPreset: string
	}
}

export type TranslationFunctions = {
	/**
	 * Particle
	 */
	particle: () => LocalizedString
	/**
	 * Flame
	 */
	flame: () => LocalizedString
	/**
	 * Rift
	 */
	rift: () => LocalizedString
	/**
	 * Magic
	 */
	magic: () => LocalizedString
	/**
	 * Firework
	 */
	firework: () => LocalizedString
	/**
	 * Pikachu
	 */
	pikachu: () => LocalizedString
	/**
	 * Lightning
	 */
	lightning: () => LocalizedString
	/**
	 * Shapes
	 */
	shapes: () => LocalizedString
	/**
	 * Coin
	 */
	coin: () => LocalizedString
	/**
	 * Confetti
	 */
	confetti: () => LocalizedString
	/**
	 * Spark
	 */
	spark: () => LocalizedString
	settings: {
		screenShaker: {
			/**
			 * Screen shaker
			 */
			enable: () => LocalizedString
			intensity: {
				/**
				 * Intensity
				 */
				title: () => LocalizedString
				/**
				 * The strength of the shake effect.
				 */
				description: () => LocalizedString
			}
			recoverTime: {
				/**
				 * Shake Time
				 */
				title: () => LocalizedString
				/**
				 * The time(milliseconds) it takes for the shake effect to recover.
				 */
				description: () => LocalizedString
			}
			shakeWindow: {
				/**
				 * Whether to shake the entire window
				 */
				title: () => LocalizedString
				/**
				 * By default, only the current editor will shake. If checked, the entire container will shake.
				 */
				description: () => LocalizedString
			}
		}
		combo: {
			/**
			 * Combo!
			 */
			enable: () => LocalizedString
			time: {
				/**
				 * Combo time
				 */
				title: () => LocalizedString
				/**
				 * If the time between two keystrokes is within the combo time, the combo count increases by 1. If it exceeds the combo time, the combo count is reset to zero. Unit: seconds
				 */
				descrition: () => LocalizedString
			}
			/**
			 * Show exclamation
			 */
			showExclamation: () => LocalizedString
			precisionInput: {
				/**
				 * Precision input mode
				 */
				title: () => LocalizedString
				/**
				 * Only correct inputs will count towards the combo, ignoring any character deletions.
				 */
				descrition: () => LocalizedString
			}
		}
		cursorExplosion: {
			/**
			 * Cursor explosion
			 */
			enable: () => LocalizedString
			/**
			 * Preset effect
			 */
			effect: () => LocalizedString
		}
		/**
		 * Advanced effects settings
		 */
		useCustom: () => LocalizedString
		/**
		 * Reset to preset effect
		 */
		resetToPreset: () => LocalizedString
	}
}

export type Formatters = {}
