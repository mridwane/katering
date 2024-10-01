<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MenuController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $Menu = Menu::all();
    return Inertia::render('Menu/Index', [
      'menus' => $Menu
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Menu/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $userId = auth()->id();
    $data = $request->validate([
      'name' => ['required', 'max:255'],
      'description' => 'nullable|string',
      'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      'price' => 'required|numeric|min:0',
    ]);
    if ($request->hasFile('photo')) {
      $filePath = $request->file('photo')->store('menu', 'public');
      $data['photo'] = $filePath;
    }
    $data['user_id'] = $userId;
    Menu::create($data);

    return to_route('menu.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(menu $menu)
  {
    return Inertia::render('Menu/Edit', [
      'menu' => $menu
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    dd($request->all(), $id);
    $data = $request->validate([
      'name' => ['required', 'max:255'],
      'description' => 'nullable|string',
      'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      'price' => 'required|numeric|min:0',
    ]);
    // Cari menu berdasarkan ID, jika tidak ditemukan, akan memunculkan 404
    $menu = Menu::findOrFail($id);
    // Jika ada foto yang diupload, simpan dan update path-nya
    if ($request->hasFile('photo')) {
      // Jika sudah ada foto sebelumnya, hapus file lama jika diperlukan
      if ($menu->photo) {
        Storage::disk('public')->delete($menu->photo);
      }
      // Simpan foto baru
      $filePath = $request->file('photo')->store('menu', 'public');
      $data['photo'] = $filePath;
    }

    // Update menu dengan data baru
    $menu->update($data);

    return to_route('menu.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    dd('test Delete');
  }
}
