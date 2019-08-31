<?php

class Bangla_Ipsum {

	function generate_word($word_len) {
		if (is_int($word_len)) {
			$alphabets = array("1" => "অ", "2" => "ক", "3" => "খ", "4" => "গ", "5" => "ঘ", "6" => "ঙ", "7" => "য", "8" => "য়", "9" => "ড", "10" => "ঢ", "11" => "প", "12" => "ফ", "13" => "ঠ", "14" => "ট", "15" => "চ", "16" => "ছ", "17" => "জ", "18" => "ঝ", "19" => "হ", "20" => "ঞ", "21" => "ঢ়", "22" => "ড়", "23" => "ব", "24" => "ভ", "25" => "আ", "26" => "ই", "27" => "ঈ", "28" => "ত", "29" => "থ", "30" => "দ", "31" => "ধ", "32" => "র", "33" => "ল", "34" => "ন", "35" => "ণ", "36" => "স", "37" => "ষ", "38" => "ম", "39" => "শ", "40" => "কো", "41" => "তো", "42" => "থে", "43" => "দা", "44" => "ধা", "45" => "রু", "46" => "লি", "47" => "নৌ", "48" => "ণা", "49" => "সে", "50" => "পু", "51" => "মু", "52" => "শূ", "53" => "গু", "54" => "ঘি", "55" => "যা", "56" => "যো", "57" => "য়ু", "58" => "ডো", "59" => "ঢা", "60" => "পৌ", "61" => "ফা", "62" => "ঠু", "63" => "টি", "64" => "চাঁ", "65" => "ছা", "66" => "জো", "67" => "ঝা", "68" => "হো", "69" => "মো", "70" => "ঢ়ু", "71" => "ড়ি");
			$code = "";
			for ($d = 0; $d < $word_len; $d++) {
				$word_val = mt_rand(1, 71);
				$code .= $alphabets["$word_val"];
			}
			return $code;
		} else {
			$res = "Please insert a interger value.";
			return $res;
		}
		
	}

	function generate_sentence($val) {
		if (is_int($val)) {
			$word_array = array();
			for ($b = 0; $b < $val; $b++) {
				$word_length = mt_rand(2, 8);
				$word = $this->generate_word($word_length);
				array_push($word_array, $word);
			}
			$sentence = implode(" ", $word_array);
			return $sentence;
		} else {
			$res = "Please insert a interger value.";
			return $res;
		}
	}

	function generate_paragraph($src) {
		if ($src == "para") {
			$total_sentence = mt_rand(5, 15);
		} else if ($src == "list") {
			$total_sentence = mt_rand(1, 4);
		}
		$sentence_array = array();
		for ($b = 0; $b < $total_sentence; $b++) {
			$total_words = mt_rand(7, 18);
			$sentence = $this->generate_sentence($total_words);
			$sentence = $sentence . "।";
			array_push($sentence_array, $sentence);
		}
		$para = implode(" ", $sentence_array);
		return $para;
	}

	function set_paragraph($val) {
		if (is_int($val)) {
			$para_array = array();
			for ($b = 0; $b < $val; $b++) {
				$para = $this->generate_paragraph("para");
				array_push($para_array, $para);
			}
			$para = implode("<br /><br />", $para_array);
			return $para;
		} else {
			$res = "Please insert a interger value.";
			return $res;
		}
	}

	function set_list($val) {
		if (is_int($val)) {
			$para_array = array();
			for ($b = 0; $b < $val; $b++) {
				$para = $this->generate_paragraph("list");
				$para = "<li>" . $para . "</li>";
				array_push($para_array, $para);
			}
			$list_para = implode("", $para_array);
			$list_items = "<ul>" . $list_para . "</ul>";
			return $list_items;
		} else {
			$res = "Please insert a interger value.";
			return $res;
		}
	}

}

?>