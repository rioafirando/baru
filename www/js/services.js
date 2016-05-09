angular.module('starter.services', [])

.factory('dataKegiatan', function($cordovaSQLite,$q){
	var self = this;
	var kosong = true;
	self.cekKosong = function(){
		var q = $q.defer();
		$cordovaSQLite.execute(db,"SELECT * FROM kegiatan")
		.then(function(result){
			q.resolve(result);
		}, function(err){
			q.reject();
		});
		return q.promise;
	}

	self.insertData = function(){
		var q = $q.defer();
		$cordovaSQLite.execute(db,"INSERT INTO kegiatan (judul, rincian, poin) VALUES ('Pendidikan Sekolah dan Memperoleh Ijazah/Gelar','Pendidikan sekolah dimaksud adalah pendidikan formal baik di dalam maupun luar negeri pada sekolah lanjutan tingkat atas atau perguruan tinggi atau setara yang diakreditasi oleh kementerian yang berwenang. Angka kredit yang diberikan kepada statistisi yang memperoleh gelar jenjang lebih tinggi adalah selisih angka kredit gelar/ijazah yang lebih tinggi dengan ijazah yang pernah dinilai sebelumnya.Apabila memperoleh gelar atau ijazah di luar bidang statistik dan bidang lain di luar kualifikasi yang ditetapkan oleh Kepala BPS, maka pendidikannya diperhitungkan sebagai unsur penunjang.Penilaian ijazah SLTA s.d. DII ini hanya berlaku bagi statistisi yang diangkat pertama kali sebelum tanggal 4 Februari 2014. Angka kredit:1. Diploma III (DI): 60 2. Diploma II (DII): 40 3. Diploma I (DI): 30 4. SLTA : 25','25-60')")
		.then(function(result){
			q.resolve(result);
		}, function(err){
			q.reject();
			console.log('Error insert: ', err)
		});
		return q.promise;		
	}

	return self; 	
})

